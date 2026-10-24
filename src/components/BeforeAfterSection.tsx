import React, { useState, useRef } from 'react';
import { Sparkles, ArrowLeftRight, Check, Droplets, Flame } from 'lucide-react';
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
    'Olá Mais Pureza! Vi o Antes e Depois no vosso site e gostaria de agendar uma higienização profunda para o meu sofá em Luanda.'
  );

  return (
    <section id="antes-depois" className="py-16 lg:py-24 bg-slate-100/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-800 bg-sky-100 px-3.5 py-1.5 rounded-full">
            <ArrowLeftRight className="w-3.5 h-3.5 text-sky-600" />
            <span>Transformação Real Comprovada</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            O sofá que você tem vs. o sofá com aspecto de novo que a sua família merece
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Arraste a linha central para os lados e comprove como a extração profunda remove anos de manchas de café, gordura, poeira de Luanda e odores entranhados no tecido.
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
            onTouchStart={(e) => {
              isDragging.current = true;
              handleMove(e.touches[0].clientX);
            }}
            onTouchEnd={() => (isDragging.current = false)}
            onTouchMove={handleTouchMove}
            onClick={(e) => handleMove(e.clientX)}
            style={{ touchAction: 'pan-y' }}
            className="relative aspect-16/10 sm:aspect-16/9 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white select-none cursor-ew-resize bg-slate-900"
          >
            {/* "After" Image (Underneath, Full Width) */}
            <img
              src="/src/assets/images/before_after_sofa_clean_1792751048778.jpg"
              alt="Depois: Sofá higienizado e revitalizado pela Mais Pureza"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            
            {/* After Label */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-emerald-600/95 backdrop-blur-md text-white text-[10px] sm:text-xs font-extrabold px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl shadow-lg z-10 flex items-center gap-1 sm:gap-1.5 pointer-events-none">
              <Check className="w-3.5 h-3.5 text-emerald-200 shrink-0" />
              <span>DEPOIS<span className="hidden sm:inline">: Aspecto de Novo & Puro</span></span>
            </div>

            {/* "Before" Image (Clipped by slider position) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="/src/assets/images/sofa_cleaning_black_technician_1792860734301.jpg"
                alt="Antes: Sofá com acúmulo de poeiras e nódoas sendo limpo pelo técnico"
                className="absolute inset-0 w-full h-full object-cover filter contrast-110 brightness-95"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%', maxWidth: 'none' }}
                referrerPolicy="no-referrer"
              />
              
              {/* Before Label */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-slate-950/90 backdrop-blur-md text-white text-[10px] sm:text-xs font-extrabold px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl shadow-lg z-10 pointer-events-none flex items-center gap-1 sm:gap-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>ANTES<span className="hidden sm:inline">: Extração Sujidade Preta</span></span>
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white shadow-2xl border-2 border-sky-500 flex items-center justify-center text-sky-600">
                <ArrowLeftRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </div>

            {/* Helper Hint */}
            <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 bg-black/75 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full pointer-events-none shadow-md whitespace-nowrap">
              ⟵ Arraste para comparar ⟶
            </div>
          </div>

          {/* Adjacency Proof Callout */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <span className="block text-2xl font-mono font-extrabold text-sky-700">100% no Local</span>
              <span className="text-xs text-slate-500 font-medium">Sem transportar nenhum móvel</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <span className="block text-2xl font-mono font-extrabold text-sky-700">2 a 4 Horas</span>
              <span className="text-xs text-slate-500 font-medium">Secagem rápida no mesmo dia</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <span className="block text-2xl font-mono font-extrabold text-emerald-700">Poupança Real</span>
              <span className="text-xs text-slate-500 font-medium">Economize até 80% vs. sofá novo</span>
            </div>
          </div>

          <div className="mt-6 text-center">
            <a
              href={actionWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-lg hover:shadow-xl transition-all"
            >
              <Droplets className="w-5 h-5 fill-white text-emerald-600" />
              <span>Quero o Meu Sofá Assim (Agendar no WhatsApp)</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
