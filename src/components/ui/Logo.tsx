export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22" fill="#ff6b35" fillOpacity="0.15" stroke="#ff6b35" strokeWidth="2"/>
        <path d="M16 32V18c0-1.5 1.2-2.7 2.7-2.7h3.6c1.5 0 2.7 1.2 2.7 2.7v14" stroke="#ff6b35" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 32h12" stroke="#ff6b35" strokeWidth="2" strokeLinecap="round"/>
        <path d="M28 24c2.5-0.5 4.5 0.5 5.5 2s0.5 3.5-0.5 5c-1 1.5-3 2.5-5.5 2" stroke="#ff6b35" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
  );
}
