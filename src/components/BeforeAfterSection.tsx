import React, { useState, useRef } from 'react';
import { Sparkles, ArrowLeftRight, Check, Droplets } from 'lucide-react';
import { COMPANY_CONTACTS, buildWhatsAppLink } from '../data/servicesData';

export const BeforeAfterSection: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const actionWhatsAppUrl = buildWhatsAppLink(
    COMPANY_CONTACTS.waNumber1,
    'Olá Mais Pureza! Vi o Antes e Depois no site e gostaria de agendar uma limpeza para o meu sofá.'
  );

  return (
    <section id="antes-depois" className="py-16 lg:py-24 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-800 bg-sky-100 px-3.5 py-1.5 rounded-full">
            <ArrowLeftRight className="w-3.5 h-3.5 text-sky-600" />
            <span>Resultados Comprovados</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            Arraste para comparar o Antes & Depois da higienização profunda
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Veja a recuperação da cor viva, remoção de nódoas de café, suor e resíduos que se acumulam nas fibras ao longo dos anos.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => (isDragging.current = true)}
            onMouseUp={() => (isDragging.current = false)}
            onMouseLeave={() => (isDragging.current = false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative aspect-16/10 sm:aspect-16/9 rounded-2xl overflow-hidden shadow-xl border-4 border-white select-none cursor-ew-resize bg-slate-900"
          >
            {/* "After" Image (Underneath, Full Width) */}
            <img
              src="/src/assets/images/before_after_sofa_clean_1792751048778.jpg"
              alt="Depois: Sofá higienizado e revitalizado pela Mais Pureza"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            
            {/* After Label */}
            <div className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md z-10 flex items-center gap-1.5 pointer-events-none">
              <Check className="w-3.5 h-3.5" />
              <span>DEPOIS: 100% Higienizado</span>
            </div>

            {/* "Before" Image (Clipped by slider position) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="/src/assets/images/hero_sofa_cleaning_action_1792751048176.jpg"
                alt="Antes: Sofá com acúmulo de poeiras e nódoas"
                className="absolute inset-0 w-full h-full object-cover filter contrast-125 brightness-90 saturate-50"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%', maxWidth: 'none' }}
                referrerPolicy="no-referrer"
              />
              
              {/* Before Label */}
              <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md z-10 pointer-events-none">
                <span>ANTES: Sujidade & Ácaros</span>
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg border-2 border-sky-500 flex items-center justify-center text-sky-600">
                <ArrowLeftRight className="w-4 h-4" />
              </div>
            </div>

            {/* Helper Hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-full pointer-events-none">
              Arraste a linha para os lados
            </div>
          </div>

          {/* Adjacency Proof Callout */}
          <div className="mt-8 grid sm:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-xl bg-white border border-slate-200">
              <span className="block text-xl font-mono font-bold text-sky-700">100% no Local</span>
              <span className="text-xs text-slate-500">Sem tirar móveis de casa</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200">
              <span className="block text-xl font-mono font-bold text-sky-700">2 a 4 Horas</span>
              <span className="text-xs text-slate-500">Tempo médio de secagem</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200">
              <span className="block text-xl font-mono font-bold text-sky-700">0% Cheiro Químico</span>
              <span className="text-xs text-slate-500">Aroma suave e neutro</span>
            </div>
          </div>

          <div className="mt-6 text-center">
            <a
              href={actionWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors"
            >
              <Droplets className="w-4 h-4 fill-white" />
              <span>Quero o Meu Sofá Assim (Agendar no WhatsApp)</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
