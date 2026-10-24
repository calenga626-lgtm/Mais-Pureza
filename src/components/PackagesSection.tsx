import React from 'react';
import { PACKAGES_DATA, COMPANY_CONTACTS, buildWhatsAppLink, PackageItem } from '../data/servicesData';
import { MessageCircle, Check, Eye, Tag, Sparkles, Shield, ArrowUpRight } from 'lucide-react';

interface PackagesSectionProps {
  onViewFlyer: (imageUrl: string, title: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onViewFlyer }) => {
  return (
    <section id="ofertas" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-800 bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-full">
            <Tag className="w-3.5 h-3.5 text-sky-600" />
            <span>Pacotes Económicos Oficiais Mais Pureza</span>
          </div>
          
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            A casa inteira com cheiro a nova num só dia — Poupe até 73.000 Kz
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Elimine ácaros dos colchões, nódoas do sofá e pó das cortinas de uma única vez. 
            Escolha o pacote ideal para a sua casa e clique para agendar diretamente pelo WhatsApp.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PACKAGES_DATA.map((pkg: PackageItem) => {
            const waUrl = buildWhatsAppLink(
              COMPANY_CONTACTS.waNumber1,
              `Olá Mais Pureza! Gostaria de agendar o ${pkg.name} (${pkg.salePrice.toLocaleString('pt-AO')} Kz). Poderiam confirmar a disponibilidade para o meu domicílio?`
            );

            return (
              <div
                key={pkg.id}
                className={`flex flex-col justify-between rounded-2xl border transition-all duration-300 relative bg-white ${
                  pkg.featured
                    ? 'border-sky-500 shadow-xl ring-2 ring-sky-500/20'
                    : 'border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'
                }`}
              >
                {/* Top Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs ${
                      pkg.featured
                        ? 'bg-sky-600 text-white'
                        : 'bg-slate-900 text-slate-100'
                    }`}>
                      {pkg.badge}
                    </span>
                  </div>
                )}

                {/* Card Top / Flyer Thumbnail */}
                <div className="p-5 pb-0">
                  <div className="relative rounded-xl overflow-hidden aspect-4/3 bg-slate-100 group border border-slate-100">
                    <img
                      src={pkg.flyerImage}
                      alt={`Panfleto oficial ${pkg.name}`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* View flyer overlay button */}
                    <button
                      onClick={() => onViewFlyer(pkg.flyerImage, pkg.name)}
                      className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 backdrop-blur-xs flex items-center justify-center gap-2 text-white text-xs font-semibold transition-opacity cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Ver Panfleto Oficial</span>
                    </button>
                    
                    <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] font-semibold text-slate-800 shadow-xs">
                      Poupe {pkg.savings.toLocaleString('pt-AO')} Kz
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mt-4">
                    <h3 className="font-display text-xl font-bold text-slate-900">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Price Box */}
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-2xl sm:text-3xl font-extrabold text-sky-700 tabular-nums">
                        {pkg.salePrice.toLocaleString('pt-AO')} Kz
                      </span>
                      <span className="text-xs line-through text-slate-400 font-mono tabular-nums">
                        {pkg.originalPrice.toLocaleString('pt-AO')} Kz
                      </span>
                    </div>
                    <div className="text-[11px] text-emerald-600 font-semibold mt-0.5">
                      Desconto de {pkg.savings.toLocaleString('pt-AO')} Kz aplicado
                    </div>
                  </div>

                  {/* Items list */}
                  <div className="mt-5 space-y-2.5">
                    <span className="text-xs font-bold text-slate-800 block uppercase tracking-wide">
                      O que está incluído:
                    </span>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {pkg.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Notes / Flexibility */}
                  {pkg.notes && (
                    <div className="mt-4 p-2.5 rounded-lg bg-sky-50/70 border border-sky-100 text-[11px] text-sky-900 leading-snug">
                      <strong>Nota de flexibilidade:</strong> {pkg.notes}
                    </div>
                  )}
                </div>

                {/* Card Footer / Action */}
                <div className="p-5 pt-6 border-t border-slate-100 mt-6 space-y-2">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-xs hover:shadow transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Agendar Pacote no WhatsApp</span>
                  </a>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                    <span className="flex items-center gap-1">
                      <Shield className="w-3 h-3 text-slate-400" />
                      Pagamento no WhatsApp / Local
                    </span>
                    <button
                      onClick={() => onViewFlyer(pkg.flyerImage, pkg.name)}
                      className="text-sky-600 hover:underline flex items-center gap-0.5 cursor-pointer"
                    >
                      <span>Ver panfleto</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Customization Guarantee Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-sky-50 border border-sky-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-display font-bold text-slate-900 text-base sm:text-lg flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-sky-600" />
              Não tem exatamente os itens indicados nos pacotes acima?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              Não se preocupe! A Mais Pureza ajusta o pacote com os itens disponíveis na sua residência (ex: trocar cortinas por cadeiras ou almofadas adicionais) e <strong>mantém o mesmo valor promocional</strong>.
            </p>
          </div>

          <a
            href={buildWhatsAppLink(
              COMPANY_CONTACTS.waNumber1,
              'Olá! Gostaria de montar um pacote personalizado para os itens da minha casa mantendo o valor promocional.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" />
            <span>Personalizar Pacote no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
