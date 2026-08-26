import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "../../store/cartStore";
import { CloseIcon, PlusIcon, MinusIcon, TrashIcon, ArrowRightIcon, ShoppingCartIcon } from "../icons/Icons";

interface CartProps {
  onCheckout: () => void;
}

export function Cart({ onCheckout }: CartProps) {
  const { items, isOpen, closeCart, addItem, removeItem, updateQuantity, totalItems, totalPrice } =
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
            className="fixed inset-0 bg-black/50 z-[70]"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-[80] flex flex-col shadow-2xl"
          >
            <div className="flex items-center justify-between p-5 border-b border-border">
              <div>
                <h2 className="text-lg font-bold text-text-primary">Seu Pedido</h2>
                <p className="text-text-muted text-xs mt-0.5">
                  {totalItems()} {totalItems() === 1 ? "item" : "itens"} no carrinho
                </p>
              </div>
              <button
                onClick={closeCart}
                className="p-2 rounded-full hover:bg-surface-hover transition-colors text-text-muted hover:text-text-primary"
              >
                <CloseIcon size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-3">
              {items.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-surface flex items-center justify-center mb-4">
                    <ShoppingCartIcon size={32} className="text-text-muted" />
                  </div>
                  <p className="text-text-secondary font-medium mb-1">Carrinho vazio</p>
                  <p className="text-text-muted text-sm">Adicione itens do cardapio</p>
                </div>
              )}

              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.product.id}
                    layout
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40, height: 0, marginBottom: 0, padding: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex gap-3 p-3 bg-surface rounded-xl"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-text-primary text-sm font-medium truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-primary text-sm font-bold mt-0.5">
                        R$ {(item.product.price * item.quantity).toFixed(2).replace(".", ",")}
                      </p>
                      <div className="flex items-center gap-0 mt-2 bg-white rounded-lg overflow-hidden border border-border inline-flex">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-primary hover:bg-surface-hover transition-colors"
                        >
                          <MinusIcon size={12} />
                        </button>
                        <span className="w-7 text-center text-text-primary text-sm font-bold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => addItem(item.product)}
                          className="w-8 h-8 flex items-center justify-center text-primary hover:bg-surface-hover transition-colors"
                        >
                          <PlusIcon size={12} />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="p-1 text-text-muted hover:text-danger transition-colors self-start"
                    >
                      <TrashIcon size={14} />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {items.length > 0 && (
              <div className="border-t border-border p-5 space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-text-secondary">Subtotal</span>
                  <span className="text-text-primary font-medium">
                    R$ {totalPrice().toFixed(2).replace(".", ",")}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-text-secondary">Entrega</span>
                  <span className="text-success font-medium">Gratis</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-border">
                  <span className="text-text-primary font-bold">Total</span>
                  <span className="text-primary font-bold text-xl">
                    R$ {totalPrice().toFixed(2).replace(".", ",")}
                  </span>
                </div>
                <button
                  onClick={() => { closeCart(); onCheckout(); }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-dark transition-all"
                >
                  Finalizar Pedido
                  <ArrowRightIcon size={16} />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
