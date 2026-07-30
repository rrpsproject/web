// Decorative skeletal structures of emblematic psychedelic molecules, drawn as
// thin gold line-art over the hero artwork. Purely ornamental — aria-hidden.
// Structures: DMT, psilocybin, mescaline, and LSD (ergoline).

// A benzene ring (pointy-top hexagon) with aromatic inner double bonds, drawn
// around a local origin so it can be composed into larger molecules.
function Benzene({ r = 18 }: { r?: number }) {
  const pts = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 180) * (60 * i - 90);
    return [r * Math.cos(a), r * Math.sin(a)] as const;
  });
  const poly = pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const inner = [0, 2, 4].map((i) => {
    const [x1, y1] = pts[i];
    const [x2, y2] = pts[(i + 1) % 6];
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    const k = 0.78;
    const ix = mx * 0.22;
    const iy = my * 0.22;
    return `M${(x1 * k + mx * (1 - k) - ix).toFixed(1)},${(y1 * k + my * (1 - k) - iy).toFixed(1)} L${(x2 * k + mx * (1 - k) - ix).toFixed(1)},${(y2 * k + my * (1 - k) - iy).toFixed(1)}`;
  });
  return (
    <>
      <polygon points={poly} />
      {inner.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </>
  );
}

// DMT (N,N-dimethyltryptamine): indole + ethyl-N(CH3)2 tail at C3.
function DMT() {
  return (
    <g>
      <g transform="translate(40 50)">
        <Benzene r={18} />
      </g>
      {/* fused pyrrole ring */}
      <path d="M55.6,41 L73,36 L82,50 L73,64 L55.6,59" fill="none" />
      <path d="M74.5,38.5 L80.5,48.5" />
      <text x="70.5" y="70" className="mol-label">
        N
      </text>
      {/* C3 → CH2-CH2-N(CH3)2 */}
      <path d="M73,36 L86,29 L100,35 L112,30" fill="none" />
      <path d="M112,30 L125,24" />
      <path d="M112,30 L117,43" />
      <text x="108" y="27" className="mol-label" textAnchor="end">
        N
      </text>
    </g>
  );
}

// Psilocybin: DMT + 4-phosphoryloxy group on the benzene ring.
function Psilocybin() {
  return (
    <g>
      <DMT />
      {/* C4 → O–P(=O)(OH)2 */}
      <path d="M40,32 L30,21" fill="none" />
      <text x="26" y="20" className="mol-label" textAnchor="end">
        O
      </text>
      <path d="M25,17 L15,20" fill="none" />
      <text x="12" y="21" className="mol-label" textAnchor="end">
        P
      </text>
      <path d="M13,15 L7,5" fill="none" />
      <text x="6" y="4" className="mol-label" textAnchor="end">
        O
      </text>
      <path d="M10,23 L2,31" fill="none" />
      <text x="0" y="39" className="mol-label" textAnchor="end">
        OH
      </text>
      <path d="M16,25 L19,38" fill="none" />
      <text x="15" y="47" className="mol-label">
        OH
      </text>
    </g>
  );
}

// Mescaline (3,4,5-trimethoxyphenethylamine): benzene + 3 methoxy + ethylamine.
function Mescaline() {
  return (
    <g>
      <g transform="translate(34 46)">
        <Benzene r={16} />
      </g>
      {/* ring vertices around (34,46), r16, pointy-top:
          top(34,30) ur(47.9,38) lr(47.9,54) bot(34,62) ll(20.1,54) ul(20.1,38) */}
      {/* ethylamine at C1 (bottom) */}
      <path d="M34,62 L34,77 L48,84 L58,78" fill="none" />
      <text x="60" y="77" className="mol-label">
        NH₂
      </text>
      {/* 3-methoxy (ul) */}
      <path d="M20.1,38 L8,31" fill="none" />
      <text x="6" y="30" className="mol-label" textAnchor="end">
        O
      </text>
      <path d="M4,29 L-6,23" fill="none" />
      {/* 4-methoxy (top) */}
      <path d="M34,30 L34,15" fill="none" />
      <text x="34" y="11" className="mol-label" textAnchor="middle">
        O
      </text>
      <path d="M37,10 L48,4" fill="none" />
      {/* 5-methoxy (ur) */}
      <path d="M47.9,38 L60,31" fill="none" />
      <text x="62" y="30" className="mol-label">
        O
      </text>
      <path d="M66,29 L76,23" fill="none" />
    </g>
  );
}

// LSD (lysergic acid diethylamide): ergoline tetracycle + N-CH3 + diethylamide.
function LSD() {
  return (
    <g>
      {/* benzene (ring A) */}
      <polygon points="37,67 50,74.5 50,89.5 37,97 24,89.5 24,74.5" />
      <path d="M35,70 L26,75.5" />
      <path d="M35,94 L26,88.5" />
      {/* fused pyrrole (ring B) with N1-H */}
      <path d="M50,74.5 L66,70 L75,82 L66,94 L50,89.5" fill="none" />
      <path d="M67,72.5 L73,81" />
      <text x="63" y="99" className="mol-label">
        N
      </text>
      {/* ring C (peri-fused at C3a) */}
      <path d="M37,67 L35,51 L51,45 L67,54 L66,70" fill="none" />
      {/* C9=C10 double bond */}
      <path d="M53,46.5 L65,53" />
      {/* ring D (piperidine) sharing C5–C10 */}
      <path d="M51,45 L50,29 L64,21 L80,28 L82,44 L67,54" fill="none" />
      {/* N6 methyl */}
      <text x="46" y="27" className="mol-label" textAnchor="end">
        N
      </text>
      <path d="M50,29 L37,22" fill="none" />
      {/* C8 → C(=O)N(C2H5)2 */}
      <path d="M80,28 L94,20" fill="none" />
      <path d="M92,19 L86,7" />
      <text x="94" y="6" className="mol-label" textAnchor="middle">
        O
      </text>
      <path d="M94,20 L108,26" fill="none" />
      <text x="110" y="24" className="mol-label">
        N
      </text>
      <path d="M110,29 L112,43 L126,49" fill="none" />
      <path d="M118,24 L124,13 L138,17" fill="none" />
    </g>
  );
}

// Scattered placements — complex molecules (LSD, psilocybin) on the left,
// simpler ones (DMT, mescaline) on the right. Each has its own glow duration
// and delay (irregular values) so they pulse randomly, never in sync.
type Placement = {
  M: () => React.ReactElement;
  transform: string;
  dur: number;
  delay: number;
};
const scatter: Placement[] = [
  { M: Psilocybin, transform: "translate(85 175) rotate(-6) scale(0.85)", dur: 7.3, delay: -1.2 },
  { M: LSD, transform: "translate(60 400) rotate(5) scale(0.9)", dur: 8.6, delay: -4.5 },
  { M: LSD, transform: "translate(505 330) rotate(-4) scale(0.9)", dur: 6.1, delay: -0.4 },
  { M: Psilocybin, transform: "translate(600 435) rotate(6) scale(0.85)", dur: 9.0, delay: -5.8 },
  { M: DMT, transform: "translate(720 300) rotate(4) scale(0.95)", dur: 5.6, delay: -2.9 },
  { M: Mescaline, transform: "translate(955 160) rotate(8) scale(0.9)", dur: 7.9, delay: -6.7 },
  { M: DMT, transform: "translate(1035 265) rotate(-6) scale(0.9)", dur: 6.8, delay: -3.6 },
  { M: Mescaline, transform: "translate(1055 430) rotate(-8) scale(0.85)", dur: 8.2, delay: -1.9 },
];

export default function MoleculeOverlay({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1240 620"
      preserveAspectRatio="xMaxYMid slice"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="var(--color-amber)"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <style>{`
        .mol-label {
          font-family: var(--font-sans), sans-serif;
          font-size: 9px;
          fill: var(--color-amber);
          stroke: none;
        }
        polygon, path { vector-effect: non-scaling-stroke; }
        @keyframes molGlow {
          0%, 100% { opacity: 0.3;  filter: drop-shadow(0 0 1px rgba(224,142,43,0.15)); }
          50%      { opacity: 0.75; filter: drop-shadow(0 0 6px rgba(224,142,43,0.55)); }
        }
        .mol { animation: molGlow 7s ease-in-out infinite; animation-fill-mode: both; }
        @media (prefers-reduced-motion: reduce) {
          .mol { animation: none; opacity: 0.7; }
        }
      `}</style>

      <g data-mol>
        {scatter.map(({ M, transform, dur, delay }, i) => (
          <g
            key={i}
            className="mol"
            transform={transform}
            style={{ animationDuration: `${dur}s`, animationDelay: `${delay}s` }}
          >
            <M />
          </g>
        ))}
      </g>
    </svg>
  );
}
