import { Logo } from "../ui/Logo";
import { SearchIcon, MapPinIcon, PhoneIcon, ClockIcon } from "../icons/Icons";
import { restaurantInfo } from "../../data/products";

interface HeaderProps {
  search: string;
  onSearch: (v: string) => void;
}

export function Header({ search, onSearch }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-primary to-primary-light">
      <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-center gap-6 flex-1 flex-wrap">
          <Logo />
          <div className="hidden md:flex items-center gap-1 text-white/80 text-xs">
            <MapPinIcon size={12} />
            <span>{restaurantInfo.address}</span>
          </div>
        </div>

        <div className="flex-1 max-w-md w-full relative">
          <SearchIcon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            placeholder="Buscar prato no cardapio..."
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-white/40"
          />
        </div>
      </div>

      <div className="bg-primary-dark/30">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-6 text-white/70 text-xs overflow-x-auto no-scrollbar">
          <span className="flex items-center gap-1.5 flex-shrink-0">
            <ClockIcon size={12} />
            {restaurantInfo.hours}
          </span>
          <span className="flex items-center gap-1.5 flex-shrink-0">
            <PhoneIcon size={12} />
            {restaurantInfo.phone}
          </span>
        </div>
      </div>
    </header>
  );
}
