"use client";

import Image from "next/image";
import { useCallback, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Swipe-through before/after. Drag or use the arrow keys to move the gold
 * divider; the before image is revealed on the left, the after on the right.
 * Square handle, hairline divider: the only circle in the brand is the badge.
 */
export function BeforeAfter({
  before,
  after,
  name,
  className,
  priority = false,
  sizes = "(min-width: 1024px) 560px, 100vw",
}: {
  before: string;
  after: string;
  name: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const id = useId();

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  return (
    <figure className={cn("select-none", className)}>
      <div
        ref={ref}
        className="bg-ink relative aspect-[4/3] w-full cursor-ew-resize overflow-hidden"
        style={{ touchAction: "pan-y" }}
        onPointerDown={(e) => {
          dragging.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          setFromClientX(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && setFromClientX(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
      >
        {/* After: base layer */}
        <Image
          src={after}
          alt={`${name} after grooming`}
          fill
          sizes={sizes}
          className="object-cover"
          priority={priority}
          draggable={false}
        />
        {/* Before: clipped to the left of the divider */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={before}
            alt={`${name} at intake, before grooming`}
            fill
            sizes={sizes}
            className="object-cover"
            priority={priority}
            draggable={false}
          />
        </div>

        {/* Divider + handle */}
        <div
          aria-hidden
          className="bg-gold pointer-events-none absolute inset-y-0 w-px"
          style={{ left: `${pos}%` }}
        >
          <div className="border-gold bg-obsidian/85 text-gold absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center border">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
            >
              <path d="M9 6l-5 6 5 6M15 6l5 6-5 6" />
            </svg>
          </div>
        </div>

        <span className="label bg-obsidian/70 text-bone pointer-events-none absolute top-3 left-3 px-2 py-1 text-[0.625rem]">
          Before
        </span>
        <span className="label bg-gold text-ink pointer-events-none absolute top-3 right-3 px-2 py-1 text-[0.625rem]">
          After
        </span>

        <label htmlFor={id} className="sr-only">
          Compare {name} before and after
        </label>
        <input
          id={id}
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-valuetext={`${Math.round(pos)}% before`}
          className="absolute inset-0 h-full w-full opacity-0"
          style={{ pointerEvents: "none" }}
        />
      </div>
      <figcaption className="label text-bone/40 mt-3 text-[0.625rem]">
        Drag to compare
      </figcaption>
    </figure>
  );
}
