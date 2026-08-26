import { useState, useEffect } from "react";

const promos = [
  {
    title: "Combo Família",
    description: "2 pizzas grandes + refri 2L por apenas R$79,90",
    gradient: "from-orange-600 to-red-600",
  },
  {
    title: "Frete Grátis",
    description: "Em pedidos acima de R$50,00 na sua primeira compra",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Dia de Sushi",
    description: "Toda terça-feira: 2 por 1 em todos os combos",
    gradient: "from-red-500 to-pink-600",
  },
];

export function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % promos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl mx-4">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {promos.map((promo, i) => (
          <div
            key={i}
            className={`min-w-full bg-gradient-to-r ${promo.gradient} p-6 rounded-2xl`}
          >
            <h2 className="font-display text-2xl font-bold text-white">
              {promo.title}
            </h2>
            <p className="font-body text-white/80 mt-1">{promo.description}</p>
            <button className="mt-4 bg-white text-primary font-display font-semibold px-5 py-2 rounded-full text-sm hover:bg-white/90 transition-colors">
              Pedir Agora
            </button>
          </div>
        ))}
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {promos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
