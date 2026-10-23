import React from 'react';
import { X, MessageCircle, ExternalLink, Download } from 'lucide-react';
import { COMPANY_CONTACTS, buildWhatsAppLink } from '../data/servicesData';

interface FlyerModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string | null;
  title: string | null;
}

export const FlyerModal: React.FC<FlyerModalProps> = ({ isOpen, onClose, imageUrl, title }) => {
  if (!isOpen || !imageUrl) return null;

  const waOrderUrl = buildWhatsAppLink(
    COMPANY_CONTACTS.waNumber1,
    `Olá Mais Pureza! Estava a ver o panfleto oficial "${title || 'Serviço'}" no site e gostaria de agendar no meu domicílio.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xs">
      <div 
        className="relative bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950 border-b border-slate-800 text-white">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm sm:text-base text-slate-100 truncate">
              {title || 'Panfleto Oficial Mais Pureza'}
            </span>
            <span className="text-[10px] bg-sky-950 text-sky-400 border border-sky-800 px-2 py-0.5 rounded">
              Original
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Container with high fidelity scrolling */}
        <div className="flex-1 overflow-y-auto p-4 flex items-center justify-center bg-black/50">
          <img
            src={imageUrl}
            alt={title || 'Panfleto Mais Pureza'}
            className="max-h-[65vh] w-auto object-contain rounded-lg shadow-lg border border-slate-800"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Modal Footer with Direct WhatsApp Action */}
        <div className="px-5 py-3.5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-slate-400 text-[11px] text-center sm:text-left">
            <span>Rua Kateculo Mengo, Nº 79-A, Alvalade, Maianga · Luanda</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Abrir Imagem</span>
            </a>

            <a
              href={waOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold flex items-center justify-center gap-1.5 shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Pedir Este Pacote no WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
