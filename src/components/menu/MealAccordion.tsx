import { useState } from "react";
import { ChevronDownIcon } from "../icons/Icons";
import { MealIcon } from "../icons/MealIcon";
import type { MealSection as MealSectionType } from "../../data/products";

interface MealAccordionProps {
  meals: MealSectionType[];
  groupName: string;
  defaultOpen?: boolean;
}

export function MealAccordion({ meals, groupName, defaultOpen = false }: MealAccordionProps) {
  const [openSections, setOpenSections] = useState<Set<number>>(
    new Set(defaultOpen ? meals.map((_, i) => i) : [])
  );

  const toggle = (idx: number) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <div className="space-y-3">
      <h3 className="font-display text-sm font-bold text-text-secondary uppercase tracking-wide px-1">
        {groupName}
      </h3>
      {meals.map((meal, i) => {
        const isOpen = openSections.has(i);
        return (
          <div key={i} className="bg-white rounded-xl border border-border overflow-hidden animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-surface-dark/50 transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MealIcon type={meal.icon} size={18} className="text-primary" />
              </div>
              <span className="flex-1 text-left text-sm font-bold text-text-primary">
                {meal.label}
              </span>
              <span className="text-xs text-text-muted mr-1">
                {meal.items.length} {meal.items.length === 1 ? "prato" : "pratos"}
              </span>
              <ChevronDownIcon
                size={16}
                className={`text-text-muted transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div className="px-4 pb-3 pt-1 border-t border-border-light">
                {meal.items.map((item, j) => (
                  <div
                    key={item.id}
                    className={`flex items-start gap-2.5 py-2.5 ${
                      j < meal.items.length - 1 ? "border-b border-border-light" : ""
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary leading-snug">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
