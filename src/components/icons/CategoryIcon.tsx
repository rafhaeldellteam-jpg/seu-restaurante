interface CategoryIconProps {
  type: string;
  size?: number;
  className?: string;
}

export function CategoryIcon({ type, size: _size, className = "" }: CategoryIconProps) {
  const icons: Record<string, React.ReactNode> = {
    combo: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path d="M3 11h18M5 11V6a2 2 0 012-2h10a2 2 0 012 2v5M4 11v5a2 2 0 002 2h12a2 2 0 002-2v-5M12 4v14" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    pizza: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 3v9l7.8 4.5M12 12L4.2 7.5" strokeLinecap="round"/>
        <circle cx="9" cy="9" r="1" fill="currentColor"/>
        <circle cx="14" cy="10" r="1" fill="currentColor"/>
        <circle cx="11" cy="14" r="1" fill="currentColor"/>
      </svg>
    ),
    burger: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path d="M5 13h14a1 1 0 011 1v1a3 3 0 01-3 3H7a3 3 0 01-3-3v-1a1 1 0 011-1z" strokeLinecap="round"/>
        <path d="M4 13a8 8 0 0116 0" strokeLinecap="round"/>
        <path d="M6 10h12" strokeLinecap="round"/>
        <path d="M7 7h10a1 1 0 011 1v1H6V8a1 1 0 011-1z"/>
      </svg>
    ),
    pasta: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path d="M4 16c0 2.2 1.8 4 4 4h8a4 4 0 004-4V8" strokeLinecap="round"/>
        <path d="M8 12c0-3 2-6 4-6s4 3 4 6" strokeLinecap="round"/>
        <path d="M6 12c1-2 2-3 3-3M18 12c-1-2-2-3-3-3" strokeLinecap="round"/>
      </svg>
    ),
    sushi: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <ellipse cx="12" cy="14" rx="8" ry="5"/>
        <path d="M6 11c1.5-2 3.5-3 6-3s4.5 1 6 3" strokeLinecap="round"/>
        <circle cx="10" cy="14" r="1" fill="currentColor"/>
        <circle cx="14" cy="14" r="1" fill="currentColor"/>
      </svg>
    ),
    fries: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path d="M7 8v10a3 3 0 003 3h4a3 3 0 003-3V8" strokeLinecap="round"/>
        <path d="M9 8V5a1 1 0 011-1h0a1 1 0 011 1v3M13 8V5a1 1 0 011-1h0a1 1 0 011 1v3M7 8h10" strokeLinecap="round"/>
      </svg>
    ),
    drink: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path d="M8 2h8l-1 16H9L8 2z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 2h12" strokeLinecap="round"/>
        <path d="M10 18h4v3h-4z"/>
        <path d="M15 6c1 1 2 2 1 4" strokeLinecap="round"/>
      </svg>
    ),
    dessert: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path d="M8 20h8M9 16h6M10 12h4" strokeLinecap="round"/>
        <path d="M12 2c-2 0-4 2-4 4s2 3 4 3 4-1 4-3-2-4-4-4z"/>
        <path d="M12 9v3" strokeLinecap="round"/>
        <circle cx="12" cy="5" r="1" fill="currentColor"/>
      </svg>
    ),
  };

  return <>{icons[type] || null}</>;
}
