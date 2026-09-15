"use client";

import { motion, useReducedMotion } from "framer-motion";
import { impact } from "@/content/impact";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { StatCounter } from "@/components/ui/StatCounter";
import { formatDate } from "@/lib/utils";

function Ring({ value, max, delay = 0 }: { value: number; max: number; delay?: number }) {
  const reduce = useReducedMotion();
  const r = 54;
  const c = 2 * Math.PI * r;
  const pct = max > 0 ? Math.min(1, value / max) : 0;
  return (
    <svg viewBox="0 0 120 120" className="h-28 w-28 -rotate-90" aria-hidden>
      <circle
        cx="60"
        cy="60"
        r={r}
        fill="none"
        stroke="rgba(10,10,10,0.1)"
        strokeWidth="2"
      />
      <motion.circle
        cx="60"
        cy="60"
        r={r}
        fill="none"
        stroke="#c9a227"
        strokeWidth="2.5"
        strokeLinecap="butt"
        strokeDasharray={c}
        initial={{ strokeDashoffset: c }}
        whileInView={{ strokeDashoffset: c * (1 - pct) }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={{ duration: reduce ? 0 : 2, ease: [0.16, 1, 0.3, 1], delay }}
      />
    </svg>
  );
}

export function ImpactTracker() {
  const weeks = Math.max(
    1,
    Math.floor(
      (Date.parse(impact.updatedAt) - Date.parse(impact.since)) / (7 * 24 * 3600 * 1000),
    ),
  );
  const tiles = [
    {
      label: "Glow-Ups",
      value: impact.glowUps,
      note: "Dogs professionally groomed",
      max: impact.glowUps,
    },
    {
      label: "Placed",
      value: impact.placed,
      note: "Adopted or rescued into homes",
      max: impact.glowUps,
    },
    {
      label: "In Foster",
      value: impact.inFoster,
      note: "Recovering in a home instead of at Dallas Animal Services",
      max: impact.glowUps,
    },
  ];

  return (
    <section className="on-light bg-cream text-black" aria-labelledby="impact-heading">
      <Container className="py-20 sm:py-28">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <Eyebrow>Impact tracker</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                id="impact-heading"
                className="font-display text-display-md mt-4 font-normal text-balance"
              >
                Dogs helped since{" "}
                <span className="text-gold-deep italic">{formatDate(impact.since)}</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="text-muted-light text-xs tracking-[0.18em] uppercase">
              Week {weeks} · Updated{" "}
              {formatDate(impact.updatedAt, { month: "short", day: "numeric" })}
            </p>
          </Reveal>
        </div>

        <div className="border-line-light bg-line-light mt-12 grid gap-px border sm:grid-cols-3">
          {tiles.map((t, i) => (
            <Reveal key={t.label} delay={0.08 * i} className="bg-cream">
              <div className="flex h-full flex-col justify-between gap-8 p-8 sm:p-10">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-gold-deep text-[0.6875rem] font-semibold tracking-[0.22em] uppercase">
                      {t.label}
                    </p>
                    <p className="font-display mt-3 text-7xl leading-none tabular-nums sm:text-8xl">
                      <StatCounter value={t.value} duration={1.8 + i * 0.2} />
                    </p>
                  </div>
                  <div className="relative shrink-0">
                    <Ring value={t.value} max={t.max} delay={0.2 * i} />
                    <span className="font-display text-muted-light absolute inset-0 flex items-center justify-center text-sm tabular-nums">
                      {t.max ? Math.round((t.value / t.max) * 100) : 0}%
                    </span>
                  </div>
                </div>
                <p className="text-muted-light max-w-[26ch] text-sm leading-relaxed">
                  {t.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div
              className="bg-line-light flex h-1.5 w-full max-w-md overflow-hidden"
              aria-hidden
            >
              <motion.div
                className="bg-gold h-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${(impact.placed / impact.glowUps) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.div
                className="h-full bg-black"
                initial={{ width: 0 }}
                whileInView={{ width: `${(impact.inFoster / impact.glowUps) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              />
            </div>
            <p className="text-muted-light text-xs">
              <span className="mr-4 inline-flex items-center gap-2">
                <span className="bg-gold inline-block h-2 w-2" /> Placed
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="inline-block h-2 w-2 bg-black" /> In foster
              </span>
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
