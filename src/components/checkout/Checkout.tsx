import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin } from "../icons/Icons";
import { useCartStore } from "../../store/cartStore";

type Step = 1 | 2 | 3;

const paymentMethods = [
  { id: "credit", label: "Credito", desc: "Visa, Mastercard, Elo", iconSvg: "credit" },
  { id: "debit", label: "Debito", desc: "Cartao de debito", iconSvg: "debit" },
  { id: "pix", label: "PIX", desc: "Pagamento instantaneo", iconSvg: "pix" },
  { id: "cash", label: "Dinheiro", desc: "Pagamento na entrega", iconSvg: "cash" },
];

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Checkout({ isOpen, onClose }: CheckoutProps) {
  const [step, setStep] = useState<Step>(1);
  const [selectedPayment, setSelectedPayment] = useState("");
  const { items, totalPrice, totalItems, clearCart } = useCartStore();

  const handleClose = () => {
    setStep(1);
    setSelectedPayment("");
    onClose();
  };

  const handleDone = () => {
    clearCart();
    handleClose();
  };

  const PayIcon = ({ type }: { type: string }) => {
    if (type === "credit" || type === "debit")
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      );
    if (type === "pix")
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="8" height="8" rx="1" /><rect x="14" y="2" width="8" height="8" rx="1" /><rect x="2" y="14" width="8" height="8" rx="1" /><rect x="14" y="14" width="4" height="4" rx="1" />
        </svg>
      );
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2" /><circle cx="12" cy="12" r="2" />
      </svg>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={step < 3 ? handleClose : undefined}
          />

          <motion.div
            className="fixed bottom-0 left-0 right-0 bg-bg-elevated rounded-t-3xl z-50 max-h-[90vh] flex flex-col"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="font-display font-semibold text-text-primary">
                {step === 1 && "Revisar Pedido"}
                {step === 2 && "Pagamento"}
                {step === 3 && "Pedido Confirmado!"}
              </h2>
              {step < 3 && (
                <button onClick={handleClose} className="text-text-muted hover:text-text-primary">
                  <X size={20} />
                </button>
              )}
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {step === 1 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    {items.map((item) => (
                      <div key={item.product.id} className="flex justify-between items-center bg-bg-card rounded-xl p-3 border border-border">
                        <div className="flex items-center gap-3">
                          <span className="font-body text-primary text-sm font-semibold">{item.quantity}x</span>
                          <span className="font-body text-text-primary text-sm">{item.product.name}</span>
                        </div>
                        <span className="font-body text-text-primary text-sm">
                          R$ {(item.product.price * item.quantity).toFixed(2).replace(".", ",")}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-bg-card rounded-xl p-4 border border-border space-y-3">
                    <h3 className="font-display font-semibold text-text-primary text-sm">Endereco de Entrega</h3>
                    <div className="flex items-center gap-2 text-text-muted">
                      <MapPin size={16} />
                      <input type="text" placeholder="Rua, numero - Bairro" className="font-body bg-transparent outline-none flex-1 text-text-primary text-sm placeholder:text-text-muted" />
                    </div>
                  </div>

                  <div className="bg-bg-card rounded-xl p-4 border border-border space-y-2">
                    <div className="flex justify-between font-body text-sm">
                      <span className="text-text-secondary">Subtotal ({totalItems()} itens)</span>
                      <span className="text-text-primary">R$ {totalPrice().toFixed(2).replace(".", ",")}</span>
                    </div>
                    <div className="flex justify-between font-body text-sm">
                      <span className="text-text-secondary">Entrega</span>
                      <span className="text-success font-medium">Gratis</span>
                    </div>
                    <div className="border-t border-border pt-2 flex justify-between font-display font-bold">
                      <span className="text-text-primary">Total</span>
                      <span className="text-primary">R$ {totalPrice().toFixed(2).replace(".", ",")}</span>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-3">
                  <p className="font-body text-text-secondary text-sm mb-4">Selecione a forma de pagamento</p>
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedPayment(method.id)}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                        selectedPayment === method.id
                          ? "border-primary bg-primary/10"
                          : "border-border bg-bg-card hover:border-border"
                      }`}
                    >
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                        selectedPayment === method.id ? "bg-primary text-white" : "bg-bg-surface text-text-muted"
                      }`}>
                        <PayIcon type={method.iconSvg} />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-body text-text-primary text-sm font-semibold">{method.label}</p>
                        <p className="font-body text-text-muted text-xs">{method.desc}</p>
                      </div>
                      {selectedPayment === method.id && (
                        <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}

              {step === 3 && (
                <div className="flex flex-col items-center justify-center py-10 space-y-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 15, delay: 0.2 }}
                    className="w-20 h-20 bg-success rounded-full flex items-center justify-center"
                  >
                    <svg viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                  <h3 className="font-display font-bold text-xl text-text-primary">Pedido Recebido!</h3>
                  <p className="font-body text-text-muted text-center text-sm">
                    Seu pedido esta sendo preparado.<br />Tempo estimado: 30-45 minutos
                  </p>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-border">
              {step < 3 ? (
                <button
                  onClick={() => {
                    if (step === 1) setStep(2);
                    else if (step === 2 && selectedPayment) setStep(3);
                  }}
                  disabled={step === 2 && !selectedPayment}
                  className="w-full bg-primary text-white font-display font-semibold py-3 rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {step === 1 ? "Ir para Pagamento" : "Confirmar Pedido"}
                </button>
              ) : (
                <button onClick={handleDone} className="w-full bg-primary text-white font-display font-semibold py-3 rounded-xl hover:bg-primary-dark transition-colors">
                  Voltar ao Cardapio
                </button>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
