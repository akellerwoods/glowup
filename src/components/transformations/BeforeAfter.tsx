"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/** Draggable before/after comparison. Keyboard-accessible via the range input. */
export function BeforeAfter({
  before,
  after,
  name,
  className,
  priority = false,
  aspect = "aspect-[4/3]",
}: {
  before: string;
  after: string;
  name: string;
  className?: string;
  priority?: boolean;
  aspect?: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(100, Math.max(0, p)));
  }, []);

  return (
    <div className={cn("group relative select-none", className)}>
      <div
        ref={ref}
        className={cn("bg-surface relative w-full overflow-hidden", aspect)}
        onPointerDown={(e) => {
          dragging.current = true;
          (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
          setFromClientX(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && setFromClientX(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
        style={{ touchAction: "pan-y" }}
      >
        {/* After (base layer) */}
        <Image
          src={after}
          alt={`${name} after grooming`}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover"
          priority={priority}
          draggable={false}
        />
        {/* Before (clipped) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={before}
            alt={`${name} before grooming`}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
            priority={priority}
            draggable={false}
          />
        </div>
        {/* Divider */}
        <div
          className="bg-gold pointer-events-none absolute inset-y-0 w-px"
          style={{ left: `${pos}%` }}
          aria-hidden
        >
          <div className="border-gold text-gold absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-black/80 backdrop-blur-sm">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M9 6l-5 6 5 6M15 6l5 6-5 6" />
            </svg>
          </div>
        </div>
        <span className="pointer-events-none absolute top-4 left-4 bg-black/70 px-2.5 py-1 text-[0.625rem] font-semibold tracking-[0.2em] text-white uppercase backdrop-blur-sm">
          Before
        </span>
        <span className="bg-gold pointer-events-none absolute top-4 right-4 px-2.5 py-1 text-[0.625rem] font-semibold tracking-[0.2em] text-black uppercase">
          After
        </span>
      </div>
      <label className="sr-only" htmlFor={`ba-${name}`}>
        Compare {name} before and after
      </label>
      <input
        id={`ba-${name}`}
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-x-0 bottom-0 h-full w-full cursor-ew-resize opacity-0"
        aria-valuetext={`${Math.round(pos)}% before`}
        style={{ pointerEvents: "none" }}
        onFocus={(e) => (e.currentTarget.style.outline = "2px solid var(--gold)")}
        onBlur={(e) => (e.currentTarget.style.outline = "")}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
          if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
        }}
      />
      <p className="mt-3 text-xs text-white/50">Drag to compare</p>
    </div>
  );
}
