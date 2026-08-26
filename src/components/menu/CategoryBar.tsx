import { categories } from "../../data/products";
import { CategoryIcon } from "../icons/CategoryIcon";

interface Props {
  active: string;
  onSelect: (c: string) => void;
}

export function CategoryBar({ active, onSelect }: Props) {
  return (
    <div className="px-4 py-3">
      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
        <button
          onClick={() => onSelect("all")}
          className={`flex-shrink-0 flex flex-col items-center gap-1.5 px-4 py-2.5 rounded-xl transition-all duration-200 ${
            active === "all"
              ? "bg-primary text-white shadow-lg shadow-primary/20"
              : "bg-bg-elevated text-text-secondary border border-border hover:border-primary/30"
          }`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
          <span className="text-[11px] font-medium whitespace-nowrap">Todos</span>
        </button>
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => onSelect(cat.key)}
            className={`flex-shrink-0 flex flex-col items-center gap-1.5 px-4 py-2.5 rounded-xl transition-all duration-200 ${
              active === cat.key
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "bg-bg-elevated text-text-secondary border border-border hover:border-primary/30"
            }`}
          >
            <CategoryIcon type={cat.icon} size={20} className={active === cat.key ? "text-white" : "text-text-muted"} />
            <span className="text-[11px] font-medium whitespace-nowrap">{cat.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
