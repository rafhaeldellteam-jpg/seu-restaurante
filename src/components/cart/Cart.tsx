import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "../../store/cartStore";
import { CloseIcon, PlusIcon, MinusIcon, TrashIcon, ArrowRightIcon } from "../icons/Icons";

interface CartProps {
  onCheckout: () => void;
}

export function Cart({ onCheckout }: CartProps) {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalItems, totalPrice } =
    useCartStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70]"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-surface border-l border-primary/10 z-[80] flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-primary/10">
              <div>
                <h2 className="font-display text-xl font-bold text-text-primary">Seu Pedido</h2>
                <p className="text-text-muted text-sm mt-1">
                  {totalItems()} {totalItems() === 1 ? "item" : "itens"} no carrinho
                </p>
              </div>
              <motion.button
                onClick={closeCart}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full glass-card text-text-secondary hover:text-text-primary transition-colors"
              >
                <CloseIcon size={20} />
              </motion.button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              <AnimatePresence>
                {items.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center h-full text-center"
                  >
                    <div className="w-20 h-20 rounded-full glass-card flex items-center justify-center mb-4">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-text-muted">
                        <circle cx="8" cy="21" r="1" />
                        <circle cx="19" cy="21" r="1" />
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 002 1.58h9.78a2 2 0 001.95-1.57l1.65-7.43H5.12" />
                      </svg>
                    </div>
                    <p className="text-text-secondary">Seu carrinho esta vazio</p>
                    <p className="text-text-muted text-sm mt-1">Adicione itens do cardapio</p>
                  </motion.div>
                )}

                {items.map((item) => (
                  <motion.div
                    key={item.product.id}
                    layout
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40, height: 0, marginBottom: 0 }}
                    transition={{ duration: 0.3 }}
                    className="glass-card rounded-xl p-4 flex gap-4"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-text-primary text-sm font-medium truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-primary text-sm font-bold mt-1">
                        R$ {(item.product.price * item.quantity).toFixed(2).replace(".", ",")}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <motion.button
                          whileTap={{ scale: 0.85 }}
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors"
                        >
                          <MinusIcon size={12} />
                        </motion.button>
                        <span className="text-text-primary text-sm font-medium w-6 text-center">
                          {item.quantity}
                        </span>
                        <motion.button
                          whileTap={{ scale: 0.85 }}
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors"
                        >
                          <PlusIcon size={12} />
                        </motion.button>
                      </div>
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.85 }}
                      onClick={() => removeItem(item.product.id)}
                      className="p-1.5 text-text-muted hover:text-danger transition-colors self-start"
                    >
                      <TrashIcon size={16} />
                    </motion.button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-primary/10 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Subtotal</span>
                  <span className="text-text-primary font-bold text-lg font-display">
                    R$ {totalPrice().toFixed(2).replace(".", ",")}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    closeCart();
                    onCheckout();
                  }}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-primary text-secondary font-bold text-sm tracking-wide hover:bg-primary-light transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  Finalizar Pedido
                  <ArrowRightIcon size={18} />
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
