import { useState } from "react";
import { Header } from "./components/layout/Header";
import { DateSelector } from "./components/ui/DateSelector";
import { MenuContent } from "./components/menu/MenuContent";
import { getTodayIndex } from "./data/products";
import { MapPinIcon, PhoneIcon, ClockIcon, UtensilsIcon } from "./components/icons/Icons";

export default function App() {
  const [search, setSearch] = useState("");
  const [selectedDay, setSelectedDay] = useState(getTodayIndex());

  return (
    <div className="min-h-screen bg-surface">
      <Header search={search} onSearch={setSearch} />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0 space-y-4">
            <DateSelector selectedDay={selectedDay} onSelectDay={setSelectedDay} />

            {/* Restaurant info card */}
            <div className="bg-white rounded-xl border border-border overflow-hidden hidden lg:block">
              <div className="bg-gradient-to-r from-accent/5 to-accent/10 px-4 py-3 border-b border-border">
                <h3 className="font-display text-sm font-bold text-accent uppercase tracking-wide">
                  Informacoes
                </h3>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-start gap-2.5 text-sm">
                  <MapPinIcon size={14} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary leading-snug">Rua Augusta, 1200 - Consolacao, Sao Paulo - SP</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm">
                  <PhoneIcon size={14} className="text-accent flex-shrink-0" />
                  <span className="text-text-secondary">(11) 3256-8800</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm">
                  <ClockIcon size={14} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary leading-snug">Seg a Sex: 11h as 15h<br/>Sab: 11h as 14h</span>
                </div>
              </div>
            </div>

            {/* Quick stats */}
            <div className="bg-white rounded-xl border border-border p-4 hidden lg:block">
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 rounded-lg bg-primary/5">
                  <UtensilsIcon size={20} className="text-primary mx-auto mb-1" />
                  <p className="text-lg font-bold text-primary">7</p>
                  <p className="text-[10px] text-text-muted uppercase tracking-wide">Dias</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-accent/5">
                  <UtensilsIcon size={20} className="text-accent mx-auto mb-1" />
                  <p className="text-lg font-bold text-accent">77</p>
                  <p className="text-[10px] text-text-muted uppercase tracking-wide">Pratos</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0">
            <MenuContent selectedDay={selectedDay} search={search} />
          </main>
        </div>
      </div>

      {/* Mobile day selector fixed bottom */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border px-2 py-2 z-40">
        <MobileDayBar selectedDay={selectedDay} onSelectDay={setSelectedDay} />
      </div>

      {/* Spacer for mobile bottom bar */}
      <div className="lg:hidden h-16" />
    </div>
  );
}

function MobileDayBar({ selectedDay, onSelectDay }: { selectedDay: number; onSelectDay: (i: number) => void }) {
  const days = ["SEG", "TER", "QUA", "QUI", "SEX", "SAB", "DOM"];
  const today = getTodayIndex();

  return (
    <div className="flex gap-1">
      {days.map((d, i) => (
        <button
          key={i}
          onClick={() => onSelectDay(i)}
          className={`flex-1 flex flex-col items-center py-1.5 rounded-lg transition-all text-xs ${
            i === selectedDay
              ? "bg-primary text-white font-bold"
              : i === today
              ? "bg-primary/5 text-primary font-medium"
              : "text-text-muted"
          }`}
        >
          <span className="text-[10px] leading-tight">{d}</span>
        </button>
      ))}
    </div>
  );
}
