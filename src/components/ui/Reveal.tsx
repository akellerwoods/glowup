"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  once = true,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  as?: "div" | "li" | "span";
}) {
  const reduce = useReducedMotion();
  const Comp = as === "li" ? motion.li : as === "span" ? motion.span : motion.div;
  return (
    <Comp
      className={cn(className)}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once, margin: "0px 0px -10% 0px" }}
      transition={{ duration: reduce ? 0.3 : 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Comp>
  );
}

/** Staggers direct children. Use for grids. */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  as?: "div" | "ul";
}) {
  const reduce = useReducedMotion();
  const Comp = as === "ul" ? motion.ul : motion.div;
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: reduce ? 0 : stagger } },
      }}
    >
      {children}
    </Comp>
  );
}

export const revealItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const Comp = as === "li" ? motion.li : motion.div;
  return (
    <Comp className={className} variants={revealItem}>
      {children}
    </Comp>
  );
}
