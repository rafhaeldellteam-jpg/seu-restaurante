import { useState } from "react";
import { Header } from "./components/layout/Header";
import { MenuSection } from "./components/menu/MenuSection";
import { Cart } from "./components/cart/Cart";
import { Checkout } from "./components/checkout/Checkout";

export default function App() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface">
      <Header search={search} onSearch={setSearch} />
      <div className="pt-[52px]">
        <MenuSection
          search={search}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
      </div>
      <Cart onCheckout={() => setCheckoutOpen(true)} />
      <Checkout isOpen={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
    </div>
  );
}
