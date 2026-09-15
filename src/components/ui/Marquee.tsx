"use client";

import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
  speed = 40,
  tone = "gold",
}: {
  items: string[];
  className?: string;
  speed?: number;
  tone?: "gold" | "dark";
}) {
  const reduce = useReducedMotion();
  const row = (
    <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden>
      {items.map((t, i) => (
        <span key={i} className="flex items-center gap-10">
          <span className="font-display text-2xl whitespace-nowrap italic sm:text-3xl">
            {t}
          </span>
          <span className="block h-1.5 w-1.5 rotate-45 bg-current" />
        </span>
      ))}
    </div>
  );
  return (
    <div
      className={cn(
        "relative overflow-hidden border-y py-4",
        tone === "gold"
          ? "border-gold/40 bg-gold text-black"
          : "border-line text-gold bg-black",
        className,
      )}
      role="marquee"
      aria-label={items.join(", ")}
    >
      <div
        className={cn("flex w-max", !reduce && "animate-marquee")}
        style={{ animationDuration: `${speed}s` }}
      >
        {row}
        {row}
        {row}
        {row}
      </div>
    </div>
  );
}
