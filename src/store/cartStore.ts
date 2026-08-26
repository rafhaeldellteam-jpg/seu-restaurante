import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../data/products";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, qty: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  closeCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      addItem: (product) =>
        set((s) => {
          const ex = s.items.find((i) => i.product.id === product.id);
          if (ex) return { items: s.items.map((i) => i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i) };
          return { items: [...s.items, { product, quantity: 1 }] };
        }),
      removeItem: (id) => set((s) => ({ items: s.items.filter((i) => i.product.id !== id) })),
      updateQuantity: (id, qty) => {
        if (qty <= 0) { get().removeItem(id); return; }
        set((s) => ({ items: s.items.map((i) => i.product.id === id ? { ...i, quantity: qty } : i) }));
      },
      clearCart: () => set({ items: [] }),
      toggleCart: () => set((s) => ({ isOpen: !s.isOpen })),
      closeCart: () => set({ isOpen: false }),
      totalItems: () => get().items.reduce((a, i) => a + i.quantity, 0),
      totalPrice: () => get().items.reduce((a, i) => a + i.product.price * i.quantity, 0),
    }),
    { name: "pizza-cart" }
  )
);
