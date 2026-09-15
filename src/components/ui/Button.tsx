"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "light";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-3 font-sans text-[0.8125rem] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 select-none disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-gold text-black hover:bg-gold-light",
  secondary: "border border-gold text-white hover:bg-gold hover:text-black",
  ghost: "text-white hover:text-gold",
  light: "bg-black text-white hover:bg-surface",
};

const sizes: Record<Size, string> = {
  md: "h-12 px-6",
  lg: "h-14 px-8 text-sm",
};

function Arrow() {
  return (
    <span className="relative inline-block h-3 w-3 overflow-hidden" aria-hidden>
      <svg
        viewBox="0 0 12 12"
        className="absolute inset-0 h-3 w-3 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M1 11L11 1M11 1H3M11 1V9" />
      </svg>
      <svg
        viewBox="0 0 12 12"
        className="absolute inset-0 h-3 w-3 -translate-x-[150%] translate-y-[150%] transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-0 group-hover:translate-y-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M1 11L11 1M11 1H3M11 1V9" />
      </svg>
    </span>
  );
}

type Props = {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  magnetic?: boolean;
};

export function Button({
  variant = "primary",
  size = "md",
  arrow = true,
  className,
  children,
  href,
  external,
  type = "button",
  disabled,
  onClick,
  magnetic = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const onMove = (e: React.MouseEvent) => {
    if (!magnetic || reduce || !ref.current) return;
    if (window.matchMedia("(hover: none)").matches) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.18);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.28);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const cls = cn(base, variants[variant], sizes[size], className);
  const inner = (
    <>
      <span>{children}</span>
      {arrow ? <Arrow /> : null}
    </>
  );

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="inline-block"
    >
      {href ? (
        external ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
            {inner}
          </a>
        ) : (
          <Link href={href} className={cls}>
            {inner}
          </Link>
        )
      ) : (
        <button type={type} disabled={disabled} onClick={onClick} className={cls}>
          {inner}
        </button>
      )}
    </motion.div>
  );
}
