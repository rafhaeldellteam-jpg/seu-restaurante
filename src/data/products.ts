export type DayOfWeek = "segunda" | "terca" | "quarta" | "quinta" | "sexta" | "sabado" | "domingo";
export type MealType = "cafe" | "almoco" | "lanche" | "jantar";

export interface FoodItem {
  id: number;
  name: string;
}

export interface MealSection {
  type: MealType;
  label: string;
  icon: string;
  items: FoodItem[];
}

export interface DailyMenu {
  day: DayOfWeek;
  label: string;
  shortLabel: string;
  ageGroups: {
    name: string;
    meals: MealSection[];
  }[];
}

export interface RestaurantInfo {
  name: string;
  address: string;
  phone: string;
  hours: string;
  description: string;
}

export const restaurantInfo: RestaurantInfo = {
  name: "Seu Restaurante",
  address: "Rua Augusta, 1200 - Consolacao, Sao Paulo - SP",
  phone: "(11) 3256-8800",
  hours: "Seg a Sex: 11h as 15h | Sab: 11h as 14h",
  description: "Alimentacao escolar de qualidade para nossa comunidade",
};

const weekMenu: DailyMenu[] = [
  {
    day: "segunda",
    label: "Segunda-feira",
    shortLabel: "SEG",
    ageGroups: [
      {
        name: "Cafe da Manha",
        meals: [
          {
            type: "cafe",
            label: "Cafe da Manha",
            icon: "cafe",
            items: [
              { id: 1, name: "Pao frances com manteiga" },
              { id: 2, name: "Suco de laranja natural" },
              { id: 3, name: "Fruta picada (banana e maca)" },
              { id: 4, name: "Leite com achocolatado" },
            ],
          },
        ],
      },
      {
        name: "Almoco",
        meals: [
          {
            type: "almoco",
            label: "Almoco",
            icon: "almoco",
            items: [
              { id: 5, name: "Arroz branco" },
              { id: 6, name: "Feijao carioca" },
              { id: 7, name: "Frango grelhado com tempero especial" },
              { id: 8, name: "Salada de alface e tomate" },
              { id: 9, name: "Batata assada com ervas" },
              { id: 10, name: "Pudim de leite" },
            ],
          },
        ],
      },
      {
        name: "Lanche da Tarde",
        meals: [
          {
            type: "lanche",
            label: "Lanche da Tarde",
            icon: "lanche",
            items: [
              { id: 11, name: "Bolo de cenoura com cobertura" },
              { id: 12, name: "Vitamina de frutas" },
              { id: 13, name: "Biscoito integral" },
            ],
          },
        ],
      },
    ],
  },
  {
    day: "terca",
    label: "Terca-feira",
    shortLabel: "TER",
    ageGroups: [
      {
        name: "Cafe da Manha",
        meals: [
          {
            type: "cafe",
            label: "Cafe da Manha",
            icon: "cafe",
            items: [
              { id: 14, name: "Torrada com queijo" },
              { id: 15, name: "Maca picada com canela" },
              { id: 16, name: "Suco de maracuja" },
              { id: 17, name: "Creme de leite com granola" },
            ],
          },
        ],
      },
      {
        name: "Almoco",
        meals: [
          {
            type: "almoco",
            label: "Almoco",
            icon: "almoco",
            items: [
              { id: 18, name: "Arroz integral" },
              { id: 19, name: "Feijao preto" },
              { id: 20, name: "Carne moída acebolada" },
              { id: 21, name: "Mandioca cozida" },
              { id: 22, name: "Salada de couve e cenoura" },
              { id: 23, name: "Gelatina de frutas" },
            ],
          },
        ],
      },
      {
        name: "Lanche da Tarde",
        meals: [
          {
            type: "lanche",
            label: "Lanche da Tarde",
            icon: "lanche",
            items: [
              { id: 24, name: "Pao de queijo caseiro" },
              { id: 25, name: "Iogurte natural" },
              { id: 26, name: "Fruta (laranja)" },
            ],
          },
        ],
      },
    ],
  },
  {
    day: "quarta",
    label: "Quarta-feira",
    shortLabel: "QUA",
    ageGroups: [
      {
        name: "Cafe da Manha",
        meals: [
          {
            type: "cafe",
            label: "Cafe da Manha",
            icon: "cafe",
            items: [
              { id: 27, name: "Cereal com leite" },
              { id: 28, name: "Banana picada" },
              { id: 29, name: "Suco de uva" },
              { id: 30, name: "Pao integral com requeijao" },
            ],
          },
        ],
      },
      {
        name: "Almoco",
        meals: [
          {
            type: "almoco",
            label: "Almoco",
            icon: "almoco",
            items: [
              { id: 31, name: "Macarrao ao molho de tomate" },
              { id: 32, name: "Salsicha assada" },
              { id: 33, name: "Purê de batata" },
              { id: 34, name: "Salada verde" },
              { id: 35, name: "Fruta da estacao" },
              { id: 36, name: "Agua com gas e limao" },
            ],
          },
        ],
      },
      {
        name: "Lanche da Tarde",
        meals: [
          {
            type: "lanche",
            label: "Lanche da Tarde",
            icon: "lanche",
            items: [
              { id: 37, name: "Sonho de creme" },
              { id: 38, name: "Suco de tomate" },
              { id: 39, name: "Pao de forma com margarina" },
            ],
          },
        ],
      },
    ],
  },
  {
    day: "quinta",
    label: "Quinta-feira",
    shortLabel: "QUI",
    ageGroups: [
      {
        name: "Cafe da Manha",
        meals: [
          {
            type: "cafe",
            label: "Cafe da Manha",
            icon: "cafe",
            items: [
              { id: 40, name: "Pao com ovo mexido" },
              { id: 41, name: "Mamao fatiado" },
              { id: 42, name: "Chá de camomila" },
              { id: 43, name: "Iogurte com mel" },
            ],
          },
        ],
      },
      {
        name: "Almoco",
        meals: [
          {
            type: "almoco",
            label: "Almoco",
            icon: "almoco",
            items: [
              { id: 44, name: "Arroz com cenoura" },
              { id: 45, name: "Feijao fradinho" },
              { id: 46, name: "Peixe grelhado com limao" },
              { id: 47, name: "Legumes refogados" },
              { id: 48, name: "Vinagrete" },
              { id: 49, name: "Sorvete de frutas" },
            ],
          },
        ],
      },
      {
        name: "Lanche da Tarde",
        meals: [
          {
            type: "lanche",
            label: "Lanche da Tarde",
            icon: "lanche",
            items: [
              { id: 50, name: "Coxinha de frango" },
              { id: 51, name: "Suco natural de limao" },
              { id: 52, name: "Biscoito Digestivo" },
            ],
          },
        ],
      },
    ],
  },
  {
    day: "sexta",
    label: "Sexta-feira",
    shortLabel: "SEX",
    ageGroups: [
      {
        name: "Cafe da Manha",
        meals: [
          {
            type: "cafe",
            label: "Cafe da Manha",
            icon: "cafe",
            items: [
              { id: 53, name: "Panqueca com geleia" },
              { id: 54, name: "Fruta picada" },
              { id: 55, name: "Vitamina de acerola" },
              { id: 56, name: "Leite quente" },
            ],
          },
        ],
      },
      {
        name: "Almoco",
        meals: [
          {
            type: "almoco",
            label: "Almoco",
            icon: "almoco",
            items: [
              { id: 57, name: "Arroz tropcial" },
              { id: 58, name: "Feijao carioca" },
              { id: 59, name: "Estrogonofe de frango" },
              { id: 60, name: "Batata palha" },
              { id: 61, name: "Salada de repolho" },
              { id: 62, name: "Romeu e Julieta" },
            ],
          },
        ],
      },
      {
        name: "Lanche da Tarde",
        meals: [
          {
            type: "lanche",
            label: "Lanche da Tarde",
            icon: "lanche",
            items: [
              { id: 63, name: "Empada de queijo" },
              { id: 64, name: "Suco de abacaxi" },
              { id: 65, name: "Amendoim torrado" },
            ],
          },
        ],
      },
    ],
  },
  {
    day: "sabado",
    label: "Sabado",
    shortLabel: "SAB",
    ageGroups: [
      {
        name: "Almoco",
        meals: [
          {
            type: "almoco",
            label: "Almoco",
            icon: "almoco",
            items: [
              { id: 66, name: "Arroz branco" },
              { id: 67, name: "Feijão tropeiro mineiro" },
              { id: 68, name: "Linguiça calabresa acebolada" },
              { id: 69, name: "Farofa de ovos" },
              { id: 70, name: "Salada de mangas" },
              { id: 71, name: "Cocada branca" },
            ],
          },
        ],
      },
    ],
  },
  {
    day: "domingo",
    label: "Domingo",
    shortLabel: "DOM",
    ageGroups: [
      {
        name: "Almoco Especial",
        meals: [
          {
            type: "almoco",
            label: "Almoco Especial",
            icon: "almoco",
            items: [
              { id: 72, name: "Arroz com açafrão" },
              { id: 73, name: "Feijão tropeiro" },
              { id: 74, name: "Picanha na brasa" },
              { id: 75, name: "Vinagrete especial" },
              { id: 76, name: "Mandioca frita" },
              { id: 77, name: "Quentão da casa" },
            ],
          },
        ],
      },
    ],
  },
];

export function getMenuForDay(dayIndex: number): DailyMenu {
  return weekMenu[dayIndex % 7];
}

export function getWeekMenu(): DailyMenu[] {
  return weekMenu;
}

export function getTodayIndex(): number {
  const d = new Date().getDay();
  return d === 0 ? 6 : d - 1;
}

export const foodSearchIndex: { food: string; day: string; dayIndex: number }[] = [];
weekMenu.forEach((day, i) => {
  day.ageGroups.forEach((ag) => {
    ag.meals.forEach((meal) => {
      meal.items.forEach((item) => {
        foodSearchIndex.push({ food: item.name, day: day.label, dayIndex: i });
      });
    });
  });
});
