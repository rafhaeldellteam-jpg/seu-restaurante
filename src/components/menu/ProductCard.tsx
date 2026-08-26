import { motion } from "framer-motion";
import type { Product } from "../../data/products";
import { PlusIcon, StarIcon } from "../icons/Icons";
import { useCartStore } from "../../store/cartStore";
import { useState } from "react";

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 800);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35 }}
      className="group glass-card rounded-2xl overflow-hidden card-hover"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent" />
        {product.badge && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/90 text-secondary text-[11px] font-bold tracking-wider uppercase backdrop-blur-sm">
            <StarIcon size={10} />
            {product.badge}
          </div>
        )}
        <div className="absolute bottom-3 right-3">
          <span className="text-xl font-bold text-text-primary font-display">
            R$ {product.price.toFixed(2).replace(".", ",")}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-5 line-clamp-2">
          {product.description}
        </p>

        <motion.button
          onClick={handleAdd}
          whileTap={{ scale: 0.95 }}
          className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
            added
              ? "bg-success text-white"
              : "bg-primary/10 text-primary hover:bg-primary hover:text-secondary"
          }`}
        >
          {added ? (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20,6 9,17 4,12" />
              </svg>
              Adicionado
            </>
          ) : (
            <>
              <PlusIcon size={16} />
              Adicionar ao Pedido
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}
