export type Category =
  | "lanche"
  | "pizza"
  | "japones"
  | "sasssissao"
  | "arabe"
  | "acai"
  | "hamburguer"
  | "pastel"
  | "churrasco"
  | "sobremesa"
  | "bebida"
  | "combo"
  | "acompanhamento";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  category: Category;
  image: string;
  badge?: string;
  isVeg?: boolean;
}

export interface CategoryInfo {
  key: Category;
  label: string;
  icon: string;
}

export const categories: CategoryInfo[] = [
  { key: "combo", label: "Combos", icon: "combo" },
  { key: "hamburguer", label: "Hamburguer", icon: "hamburguer" },
  { key: "pizza", label: "Pizza", icon: "pizza" },
  { key: "japones", label: "Japones", icon: "japones" },
  { key: "sasssissao", label: "Lanches", icon: "lanche" },
  { key: "churrasco", label: "Churrasco", icon: "churrasco" },
  { key: "pastel", label: "Pastel", icon: "pastel" },
  { key: "arabe", label: "Arabe", icon: "arabe" },
  { key: "acai", label: "Acai", icon: "acai" },
  { key: "acompanhamento", label: "Acompanhamentos", icon: "acompanhamento" },
  { key: "bebida", label: "Bebidas", icon: "bebida" },
  { key: "sobremesa", label: "Sobremesas", icon: "sobremesa" },
];

export const products: Product[] = [
  // COMBOS
  {
    id: 1,
    name: "Combo Familiar Completo",
    description: "2 hamburguers duplos, 1 pizza media, 2 batatas grandes e 2 refris 600ml",
    price: 129.9,
    oldPrice: 159.9,
    category: "combo",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=350&fit=crop",
    badge: "Mais Pedido",
  },
  {
    id: 2,
    name: "Combo Amigo",
    description: "2 x-burguer especiais, 2 batatas media e 2 milkshakes",
    price: 89.9,
    oldPrice: 109.9,
    category: "combo",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&h=350&fit=crop",
    badge: "Economize",
  },
  {
    id: 3,
    name: "Combo Escolha 2 Pizzas",
    description: "Escolha 2 pizzas media de qualquer sabor + 1 bebida 1L",
    price: 74.9,
    oldPrice: 94.9,
    category: "combo",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=350&fit=crop",
  },

  // HAMBURGUER
  {
    id: 4,
    name: "Classic Smash Burger",
    description: "Pao brioche, 2 smash patties, queijo cheddar, molho especial, pickles e cebola caramelizada",
    price: 38.9,
    category: "hamburguer",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=350&fit=crop",
    badge: "Top",
  },
  {
    id: 5,
    name: "Bacon Cheddar Burger",
    description: "Pao australiano, angus 180g, bacon crocante, queijo cheddar derretido e maionese defumada",
    price: 42.9,
    category: "hamburguer",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&h=350&fit=crop",
  },
  {
    id: 6,
    name: "Mushroom Swiss Burger",
    description: "Pao brioche, blend 200g, cogumelos salteados, queijo suico e molho trufado",
    price: 46.9,
    category: "hamburguer",
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&h=350&fit=crop",
  },
  {
    id: 7,
    name: "Double Cheeseburger",
    description: "Pao sesame, 2 patties 150g cada, 4 fatias de queijo, ketchup e mostarda",
    price: 44.9,
    category: "hamburguer",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&h=350&fit=crop",
  },
  {
    id: 8,
    name: "Veggie Burger",
    description: "Pao integral, hamburger de grao-de-bico, abacate, rúcula e molho de ervas",
    price: 36.9,
    category: "hamburguer",
    image: "https://images.unsplash.com/photo-1520072959219-c595a9b9e99b?w=500&h=350&fit=crop",
    isVeg: true,
  },

  // PIZZA
  {
    id: 9,
    name: "Pizza Margherita",
    description: "Molho de tomate San Marzano, mussarela de bufala, manjericao fresco e azeite extra virgem",
    price: 49.9,
    category: "pizza",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&h=350&fit=crop",
    badge: "Classica",
  },
  {
    id: 10,
    name: "Pizza Pepperoni Especial",
    description: "Camada generosa de pepperoni artesanal, mussarela derretida e orégano",
    price: 54.9,
    category: "pizza",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&h=350&fit=crop",
  },
  {
    id: 11,
    name: "Pizza 4 Queijos",
    description: "Mussarela, gorgonzola, parmesão e provolone sobre massa crocante",
    price: 56.9,
    category: "pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=350&fit=crop",
  },
  {
    id: 12,
    name: "Pizza Calabresa",
    description: "Calabresa artesanal fatiada, cebola roxa, azeitonas pretas e mussarela",
    price: 48.9,
    category: "pizza",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=350&fit=crop",
  },
  {
    id: 13,
    name: "Pizza Portuguesa",
    description: "Presunto, ovos, cebola, azeitonas verdes, ervilha e mussarela",
    price: 52.9,
    category: "pizza",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=350&fit=crop",
  },

  // JAPONES
  {
    id: 14,
    name: "Combo Sushi 50 Pecas",
    description: "25 nigiris + 15 sashis + 10 hot rolls de salmao com cream cheese",
    price: 119.9,
    oldPrice: 149.9,
    category: "japones",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&h=350&fit=crop",
    badge: "Promo",
  },
  {
    id: 15,
    name: "Hot Roll de Camarao",
    description: "8 pecas de hot roll recheado com camarao tempura, cream cheese e molho tarutaru",
    price: 42.9,
    category: "japones",
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=500&h=350&fit=crop",
  },
  {
    id: 16,
    name: "Temaki Salmão",
    description: "Cone de nori recheado com arroz, salmao fresco, pepino e cream cheese",
    price: 24.9,
    category: "japones",
    image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=500&h=350&fit=crop",
  },
  {
    id: 17,
    name: "Yakissoba Misto",
    description: "Macarrao japones refogado com legumes, carne e camarao no molho especial",
    price: 38.9,
    category: "japones",
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=500&h=350&fit=crop",
  },

  // LANCHES
  {
    id: 18,
    name: "X-Tudo Completo",
    description: "Pao frances, ovo, presunto, queijo, hamburger, bacon, milho, ervilha, tomate e maionese",
    price: 28.9,
    category: "sasssissao",
    image: "https://images.unsplash.com/photo-1625938145744-3e1d537fc144?w=500&h=350&fit=crop",
  },
  {
    id: 19,
    name: "Misto Quente Especial",
    description: "Pao de fermentacao natural, queijo gruyere, presunto parma e manteiga de trufas",
    price: 22.9,
    category: "sasssissao",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&h=350&fit=crop",
  },
  {
    id: 20,
    name: "Cachorro Quente Gourmet",
    description: "Pao brioche, salsicha artesanal, cebola caramelizada, molho special e batata palha",
    price: 26.9,
    category: "sasssissao",
    image: "https://images.unsplash.com/photo-1612392062126-d739d2320e6a?w=500&h=350&fit=crop",
  },

  // CHURRASCO
  {
    id: 21,
    name: "Picanha na Brasa",
    description: "300g de picanha grelhada, arroz, feijão tropeiro, vinagrete e farofa",
    price: 69.9,
    category: "churrasco",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=500&h=350&fit=crop",
    badge: "Chef",
  },
  {
    id: 22,
    name: "Costela no Bafo",
    description: "Costela bovina cozida por 12 horas, accompanied by mandioca frita e vinagrete",
    price: 59.9,
    category: "churrasco",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&h=350&fit=crop",
  },
  {
    id: 23,
    name: "Frisco de Picanha",
    description: "200g de picanha fatiada, com arroz, farofa e vinagrete",
    price: 54.9,
    category: "churrasco",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=500&h=350&fit=crop",
  },

  // PASTEL
  {
    id: 24,
    name: "Pastel de Carne Moída",
    description: "Pastel artesanal crocante recheado com carne moída temperada, azeitona e ovo",
    price: 12.9,
    category: "pastel",
    image: "https://images.unsplash.com/photo-1604467707321-70d009801bf4?w=500&h=350&fit=crop",
  },
  {
    id: 25,
    name: "Pastel de Queijo",
    description: "Massa folhada crocante com queijo derretido e orégano",
    price: 11.9,
    category: "pastel",
    image: "https://images.unsplash.com/photo-1604467707321-70d009801bf4?w=500&h=350&fit=crop",
  },
  {
    id: 26,
    name: "Pastel de Palmito",
    description: "Recheio cremoso de palmito com ervas finas e mussarela",
    price: 13.9,
    category: "pastel",
    image: "https://images.unsplash.com/photo-1604467707321-70d009801bf4?w=500&h=350&fit=crop",
    isVeg: true,
  },

  // ARABE
  {
    id: 27,
    name: "Shawarma de Frango",
    description: "Pao sirio, frango temperado, molho de alho, tomate, cebola roxa e salsinha",
    price: 32.9,
    category: "arabe",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500&h=350&fit=crop",
  },
  {
    id: 28,
    name: "Esfiha de Carne",
    description: "4 esfihas abertas de carne moída com tomate e cebola temperada",
    price: 22.9,
    category: "arabe",
    image: "https://images.unsplash.com/photo-1593504049359-74330189a345?w=500&h=350&fit=crop",
  },

  // ACAI
  {
    id: 29,
    name: "Acai Tradicional 500ml",
    description: "Acai batido com banana e guarana, com granola, banana fatiada e leite condensado",
    price: 22.9,
    category: "acai",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=500&h=350&fit=crop",
    badge: "Top",
  },
  {
    id: 30,
    name: "Acai Premium 700ml",
    description: "Acai cremoso com frutas vermelhas, granola especial, mel, coco ralado e paçoca",
    price: 32.9,
    category: "acai",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=500&h=350&fit=crop",
  },

  // ACOMPANHAMENTOS
  {
    id: 31,
    name: "Batata Frita Classica",
    description: "Porção generosa de batata frita crocante com sal e maionese",
    price: 18.9,
    category: "acompanhamento",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&h=350&fit=crop",
  },
  {
    id: 32,
    name: "Batata com Cheddar e Bacon",
    description: "Batata frita com queijo cheddar cremoso derretido e bacon crocante",
    price: 26.9,
    category: "acompanhamento",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&h=350&fit=crop",
    badge: "Popular",
  },
  {
    id: 33,
    name: "Onion Rings",
    description: "Anéis de cebola empanados e fritos, crocantes por fora e macios por dentro",
    price: 20.9,
    category: "acompanhamento",
    image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=500&h=350&fit=crop",
  },

  // BEBIDAS
  {
    id: 34,
    name: "Coca-Cola 600ml",
    description: "Coca-Cola gelada garrafa 600ml",
    price: 8.9,
    category: "bebida",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&h=350&fit=crop",
  },
  {
    id: 35,
    name: "Suco Natural 500ml",
    description: "Suco natural de laranja, limao, maracuja ou abacaxi",
    price: 12.9,
    category: "bebida",
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500&h=350&fit=crop",
  },
  {
    id: 36,
    name: "Milkshake Artesanal",
    description: "Escolha entre: Nutella, Oreo, Morango ou Doce de Leite - 400ml",
    price: 18.9,
    category: "bebida",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&h=350&fit=crop",
    badge: "Novo",
  },

  // SOBREMESAS
  {
    id: 37,
    name: "Brownie com Sorvete",
    description: "Brownie de chocolate belga quente com bola de sorvete de creme e calda de caramelo",
    price: 28.9,
    category: "sobremesa",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&h=350&fit=crop",
  },
  {
    id: 38,
    name: "Churros com Doce de Leite",
    description: "4 churros recheados com doce de leite artesanal, polvilhados com canela e acucar",
    price: 22.9,
    category: "sobremesa",
    image: "https://images.unsplash.com/photo-1624371414361-e67082718add?w=500&h=350&fit=crop",
    badge: "Delicia",
  },
];
