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
  { id: "credit" as PaymentMethod, label: "Credito", icon: <CreditCardIcon size={22} />, desc: "Visa, Mastercard, Elo" },
  { id: "debit" as PaymentMethod, label: "Debito", icon: <CreditCardIcon size={22} />, desc: "Cartao de debito" },
  { id: "pix" as PaymentMethod, label: "PIX", icon: <QrCodeIcon size={22} />, desc: "Pagamento instantaneo" },
  { id: "cash" as PaymentMethod, label: "Dinheiro", icon: <BanknoteIcon size={22} />, desc: "Pagamento na entrega" },
];

export function Checkout({ isOpen, onClose }: CheckoutProps) {
  const { items, totalItems, totalPrice, clearCart } = useCartStore();
  const [step, setStep] = useState<CheckoutStep>("review");
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>("credit");
  const [formData, setFormData] = useState({ name: "", address: "", phone: "", note: "" });

  const handleConfirm = () => {
    setStep("success");
  };

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
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[90]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-lg sm:max-h-[90vh] bg-surface border border-primary/10 rounded-2xl z-[95] flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-primary/10">
              <h2 className="font-display text-xl font-bold text-text-primary">
                {step === "review" && "Resumo do Pedido"}
                {step === "payment" && "Forma de Pagamento"}
                {step === "success" && "Pedido Confirmado"}
              </h2>
              {step !== "success" && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleBack}
                  className="p-2 rounded-full glass-card text-text-secondary hover:text-text-primary transition-colors"
                >
                  <CloseIcon size={20} />
                </motion.button>
              )}
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <AnimatePresence mode="wait">
                {step === "review" && (
                  <motion.div
                    key="review"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    {items.map((item) => (
                      <div key={item.product.id} className="flex items-center gap-4 py-3 border-b border-primary/5 last:border-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-text-primary text-sm font-medium truncate">{item.product.name}</p>
                          <p className="text-text-muted text-xs">Qtd: {item.quantity}</p>
                        </div>
                        <span className="text-primary font-bold text-sm">
                          R$ {(item.product.price * item.quantity).toFixed(2).replace(".", ",")}
                        </span>
                      </div>
                    ))}

                    <div className="pt-4 space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-text-secondary">Subtotal ({totalItems()} itens)</span>
                        <span className="text-text-primary">R$ {totalPrice().toFixed(2).replace(".", ",")}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-text-secondary">Taxa de entrega</span>
                        <span className="text-success">Gratis</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg pt-2 border-t border-primary/10">
                        <span className="text-text-primary font-display">Total</span>
                        <span className="text-primary font-display">R$ {totalPrice().toFixed(2).replace(".", ",")}</span>
                      </div>
                    </div>

                    <div className="space-y-3 pt-4">
                      <input
                        type="text"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl glass-card text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-primary/40 transition-colors"
                      />
                      <input
                        type="text"
                        placeholder="Endereco de entrega"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl glass-card text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-primary/40 transition-colors"
                      />
                      <input
                        type="tel"
                        placeholder="Telefone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl glass-card text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-primary/40 transition-colors"
                      />
                      <textarea
                        placeholder="Observacoes (opcional)"
                        value={formData.note}
                        onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                        rows={2}
                        className="w-full px-4 py-3 rounded-xl glass-card text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-primary/40 transition-colors resize-none"
                      />
                    </div>
                  </motion.div>
                )}

                {step === "payment" && (
                  <motion.div
                    key="payment"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-3"
                  >
                    {paymentMethods.map((method) => (
                      <motion.button
                        key={method.id}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => setSelectedPayment(method.id)}
                        className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 text-left ${
                          selectedPayment === method.id
                            ? "border-primary bg-primary/10 text-text-primary"
                            : "border-primary/10 glass-card text-text-secondary hover:border-primary/20"
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          selectedPayment === method.id ? "bg-primary/20 text-primary" : "bg-primary/5 text-text-muted"
                        }`}>
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{method.label}</p>
                          <p className="text-xs text-text-muted mt-0.5">{method.desc}</p>
                        </div>
                        {selectedPayment === method.id && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-6 h-6 rounded-full bg-primary flex items-center justify-center"
                          >
                            <CheckIcon size={14} className="text-secondary" />
                          </motion.div>
                        )}
                      </motion.button>
                    ))}

                    <div className="pt-4">
                      <div className="flex justify-between font-bold text-lg pb-4 border-b border-primary/10 mb-4">
                        <span className="text-text-primary font-display">Total a pagar</span>
                        <span className="text-primary font-display">R$ {totalPrice().toFixed(2).replace(".", ",")}</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 15, delay: 0.2 }}
                      className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mb-6"
                    >
                      <motion.div
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                      >
                        <CheckIcon size={36} className="text-success" />
                      </motion.div>
                    </motion.div>
                    <h3 className="font-display text-2xl font-bold text-text-primary mb-2">
                      Pedido Recebido!
                    </h3>
                    <p className="text-text-secondary text-sm max-w-xs mb-2">
                      Seu pedido foi confirmado e esta sendo preparado com carinho.
                    </p>
                    <p className="text-text-muted text-xs">
                      Tempo estimado: 30-45 minutos
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {step !== "success" && (
              <div className="p-6 border-t border-primary/10">
                {step === "review" ? (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setStep("payment")}
                    disabled={!formData.name || !formData.address || !formData.phone}
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-primary text-secondary font-bold text-sm tracking-wide hover:bg-primary-light transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary/20"
                  >
                    Escolher Pagamento
                    <ArrowRightIcon size={18} />
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleConfirm}
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-primary text-secondary font-bold text-sm tracking-wide hover:bg-primary-light transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  >
                    Confirmar Pedido
                    <CheckIcon size={18} />
                  </motion.button>
                )}
              </div>
            )}

            {step === "success" && (
              <div className="p-6 border-t border-primary/10">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleDone}
                  className="w-full py-4 rounded-xl bg-primary text-secondary font-bold text-sm tracking-wide hover:bg-primary-light transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  Voltar ao Cardapio
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
