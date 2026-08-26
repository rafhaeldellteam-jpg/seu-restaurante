import { useState, useEffect, useRef } from "react";
import { SearchIcon, ShoppingCartIcon, MapPinIcon, ChevronDownIcon, CloseIcon } from "../icons/Icons";
import { useCartStore } from "../../store/cartStore";
import { Logo } from "../ui/Logo";

interface HeaderProps {
  search: string;
  onSearch: (v: string) => void;
}

export function Header({ search, onSearch }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const totalItems = useCartStore((s) => s.totalItems());
  const totalPrice = useCartStore((s) => s.totalPrice());
  const toggleCart = useCartStore((s) => s.toggleCart);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Logo dark />

          <button className="hidden sm:flex items-center gap-2 text-white/90 text-sm hover:text-white transition-colors">
            <MapPinIcon size={16} />
            <span className="font-medium">Rua Augusta, 1200</span>
            <ChevronDownIcon size={14} />
          </button>

          <div className="flex-1 max-w-md relative">
            <SearchIcon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Buscar no cardapio"
              value={search}
              onChange={(e) => onSearch(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 rounded-lg bg-white text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
            />
            {search && (
              <button
                onClick={() => { onSearch(""); inputRef.current?.focus(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary"
              >
                <CloseIcon size={14} />
              </button>
            )}
          </div>

          <button
            onClick={toggleCart}
            className="relative flex items-center gap-3 bg-white/15 hover:bg-white/25 text-white px-4 py-2.5 rounded-lg transition-all text-sm font-medium"
          >
            <ShoppingCartIcon size={20} />
            {totalItems > 0 && (
              <>
                <span className="hidden sm:inline">
                  {totalItems} {totalItems === 1 ? "item" : "itens"} | R$ {totalPrice.toFixed(2).replace(".", ",")}
                </span>
                <span className="sm:hidden">{totalItems}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
