"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { statusLabel, type Status, type Transformation } from "@/content/transformations";
import { TransformationCard } from "./TransformationCard";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const statuses: Array<{ value: "all" | Status; label: string }> = [
  { value: "all", label: "All" },
  { value: "available", label: "Available at DAS" },
  { value: "in-foster", label: "In foster" },
  { value: "adopted", label: "Adopted" },
  { value: "rescued", label: "Rescued out" },
];

export function TransformationGrid({ items }: { items: Transformation[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const status = (params.get("status") ?? "all") as "all" | Status;

  const filtered = useMemo(
    () => (status === "all" ? items : items.filter((t) => t.status === status)),
    [items, status],
  );

  const set = (value: string) => {
    const next = new URLSearchParams(params.toString());
    if (value === "all") next.delete("status");
    else next.set("status", value);
    router.replace(`${pathname}${next.size ? `?${next}` : ""}`, { scroll: false });
  };

  return (
    <div>
      <div
        className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0"
        role="group"
        aria-label="Filter by status"
      >
        {statuses.map((s) => {
          const active = s.value === status;
          return (
            <button
              key={s.value}
              type="button"
              aria-pressed={active}
              onClick={() => set(s.value)}
              className={cn(
                "shrink-0 border px-4 py-2 text-[0.6875rem] font-semibold tracking-[0.16em] uppercase transition-colors",
                active
                  ? "border-gold bg-gold text-black"
                  : "border-line hover:border-gold text-white/70 hover:text-white",
              )}
            >
              {s.label}
            </button>
          );
        })}
      </div>
      <p className="mt-6 text-sm text-white/50" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "glow-up" : "glow-ups"}
        {status !== "all" ? ` · ${statusLabel[status]}` : ""}
      </p>
      {filtered.length ? (
        <RevealGroup
          key={status}
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((t, i) => (
            <RevealItem key={t.slug}>
              <TransformationCard t={t} priority={i < 3} />
            </RevealItem>
          ))}
        </RevealGroup>
      ) : (
        <p className="border-line mt-12 border p-10 text-center text-white/60">
          No dogs in this status right now. Check back after this week&apos;s glow-up.
        </p>
      )}
    </div>
  );
}
