import { motion } from "framer-motion";
import { UtensilsIcon, FlameIcon, LeafIcon } from "../icons/Icons";

const features = [
  {
    icon: <UtensilsIcon size={28} />,
    title: "Cozinha Artesanal",
    description: "Cada prato e preparado do zero, com tecnicas tradicionais aprimoradas ao longo de anos.",
  },
  {
    icon: <FlameIcon size={28} />,
    title: "Fogo & Sabor",
    description: "Grelha a carvao, forno a lenha e defumacao artesanal para sabores inesqueciveis.",
  },
  {
    icon: <LeafIcon size={28} />,
    title: "Ingredientes Frescos",
    description: "Selecionamos pessoalmente cada ingrediente, priorizando produtores locais e organicos.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-light/20 to-surface" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-xs tracking-[0.3em] uppercase mb-4"
          >
            Nossa Filosofia
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-text-primary mb-6"
          >
            Feito com <span className="text-gradient">propósito</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary max-w-2xl mx-auto text-lg"
          >
            Acreditamos que a boa comida vai alem do prato. Ela cria memorias,
            conecta pessoas e transforma momentos simples em experiencias memoraveis.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group p-8 rounded-2xl glass-card card-hover text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
