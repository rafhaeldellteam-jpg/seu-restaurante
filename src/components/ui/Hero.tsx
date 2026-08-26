import { motion } from "framer-motion";
import { ArrowRightIcon, StarIcon, AwardIcon, SparklesIcon } from "../icons/Icons";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />

      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 mb-8"
          >
            <div className="flex items-center gap-1 px-4 py-2 rounded-full glass-card text-primary text-xs tracking-widest uppercase">
              <SparklesIcon size={14} />
              <span>Experiencia Gastronomica</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.95] mb-8"
          >
            <span className="text-text-primary">Onde cada</span>
            <br />
            <span className="text-gradient">sabor conta</span>
            <br />
            <span className="text-text-primary">uma historia</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-text-secondary text-lg sm:text-xl max-w-xl mb-12 leading-relaxed"
          >
            Ingredientes frescos, tecnicas refinadas e um ambiente que te faz
            sentir em casa. Descubra o que faz da nossa cozinha algo especial.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a
              href="#menu"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-secondary font-semibold rounded-full hover:bg-primary-light transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              Ver Cardapio
              <ArrowRightIcon size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-3 px-8 py-4 glass-card text-text-primary font-semibold rounded-full hover:border-primary/30 transition-all duration-300"
            >
              Nossa Historia
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-8"
          >
            {[
              { icon: <StarIcon size={16} className="text-primary" />, value: "4.9", label: "Avaliacao" },
              { icon: <AwardIcon size={16} className="text-primary" />, value: "15+", label: "Anos" },
              { icon: <SparklesIcon size={16} className="text-primary" />, value: "50k+", label: "Clientes" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                {stat.icon}
                <div>
                  <span className="text-text-primary font-bold text-lg">{stat.value}</span>
                  <span className="text-text-muted text-sm ml-2">{stat.label}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent" />
    </section>
  );
}
