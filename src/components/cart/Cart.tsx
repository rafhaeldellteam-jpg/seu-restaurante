import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash, ShoppingCart } from "../icons/Icons";
import { useCartStore } from "../../store/cartStore";

export function Cart() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, totalItems, totalPrice } =
    useCartStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />

          <motion.div
            className="fixed bottom-0 left-0 right-0 bg-bg-elevated rounded-t-3xl z-50 max-h-[80vh] flex flex-col"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-2">
                <ShoppingCart size={20} className="text-primary" />
                <h2 className="font-display font-semibold text-text-primary">
                  Seu Pedido
                </h2>
                <span className="text-text-muted text-xs">({totalItems()} itens)</span>
              </div>
              <button onClick={closeCart} className="text-text-muted hover:text-text-primary">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {items.length === 0 ? (
                <p className="font-body text-text-muted text-center py-10">
                  Seu carrinho esta vazio
                </p>
              ) : (
                items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center gap-3 bg-bg-card rounded-xl p-3 border border-border"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-14 h-14 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-display text-text-primary text-sm font-medium truncate">
                        {item.product.name}
                      </p>
                      <p className="font-body text-primary text-sm font-semibold">
                        R$ {(item.product.price * item.quantity).toFixed(2).replace(".", ",")}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-7 h-7 rounded-full bg-bg-surface flex items-center justify-center text-text-muted hover:text-primary transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="font-body text-text-primary text-sm w-5 text-center font-bold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-text-muted hover:text-danger ml-1"
                      >
                        <Trash size={14} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-4 border-t border-border space-y-3">
                <div className="flex justify-between font-body">
                  <span className="text-text-secondary">Subtotal</span>
                  <span className="text-text-primary font-semibold">
                    R$ {totalPrice().toFixed(2).replace(".", ",")}
                  </span>
                </div>
                <button className="w-full bg-primary text-white font-display font-semibold py-3 rounded-xl hover:bg-primary-dark transition-colors">
                  Finalizar Pedido
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
