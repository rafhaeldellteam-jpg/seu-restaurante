import { motion } from "framer-motion";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`flex items-center gap-3 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="23" stroke="url(#logoGrad)" strokeWidth="1.5" />
          <circle cx="24" cy="24" r="19" stroke="url(#logoGrad)" strokeWidth="0.5" opacity="0.4" />
          <path d="M16 32V18c0-1.5 1.2-2.7 2.7-2.7h3.6c1.5 0 2.7 1.2 2.7 2.7v14" stroke="url(#logoGrad)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M16 32h12" stroke="url(#logoGrad)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M28 24c2.5-0.5 4.5 0.5 5.5 2s0.5 3.5-0.5 5c-1 1.5-3 2.5-5.5 2" stroke="url(#logoGrad)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M30.5 18.5l1.5-2.5M33 21l2.5-1M33 26l2.5 1" stroke="url(#logoGrad)" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
          <defs>
            <linearGradient id="logoGrad" x1="4" y1="4" x2="44" y2="44">
              <stop stopColor="#e8d5b5" />
              <stop offset="0.5" stopColor="#c8a97e" />
              <stop offset="1" stopColor="#a8885a" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-display text-xl font-bold tracking-wider text-gradient leading-tight">
          SEU
        </span>
        <span className="font-display text-[0.65rem] tracking-[0.35em] text-text-secondary uppercase">
          Restaurante
        </span>
      </div>
    </motion.div>
  );
}

export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="23" stroke="url(#logoMarkGrad)" strokeWidth="1.5" />
      <path d="M16 32V18c0-1.5 1.2-2.7 2.7-2.7h3.6c1.5 0 2.7 1.2 2.7 2.7v14" stroke="url(#logoMarkGrad)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 32h12" stroke="url(#logoMarkGrad)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M28 24c2.5-0.5 4.5 0.5 5.5 2s0.5 3.5-0.5 5c-1 1.5-3 2.5-5.5 2" stroke="url(#logoMarkGrad)" strokeWidth="1.5" strokeLinecap="round" />
      <defs>
        <linearGradient id="logoMarkGrad" x1="4" y1="4" x2="44" y2="44">
          <stop stopColor="#e8d5b5" />
          <stop offset="0.5" stopColor="#c8a97e" />
          <stop offset="1" stopColor="#a8885a" />
        </linearGradient>
      </defs>
    </svg>
  );
}
