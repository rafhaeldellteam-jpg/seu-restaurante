import { getWeekMenu, getTodayIndex } from "../../data/products";

interface DateSelectorProps {
  selectedDay: number;
  onSelectDay: (i: number) => void;
}

export function DateSelector({ selectedDay, onSelectDay }: DateSelectorProps) {
  const week = getWeekMenu();
  const today = getTodayIndex();

  return (
    <div className="bg-white rounded-xl border border-border overflow-hidden">
      <div className="bg-gradient-to-r from-primary/5 to-primary-light/5 px-4 py-3 border-b border-border">
        <h3 className="font-display text-sm font-bold text-primary uppercase tracking-wide">
          Selecione o Dia
        </h3>
      </div>
      <div className="p-2">
        {week.map((day, i) => {
          const isToday = i === today;
          const isSelected = i === selectedDay;
          return (
            <button
              key={day.day}
              onClick={() => onSelectDay(i)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 mb-0.5 ${
                isSelected
                  ? "bg-primary text-white shadow-sm"
                  : isToday
                  ? "bg-primary/5 text-primary font-medium"
                  : "text-text-secondary hover:bg-surface-dark"
              }`}
            >
              <span
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                  isSelected
                    ? "bg-white/20 text-white"
                    : isToday
                    ? "bg-primary/10 text-primary"
                    : "bg-surface text-text-muted"
                }`}
              >
                {day.shortLabel}
              </span>
              <span className="text-sm flex-1">{day.label}</span>
              {isToday && !isSelected && (
                <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                  Hoje
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
