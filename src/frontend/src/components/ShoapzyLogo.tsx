interface LogoProps {
  className?: string;
  size?: number;
  /** "light" = white text (for dark/blue bg), "dark" = dark text (for white bg) */
  variant?: "light" | "dark";
}

/**
 * ShoapzyIcon — just the icon mark (shopping bag with S, suitable for favicon / small badges)
 */
export function ShoapzyIcon({ className = "", size = 40 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Shoapzy icon"
      role="img"
    >
      {/* Bag body */}
      <rect x="5" y="14" width="30" height="22" rx="4" fill="#fb641b" />

      {/* Bag handles */}
      <path
        d="M14 14 C14 8 26 8 26 14"
        stroke="#2874f0"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* White S letter in center of bag */}
      <text
        x="20"
        y="30"
        textAnchor="middle"
        fontSize="15"
        fontWeight="900"
        fontFamily="Arial, Helvetica, sans-serif"
        fill="white"
        letterSpacing="-0.5"
      >
        S
      </text>

      {/* Small sparkle top-right */}
      <g transform="translate(28, 8)">
        <circle cx="0" cy="0" r="1.5" fill="#2874f0" />
        <circle cx="3.5" cy="-2" r="1" fill="#2874f0" opacity="0.7" />
        <circle cx="2" cy="3" r="0.8" fill="#2874f0" opacity="0.5" />
      </g>
    </svg>
  );
}

/**
 * ShoapzyLogo — full brand logo: icon + wordmark.
 * Use variant="light" on blue backgrounds, variant="dark" on white backgrounds.
 */
export function ShoapzyLogo({
  className = "",
  size = 40,
  variant = "light",
}: LogoProps) {
  const textColor = variant === "light" ? "#ffffff" : "#212121";
  const subColor = variant === "light" ? "#93c5fd" : "#6b7280";
  const wordWidth = size * 3.6;
  const totalWidth = size + 8 + wordWidth;

  return (
    <svg
      width={totalWidth}
      height={size}
      viewBox={`0 0 ${totalWidth} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Shoapzy"
      role="img"
    >
      {/* ── Icon mark ── */}
      {/* Bag body */}
      <rect
        x="2"
        y={size * 0.32}
        width={size - 4}
        height={size * 0.6}
        rx="4"
        fill="#fb641b"
      />

      {/* Bag handles */}
      <path
        d={`M${size * 0.3} ${size * 0.32} C${size * 0.3} ${size * 0.08} ${size * 0.7} ${size * 0.08} ${size * 0.7} ${size * 0.32}`}
        stroke="#2874f0"
        strokeWidth={size * 0.075}
        strokeLinecap="round"
        fill="none"
      />

      {/* S letter on bag */}
      <text
        x={size / 2}
        y={size * 0.78}
        textAnchor="middle"
        fontSize={size * 0.38}
        fontWeight="900"
        fontFamily="Arial Black, Arial, Helvetica, sans-serif"
        fill="white"
      >
        S
      </text>

      {/* Sparkle dots near top of handles */}
      <circle
        cx={size * 0.78}
        cy={size * 0.08}
        r={size * 0.045}
        fill="#2874f0"
      />
      <circle
        cx={size * 0.88}
        cy={size * 0.04}
        r={size * 0.03}
        fill="#2874f0"
        opacity="0.7"
      />
      <circle
        cx={size * 0.84}
        cy={size * 0.16}
        r={size * 0.025}
        fill="#2874f0"
        opacity="0.5"
      />

      {/* ── Wordmark ── */}
      {/* "Shoapzy" bold text */}
      <text
        x={size + 8}
        y={size * 0.65}
        fontSize={size * 0.48}
        fontWeight="800"
        fontFamily="Arial Black, Arial, Helvetica, sans-serif"
        fill={textColor}
        letterSpacing="-0.5"
      >
        Shoapzy
      </text>

      {/* Tagline under wordmark */}
      <text
        x={size + 9}
        y={size * 0.88}
        fontSize={size * 0.2}
        fontWeight="500"
        fontFamily="Arial, Helvetica, sans-serif"
        fill={subColor}
        letterSpacing="0.5"
      >
        India's Smart Bazaar
      </text>
    </svg>
  );
}

export default ShoapzyLogo;
