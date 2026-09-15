"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Accordion({
  items,
  tone = "dark",
}: {
  items: { q: string; a: string }[];
  tone?: "dark" | "light";
}) {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();
  const reduce = useReducedMotion();
  const border = tone === "dark" ? "border-line" : "border-line-light";

  return (
    <div
      className={cn(
        "divide-y border-y",
        border,
        tone === "dark" ? "divide-line" : "divide-line-light",
      )}
    >
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${id}-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-start justify-between gap-6 py-6 text-left"
              >
                <span className="flex items-baseline gap-5">
                  <span
                    className={cn(
                      "font-display text-sm tabular-nums",
                      tone === "dark" ? "text-gold" : "text-gold-deep",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-xl sm:text-2xl">{item.q}</span>
                </span>
                <span
                  aria-hidden
                  className={cn(
                    "relative mt-2 h-4 w-4 shrink-0 transition-transform duration-500",
                    isOpen && "rotate-45",
                  )}
                >
                  <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
                  <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-current" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={`${id}-${i}`}
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reduce ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p
                    className={cn(
                      "max-w-[65ch] pb-7 pl-10 text-base leading-relaxed sm:pl-12",
                      tone === "dark" ? "text-white/75" : "text-muted-light",
                    )}
                  >
                    {item.a}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
