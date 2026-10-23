import React, { useState } from 'react';
import { FAQ_DATA, COMPANY_CONTACTS, buildWhatsAppLink } from '../data/servicesData';
import { HelpCircle, ChevronDown, MessageCircle, PhoneCall } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const supportWhatsAppUrl = buildWhatsAppLink(
    COMPANY_CONTACTS.waNumber1,
    'Olá Mais Pureza! Tenho uma dúvida sobre a higienização no meu domicílio.'
  );

  return (
    <section id="faq" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-800 bg-sky-100 px-3.5 py-1.5 rounded-full">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Tudo o que você precisa saber sobre o agendamento, produtos, pagamentos e atendimento em Luanda.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-white shadow-2xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-bold text-slate-900 hover:text-sky-600 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-sky-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3">
          <h3 className="font-bold text-slate-900 text-base">Ainda tem alguma pergunta específica?</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            A equipa de atendimento da Mais Pureza está disponível pelo WhatsApp para esclarecer dúvidas e enviar orçamentos personalizados.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={supportWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Falar no WhatsApp ({COMPANY_CONTACTS.phone1})</span>
            </a>
            <a
              href={`tel:${COMPANY_CONTACTS.phone2.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-slate-500" />
              <span>Ligar: {COMPANY_CONTACTS.phone2}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
