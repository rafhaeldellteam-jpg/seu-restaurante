import { motion } from "framer-motion";
import { Logo } from "../ui/Logo";
import { MapPinIcon, PhoneIcon, ClockIcon, InstagramIcon, FacebookIcon } from "../icons/Icons";

export function Footer() {
  return (
    <footer id="contact" className="relative bg-surface border-t border-primary/10">
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-light/30 to-surface pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Logo className="mb-6" />
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Uma experiencia gastronomica unica que combina sabores tradicionais com
              toques modernos. Cada prato e criado com paixao e ingredientes selecionados.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2.5 rounded-full glass-card text-text-secondary hover:text-primary hover:border-primary/30 transition-all duration-300">
                <InstagramIcon size={18} />
              </a>
              <a href="#" className="p-2.5 rounded-full glass-card text-text-secondary hover:text-primary hover:border-primary/30 transition-all duration-300">
                <FacebookIcon size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display text-lg text-text-primary mb-6">Horarios</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 text-text-secondary">
                <ClockIcon size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-text-primary font-medium">Seg - Sex</p>
                  <p>12:00 - 15:00 / 19:00 - 23:00</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-text-secondary">
                <ClockIcon size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-text-primary font-medium">Sab - Dom</p>
                  <p>12:00 - 16:00 / 18:00 - 00:00</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display text-lg text-text-primary mb-6">Contato</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 text-text-secondary">
                <MapPinIcon size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <p>Rua Augusta, 1200 - Consolacao<br />Sao Paulo - SP, 01305-100</p>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <PhoneIcon size={16} className="text-primary flex-shrink-0" />
                <p>(11) 3256-8800</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-display text-lg text-text-primary mb-6">Reservas</h4>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              Para reservas, entre em contato pelo telefone ou envie uma mensagem.
              Grupos acima de 8 pessoas, reserves com 48h de antecedencia.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors text-sm font-medium"
            >
              Fazer reserva
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary/10 text-center text-text-muted text-xs tracking-wider">
          <p>&copy; 2026 Seu Restaurante. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
