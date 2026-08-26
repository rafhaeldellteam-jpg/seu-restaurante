interface CategoryIconProps {
  type: string;
  size?: number;
  className?: string;
}

export function CategoryIcon({ type, size = 28, className = "" }: CategoryIconProps) {
  const icons: Record<string, React.ReactNode> = {
    combo: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    hamburguer: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M3 11h18c0-2.8-2.2-5-5-5H8c-2.8 0-5 2.2-5 5z" fill="currentColor" fillOpacity="0.1" />
        <path d="M3 11c0 1 .5 2 1 2.5C4.5 14 5 15 5 16h14c0-1 .5-2 1-2.5.5-.5 1-1.5 1-2.5" />
        <path d="M5 16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-0H5v0z" />
        <line x1="4" y1="14" x2="20" y2="14" />
        <line x1="4" y1="12.5" x2="20" y2="12.5" strokeDasharray="2 2" />
      </svg>
    ),
    pizza: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
        <path d="M12 2v10l8.7 5" />
        <circle cx="9" cy="14" r="1" fill="currentColor" />
        <circle cx="14" cy="11" r="1" fill="currentColor" />
        <circle cx="10" cy="8" r="0.7" fill="currentColor" />
      </svg>
    ),
    japones: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M2 18h20" />
        <path d="M2 16c3-4 6-2 8-6s3-6 8-4c3 1 4 6 4 10" />
        <line x1="6" y1="19" x2="6" y2="22" />
        <line x1="18" y1="19" x2="18" y2="22" />
        <line x1="4" y1="22" x2="8" y2="22" />
        <line x1="16" y1="22" x2="20" y2="22" />
      </svg>
    ),
    lanche: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M4 15h16c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4z" fill="currentColor" fillOpacity="0.1" />
        <path d="M4 15V9c0-1.7 1.3-3 3-3h10c1.7 0 3 1.3 3 3v6" />
        <path d="M4 15c0-1 1-2 2-2h12c1 0 2 1 2 2" />
        <circle cx="12" cy="6" r="1" />
      </svg>
    ),
    churrasco: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M6 4v16" />
        <path d="M6 8c4-2 6 2 10 0" />
        <rect x="10" y="6" width="10" height="6" rx="2" fill="currentColor" fillOpacity="0.1" />
        <path d="M12 18c-2 0-3-1-3-3" />
        <path d="M16 18c2 0 3-1 3-3" />
      </svg>
    ),
    pastel: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M4 12c0-4 3.6-8 8-8s8 4 8 8c0 2-1 4-2 5H6c-1-1-2-3-2-5z" fill="currentColor" fillOpacity="0.1" />
        <path d="M8 17c-1 0-2 1-2 2h12c0-1-1-2-2-2" />
        <path d="M10 4c1 2 3 2 4 0" />
      </svg>
    ),
    arabe: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 2C8 2 5 5 5 9c0 2 1 4 2 5l-1 6h12l-1-6c1-1 2-3 2-5 0-4-3-7-7-7z" fill="currentColor" fillOpacity="0.1" />
        <path d="M9 14h6" />
        <path d="M12 2v4" />
        <path d="M10 6c1 1 3 1 4 0" />
      </svg>
    ),
    acai: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M7 8h10l-1 12H8L7 8z" fill="currentColor" fillOpacity="0.1" />
        <path d="M7 8c0-2 2-4 5-4s5 2 5 4" />
        <path d="M9 12c1-1 3-1 4 0" />
        <circle cx="11" cy="15" r="0.7" fill="currentColor" />
        <circle cx="13" cy="13" r="0.7" fill="currentColor" />
      </svg>
    ),
    acompanhamento: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M4 17c0 2 2 4 8 4s8-2 8-4" />
        <path d="M4 17V9c0-1 1-2 2-2h12c1 0 2 1 2 2v8" />
        <line x1="8" y1="11" x2="8" y2="11.01" />
        <line x1="12" y1="10" x2="12" y2="10.01" />
        <line x1="16" y1="11" x2="16" y2="11.01" />
      </svg>
    ),
    bebida: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M8 2h8l-1 16H9L8 2z" fill="currentColor" fillOpacity="0.1" />
        <path d="M8 2c0 2 1 3 2 3" />
        <path d="M16 2c0 2-1 3-2 3" />
        <path d="M7 18h10" />
        <path d="M6 21h12" />
        <line x1="9" y1="10" x2="15" y2="10" />
      </svg>
    ),
    sobremesa: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M5 12h14l-1 8H6l-1-8z" fill="currentColor" fillOpacity="0.1" />
        <path d="M5 12c0-3 3-6 7-6s7 3 7 6" />
        <path d="M12 6v-2" />
        <circle cx="12" cy="3" r="1" fill="currentColor" />
      </svg>
    ),
  };

  return icons[type] || icons["lanche"];
}
