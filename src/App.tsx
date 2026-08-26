import { useState } from "react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/ui/Hero";
import { About } from "./components/ui/About";
import { MenuSection } from "./components/menu/MenuSection";
import { Cart } from "./components/cart/Cart";
import { Checkout } from "./components/checkout/Checkout";

export default function App() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <div className="grain-overlay min-h-screen bg-surface">
      <Header />
      <Hero />
      <About />
      <MenuSection />
      <Footer />
      <Cart onCheckout={() => setCheckoutOpen(true)} />
      <Checkout isOpen={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
    </div>
  );
}
