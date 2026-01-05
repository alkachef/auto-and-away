const DusseldorfTowerIcon = ({ className = "w-6 h-6" }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      {/* Tower base */}
      <path d="M10 22V18H14V22" />
      {/* Main tower shaft */}
      <path d="M11 18V10H13V18" />
      {/* Observation deck (bulge) */}
      <ellipse cx="12" cy="9" rx="3" ry="1.5" />
      {/* Upper deck */}
      <ellipse cx="12" cy="7.5" rx="2" ry="0.8" />
      {/* Antenna base */}
      <path d="M11.5 7V5H12.5V7" />
      {/* Antenna spire */}
      <path d="M12 5V2" />
      {/* Antenna top */}
      <circle cx="12" cy="2" r="0.5" fill="currentColor" />
    </svg>
  );
};

export default DusseldorfTowerIcon;
