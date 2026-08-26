import { getMenuForDay, getTodayIndex } from "../../data/products";
import { MealAccordion } from "./MealAccordion";

interface MenuContentProps {
  selectedDay: number;
  search: string;
}

export function MenuContent({ selectedDay, search }: MenuContentProps) {
  const menu = getMenuForDay(selectedDay);
  const isToday = selectedDay === getTodayIndex();

  const filteredGroups = menu.ageGroups
    .map((group) => ({
      ...group,
      meals: group.meals.map((meal) => ({
        ...meal,
        items: meal.items.filter(
          (item) =>
            search === "" ||
            item.name.toLowerCase().includes(search.toLowerCase())
        ),
      })).filter((meal) => meal.items.length > 0),
    }))
    .filter((group) => group.meals.length > 0);

  const totalItems = filteredGroups.reduce(
    (acc, g) => acc + g.meals.reduce((a, m) => a + m.items.length, 0),
    0
  );

  return (
    <div>
      <div className="bg-white rounded-xl border border-border p-4 mb-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-display text-lg font-bold text-text-primary">
              {menu.label}
              {isToday && (
                <span className="ml-2 text-xs bg-success/10 text-success px-2 py-0.5 rounded-full font-medium align-middle">
                  Hoje
                </span>
              )}
            </h2>
            <p className="text-text-muted text-xs mt-0.5">
              {totalItems} {totalItems === 1 ? "prato disponivel" : "pratos disponiveis"}
            </p>
          </div>
        </div>
      </div>

      {filteredGroups.length > 0 ? (
        <div className="space-y-4">
          {filteredGroups.map((group, i) => (
            <MealAccordion
              key={`${selectedDay}-${i}`}
              meals={group.meals}
              groupName={group.name}
              defaultOpen={i === 0}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-surface-dark flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-text-muted">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </div>
          <p className="text-text-secondary font-medium text-sm">Nenhum prato encontrado</p>
          <p className="text-text-muted text-xs mt-1">Tente buscar por outro termo</p>
        </div>
      )}
    </div>
  );
}
