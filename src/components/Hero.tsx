import React from 'react';
import { COMPANY_CONTACTS, buildWhatsAppLink } from '../data/servicesData';
import { MessageCircle, ShieldCheck, Sparkles, MapPin, ArrowRight, Clock, Award, CheckCircle2, Flame } from 'lucide-react';

interface HeroProps {
  onOpenOffer: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOffer, onExploreServices }) => {
  const heroWhatsAppUrl = buildWhatsAppLink(
    COMPANY_CONTACTS.waNumber1,
    'Olá Mais Pureza! Vi a Oferta Especial de 50.000 Kz no vosso site e gostaria de agendar uma higienização profunda no meu domicílio em Luanda.'
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/80 via-white to-slate-50 pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-slate-200">
      {/* Subtle brand water droplet backdrop element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-sky-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-blue-200/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: High-Converting Creative Direct Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Urgent Hook Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-900 bg-sky-100 border border-sky-300 px-3.5 py-1.5 rounded-full shadow-2xs">
              <Flame className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
              <span>O Seu Sofá Parece Velho? Nós Devolvemos o Aspecto de Loja</span>
            </div>

            {/* Main Punchy Selling Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]" style={{ textWrap: 'balance' }}>
              Elimine nódoas, odores e <span className="text-sky-600 underline decoration-sky-300 underline-offset-4">99,9% dos ácaros</span> do seu sofá sem sair de casa.
            </h1>

            {/* Persuasive Selling Story Body Copy */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl">
              A poeira fina e a humidade de Luanda acumulam quilos de impurezas invisíveis que provocam crises de rinite e alergias na sua família. Com a nossa maquinaria alemã de extração profunda a vácuo, removemos toda a sujidade preta em menos de 2 horas. 
              <strong> Não gaste 600.000 Kz num sofá novo quando pode renová-lo por uma fração do preço!</strong>
            </p>

            {/* Special Highlight Box from Client's Official Flyer */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-sky-700 via-sky-600 to-blue-800 text-white shadow-xl relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-extrabold tracking-wider uppercase text-amber-300">
                    <Award className="w-4 h-4 text-amber-300 fill-amber-300" />
                    <span>Promoção Oficial Mais Pureza · Vagas Limitadas</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black">
                    Oferta Especial Toda a Casa: 50.000 Kz
                  </h3>
                  <p className="text-xs sm:text-sm text-sky-100">
                    Sofá (3 ou 5L) + Colchão Casal/King + 1 Jogo Cortinas + 6 Cadeiras + 1 Puff
                  </p>
                  <p className="text-[11px] text-sky-200 italic pt-0.5">
                    *Pode personalizar com os itens da sua casa mantendo o mesmo preço!
                  </p>
                </div>

                <div className="text-left sm:text-right sm:border-l sm:border-sky-400/40 sm:pl-5 shrink-0 bg-sky-900/40 sm:bg-transparent p-3 sm:p-0 rounded-xl">
                  <div className="text-xs line-through text-sky-200 font-mono">Antes: 85.000 Kz</div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-300 tracking-tight">
                    50.000 Kz
                  </div>
                  <div className="text-[11px] text-emerald-300 font-bold uppercase tracking-wider">
                    Poupe 35.000 Kz Hoje
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href={heroWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-lg hover:shadow-xl transition-all group"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600 group-hover:scale-110 transition-transform" />
                <span>Agendar no WhatsApp (+244 934 963 087)</span>
              </a>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <span>Ver Todos os Preços em Kwanzas (Kz)</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            {/* Trust Markers Bar specifically tailored to Luanda */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 border-t border-slate-200/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Atendimento ao domicílio em toda Luanda</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Produtos hospitalares seguros para crianças e pets</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Secagem rápida acelerada em 2 a 4 horas</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity Black Technician & Family Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xl bg-white">
              
              {/* Image Frame with Black Technician */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-900 group">
                <img
                  src="/src/assets/images/hero_technician_angola_1792860733256.jpg"
                  alt="Técnico da Mais Pureza em Luanda a higienizar sofá no domicílio com máquina de extração profunda"
                  className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Live Extraction Badge Overlay */}
                <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-md">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-bold">Extração Profunda ao Vivo</span>
                </div>

                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-slate-900 text-xs px-2.5 py-1 rounded-md font-mono font-bold shadow-md">
                  Luanda · No Seu Domicílio
                </div>
              </div>

              {/* Bottom Quick Feature Highlights & Direct Proof */}
              <div className="p-5 bg-white border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span className="font-medium">Equipamentos alemães de sucção</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    100% no local do cliente
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-100">
                    <span className="block text-lg font-extrabold text-sky-800 font-mono">99.9%</span>
                    <span className="text-[11px] text-slate-600 font-medium">Menos Ácaros</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100">
                    <span className="block text-lg font-extrabold text-emerald-800 font-mono">2 a 4h</span>
                    <span className="text-[11px] text-slate-600 font-medium">Secagem Rápida</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100">
                    <span className="block text-lg font-extrabold text-blue-800 font-mono">100%</span>
                    <span className="text-[11px] text-slate-600 font-medium">Sem Cheiro Tóxico</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-100 text-xs">
                  <span className="text-slate-600">
                    Supervisão técnica: <strong className="text-slate-900 font-semibold">{COMPANY_CONTACTS.owner}</strong>
                  </span>
                  <a
                    href="#video-scroll"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 text-sky-800 border border-sky-200 font-bold text-xs hover:bg-sky-100 transition-colors"
                  >
                    <span>▶ Ver Vídeo Real da Equipa</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Floating Trust Card with Happy Family preview */}
            <div className="hidden sm:flex items-center gap-3 absolute -bottom-6 -left-6 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xl max-w-xs">
              <img
                src="/src/assets/images/family_angola_clean_living_room_1792860734400.jpg"
                alt="Família feliz com casa higienizada"
                className="w-12 h-12 rounded-lg object-cover border border-sky-100 shrink-0"
              />
              <div className="min-w-0">
                <div className="text-xs font-bold text-slate-900 truncate">Famílias Protegidas</div>
                <div className="text-[11px] text-slate-500 leading-tight">Ar puro, sem espirros nem alergias em casa.</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
