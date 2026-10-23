import React, { useState } from 'react';
import { SERVICE_CATEGORIES, COMPANY_CONTACTS, buildWhatsAppLink, IndividualService } from '../data/servicesData';
import { MessageCircle, Plus, Eye, Check, Sparkles, HelpCircle } from 'lucide-react';

interface ServicesCatalogProps {
  onViewFlyer: (imageUrl: string, title: string) => void;
  onAddToCart: (service: IndividualService, categoryTitle: string) => void;
  cartItemIds: Record<string, number>;
}

export const ServicesCatalog: React.FC<ServicesCatalogProps> = ({
  onViewFlyer,
  onAddToCart,
  cartItemIds,
}) => {
  const [activeTab, setActiveTab] = useState(SERVICE_CATEGORIES[0].id);

  const currentCategory = SERVICE_CATEGORIES.find((c) => c.id === activeTab) || SERVICE_CATEGORIES[0];

  return (
    <section id="servicos" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-800 bg-sky-100 px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Catálogo Individual e Tabela Oficial</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            Tabela de Preços para Peças Individuais
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Precisa de higienizar apenas uma peça avulsa? Escolha a categoria abaixo e solicite o agendamento no seu endereço em Luanda.
          </p>
        </div>

        {/* Category Tabs (Interactive Segmented Control) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {SERVICE_CATEGORIES.map((cat) => {
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-sky-600 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 p-6 sm:p-8 items-start">
            
            {/* Category Flyer & Context (Left 4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="relative rounded-xl overflow-hidden aspect-4/3 sm:aspect-square bg-slate-100 border border-slate-200 group">
                <img
                  src={currentCategory.flyerImage}
                  alt={`Tabela de preços ${currentCategory.title}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => onViewFlyer(currentCategory.flyerImage, currentCategory.title)}
                  className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 backdrop-blur-xs flex items-center justify-center gap-2 text-white text-xs font-semibold transition-opacity cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>Ampliar Flyer Original</span>
                </button>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  {currentCategory.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {currentCategory.subtitle}
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-sky-50 text-xs text-sky-900 space-y-1 border border-sky-100">
                <div className="font-semibold flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-sky-600" />
                  <span>Serviço no Local do Cliente</span>
                </div>
                <p className="text-[11px] text-slate-600">
                  Não precisa transportar nada. Nossa equipa chega uniformizada com todos os equipamentos.
                </p>
              </div>

              <button
                onClick={() => onViewFlyer(currentCategory.flyerImage, currentCategory.title)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-slate-500" />
                <span>Ver Flyer Original com QR Code</span>
              </button>
            </div>

            {/* Price Table & Order Action (Right 8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Especificação do Item
                </span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider text-right">
                  Valor Oficial & Agendamento
                </span>
              </div>

              <div className="divide-y divide-slate-100">
                {currentCategory.services.map((item) => {
                  const quantityInCart = cartItemIds[item.id] || 0;
                  const itemWhatsAppUrl = buildWhatsAppLink(
                    COMPANY_CONTACTS.waNumber1,
                    `Olá Mais Pureza! Gostaria de agendar a higienização de: ${item.name} (${item.price}). Como posso marcar a data para o meu domicílio?`
                  );

                  return (
                    <div
                      key={item.id}
                      className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/80 px-2 rounded-lg transition-colors"
                    >
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm">
                          {item.name}
                        </h4>
                        <span className="text-xs text-slate-500">
                          Limpeza profunda no local com extração
                        </span>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                        <span className="font-mono text-sm sm:text-base font-bold text-sky-800 tabular-nums">
                          {item.price}
                        </span>

                        <div className="flex items-center gap-2">
                          {/* Add to Custom Quote Builder */}
                          <button
                            onClick={() => onAddToCart(item, currentCategory.title)}
                            className={`inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                              quantityInCart > 0
                                ? 'bg-sky-100 border-sky-300 text-sky-800 font-bold'
                                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                            }`}
                            title="Adicionar à simulação de orçamento"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>{quantityInCart > 0 ? `Simulando (${quantityInCart})` : '+ Adicionar'}</span>
                          </button>

                          {/* Direct WhatsApp purchase button */}
                          <a
                            href={itemWhatsAppUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-2xs transition-colors whitespace-nowrap"
                            title="Comprar via WhatsApp"
                          >
                            <MessageCircle className="w-3.5 h-3.5 fill-white" />
                            <span>Comprar</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Tip */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                  Preços tabelados em Kwanzas (Kz) conforme panfletos oficiais da Mais Pureza.
                </span>
                <a
                  href="#orcamento"
                  className="font-semibold text-sky-600 hover:underline"
                >
                  Ver Calculadora Completa ↓
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
