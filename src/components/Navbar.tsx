import React, { useState } from 'react';
import { COMPANY_CONTACTS, buildWhatsAppLink } from '../data/servicesData';
import { MessageCircle, FileText, Phone, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenProposal: () => void;
  onOpenCart: () => void;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenProposal, onOpenCart, cartCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mainWhatsAppUrl = buildWhatsAppLink(
    COMPANY_CONTACTS.waNumber1,
    'Olá Mais Pureza! Gostaria de informações sobre os vossos serviços de higienização profissional ao domicílio.'
  );

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top micro announcement bar */}
      <div className="bg-gradient-to-r from-sky-900 via-sky-800 to-sky-950 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sky-300">Luanda ao Domicílio:</span>
            <span className="hidden sm:inline text-sky-100">Atendimento em Alvalade, Maianga, Talatona, Kilamba e arredores</span>
            <span className="sm:hidden text-sky-100">Atendimento em toda a cidade</span>
          </div>
          <div className="flex items-center gap-4 text-sky-200">
            <a 
              href={`tel:${COMPANY_CONTACTS.phone1.replace(/\s+/g, '')}`} 
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-sky-400" />
              <span className="font-mono text-xs">{COMPANY_CONTACTS.phone1}</span>
            </a>
            <button
              onClick={onOpenProposal}
              className="hidden md:inline-flex items-center gap-1 text-sky-300 hover:text-white font-medium transition-colors cursor-pointer"
              title="Apresentação do Projeto para Kátia Catumbela"
            >
              <FileText className="w-3 h-3 text-amber-300" />
              <span>Ver Proposta Comercial</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Bar (Strict 3-zone Top Bar Contract) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark & Icon */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <img 
              src={COMPANY_CONTACTS.logo} 
              alt="Mais Pureza Logo" 
              className="w-11 h-11 rounded-full object-cover shadow-xs border border-sky-100 group-hover:scale-105 transition-transform" 
            />
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-sky-700 transition-colors">
                Mais <span className="text-sky-600">Pureza</span>
              </span>
              <span className="text-[11px] font-medium tracking-wide uppercase text-slate-500">
                Higienização & Limpeza Profissional
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 Clean Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#ofertas" className="hover:text-sky-600 transition-colors whitespace-nowrap">
              Ofertas & Pacotes
            </a>
            <a href="#servicos" className="hover:text-sky-600 transition-colors whitespace-nowrap">
              Tabela de Preços
            </a>
            <a href="#video-scroll" className="hover:text-sky-600 transition-colors whitespace-nowrap">
              Vídeo em Scroll
            </a>
            <a href="#antes-depois" className="hover:text-sky-600 transition-colors whitespace-nowrap">
              Antes & Depois
            </a>
            <a href="#depoimentos" className="hover:text-sky-600 transition-colors whitespace-nowrap">
              Depoimentos
            </a>
            <a href="#faq" className="hover:text-sky-600 transition-colors whitespace-nowrap">
              Perguntas Frequentes
            </a>
          </nav>

          {/* Zone 3: Primary Action & Quick Orçamento */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-lg text-slate-700 hover:text-sky-700 hover:bg-sky-50 border border-slate-200 transition-colors cursor-pointer"
              title="Orçamento Personalizado"
              aria-label="Orçamento Personalizado"
            >
              <Sparkles className="w-5 h-5 text-sky-600" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-sky-600 text-white font-mono text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            <a
              href={mainWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>Agendar no WhatsApp</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2 text-base font-medium text-slate-700">
            <a
              href="#ofertas"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-sky-50 hover:text-sky-700 transition-colors"
            >
              Ofertas & Pacotes Promocionais
            </a>
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-sky-50 hover:text-sky-700 transition-colors"
            >
              Tabela de Preços Completa
            </a>
            <a
              href="#video-scroll"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-sky-50 hover:text-sky-700 transition-colors"
            >
              Vídeo Interativo (Scroll)
            </a>
            <a
              href="#antes-depois"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-sky-50 hover:text-sky-700 transition-colors"
            >
              Antes e Depois
            </a>
            <a
              href="#depoimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-sky-50 hover:text-sky-700 transition-colors"
            >
              Depoimentos de Clientes
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-sky-50 hover:text-sky-700 transition-colors"
            >
              Perguntas Frequentes
            </a>
          </nav>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProposal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-amber-300 bg-amber-50 text-amber-900 font-medium text-sm"
            >
              <FileText className="w-4 h-4 text-amber-600" />
              <span>Ver Apresentação da Proposta (Kátia Catumbela)</span>
            </button>
            <a
              href={mainWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 text-white font-semibold rounded-lg text-sm shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Falar Agora no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
