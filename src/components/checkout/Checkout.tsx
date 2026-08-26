import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "../../store/cartStore";
import { CloseIcon, CreditCardIcon, BanknoteIcon, QrCodeIcon, CheckIcon, ArrowRightIcon } from "../icons/Icons";

type PaymentMethod = "credit" | "debit" | "pix" | "cash";
type CheckoutStep = "review" | "payment" | "success";

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
}

const paymentMethods = [
  { id: "credit" as PaymentMethod, label: "Credito", icon: <CreditCardIcon size={20} />, desc: "Visa, Mastercard, Elo" },
  { id: "debit" as PaymentMethod, label: "Debito", icon: <CreditCardIcon size={20} />, desc: "Cartao de debito" },
  { id: "pix" as PaymentMethod, label: "PIX", icon: <QrCodeIcon size={20} />, desc: "Pagamento instantaneo" },
  { id: "cash" as PaymentMethod, label: "Dinheiro", icon: <BanknoteIcon size={20} />, desc: "Pagamento na entrega" },
];

export function Checkout({ isOpen, onClose }: CheckoutProps) {
  const { items, totalItems, totalPrice, clearCart } = useCartStore();
  const [step, setStep] = useState<CheckoutStep>("review");
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>("credit");
  const [formData, setFormData] = useState({ name: "", address: "", phone: "", note: "" });

  const handleConfirm = () => setStep("success");

  const handleDone = () => {
    clearCart();
    setStep("review");
    setFormData({ name: "", address: "", phone: "", note: "" });
    onClose();
  };

  const handleBack = () => {
    if (step === "payment") setStep("review");
    else onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={step !== "success" ? handleBack : undefined}
            className="fixed inset-0 bg-black/50 z-[90]"
          />

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-x-0 bottom-0 top-12 sm:top-auto sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-full sm:max-w-lg sm:rounded-t-2xl bg-white z-[95] flex flex-col rounded-t-2xl shadow-2xl"
          >
            <div className="flex items-center justify-between p-5 border-b border-border">
              <h2 className="text-lg font-bold text-text-primary">
                {step === "review" && "Seu Pedido"}
                {step === "payment" && "Pagamento"}
                {step === "success" && "Pedido Enviado!"}
              </h2>
              {step !== "success" && (
                <button
                  onClick={handleBack}
                  className="p-2 rounded-full hover:bg-surface-hover transition-colors text-text-muted"
                >
                  <CloseIcon size={20} />
                </button>
              )}
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              <AnimatePresence mode="wait">
                {step === "review" && (
                  <motion.div key="review" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
                    <div className="space-y-3">
                      {items.map((item) => (
                        <div key={item.product.id} className="flex items-center gap-3 py-2">
                          <div className="w-8 h-8 rounded-md bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">
                            {item.quantity}x
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-text-primary text-sm font-medium truncate">{item.product.name}</p>
                          </div>
                          <span className="text-text-primary text-sm font-medium">
                            R$ {(item.product.price * item.quantity).toFixed(2).replace(".", ",")}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-border pt-3 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-text-muted">Subtotal ({totalItems()} itens)</span>
                        <span className="text-text-primary">R$ {totalPrice().toFixed(2).replace(".", ",")}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-text-muted">Entrega</span>
                        <span className="text-success font-medium">Gratis</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg pt-2 border-t border-border">
                        <span className="text-text-primary">Total</span>
                        <span className="text-primary">R$ {totalPrice().toFixed(2).replace(".", ",")}</span>
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      <input
                        type="text"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-primary transition-colors bg-surface"
                      />
                      <input
                        type="text"
                        placeholder="Endereco de entrega"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-primary transition-colors bg-surface"
                      />
                      <input
                        type="tel"
                        placeholder="Telefone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-primary transition-colors bg-surface"
                      />
                      <textarea
                        placeholder="Observacoes (opcional)"
                        value={formData.note}
                        onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                        rows={2}
                        className="w-full px-4 py-3 rounded-xl border border-border text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-primary transition-colors resize-none bg-surface"
                      />
                    </div>
                  </motion.div>
                )}

                {step === "payment" && (
                  <motion.div key="payment" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-3">
                    {paymentMethods.map((method) => (
                      <button
                        key={method.id}
                        onClick={() => setSelectedPayment(method.id)}
                        className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                          selectedPayment === method.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-border"
                        }`}
                      >
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                          selectedPayment === method.id ? "bg-primary text-white" : "bg-surface text-text-muted"
                        }`}>
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm text-text-primary">{method.label}</p>
                          <p className="text-xs text-text-muted">{method.desc}</p>
                        </div>
                        {selectedPayment === method.id && (
                          <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                            <CheckIcon size={12} className="text-white" />
                          </div>
                        )}
                      </button>
                    ))}

                    <div className="pt-3">
                      <div className="flex justify-between font-bold text-lg border-t border-border pt-3">
                        <span className="text-text-primary">Total</span>
                        <span className="text-primary">R$ {totalPrice().toFixed(2).replace(".", ",")}</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-10 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 15, delay: 0.2 }}
                      className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mb-5"
                    >
                      <CheckIcon size={36} className="text-success" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">
                      Pedido Confirmado!
                    </h3>
                    <p className="text-text-secondary text-sm max-w-xs mb-1">
                      Seu pedido foi enviado e esta sendo preparado.
                    </p>
                    <p className="text-text-muted text-xs">
                      Tempo estimado: 30-45 minutos
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {step === "review" && (
              <div className="p-5 border-t border-border">
                <button
                  onClick={() => setStep("payment")}
                  disabled={!formData.name || !formData.address || !formData.phone}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-dark transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Escolher Pagamento
                  <ArrowRightIcon size={16} />
                </button>
              </div>
            )}

            {step === "payment" && (
              <div className="p-5 border-t border-border">
                <button
                  onClick={handleConfirm}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-dark transition-all"
                >
                  Confirmar Pedido
                  <CheckIcon size={16} />
                </button>
              </div>
            )}

            {step === "success" && (
              <div className="p-5 border-t border-border">
                <button
                  onClick={handleDone}
                  className="w-full py-3.5 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-dark transition-all"
                >
                  Voltar ao Cardapio
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
