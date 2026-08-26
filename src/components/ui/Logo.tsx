interface LogoProps {
  dark?: boolean;
}

export function Logo({ dark = false }: LogoProps) {
  const textColor = dark ? "text-white" : "text-text-primary";

  return (
    <div className="flex items-center gap-2.5 flex-shrink-0">
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="23" fill="white" fillOpacity="0.2" />
        <path d="M16 32V18c0-1.5 1.2-2.7 2.7-2.7h3.6c1.5 0 2.7 1.2 2.7 2.7v14" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 32h12" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M28 24c2.5-0.5 4.5 0.5 5.5 2s0.5 3.5-0.5 5c-1 1.5-3 2.5-5.5 2" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="16" r="2" fill="white" fillOpacity="0.5" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className={`text-lg font-bold tracking-tight ${textColor}`}>
          Seu Restaurante
        </span>
        {!dark && (
          <span className="text-[10px] tracking-[0.2em] text-text-muted uppercase">
            Delivery & Cia
          </span>
        )}
      </div>
    </div>
  );
}
