import React from 'react';
import { TESTIMONIALS_DATA } from '../data/servicesData';
import { Star, MessageSquareQuote, CheckCircle, ShieldCheck } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-800 bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-full">
            <MessageSquareQuote className="w-3.5 h-3.5 text-sky-600" />
            <span>Depoimentos Reais de Clientes em Luanda</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            A confiança de centenas de famílias angolanas
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Veja o que dizem os clientes que já transformaram a saúde e a estética das suas casas com a equipa da Mais Pureza.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div>
                {/* Rating stars & verified badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1 border border-emerald-200">
                    <CheckCircle className="w-3 h-3" />
                    Verificado
                  </span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Location */}
              <div className="pt-4 border-t border-slate-200/80">
                <div className="font-bold text-slate-900 text-sm">
                  {t.author}
                </div>
                <div className="text-xs text-sky-700 font-medium">
                  {t.role}
                </div>
                <div className="text-[11px] text-slate-500 mt-1 flex items-center justify-between">
                  <span>{t.location}</span>
                  <span className="font-medium text-slate-400">{t.date}</span>
                </div>
                <div className="mt-2 text-[10px] text-slate-400 bg-white border border-slate-200 px-2 py-0.5 rounded inline-block">
                  Serviço: {t.service}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Trust banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-gradient-to-r from-sky-900 via-sky-800 to-blue-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-sky-300" />
            </div>
            <div>
              <div className="font-bold text-sm sm:text-base">Compromisso com a Saúde Respiratória</div>
              <div className="text-xs text-sky-200">Produtos dermatologicamente testados e equipamentos homologados.</div>
            </div>
          </div>

          <div className="text-xs text-sky-200">
            Mais de <strong className="text-white font-mono text-sm">1.200+</strong> estofos recuperados em Luanda
          </div>
        </div>

      </div>
    </section>
  );
};
