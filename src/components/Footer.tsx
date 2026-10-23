import React from 'react';
import { COMPANY_CONTACTS } from '../data/servicesData';
import { MapPin, Phone, Clock, Shield, FileText } from 'lucide-react';

interface FooterProps {
  onOpenProposal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenProposal }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand Wordmark & Summary */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src={COMPANY_CONTACTS.logo}
                alt="Mais Pureza"
                className="w-10 h-10 rounded-full object-cover border border-slate-700"
              />
              <div>
                <span className="font-display text-lg font-bold text-white tracking-tight block">
                  Mais <span className="text-sky-400">Pureza</span>
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  {COMPANY_CONTACTS.subname}
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Higienização profissional a domicílio com tecnologia de extração profunda. Devolvemos a beleza, frescura e proteção da sua casa em Luanda.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-200 text-sm">Serviços & Pacotes</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#ofertas" className="hover:text-white transition-colors">
                  Oferta Especial (50.000 Kz)
                </a>
              </li>
              <li>
                <a href="#ofertas" className="hover:text-white transition-colors">
                  Pacote Família & Conforto
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Higienização de Sofás
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Colchões, Camas & Cortinas
                </a>
              </li>
              <li>
                <a href="#orcamento" className="hover:text-white transition-colors">
                  Simulador de Orçamento Interativo
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Address & Contacts */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-200 text-sm">Localização & Contato</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{COMPANY_CONTACTS.address}, {COMPANY_CONTACTS.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-mono">{COMPANY_CONTACTS.phone1} / {COMPANY_CONTACTS.phone2}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{COMPANY_CONTACTS.hours}</span>
              </div>
            </div>
          </div>

          {/* Col 4: Commercial Proposal / Rights */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-200 text-sm">Apresentação da Proposta</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Website desenvolvido para apresentação e aquisição comercial da empresa Mais Pureza.
            </p>
            <button
              onClick={onOpenProposal}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-sky-300 hover:text-white transition-colors text-xs cursor-pointer font-medium"
            >
              <FileText className="w-3.5 h-3.5 text-amber-300" />
              <span>Ver Proposta Comercial (Kátia Catumbela)</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar with Mandatory Copyright to Kátia Catumbela */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 <strong>Mais Pureza</strong> · Todos os direitos dessa plataforma estão reservados para <strong className="text-slate-300">Kátia Catumbela</strong>.
          </div>
          <div className="flex items-center gap-4">
            <span>Atendimento Domiciliar em Luanda - Angola</span>
            <span>·</span>
            <span>Pagamento Seguro no WhatsApp</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
