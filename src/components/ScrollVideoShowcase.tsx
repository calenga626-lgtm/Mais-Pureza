import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX, Link as LinkIcon, Sparkles, CheckCircle2, ChevronRight, Upload, Video, RotateCcw } from 'lucide-react';
import { COMPANY_CONTACTS, buildWhatsAppLink } from '../data/servicesData';

interface VideoPreset {
  id: string;
  name: string;
  url: string;
  poster: string;
  description: string;
}

const VIDEO_PRESETS: VideoPreset[] = [
  {
    id: 'extracao-sofa',
    name: 'Demonstração 1: Extração Profunda em Sofás & Estofos',
    url: '/assets/mais_pureza_extracao.mp4',
    poster: '/src/assets/images/hero_sofa_cleaning_action_1792751048176.jpg',
    description: 'Máquina de injeção e extração a recolher poeiras, manchas e ácaros no tecido.'
  },
  {
    id: 'higienizacao-colchao',
    name: 'Demonstração 2: Sanitização & Revitalização Têxtil',
    url: '/assets/mais_pureza_higienizacao.mp4',
    poster: '/src/assets/images/before_after_sofa_clean_1792751048778.jpg',
    description: 'Tratamento com solução ecológica hospitalar e acabamento sedoso.'
  }
];

export const ScrollVideoShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoUrl, setVideoUrl] = useState(VIDEO_PRESETS[0].url);
  const [currentPresetId, setCurrentPresetId] = useState(VIDEO_PRESETS[0].id);
  const [customUrlInput, setCustomUrlInput] = useState('');
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [controlMode, setControlMode] = useState<'scroll' | 'autoplay'>('autoplay');
  const [videoError, setVideoError] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Attempt autoplay on mount
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    setVideoError(false);
    video.muted = true;
    setIsMuted(true);

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setIsVideoLoaded(true);
        })
        .catch(() => {
          // If browser restricts initial autoplay without interaction
          setIsPlaying(false);
        });
    }
  }, [videoUrl]);

  // Handle scroll-driven scrubber when in scroll mode
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !videoRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const totalDist = rect.height - windowHeight;
      const currentScroll = -rect.top;
      
      if (totalDist > 0) {
        let progress = currentScroll / totalDist;
        progress = Math.max(0, Math.min(1, progress));
        setScrollProgress(progress);

        // Update step index based on progress
        if (progress < 0.25) setActiveStep(0);
        else if (progress < 0.5) setActiveStep(1);
        else if (progress < 0.75) setActiveStep(2);
        else setActiveStep(3);

        // If in scroll control mode, actively scrub video position
        if (controlMode === 'scroll') {
          const video = videoRef.current;
          if (video.duration && !isNaN(video.duration)) {
            const targetTime = progress * video.duration;
            if (Math.abs(video.currentTime - targetTime) > 0.08) {
              video.currentTime = targetTime;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controlMode]);

  const togglePlay = () => {
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

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleApplyCustomUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (customUrlInput.trim()) {
      setVideoUrl(customUrlInput.trim());
      setCurrentPresetId('custom');
      setShowConfigModal(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const localBlobUrl = URL.createObjectURL(file);
      setVideoUrl(localBlobUrl);
      setCurrentPresetId('uploaded');
      setShowConfigModal(false);
    }
  };

  const selectPreset = (preset: VideoPreset) => {
    setVideoUrl(preset.url);
    setCurrentPresetId(preset.id);
  };

  const steps = [
    { title: '1. Diagnóstico e Aspiração Profunda', desc: 'Remoção de partículas sólidas e poeiras secas acumuladas no fundo das fibras têxteis.' },
    { title: '2. Aplicação Bioquímica Hospitalar', desc: 'Solução enzimática biodegradável que solta gorduras, ácaros e nódoas sem desbotar o tecido.' },
    { title: '3. Injeção e Extração de Alta Potência', desc: 'Máquina de alta sucção puxa água limpa com pressão e recolhe toda a sujidade preta no reservatório.' },
    { title: '4. Toque Macio e Secagem em 2 a 4h', desc: 'Fibras desinfetadas, perfume agradável e secagem rápida em temperatura ambiente de Luanda.' }
  ];

  const whatsAppActionUrl = buildWhatsAppLink(
    COMPANY_CONTACTS.waNumber1,
    'Olá Mais Pureza! Assisti ao vídeo de demonstração no site e gostaria de agendar uma higienização no meu domicílio.'
  );

  return (
    <section id="video-scroll" ref={containerRef} className="relative bg-slate-900 text-white py-16 lg:py-24 border-b border-slate-800">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-radial from-sky-900/25 via-slate-900 to-slate-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-300 bg-sky-950/80 border border-sky-800 px-3.5 py-1.5 rounded-full shadow-sm">
            <Video className="w-4 h-4 text-sky-400" />
            <span>Vídeo em Movimento com Controle de Scroll</span>
          </div>
          
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white" style={{ textWrap: 'balance' }}>
            Veja a tecnologia de extração profunda em movimento
          </h2>
          
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            O vídeo reproduz automaticamente e também acompanha a sua rolagem pela página. 
            Você pode alternar entre demonstrações ou adicionar o vídeo gravado no Instagram/telemóvel da Mais Pureza.
          </p>

          {/* Preset Buttons Quick Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {VIDEO_PRESETS.map((p) => (
              <button
                key={p.id}
                onClick={() => selectPreset(p)}
                className={`text-xs px-3.5 py-1.5 rounded-lg border font-medium transition-all cursor-pointer ${
                  currentPresetId === p.id
                    ? 'bg-sky-600 border-sky-400 text-white shadow-md'
                    : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {p.name.split(':')[0]}
              </button>
            ))}
            
            <button
              onClick={() => setShowConfigModal(true)}
              className="text-xs px-3 py-1.5 rounded-lg border border-amber-500/50 bg-amber-950/40 text-amber-300 hover:bg-amber-900/60 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <LinkIcon className="w-3.5 h-3.5" />
              <span>Colar Vídeo da Mais Pureza</span>
            </button>
          </div>
        </div>

        {/* Video Player Main Viewport */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl">
          
          <div className="relative aspect-16/9 w-full bg-slate-950 flex items-center justify-center overflow-hidden">
            
            {/* HTML5 Video Element with local high-quality MP4 */}
            <video
              ref={videoRef}
              src={videoUrl}
              muted={isMuted}
              playsInline
              loop
              autoPlay
              preload="auto"
              className="w-full h-full object-cover"
              onError={() => setVideoError(true)}
              onLoadedData={() => {
                setIsVideoLoaded(true);
                setVideoError(false);
              }}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Fallback Animated Scene if video fails to load in sandboxed environment */}
            {videoError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-slate-900">
                <img
                  src="/src/assets/images/hero_sofa_cleaning_action_1792751048176.jpg"
                  alt="Extração Profunda"
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="relative z-10 max-w-md bg-slate-950/90 p-5 rounded-xl border border-slate-700 text-white space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sky-400 font-bold text-sm">
                    <Sparkles className="w-4 h-4" />
                    <span>Demonstração de Extração Mais Pureza</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    O navegador restringiu a reprodução direta. Clique abaixo para reiniciar ou colar o link do seu vídeo.
                  </p>
                  <button
                    onClick={() => {
                      setVideoError(false);
                      setVideoUrl(VIDEO_PRESETS[0].url);
                    }}
                    className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs"
                  >
                    Tentar Novamente
                  </button>
                </div>
              </div>
            )}

            {/* Soft Ambient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/30 pointer-events-none" />

            {/* Live Step Badge Overlay */}
            <div className="absolute top-4 left-4 right-4 sm:right-auto max-w-sm sm:max-w-md bg-slate-900/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-700 text-left shadow-lg pointer-events-none z-10">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase text-sky-400">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                <span>Mais Pureza ao Domicílio · {steps[activeStep].title}</span>
              </div>
              <p className="text-xs text-slate-200 mt-1 leading-snug">
                {steps[activeStep].desc}
              </p>
            </div>

            {/* Top Right Live Badge */}
            <div className="absolute top-4 right-4 hidden sm:flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-xs text-slate-300 z-10">
              <span className="font-mono text-sky-400 font-bold">{Math.round(scrollProgress * 100)}%</span>
              <span>posição no scroll</span>
            </div>

            {/* Bottom Controls Bar */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-700 z-10">
              
              <div className="flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  className="p-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white transition-colors cursor-pointer"
                  title={isPlaying ? 'Pausar' : 'Reproduzir'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title={isMuted ? 'Ativar Som' : 'Silenciar'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                {/* Control Mode Toggle */}
                <button
                  onClick={() => {
                    if (controlMode === 'scroll') {
                      setControlMode('autoplay');
                      if (videoRef.current) {
                        videoRef.current.play().catch(console.error);
                      }
                      setIsPlaying(true);
                    } else {
                      setControlMode('scroll');
                      if (videoRef.current) {
                        videoRef.current.pause();
                      }
                      setIsPlaying(false);
                    }
                  }}
                  className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-colors cursor-pointer ${
                    controlMode === 'scroll'
                      ? 'bg-sky-950 border-sky-500 text-sky-300'
                      : 'bg-emerald-950/80 border-emerald-500 text-emerald-300'
                  }`}
                >
                  {controlMode === 'scroll' ? '🎮 Movimento por Scroll (Ativo)' : '▶ Reprodução Contínua (Ativo)'}
                </button>
              </div>

              {/* Progress Slider Bar */}
              <div className="flex items-center gap-3 flex-1 sm:max-w-xs">
                <span className="text-xs text-slate-400 font-mono">0s</span>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={scrollProgress}
                  onChange={(e) => {
                    const val = parseFloat(e.target.value);
                    setScrollProgress(val);
                    if (videoRef.current && videoRef.current.duration) {
                      videoRef.current.currentTime = val * videoRef.current.duration;
                    }
                  }}
                  className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-500"
                />
                <span className="text-xs text-slate-400 font-mono">10s</span>
              </div>

              {/* Quick Config Button */}
              <button
                onClick={() => setShowConfigModal(true)}
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors cursor-pointer"
              >
                <LinkIcon className="w-3.5 h-3.5 text-sky-400" />
                <span>Colar Vídeo URL</span>
              </button>

            </div>

          </div>

          {/* Interactive Steps Matrix Below Video */}
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
                    ? 'bg-sky-950/60 text-sky-300 border-b-2 border-sky-400'
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                }`}
              >
                <div className="font-bold text-slate-200 mb-1 flex items-center justify-between">
                  <span>{st.title}</span>
                  {activeStep === i && <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />}
                </div>
                <p className="line-clamp-2 text-[11px] leading-relaxed text-slate-400">
                  {st.desc}
                </p>
              </button>
            ))}
          </div>

        </div>

        {/* CTA Bar below video */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl bg-slate-800/80 border border-slate-700">
          <div>
            <h4 className="font-bold text-white text-base">Quer este mesmo resultado nos sofás e colchões da sua casa?</h4>
            <p className="text-xs text-slate-400 mt-0.5">Atendimento em Alvalade, Maianga, Talatona, Kilamba e toda a província de Luanda.</p>
          </div>
          <a
            href={whatsAppActionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-md transition-colors"
          >
            <span>Pedir Agendamento no WhatsApp</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Modal: Custom Video URL or Upload for Kátia Catumbela */}
      {showConfigModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-md w-full p-6 text-white space-y-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
                <Video className="w-5 h-5 text-sky-400" />
                Vídeo da Mais Pureza
              </h3>
              <button
                onClick={() => setShowConfigModal(false)}
                className="text-slate-400 hover:text-white text-lg font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Você pode colar a URL de qualquer vídeo da Mais Pureza (por exemplo, um link direto MP4, vídeo do Google Drive / Cloud ou link direto do Instagram):
            </p>

            <form onSubmit={handleApplyCustomUrl} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  URL Direta do Vídeo (.mp4):
                </label>
                <input
                  type="url"
                  placeholder="https://exemplo.com/video-mais-pureza.mp4"
                  value={customUrlInput}
                  onChange={(e) => setCustomUrlInput(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-sky-500 font-mono"
                />
              </div>

              {/* Upload file from device */}
              <div>
                <input
                  type="file"
                  accept="video/*"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full flex items-center justify-center gap-2 p-2.5 rounded-lg border border-dashed border-slate-600 hover:border-sky-500 text-xs text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  <Upload className="w-4 h-4 text-sky-400" />
                  <span>Carregar Ficheiro de Vídeo do Dispositivo</span>
                </button>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                  Ou use uma demonstração pronta da plataforma:
                </span>
                {VIDEO_PRESETS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => {
                      selectPreset(p);
                      setShowConfigModal(false);
                    }}
                    className="w-full text-left p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 border border-slate-700 flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="font-semibold">{p.name}</div>
                      <div className="text-[10px] text-slate-400">{p.description}</div>
                    </div>
                    <span className="text-[11px] text-sky-400 font-bold shrink-0 ml-2">Usar</span>
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-end gap-2 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowConfigModal(false)}
                  className="px-4 py-2 rounded-lg bg-slate-800 text-xs font-medium text-slate-300 hover:text-white cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-sky-600 text-xs font-bold text-white hover:bg-sky-500 cursor-pointer"
                >
                  Salvar e Atualizar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
