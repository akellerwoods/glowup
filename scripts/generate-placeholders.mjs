/**
 * Generates warm-toned SVG placeholder art in public/images.
 * Each file is named so a real photo (same basename, .jpg/.webp) can replace it 1:1.
 * Run: npm run images:placeholders
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const out = (p) => join(process.cwd(), "public", "images", p);
mkdirSync(out("transformations"), { recursive: true });
mkdirSync(out("events"), { recursive: true });

// Warm palettes that flatter the gold accent
const palettes = [
  ["#3a2a12", "#8a5a1e", "#c9a227"],
  ["#241a10", "#6b4a26", "#b9862e"],
  ["#2b1d14", "#7a4b2a", "#d9a441"],
  ["#1f1a14", "#5a4630", "#c9a227"],
  ["#33210f", "#9a6a2a", "#e8cc6b"],
  ["#1a1410", "#4e3a25", "#a9832b"],
];

// Simple sitting-dog silhouette (viewBox 0 0 100 100)
const DOG =
  "M62 22c4-6 10-8 15-6 2 5 1 10-2 14 5 5 6 12 4 20l-2 8c-1 5-1 9 1 13l3 6c1 2 0 4-2 4h-9c-2 0-3-1-3-3l-1-9-11-2-3 10c0 2-2 4-4 4h-8c-2 0-3-2-2-4l4-8c-8-1-14-6-16-14-2-9 3-18 12-21 8-3 16-2 22 2 2-6 6-10 12-12l-10 0z";

function svg({ w, h, palette, seed, label, dog = true, big = false }) {
  const [a, b, c] = palette;
  const r = (n) => {
    // deterministic pseudo random
    const x = Math.sin(seed * 9301 + n * 49297) * 233280;
    return x - Math.floor(x);
  };
  const blobs = Array.from({ length: 5 }, (_, i) => {
    const cx = (r(i) * w).toFixed(0);
    const cy = (r(i + 7) * h).toFixed(0);
    const rad = ((0.25 + r(i + 13) * 0.35) * Math.max(w, h)).toFixed(0);
    return `<circle cx="${cx}" cy="${cy}" r="${rad}" fill="${i % 2 ? b : c}" opacity="${(0.12 + r(i + 21) * 0.2).toFixed(2)}"/>`;
  }).join("");
  const scale = big ? Math.min(w, h) * 0.55 : Math.min(w, h) * 0.5;
  const tx = w / 2 - scale / 2;
  const ty = h / 2 - scale / 2 + (big ? h * 0.05 : 0);
  const dogEl = dog
    ? `<g transform="translate(${tx.toFixed(0)} ${ty.toFixed(0)}) scale(${(scale / 100).toFixed(3)})" opacity="0.28"><path d="${DOG}" fill="#0a0a0a"/></g>`
    : "";
  const text = label
    ? `<text x="${w / 2}" y="${h - Math.max(24, h * 0.05)}" text-anchor="middle" font-family="Georgia, serif" font-size="${Math.max(14, Math.min(w, h) * 0.045)}" fill="#f5f2ea" opacity="0.55" letter-spacing="2">${label}</text>`
    : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
<defs>
  <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="${a}"/>
    <stop offset="0.6" stop-color="${b}"/>
    <stop offset="1" stop-color="${c}"/>
  </linearGradient>
  <radialGradient id="v" cx="0.5" cy="0.5" r="0.75">
    <stop offset="0.5" stop-color="#000" stop-opacity="0"/>
    <stop offset="1" stop-color="#000" stop-opacity="0.55"/>
  </radialGradient>
  <filter id="blur"><feGaussianBlur stdDeviation="${Math.max(w, h) * 0.06}"/></filter>
</defs>
<rect width="${w}" height="${h}" fill="url(#g)"/>
<g filter="url(#blur)">${blobs}</g>
${dogEl}
<rect width="${w}" height="${h}" fill="url(#v)"/>
${text}
</svg>`;
}

// Sample before/after pairs for the transformation gallery
for (let i = 1; i <= 5; i++) {
  writeFileSync(
    out(`transformations/sample-${i}-before.svg`),
    svg({
      w: 1200,
      h: 900,
      palette: ["#1a1410", "#3a2a1a", "#5a4630"],
      seed: 300 + i,
      label: "BEFORE (SAMPLE)",
    }),
  );
  writeFileSync(
    out(`transformations/sample-${i}-after.svg`),
    svg({
      w: 1200,
      h: 900,
      palette: palettes[i % palettes.length],
      seed: 400 + i,
      label: "AFTER (SAMPLE)",
    }),
  );
}

const events = [
  "adoption-day",
  "yappy-hour",
  "5k",
  "gala",
  "foster-orientation",
  "holiday-market",
];
events.forEach((slug, i) =>
  writeFileSync(
    out(`events/${slug}.svg`),
    svg({ w: 1200, h: 800, palette: palettes[(i + 2) % palettes.length], seed: 200 + i }),
  ),
);

writeFileSync(
  out("hero.svg"),
  svg({ w: 2400, h: 1600, palette: palettes[0], seed: 1, big: true }),
);
writeFileSync(
  out("about-story.svg"),
  svg({ w: 1600, h: 1200, palette: palettes[2], seed: 3 }),
);
writeFileSync(
  out("foster.svg"),
  svg({ w: 1400, h: 1600, palette: palettes[1], seed: 4 }),
);
writeFileSync(
  out("volunteer.svg"),
  svg({ w: 1600, h: 1100, palette: palettes[3], seed: 5 }),
);
writeFileSync(
  out("donate.svg"),
  svg({ w: 1400, h: 1600, palette: palettes[5], seed: 6 }),
);
writeFileSync(
  out("not-found.svg"),
  svg({ w: 1400, h: 1400, palette: palettes[4], seed: 7, big: true }),
);
writeFileSync(
  out("cta.svg"),
  svg({ w: 2400, h: 1200, palette: palettes[2], seed: 8, big: true }),
);

console.log(
  "placeholder images written to public/images (page heroes are pre-rasterized JPGs; leave those)",
);
