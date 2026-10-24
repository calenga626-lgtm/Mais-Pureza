import React from 'react';
import { X, CheckCircle, FileText, Smartphone, TrendingUp, ShieldCheck, MessageCircle, Sparkles, Award } from 'lucide-react';
import { COMPANY_CONTACTS, buildWhatsAppLink } from '../data/servicesData';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const proposalWhatsAppUrl = buildWhatsAppLink(
    COMPANY_CONTACTS.waNumber1,
    `Olá Cátia Catumbela! Gostei muito da proposta e da estrutura deste website para a Mais Pureza. Gostaria de avançar com a ativação oficial.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative bg-white border border-slate-200 rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-sky-900 via-sky-800 to-blue-950 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/10 text-amber-300">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-sky-300 font-semibold">
                Documento de Apresentação
              </div>
              <h2 className="font-display text-lg sm:text-xl font-bold">
                Proposta Comercial: Website Oficial Mais Pureza
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-700">
          
          {/* Executive Summary */}
          <div className="p-4 rounded-xl bg-sky-50 border border-sky-100 space-y-2">
            <div className="flex items-center gap-2 text-sky-900 font-bold text-sm">
              <Award className="w-4 h-4 text-sky-600" />
              <span>Dedicado a: Cátia Catumbela & Equipa Mais Pureza</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Este website foi especialmente projetado e programado para transformar a presença digital da <strong>Mais Pureza</strong> numa máquina contínua de vendas. Cada elemento visual segue rigorosamente as cores, tipografia, ofertas oficiais e catálogo real de panfletos da sua marca.
            </p>
          </div>

          {/* Key Advantages Grid */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider text-slate-500">
              Vantagens Comerciais Imediatas para o Vosso Negócio:
            </h3>

            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-emerald-600" />
                  <span>Funil Direto para o WhatsApp</span>
                </div>
                <p className="text-slate-500 leading-snug">
                  Todos os botões de pacotes e itens individuais geram mensagens com nome da peça, valor em Kwanzas e endereço do cliente prontos para fechamento rápido.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-sky-600" />
                  <span>Simulador de Orçamento Vivo</span>
                </div>
                <p className="text-slate-500 leading-snug">
                  Permite aos clientes calcularem quantos sofás, colchões ou cortinas desejam higienizar com desconto automático acima de 50.000 Kz.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>Vídeo em Scroll & Antes/Depois</span>
                </div>
                <p className="text-slate-500 leading-snug">
                  O vídeo interativo avança conforme o cliente faz scroll, provando a qualidade das máquinas e gerando autoridade perante a concorrência em Luanda.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-indigo-600" />
                  <span>SEO Local para Luanda</span>
                </div>
                <p className="text-slate-500 leading-snug">
                  Otimizado para buscas do Google: Alvalade, Maianga, Talatona, Kilamba, etc., captando clientes de alto padrão à procura de limpeza profissional.
                </p>
              </div>
            </div>
          </div>

          {/* Legal / Copyright Confirmation */}
          <div className="p-4 rounded-xl bg-slate-900 text-white space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-300">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>Titularidade e Direitos de Propriedade</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Conforme as diretrizes estabelecidas na encomenda deste projeto: <strong>Todos os direitos intelectuais, de imagem, marca comercial e código desta plataforma estão integralmente reservados para Cátia Catumbela</strong> e para a Mais Pureza - Higienização & Limpeza Profissional.
            </p>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            <span>Contacto Oficial: {COMPANY_CONTACTS.phone1} / {COMPANY_CONTACTS.phone2}</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-medium transition-colors cursor-pointer"
            >
              Fechar Apresentação
            </button>

            <a
              href={proposalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Aprovar / Falar com Cátia Catumbela</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
