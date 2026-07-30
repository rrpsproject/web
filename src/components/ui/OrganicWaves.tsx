// Abstract placeholder decoration in the brand's wave motif.
// Swap for the final custom illustration when it's ready.
export default function OrganicWaves({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 500"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M-20 120C90 60 170 180 280 130S470 40 620 110"
        stroke="var(--color-teal)"
        strokeOpacity="0.35"
        strokeWidth="2"
      />
      <path
        d="M-20 200C100 140 190 260 300 210S480 120 620 190"
        stroke="var(--color-sage)"
        strokeOpacity="0.45"
        strokeWidth="2"
      />
      <path
        d="M-20 280C110 220 200 340 320 290S500 200 620 270"
        stroke="var(--color-navy)"
        strokeOpacity="0.25"
        strokeWidth="2"
      />
      <path
        d="M-20 360C120 300 210 420 330 370S510 280 620 350"
        stroke="var(--color-teal)"
        strokeOpacity="0.3"
        strokeWidth="2"
      />
      <circle cx="470" cy="150" r="46" fill="var(--color-navy)" fillOpacity="0.9" />
      <g stroke="#f7f5ef" strokeWidth="1.4" opacity="0.9">
        <circle cx="452" cy="138" r="2.4" fill="#f7f5ef" />
        <circle cx="472" cy="130" r="2.4" fill="#f7f5ef" />
        <circle cx="486" cy="150" r="2.4" fill="#f7f5ef" />
        <circle cx="468" cy="164" r="2.4" fill="#f7f5ef" />
        <circle cx="448" cy="158" r="2.4" fill="#f7f5ef" />
        <path d="M452 138 472 130M472 130 486 150M486 150 468 164M468 164 448 158M448 158 452 138M472 130 468 164" />
      </g>
    </svg>
  );
}
