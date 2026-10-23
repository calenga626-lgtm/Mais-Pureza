import React, { useState } from 'react';
import { COMPANY_CONTACTS, buildWhatsAppLink } from '../data/servicesData';
import { MessageCircle, X, Phone, Clock, Sparkles } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    {
      label: 'Agendar Oferta Especial (50.000 Kz)',
      text: 'Olá! Gostaria de agendar a Oferta Especial de 50.000 Kz no meu domicílio em Luanda.'
    },
    {
      label: 'Agendar Pacote Família (65.000 Kz)',
      text: 'Olá! Gostaria de agendar o Pacote Família de 65.000 Kz.'
    },
    {
      label: 'Fazer Pergunta sobre Secagem / Produtos',
      text: 'Olá Mais Pureza! Tenho uma dúvida sobre a secagem e os produtos antes de agendar.'
    }
  ];

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={COMPANY_CONTACTS.logo}
                alt="Mais Pureza"
                className="w-10 h-10 rounded-full object-cover border-2 border-white/40"
              />
              <div>
                <div className="font-bold text-sm">Mais Pureza - WhatsApp</div>
                <div className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                  <span>Online · Atendimento Luanda</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-emerald-100 hover:text-white hover:bg-emerald-800/40 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick choices */}
          <div className="p-4 space-y-2.5 bg-slate-50 text-xs">
            <p className="text-slate-600 text-xs leading-snug">
              Olá! Como podemos ajudar a deixar a sua casa mais pura e higienizada hoje?
            </p>

            <div className="space-y-1.5 pt-1">
              {quickMessages.map((qm, i) => (
                <a
                  key={i}
                  href={buildWhatsAppLink(COMPANY_CONTACTS.waNumber1, qm.text)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2.5 rounded-lg bg-white border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 text-slate-800 font-medium transition-colors"
                >
                  {qm.label} →
                </a>
              ))}
            </div>

            {/* Direct Phone Numbers Selection */}
            <div className="pt-3 border-t border-slate-200 space-y-1.5 text-[11px]">
              <span className="text-slate-400 uppercase tracking-wider font-semibold block">
                Nossos Contactos WhatsApp:
              </span>
              <div className="flex flex-col gap-1.5">
                <a
                  href={buildWhatsAppLink(COMPANY_CONTACTS.waNumber1, 'Olá Mais Pureza!')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-md bg-white border border-slate-200 text-slate-700 hover:text-emerald-700 font-mono"
                >
                  <span className="font-bold">{COMPANY_CONTACTS.phone1}</span>
                  <span className="text-emerald-600 font-sans font-semibold text-[10px]">Iniciar Chat</span>
                </a>
                <a
                  href={buildWhatsAppLink(COMPANY_CONTACTS.waNumber2, 'Olá Mais Pureza!')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-md bg-white border border-slate-200 text-slate-700 hover:text-emerald-700 font-mono"
                >
                  <span className="font-bold">{COMPANY_CONTACTS.phone2}</span>
                  <span className="text-emerald-600 font-sans font-semibold text-[10px]">Iniciar Chat</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
        aria-label="Abrir WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
        <span className="text-xs sm:text-sm font-bold pr-1">Agendar no WhatsApp</span>
      </button>

    </div>
  );
};
