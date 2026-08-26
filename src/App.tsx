import { useState } from "react";
import { Header } from "./components/layout/Header";
import { CategoryBar } from "./components/menu/CategoryBar";
import { HeroBanner } from "./components/menu/HeroBanner";
import { FoodCard } from "./components/menu/FoodCard";
import { BottomNav } from "./components/layout/BottomNav";
import { Cart } from "./components/cart/Cart";
import { Checkout } from "./components/checkout/Checkout";
import { products } from "./data/products";

export default function App() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchSearch =
      search === "" ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-bg pb-24">
      <Header search={search} onSearch={setSearch} />
      <CategoryBar active={activeCategory} onSelect={setActiveCategory} />

      {activeCategory === "all" && !search && <HeroBanner />}

      <div className="px-4 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-lg font-bold text-text-primary">
            {activeCategory === "all" && !search ? "Mais Pedidos" : "Resultados"}
          </h2>
          <span className="text-text-muted text-xs">{filtered.length} itens</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {filtered.map((product) => (
            <FoodCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-bg-elevated flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-text-muted"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            </div>
            <p className="text-text-secondary text-sm font-medium">Nenhum item encontrado</p>
            <p className="text-text-muted text-xs mt-1">Tente outra busca</p>
          </div>
        )}
      </div>

      <BottomNav active={activeTab} onChange={setActiveTab} />
      <Cart />
      <Checkout isOpen={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
    </div>
  );
}
