"use client";

import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "framer-motion";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;
  return (
    <ReactLenis root options={{ lerp: 0.09, duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
