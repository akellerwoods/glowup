"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/** Small gold dot that follows the pointer and expands over links. Pointer devices only. */
export function Cursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.3 });

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnabled(mq.matches && !reduce);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [reduce]);

  useEffect(() => {
    if (!enabled) return;
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      setHover(!!t?.closest("a, button, [role=button], input, select, textarea, label"));
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [enabled, x, y]);

  if (!enabled) return null;
  return (
    <motion.div
      aria-hidden
      className="bg-gold pointer-events-none fixed top-0 left-0 z-[100] rounded-full mix-blend-difference"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{
        width: hover ? 44 : 10,
        height: hover ? 44 : 10,
        opacity: hover ? 0.9 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    />
  );
}
