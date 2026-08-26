import { products, categories } from "../../data/products";
import { ProductCard } from "./ProductCard";
import { CategoryIcon } from "../icons/CategoryIcon";


interface MenuSectionProps {
  search: string;
  activeCategory: string;
  onSelectCategory: (c: string) => void;
}

export function MenuSection({ search, activeCategory, onSelectCategory }: MenuSectionProps) {
  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchSearch =
      search === "" ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const grouped = categories
    .map((cat) => ({
      ...cat,
      items: filtered.filter((p) => p.category === cat.key),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <div>
      {/* Category horizontal scroll */}
      <div className="sticky top-[52px] z-30 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-1 px-4 py-3 overflow-x-auto no-scrollbar">
            <button
              onClick={() => onSelectCategory("all")}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === "all"
                  ? "bg-primary text-white shadow-sm"
                  : "bg-white text-text-secondary hover:bg-surface-hover border border-border"
              }`}
            >
              Todos
            </button>
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => onSelectCategory(cat.key)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.key
                    ? "bg-primary text-white shadow-sm"
                    : "bg-white text-text-secondary hover:bg-surface-hover border border-border"
                }`}
              >
                <CategoryIcon
                  type={cat.icon}
                  size={16}
                  className={activeCategory === cat.key ? "text-white" : "text-text-muted"}
                />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {search && (
          <p className="text-text-muted text-sm mb-4">
            {filtered.length} {filtered.length === 1 ? "resultado" : "resultados"} para "{search}"
          </p>
        )}

        {activeCategory === "all" && !search ? (
          <div className="space-y-10">
            {grouped.map((group) => (
              <section key={group.key} id={`cat-${group.key}`}>
                <h2 className="text-xl font-bold text-text-primary mb-1">
                  {group.label}
                </h2>
                <p className="text-text-muted text-sm mb-5">
                  {group.items.length} {group.items.length === 1 ? "item" : "itens"}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {group.items.map((product, i) => (
                    <ProductCard key={product.id} product={product} index={i} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-surface-hover flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-text-muted">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </div>
            <p className="text-text-secondary font-medium mb-1">Nenhum item encontrado</p>
            <p className="text-text-muted text-sm">Tente buscar por outro termo</p>
          </div>
        )}
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
