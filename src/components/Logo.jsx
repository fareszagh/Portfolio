// FZ monogram: the F's top bar runs straight into the Z, drawn as one line
// inside a hexagon, ending in a glowing "agent" node.
export default function Logo({ size = 34 }) {
  return (
    <svg className="logo-mark" width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      <defs>
        <linearGradient id="fz-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      <path
        className="logo-mark__hex"
        d="M20 2.5 35.2 11.25v17.5L20 37.5 4.8 28.75v-17.5z"
        fill="rgba(34,211,238,0.06)"
        stroke="url(#fz-grad)"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        className="logo-mark__line"
        d="M11.5 28V12.5h17L17 27.5h11.5M11.5 20h6"
        fill="none"
        stroke="url(#fz-grad)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle className="logo-mark__node" cx="28.5" cy="27.5" r="2.4" fill="#34d399" />
    </svg>
  );
}
