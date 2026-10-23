import React, { useState } from 'react';
import { COMPANY_CONTACTS, buildWhatsAppLink } from '../data/servicesData';
import { Calculator, MessageCircle, Trash2, Plus, Minus, CheckCircle, MapPin, Sparkles, Send } from 'lucide-react';

export interface CartItem {
  id: string;
  name: string;
  priceText: string;
  unitPrice: number;
  quantity: number;
  category: string;
}

interface CustomQuoteBuilderProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CustomQuoteBuilder: React.FC<CustomQuoteBuilderProps> = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [neighborhood, setNeighborhood] = useState('Alvalade / Maianga');
  const [customAddress, setCustomAddress] = useState('');
  const [notes, setNotes] = useState('');

  const subtotal = items.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  
  // Volume discount: orders above 50.000 Kz get 10% discount automatically!
  const hasDiscount = subtotal >= 50000;
  const discountAmount = hasDiscount ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal - discountAmount;

  const handleSendToWhatsApp = () => {
    if (items.length === 0) return;

    let message = `*SOLICITAÇÃO DE AGENDAMENTO / ORÇAMENTO - MAIS PUREZA*\n\n`;
    if (customerName.trim()) {
      message += `👤 *Cliente:* ${customerName.trim()}\n`;
    }
    message += `📍 *Localização em Luanda:* ${neighborhood}${customAddress ? ` (${customAddress})` : ''}\n\n`;
    message += `🛋️ *Itens Selecionados para Higienização:*\n`;

    items.forEach((item) => {
      const itemSub = (item.unitPrice * item.quantity).toLocaleString('pt-AO');
      message += `• ${item.quantity}x ${item.name} — ${itemSub} Kz\n`;
    });

    message += `\n💰 *Subtotal:* ${subtotal.toLocaleString('pt-AO')} Kz\n`;
    if (hasDiscount) {
      message += `🎉 *Desconto Combo (10%):* -${discountAmount.toLocaleString('pt-AO')} Kz\n`;
    }
    message += `✨ *VALOR TOTAL ESTIMADO:* ${total.toLocaleString('pt-AO')} Kz\n\n`;
    if (notes.trim()) {
      message += `📝 *Observações:* ${notes.trim()}\n\n`;
    }
    message += `💳 *Pagamento:* A realizar via Multicaixa Express / Transferência no WhatsApp.\n`;
    message += `Por favor, confirmem as datas e horários disponíveis para o atendimento na minha residência. Obrigado!`;

    const url = buildWhatsAppLink(COMPANY_CONTACTS.waNumber1, message);
    window.open(url, '_blank');
  };

  return (
    <section id="orcamento" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            <span>Simulador de Orçamento Interativo</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            Monte seu Pedido e Envie Pronto para o WhatsApp
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Selecione as peças que deseja higienizar em casa, veja o valor total em tempo real com desconto automático e finalize o pagamento com a equipa da Kátia Catumbela no WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Items in Cart (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg flex items-center gap-2">
                <span>Peças Selecionadas</span>
                <span className="text-xs bg-sky-100 text-sky-800 font-mono px-2 py-0.5 rounded-full">
                  {items.reduce((sum, it) => sum + it.quantity, 0)} itens
                </span>
              </h3>
              {items.length > 0 && (
                <button
                  onClick={onClearCart}
                  className="text-xs text-red-600 hover:text-red-800 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Limpar Tudo</span>
                </button>
              )}
            </div>

            {items.length === 0 ? (
              <div className="text-center py-12 px-4 space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
                  <Calculator className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">O seu simulador está vazio</h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
                    Navegue pela Tabela de Preços acima e clique em <strong>"+ Adicionar"</strong> nos sofás, colchões ou cortinas que deseja higienizar.
                  </p>
                </div>
                <a
                  href="#servicos"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold shadow-xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Explorar Tabela de Preços</span>
                </a>
              </div>
            ) : (
              <div className="space-y-3 divide-y divide-slate-200/60">
                {items.map((item) => (
                  <div key={item.id} className="pt-3 first:pt-0 flex items-center justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900 truncate">
                          {item.name}
                        </span>
                        <span className="text-[10px] text-slate-400 bg-slate-200/60 px-1.5 py-0.5 rounded">
                          {item.category}
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 font-mono">
                        {item.unitPrice.toLocaleString('pt-AO')} Kz cada
                      </span>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-slate-300 rounded-lg bg-white overflow-hidden shadow-2xs">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="p-1.5 text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                          aria-label="Diminuir"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center text-xs font-bold font-mono text-slate-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-1.5 text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                          aria-label="Aumentar"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="w-24 text-right">
                        <span className="text-xs font-bold font-mono text-sky-800 tabular-nums">
                          {(item.unitPrice * item.quantity).toLocaleString('pt-AO')} Kz
                        </span>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-slate-400 hover:text-red-500 p-1 transition-colors cursor-pointer"
                        title="Remover"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Quick add popular presets if cart has few items */}
            <div className="pt-3 border-t border-slate-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Adições Populares Rápidas:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'almofada', name: '+ Almofada (2.000 Kz)', price: 2000, cat: 'Almofadas' },
                  { id: 'sofa-3', name: '+ Sofá 3 Lugares (20.000 Kz)', price: 2000, cat: 'Sofás' },
                  { id: 'cadeira-simples', name: '+ Cadeira (2.500 Kz)', price: 2500, cat: 'Cadeiras' },
                  { id: 'colchao-casal', name: '+ Colchão Casal (16.000 Kz)', price: 16000, cat: 'Colchões' }
                ].map((preset, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      onUpdateQuantity(preset.id, 1);
                    }}
                    className="text-xs px-2.5 py-1 rounded-md bg-white border border-slate-300 text-slate-700 hover:border-sky-500 hover:text-sky-700 transition-colors cursor-pointer"
                  >
                    {preset.name}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Checkout Info & Direct WhatsApp (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-lg space-y-6">
            <h3 className="font-bold text-slate-900 text-base sm:text-lg border-b border-slate-100 pb-3">
              Resumo & Envio do Pedido
            </h3>

            {/* Inputs for customer convenience */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  O seu Nome (Opcional):
                </label>
                <input
                  type="text"
                  placeholder="Ex: Dra. Marlene / Sr. Silva"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-600" />
                  <span>Zona de Atendimento em Luanda:</span>
                </label>
                <select
                  value={neighborhood}
                  onChange={(e) => setNeighborhood(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-sky-500 bg-white"
                >
                  <option value="Alvalade / Maianga">Alvalade / Maianga (Sede Mais Pureza)</option>
                  <option value="Talatona / Nova Vida">Talatona / Nova Vida</option>
                  <option value="Miramar / Mutamba">Miramar / Mutamba / Ingombota</option>
                  <option value="Cidade do Kilamba">Cidade do Kilamba</option>
                  <option value="Benfica / Patriota">Benfica / Lar do Patriota</option>
                  <option value="Viana / Zango">Viana / Zango / Estalagem</option>
                  <option value="Samba / Morro Bento">Samba / Morro Bento / Corimba</option>
                  <option value="Outra zona de Luanda">Outra zona da Província de Luanda</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Rua ou Ponto de Referência (Opcional):
                </label>
                <input
                  type="text"
                  placeholder="Ex: Condomínio Jardim de Rosas, Bloco B"
                  value={customAddress}
                  onChange={(e) => setCustomAddress(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            {/* Calculations Box */}
            <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-mono font-bold tabular-nums">{subtotal.toLocaleString('pt-AO')} Kz</span>
              </div>
              
              {hasDiscount ? (
                <div className="flex justify-between text-emerald-600 font-semibold">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Desconto Automático (10%):
                  </span>
                  <span className="font-mono tabular-nums">-{discountAmount.toLocaleString('pt-AO')} Kz</span>
                </div>
              ) : (
                <div className="text-[11px] text-sky-700 bg-sky-50 p-2 rounded-md">
                  💡 <strong>Dica:</strong> Pedidos acima de 50.000 Kz ganham 10% de desconto automático no total!
                </div>
              )}

              <div className="flex justify-between items-baseline pt-2 border-t border-slate-200">
                <span className="text-sm font-bold text-slate-900">Total Estimado:</span>
                <span className="font-mono text-2xl font-extrabold text-sky-800 tabular-nums">
                  {total.toLocaleString('pt-AO')} Kz
                </span>
              </div>
            </div>

            {/* WhatsApp Direct Submit Button */}
            <button
              onClick={handleSendToWhatsApp}
              disabled={items.length === 0}
              className={`w-full flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer ${
                items.length > 0
                  ? 'bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
              }`}
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Enviar Pedido Pronto para o WhatsApp</span>
            </button>

            <div className="space-y-1.5 text-[11px] text-slate-500">
              <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                <span>O pagamento é tratado com a equipa da Kátia no WhatsApp</span>
              </div>
              <p>Aceitamos Multicaixa Express, Transferência Bancária ou pagamento no ato com máquina no domicílio.</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
