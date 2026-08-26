import { Home, Search, Heart, User } from "../icons/Icons";

interface NavItem {
  label: string;
  icon: typeof Home;
}

const items: NavItem[] = [
  { label: "Inicio", icon: Home },
  { label: "Buscar", icon: Search },
  { label: "Favoritos", icon: Heart },
  { label: "Perfil", icon: User },
];

interface BottomNavProps {
  active: string;
  onChange: (tab: string) => void;
}

export function BottomNav({ active, onChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-bg-elevated border-t border-border z-40">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.label;
          return (
            <button
              key={item.label}
              onClick={() => onChange(item.label)}
              className="flex flex-col items-center gap-1 w-full"
            >
              <Icon
                className={`w-5 h-5 transition-colors ${
                  isActive ? "text-primary" : "text-text-muted"
                }`}
              />
              <span
                className={`font-body text-xs transition-colors ${
                  isActive ? "text-primary" : "text-text-muted"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
