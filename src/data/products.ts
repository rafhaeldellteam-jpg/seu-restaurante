export type Category = "pizzas" | "hamburguer" | "japones" | "massas" | "bebidas" | "sobremesas" | "acompanhamentos" | "combos";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  category: Category;
  image: string;
  rating: number;
  time: string;
  badge?: string;
  calories?: number;
}

export interface CategoryInfo {
  key: Category;
  label: string;
  icon: string;
}

export const categories: CategoryInfo[] = [
  { key: "combos", label: "Combos", icon: "combo" },
  { key: "pizzas", label: "Pizzas", icon: "pizza" },
  { key: "hamburguer", label: "Hamburguer", icon: "burger" },
  { key: "massas", label: "Massas", icon: "pasta" },
  { key: "japones", label: "Japones", icon: "sushi" },
  { key: "acompanhamentos", label: "Acomp.", icon: "fries" },
  { key: "bebidas", label: "Bebidas", icon: "drink" },
  { key: "sobremesas", label: "Sobremesas", icon: "dessert" },
];

export const products: Product[] = [
  // COMBOS
  { id: 1, name: "Combo Familiar Mega", description: "2 Pizzas Grandes + 1 Refri 2L + 1 Batata Grande", price: 119.9, oldPrice: 149.9, category: "combos", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=400&fit=crop", rating: 4.9, time: "35-45 min", badge: "Mais Pedido" },
  { id: 2, name: "Combo Amigos", description: "1 Pizza Grande + 2 Refris 600ml + 1 Onion Rings", price: 79.9, oldPrice: 99.9, category: "combos", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop", rating: 4.8, time: "30-40 min", badge: "Economize" },
  { id: 3, name: "Combo Casal", description: "1 Pizza Media + 1 Refri 600ml + 1 Sobremesa", price: 64.9, category: "combos", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=400&fit=crop", rating: 4.7, time: "25-35 min" },

  // PIZZAS
  { id: 4, name: "Pizza Margherita", description: "Molho de tomate, mussarela, manjericao e azeite", price: 44.9, category: "pizzas", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&h=400&fit=crop", rating: 4.9, time: "25-35 min", calories: 850 },
  { id: 5, name: "Pizza Pepperoni", description: "Camada generosa de pepperoni com mussarela derretida", price: 49.9, category: "pizzas", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&h=400&fit=crop", rating: 4.8, time: "25-35 min", calories: 920, badge: "Popular" },
  { id: 6, name: "Pizza 4 Queijos", description: "Mussarela, gorgonzola, parmesao e provolone", price: 52.9, category: "pizzas", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=400&fit=crop", rating: 4.7, time: "25-35 min", calories: 980 },
  { id: 7, name: "Pizza Portuguesa", description: "Presunto, ovos, cebola, azeitonas, ervilha", price: 48.9, category: "pizzas", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=400&fit=crop", rating: 4.6, time: "25-35 min", calories: 870 },
  { id: 8, name: "Pizza Calabresa", description: "Calabresa fatiada, cebola roxa e azeitonas", price: 46.9, category: "pizzas", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=400&fit=crop", rating: 4.5, time: "25-35 min", calories: 830 },
  { id: 9, name: "Pizza Frango com Catupiry", description: "Frango desfiado, catupiry original e milho", price: 47.9, category: "pizzas", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=400&fit=crop", rating: 4.7, time: "25-35 min", calories: 860, badge: "Top" },
  { id: 10, name: "Pizza Vegetariana", description: "Berinjela, abobrinha, pimentao, cogumelos e rucula", price: 46.9, category: "pizzas", image: "https://images.unsplash.com/photo-1511689660979-10d2b1aada43?w=500&h=400&fit=crop", rating: 4.4, time: "25-35 min", calories: 720 },

  // HAMBURGUER
  { id: 11, name: "Smash Burger Duplo", description: "2 smash patties, cheddar, molho especial, pickles", price: 38.9, category: "hamburguer", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop", rating: 4.9, time: "20-30 min", calories: 780, badge: "Top" },
  { id: 12, name: "Bacon Cheddar Burger", description: "Angus 180g, bacon crocante, cheddar, maionese defumada", price: 42.9, category: "hamburguer", image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&h=400&fit=crop", rating: 4.8, time: "20-30 min", calories: 850 },
  { id: 13, name: "Mushroom Burger", description: "Blend 200g, cogumelos, queijo suico, molho trufado", price: 46.9, category: "hamburguer", image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&h=400&fit=crop", rating: 4.7, time: "20-30 min", calories: 820 },
  { id: 14, name: "Veggie Burger", description: "Hamburger de grao-de-bico, abacate, rucula", price: 36.9, category: "hamburguer", image: "https://images.unsplash.com/photo-1520072959219-c595a9b9e99b?w=500&h=400&fit=crop", rating: 4.5, time: "20-30 min", calories: 580 },

  // MASSAS
  { id: 15, name: "Fettuccine Alfredo", description: "Massa fresca, molho cremoso de parmesao e frango", price: 52.9, category: "massas", image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500&h=400&fit=crop", rating: 4.8, time: "25-35 min", calories: 750 },
  { id: 16, name: "Espaguete a Bolognesa", description: "Ragu tradicional de carne moida com molho de tomate", price: 44.9, category: "massas", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&h=400&fit=crop", rating: 4.7, time: "25-35 min", calories: 680 },
  { id: 17, name: "Lasanha della Nonna", description: "Camadas de massa, ragu, bechamel e queijo gratinado", price: 56.9, category: "massas", image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=500&h=400&fit=crop", rating: 4.9, time: "30-40 min", calories: 820, badge: "Chef" },
  { id: 18, name: "Penne ao Pesto", description: "Molho pesto genoves, tomates cereja e mussarela", price: 48.9, category: "massas", image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500&h=400&fit=crop", rating: 4.6, time: "25-35 min", calories: 640 },

  // JAPONES
  { id: 19, name: "Sushi 50 Pecas", description: "25 nigiris + 15 sashis + 10 hot rolls", price: 109.9, oldPrice: 139.9, category: "japones", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&h=400&fit=crop", rating: 4.9, time: "35-50 min", badge: "Promo" },
  { id: 20, name: "Hot Roll de Camarao", description: "8 pecas com cream cheese e molho tarutaru", price: 39.9, category: "japones", image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=500&h=400&fit=crop", rating: 4.7, time: "30-40 min", calories: 520 },
  { id: 21, name: "Temaki Salmão", description: "Cone de nori com salmao fresco e cream cheese", price: 22.9, category: "japones", image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=500&h=400&fit=crop", rating: 4.6, time: "20-30 min", calories: 320 },

  // ACOMPANHAMENTOS
  { id: 22, name: "Batata Frita", description: "Porcao generosa crocante com sal e maionese", price: 18.9, category: "acompanhamentos", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&h=400&fit=crop", rating: 4.5, time: "15-20 min", calories: 420 },
  { id: 23, name: "Batata com Cheddar e Bacon", description: "Batata frita com cheddar cremoso e bacon crocante", price: 26.9, category: "acompanhamentos", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&h=400&fit=crop", rating: 4.8, time: "15-20 min", calories: 580, badge: "Popular" },
  { id: 24, name: "Onion Rings", description: "Aneis de cebola empanados e crocantes", price: 20.9, category: "acompanhamentos", image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=500&h=400&fit=crop", rating: 4.4, time: "15-20 min", calories: 480 },

  // BEBIDAS
  { id: 25, name: "Coca-Cola 600ml", description: "Coca-Cola gelada", price: 8.9, category: "bebidas", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&h=400&fit=crop", rating: 4.5, time: "10-15 min" },
  { id: 26, name: "Suco Natural 500ml", description: "Laranja, limao, maracuja ou abacaxi", price: 12.9, category: "bebidas", image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500&h=400&fit=crop", rating: 4.3, time: "10-15 min" },
  { id: 27, name: "Milkshake Artesanal", description: "Nutella, Oreo, Morango ou Doce de Leite", price: 18.9, category: "bebidas", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&h=400&fit=crop", rating: 4.8, time: "10-15 min", badge: "Novo" },

  // SOBREMESAS
  { id: 28, name: "Brownie com Sorvete", description: "Brownie quente com sorvete e calda de caramelo", price: 28.9, category: "sobremesas", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&h=400&fit=crop", rating: 4.9, time: "15-20 min", calories: 650 },
  { id: 29, name: "Churros com Doce de Leite", description: "4 churros recheados com doce de leite", price: 22.9, category: "sobremesas", image: "https://images.unsplash.com/photo-1624371414361-e67082718add?w=500&h=400&fit=crop", rating: 4.7, time: "15-20 min", calories: 480, badge: "Delicia" },
  { id: 30, name: "Tiramisu", description: "Camadas de mascarpone, café e biscoito champanhe", price: 32.9, category: "sobremesas", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&h=400&fit=crop", rating: 4.8, time: "15-20 min", calories: 520 },
];
