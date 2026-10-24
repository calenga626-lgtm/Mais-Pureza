import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Video, Maximize2, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONTACTS, buildWhatsAppLink } from '../data/servicesData';

interface VideoTrack {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  poster: string;
  durationText: string;
  isReel?: boolean;
}

const VIDEO_TRACKS: VideoTrack[] = [
  {
    id: 'video-real-mais-pureza',
    title: 'Vídeo 1: Atendimento Real Mais Pureza Luanda',
    subtitle: 'Gravação oficial da equipa: técnico com farda oficial da Mais Pureza no domicílio em Luanda a higienizar cortinados e estofos.',
    url: '/assets/aistudio/WhatsApp_Video_2026-10-24_at_18.33.32_1dc453fe.mp4',
    poster: '/src/assets/images/hero_technician_angola_1792860733256.jpg',
    durationText: '0:10',
    isReel: true
  },
  {
    id: 'extracao-sofa-luanda',
    title: 'Vídeo 2: Extração Profunda & Remoção de Água Negra',
    subtitle: 'Processo completo de sucção profunda a vácuo com recolha de poeiras e ácaros no estofo.',
    url: '/assets/mais_pureza_extracao.mp4',
    poster: '/src/assets/images/hero_technician_angola_1792860733256.jpg',
    durationText: '0:09',
    isReel: false
  },
  {
    id: 'sanitizacao-tecidos',
    title: 'Vídeo 3: Sanitização Hospitalar & Revitalização',
    subtitle: 'Aplicação de fórmula ecológica antibacteriana que elimina 99,9% dos ácaros e fungos.',
    url: '/assets/mais_pureza_higienizacao.mp4',
    poster: '/src/assets/images/sofa_cleaning_black_technician_1792860734301.jpg',
    durationText: '0:06',
    isReel: false
  }
];

export const ScrollVideoShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(10);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [controlMode, setControlMode] = useState<'video' | 'scroll'>('video');
  const [currentVideoSrc, setCurrentVideoSrc] = useState(VIDEO_TRACKS[0].url);
  const [activeStep, setActiveStep] = useState(0);

  const activeTrack = VIDEO_TRACKS[activeTrackIndex] || VIDEO_TRACKS[0];

  // Sync video time updates
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      if (videoRef.current.duration) {
        setDuration(videoRef.current.duration);
        const progress = videoRef.current.currentTime / videoRef.current.duration;
        setScrollProgress(progress);

        if (progress < 0.25) setActiveStep(0);
        else if (progress < 0.5) setActiveStep(1);
        else if (progress < 0.75) setActiveStep(2);
        else setActiveStep(3);
      }
    }
  };

  // Switch video track
  const handleSelectTrack = (index: number) => {
    setActiveTrackIndex(index);
    const track = VIDEO_TRACKS[index];
    if (track) {
      setCurrentVideoSrc(track.url);
      setIsPlaying(false);
      if (videoRef.current) {
        videoRef.current.src = track.url;
        videoRef.current.load();
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }
  };

  // Toggle Play / Pause
  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(console.error);
    }
  };

  // Toggle Mute
  const handleToggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Fullscreen
  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  // Seek on scrubber bar
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setScrollProgress(val);
    if (videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = val * videoRef.current.duration;
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  // Scroll synchronization
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !videoRef.current || controlMode !== 'scroll') return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalDist = rect.height - windowHeight;
      const currentScroll = -rect.top;

      if (totalDist > 0) {
        let progress = currentScroll / totalDist;
        progress = Math.max(0, Math.min(1, progress));
        setScrollProgress(progress);

        if (videoRef.current.duration && !isNaN(videoRef.current.duration)) {
          const targetTime = progress * videoRef.current.duration;
          if (Math.abs(videoRef.current.currentTime - targetTime) > 0.08) {
            videoRef.current.currentTime = targetTime;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controlMode]);

  const steps = [
    { title: '1. Aspiração & Remoção de Poeira Grossa', desc: 'Eliminamos poeiras acumuladas no tecido com aspirador de alto vácuo.' },
    { title: '2. Aplicação Bioquímica Antibacteriana', desc: 'Solução hospitalar biodegradável para soltar óleos, manchas e ácaros.' },
    { title: '3. Extração Térmica de Água Negra', desc: 'A máquina injeta e suga no mesmo instante, recolhendo toda a sujidade profunda.' },
    { title: '4. Toque Macio e Secagem em 2 a 4 Horas', desc: 'Tecido perfumado, macio e pronto para uso no mesmo dia em Luanda.' }
  ];

  const whatsAppActionUrl = buildWhatsAppLink(
    COMPANY_CONTACTS.waNumber1,
    'Olá Mais Pureza! Assisti ao vídeo oficial da equipa no site e gostaria de agendar uma higienização no meu domicílio em Luanda.'
  );

  return (
    <section id="video-scroll" ref={containerRef} className="relative bg-slate-950 text-white py-16 lg:py-24 border-b border-slate-800">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-radial from-sky-900/30 via-slate-950 to-slate-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header with Creative Sales Hook */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 bg-sky-950 border border-sky-800 px-4 py-1.5 rounded-full shadow-sm">
            <Video className="w-4 h-4 text-sky-400" />
            <span>Vídeo Oficial Mais Pureza · Atendimento Real em Luanda</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white" style={{ textWrap: 'balance' }}>
            Veja a nossa equipa oficial em ação no domicílio do cliente
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Aqui você vê o trabalho real: técnicos com farda oficial da Mais Pureza (+244 934 963 087) a aplicar a higienização profunda em cortinados e estofos. 
            Clique no vídeo para assistir com som!
          </p>

          {/* Video Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {VIDEO_TRACKS.map((track, idx) => (
              <button
                key={track.id}
                onClick={() => handleSelectTrack(idx)}
                className={`text-xs px-4 py-2.5 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTrackIndex === idx
                    ? 'bg-sky-600 text-white shadow-lg border border-sky-400 ring-2 ring-sky-500/20'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-700'
                }`}
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{track.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Video Player Container */}
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border-2 border-slate-700 bg-slate-900 shadow-2xl">
          
          <div className="grid lg:grid-cols-12 items-center bg-black">
            
            {/* Left Column / Reel Screen: Vertical/Responsive Video Screen */}
            <div className="lg:col-span-7 relative bg-black flex items-center justify-center min-h-[380px] sm:min-h-[500px] overflow-hidden group">
              
              {/* Blurred Ambient Background Mirroring the Video */}
              <video
                src={currentVideoSrc}
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover filter blur-2xl opacity-40 scale-125 pointer-events-none"
              />

              {/* Main Visible Video */}
              <video
                ref={videoRef}
                src={currentVideoSrc}
                poster={activeTrack.poster}
                muted={isMuted}
                playsInline
                loop
                preload="auto"
                onTimeUpdate={handleTimeUpdate}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="relative z-10 max-h-[520px] w-auto max-w-full rounded-2xl shadow-2xl cursor-pointer object-contain"
                onClick={handleTogglePlay}
              />

              {/* Central Play Button Overlay when Paused */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 bg-black/40 backdrop-blur-2xs flex flex-col items-center justify-center transition-all z-20 cursor-pointer"
                  onClick={handleTogglePlay}
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                    <Play className="w-9 h-9 fill-white ml-1" />
                  </div>
                  <span className="mt-4 font-bold text-xs sm:text-sm tracking-wide text-white uppercase bg-slate-900/90 px-4 py-1.5 rounded-full border border-slate-700 shadow-lg">
                    Clique para Assistir ao Vídeo Oficial
                  </span>
                </div>
              )}

              {/* Top Live Badge */}
              <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-xs text-sky-400 z-20 flex items-center gap-2 pointer-events-none">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-bold">Vídeo Gravado em Luanda</span>
              </div>

              {/* Top Right Duration */}
              <div className="absolute top-4 right-4 bg-slate-950/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-700 text-xs text-slate-300 z-20 font-mono pointer-events-none">
                {Math.floor(currentTime)}s / {Math.floor(duration)}s
              </div>
            </div>

            {/* Right Column: Live Context & Direct WhatsApp Booking */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-900 space-y-5 border-t lg:border-t-0 lg:border-l border-slate-800">
              
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                  Atendimento Verificado
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  {activeTrack.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  {activeTrack.subtitle}
                </p>
              </div>

              {/* Uniform verification callout */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-sky-400 font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Identificação Oficial Mais Pureza</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Os nossos técnicos comparecem ao domicílio devidamente fardados com os contactos oficiais nas costas: 
                  <strong className="text-white block mt-0.5 font-mono">+244 934 963 087 · +244 934 963 158</strong>
                </p>
              </div>

              {/* Active Step Real-Time Indicator */}
              <div className="space-y-1.5">
                <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 block">
                  Etapa Atual do Processo:
                </span>
                <div className="p-3 rounded-lg bg-sky-950/60 border border-sky-800 text-xs text-sky-200">
                  <strong className="text-white block">{steps[activeStep].title}</strong>
                  <span className="text-[11px] text-slate-300">{steps[activeStep].desc}</span>
                </div>
              </div>

              {/* WhatsApp Conversion Action */}
              <div className="pt-2 space-y-2">
                <a
                  href={whatsAppActionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all"
                >
                  <Play className="w-4 h-4 fill-white text-emerald-600" />
                  <span>Agendar Higienização no WhatsApp</span>
                </a>

                <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-sky-400" />
                    Toda a Província de Luanda
                  </span>
                  <span>Pagamento por Multicaixa</span>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Custom Controls Bar */}
          <div className="p-4 bg-slate-950 border-t border-slate-800 flex flex-col gap-3">
            
            {/* Scrubber Progress Bar */}
            <div className="flex items-center gap-3 w-full">
              <span className="text-xs font-mono text-slate-400">
                {Math.floor(currentTime)}s
              </span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.005"
                value={scrollProgress}
                onChange={handleSeek}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500 hover:accent-emerald-400"
                aria-label="Barra de progresso do vídeo"
              />
              <span className="text-xs font-mono text-slate-400">
                {Math.floor(duration)}s
              </span>
            </div>

            {/* Buttons Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
              
              <div className="flex items-center gap-2">
                <button
                  onClick={handleTogglePlay}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center gap-1.5 shadow-md transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                  <span>{isPlaying ? 'Pausar' : 'Reproduzir'}</span>
                </button>

                <button
                  onClick={handleToggleMute}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-700"
                  title={isMuted ? 'Ativar Som do Vídeo' : 'Silenciar'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                </button>

                <button
                  onClick={() => setControlMode(controlMode === 'video' ? 'scroll' : 'video')}
                  className={`px-3 py-2 rounded-xl border font-bold transition-colors cursor-pointer ${
                    controlMode === 'scroll'
                      ? 'bg-sky-950 border-sky-400 text-sky-300'
                      : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
                  }`}
                  title="Permite que o vídeo avance ou recue quando rola a página"
                >
                  {controlMode === 'scroll' ? '✓ Modo Scroll Ativo' : 'Ativar Movimento no Scroll'}
                </button>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleFullscreen}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-700"
                  title="Ecrã Cheio"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                <span className="text-slate-400 text-xs hidden sm:inline">
                  Supervisão: <strong className="text-white">Cátia Catumbela</strong>
                </span>
              </div>

            </div>

          </div>

          {/* 4 Steps Below Video */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-800 bg-slate-900 border-t border-slate-800 text-xs">
            {steps.map((st, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveStep(i);
                  const fraction = i / (steps.length - 1);
                  setScrollProgress(fraction);
                  if (videoRef.current && videoRef.current.duration) {
                    videoRef.current.currentTime = fraction * videoRef.current.duration;
                  }
                }}
                className={`p-4 text-left transition-colors cursor-pointer ${
                  activeStep === i
                    ? 'bg-sky-950/70 text-sky-300 border-b-2 border-sky-400'
                    : 'text-slate-400 hover:bg-slate-850 hover:text-slate-200'
                }`}
              >
                <div className="font-bold text-slate-200 mb-1 flex items-center justify-between">
                  <span className="line-clamp-1">{st.title}</span>
                  {activeStep === i && <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />}
                </div>
                <p className="line-clamp-2 text-[11px] leading-relaxed text-slate-400">
                  {st.desc}
                </p>
              </button>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};

