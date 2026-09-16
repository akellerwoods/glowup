/**
 * The brand's four-point sparkles, scattered in the field at 20–60 px.
 * Decorative only; kept to the margins so they never overlap type.
 */
const SPOTS = [
  { left: "6%", top: "22%", size: 28, opacity: 0.85 },
  { left: "93%", top: "14%", size: 48, opacity: 0.9 },
  { left: "10%", top: "80%", size: 18, opacity: 0.55 },
  { left: "89%", top: "68%", size: 22, opacity: 0.5 },
  { left: "82%", top: "36%", size: 14, opacity: 0.65 },
  { left: "15%", top: "50%", size: 12, opacity: 0.45 },
];

export function Sparkles() {
  return (
    <div
      aria-hidden
      className="text-gold pointer-events-none absolute inset-0 hidden md:block"
    >
      {SPOTS.map((s, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          style={{
            position: "absolute",
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
          }}
        >
          <path
            d="M12 0C12.6 7.2 16.8 11.4 24 12C16.8 12.6 12.6 16.8 12 24C11.4 16.8 7.2 12.6 0 12C7.2 11.4 11.4 7.2 12 0Z"
            fill="currentColor"
          />
        </svg>
      ))}
    </div>
  );
}
