import { Star, Clock, Plus, Minus } from "../icons/Icons";
import { useCartStore } from "../../store/cartStore";
import type { Product } from "../../data/products";

interface FoodCardProps {
  product: Product;
}

export function FoodCard({ product }: FoodCardProps) {
  const { items, addItem, updateQuantity } = useCartStore();
  const cartItem = items.find((i) => i.product.id === product.id);

  return (
    <div className="bg-bg-elevated rounded-2xl overflow-hidden border border-border flex flex-col">
      <div className="relative h-40 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.time && (
          <span className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <Clock size={12} />
            {product.time}
          </span>
        )}
        {product.badge && (
          <span className="absolute top-2 left-2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
            {product.badge}
          </span>
        )}
      </div>

      <div className="p-3 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-text-primary text-sm">
          {product.name}
        </h3>
        <p className="text-text-muted text-xs mt-1 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center gap-1 mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={12}
              className={
                i < Math.round(product.rating)
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-text-muted"
              }
            />
          ))}
          <span className="text-text-muted text-xs ml-1">{product.rating}</span>
        </div>

        <div className="flex items-center justify-between mt-auto pt-3">
          <div className="flex flex-col">
            {product.oldPrice && (
              <span className="text-text-muted text-xs line-through">
                R$ {product.oldPrice.toFixed(2).replace(".", ",")}
              </span>
            )}
            <span className="font-display font-bold text-primary text-base">
              R$ {product.price.toFixed(2).replace(".", ",")}
            </span>
          </div>

          {cartItem ? (
            <div className="flex items-center gap-2 bg-bg-card rounded-full px-2 py-1 border border-border">
              <button
                onClick={() => updateQuantity(product.id, cartItem.quantity - 1)}
                className="text-text-primary hover:text-primary transition-colors"
              >
                <Minus size={14} />
              </button>
              <span className="text-text-primary text-sm w-4 text-center font-bold">
                {cartItem.quantity}
              </span>
              <button
                onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
                className="text-text-primary hover:text-primary transition-colors"
              >
                <Plus size={14} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => addItem(product)}
              className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-primary-dark transition-colors"
            >
              <Plus size={14} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
