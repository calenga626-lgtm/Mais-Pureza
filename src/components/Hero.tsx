import React from 'react';
import { COMPANY_CONTACTS, buildWhatsAppLink } from '../data/servicesData';
import { MessageCircle, ShieldCheck, Sparkles, MapPin, ArrowRight, Clock, Award } from 'lucide-react';

interface HeroProps {
  onOpenOffer: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOffer, onExploreServices }) => {
  const heroWhatsAppUrl = buildWhatsAppLink(
    COMPANY_CONTACTS.waNumber1,
    'Olá Mais Pureza! Vi a Oferta Especial de 50.000 Kz no vosso site e gostaria de agendar uma higienização no meu domicílio.'
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200">
      {/* Subtle brand water droplet backdrop element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-sky-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-blue-200/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: High-Converting Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Direct Trust Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-800 bg-sky-100/90 border border-sky-200/70 px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Higienização Profissional ao Domicílio em Luanda</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
              Sofás, colchões e cortinados <span className="text-sky-600 underline decoration-sky-300 underline-offset-4">renovados</span> e livres de ácaros no seu domicílio.
            </h1>

            {/* Subtitle with Real Selling Points */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Eliminamos até <strong>99,9% dos ácaros, fungos, nódoas e odores</strong> com maquinaria alemã de extração profunda e produtos hospitalares biodegradáveis. Secagem rápida em 2 a 4 horas.
            </p>

            {/* Special Highlight Box from Flyer */}
            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 text-white shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-sky-200">
                    <Award className="w-4 h-4 text-amber-300" />
                    <span>Destaque do Mês · Vagas Limitadas</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mt-0.5">
                    Oferta Especial Completa
                  </h3>
                  <p className="text-xs sm:text-sm text-sky-100 mt-1">
                    Sofá (3 ou 5L) + Colchão Casal/King + Jogo de Cortinas + 6 Cadeiras + 1 Puff
                  </p>
                </div>
                <div className="text-right sm:border-l sm:border-sky-400/40 sm:pl-5 shrink-0">
                  <div className="text-xs line-through text-sky-200 font-mono">Antes 85.000 Kz</div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-300">
                    50.000 Kz
                  </div>
                  <div className="text-[11px] text-sky-200">Poupe 35.000 Kz</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href={heroWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Agendar no WhatsApp (+244 934 963 087)</span>
              </a>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                <span>Ver Todos os Pacotes & Preços</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            {/* Trust Markers Bar */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Atendimento no local (Toda Luanda)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Produtos certificados e seguros para pets</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Secagem rápida em 2 a 4 horas</span>
              </div>
            </div>

          </div>

          {/* Right Column: High Fidelity Action Showcase & Product Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-xl bg-white">
              
              {/* Image Frame */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
                <img
                  src="/src/assets/images/hero_sofa_cleaning_action_1792751048176.jpg"
                  alt="Técnico da Mais Pureza a higienizar sofá no domicílio com máquina de extração profunda"
                  className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Live Extraction Badge Overlay */}
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-md flex items-center gap-2 shadow-xs">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="font-medium">Extração Profunda em Ação</span>
                </div>

                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-slate-900 text-xs px-2.5 py-1 rounded-md font-mono font-bold shadow-xs">
                  Luanda · No Seu Domicílio
                </div>
              </div>

              {/* Bottom Quick Feature Highlights */}
              <div className="p-5 bg-white border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Equipamentos industriais</span>
                  <span className="text-emerald-600 font-semibold">100% No Local do Cliente</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 rounded-lg bg-sky-50 border border-sky-100">
                    <span className="block text-lg font-extrabold text-sky-800 font-mono">99.9%</span>
                    <span className="text-[11px] text-slate-600">Menos Ácaros</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-100">
                    <span className="block text-lg font-extrabold text-blue-800 font-mono">100%</span>
                    <span className="text-[11px] text-slate-600">Não Tóxico</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-100">
                    <span className="block text-lg font-extrabold text-emerald-800 font-mono">0 Kz</span>
                    <span className="text-[11px] text-slate-600">Deslocação Alvalade</span>
                  </div>
                </div>

                <div className="pt-1 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-600">
                    Responsável técnica: <strong className="text-slate-900">{COMPANY_CONTACTS.owner}</strong>
                  </span>
                  <button
                    onClick={onOpenOffer}
                    className="text-xs font-semibold text-sky-600 hover:text-sky-800 underline transition-colors cursor-pointer"
                  >
                    Ver detalhes do pacote →
                  </button>
                </div>
              </div>

            </div>

            {/* Floating Trust Card */}
            <div className="hidden sm:flex items-center gap-3 absolute -bottom-5 -left-6 bg-white p-3.5 rounded-xl border border-slate-200 shadow-lg">
              <img
                src={COMPANY_CONTACTS.logo}
                alt="Logo"
                className="w-10 h-10 rounded-full object-cover border border-sky-100"
              />
              <div>
                <div className="text-xs font-bold text-slate-900">Mais Pureza Oficial</div>
                <div className="text-[11px] text-slate-500">Garantia total de satisfação</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
