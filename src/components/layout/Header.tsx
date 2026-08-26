import { MapPin, Search, X } from "../icons/Icons";

interface HeaderProps {
  search: string;
  onSearch: (v: string) => void;
}

export function Header({ search, onSearch }: HeaderProps) {
  return (
    <div className="px-4 pt-5 pb-3">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-text-secondary text-xs flex items-center gap-1">
            <MapPin size={12} className="text-primary" />
            Entregar em
          </p>
          <button className="flex items-center gap-1 text-text-primary font-bold text-sm mt-0.5">
            Rua Augusta, 1200
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-primary"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
        </div>
        <div className="w-10 h-10 rounded-full bg-bg-elevated flex items-center justify-center border border-border">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-text-secondary"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
        </div>
      </div>

      <div className="relative">
        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" />
        <input
          type="text"
          placeholder="Buscar pizza, hamburguer, massas..."
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full pl-10 pr-10 py-3 rounded-xl bg-bg-elevated text-text-primary placeholder:text-text-muted text-sm border border-border focus:border-primary/40 focus:outline-none transition-colors"
        />
        {search && (
          <button onClick={() => onSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary">
            <X size={14} />
          </button>
        )}
      </div>
    </div>
  );
}
