import { useState } from "react";
import type { Product } from "../../data/products";
import { useCartStore } from "../../store/cartStore";
import { PlusIcon, MinusIcon } from "../icons/Icons";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const addItem = useCartStore((s) => s.addItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const items = useCartStore((s) => s.items);
  const [imgError, setImgError] = useState(false);

  const cartItem = items.find((i) => i.product.id === product.id);
  const quantity = cartItem?.quantity ?? 0;

  return (
    <div
      className="bg-white rounded-xl border border-border overflow-hidden flex flex-col animate-fade-in group"
      style={{ animationDelay: `${index * 0.04}s` }}
    >
      <div className="relative h-44 overflow-hidden">
        {imgError ? (
          <div className="w-full h-full bg-surface-hover flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-text-muted">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}

        {product.badge && (
          <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wide uppercase">
            {product.badge}
          </span>
        )}

        {product.oldPrice && (
          <span className="absolute top-3 right-3 bg-success text-white text-[10px] font-bold px-2 py-1 rounded-md">
            -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-semibold text-text-primary text-[15px] leading-tight line-clamp-2">
            {product.name}
          </h3>
          {product.isVeg && (
            <span className="flex-shrink-0 w-4 h-4 border-2 border-success rounded-sm flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-success rounded-full" />
            </span>
          )}
        </div>

        <p className="text-text-muted text-xs leading-relaxed line-clamp-2 mb-3 flex-1">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-primary">
              R$ {product.price.toFixed(2).replace(".", ",")}
            </span>
            {product.oldPrice && (
              <span className="text-xs text-text-muted line-through">
                R$ {product.oldPrice.toFixed(2).replace(".", ",")}
              </span>
            )}
          </div>

          {quantity === 0 ? (
            <button
              onClick={() => addItem(product)}
              className="flex items-center gap-1.5 bg-white border-2 border-primary text-primary font-bold text-xs px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-all duration-200 uppercase tracking-wide"
            >
              <PlusIcon size={14} />
              Add
            </button>
          ) : (
            <div className="flex items-center gap-0 bg-primary rounded-lg overflow-hidden">
              <button
                onClick={() => updateQuantity(product.id, quantity - 1)}
                className="w-9 h-9 flex items-center justify-center text-white hover:bg-primary-dark transition-colors"
              >
                <MinusIcon size={14} />
              </button>
              <span className="w-8 text-center text-white font-bold text-sm">
                {quantity}
              </span>
              <button
                onClick={() => addItem(product)}
                className="w-9 h-9 flex items-center justify-center text-white hover:bg-primary-dark transition-colors"
              >
                <PlusIcon size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
