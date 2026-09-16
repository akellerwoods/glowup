import { CYCLE_LENGTH, MILESTONE_WEEKS, pad } from "@/lib/cycle";
import { cn } from "@/lib/utils";

/**
 * The 52 system: four quarters of thirteen. Weeks 1..groomed-1 are done,
 * week `groomed` is this week, the rest are open. Milestone weeks close a quarter.
 */
export function FiftyTwoGrid({ groomed }: { groomed: number }) {
  const current = Math.min(CYCLE_LENGTH, Math.max(0, groomed));
  return (
    <div className="flex min-w-[640px] flex-col gap-2">
      {[0, 1, 2, 3].map((q) => (
        <div
          key={q}
          className="grid grid-cols-[2.5rem_repeat(13,minmax(0,1fr))] items-center gap-1 sm:gap-2"
        >
          <span className="label text-bone/40 text-[0.6875rem]">Q{q + 1}</span>
          {Array.from({ length: 13 }, (_, i) => q * 13 + i + 1).map((n) => {
            const state = n < current ? "groomed" : n === current ? "current" : "open";
            const milestone = MILESTONE_WEEKS.includes(n);
            return (
              <span
                key={n}
                title={
                  state === "current"
                    ? `Week ${pad(n)}: this week`
                    : state === "groomed"
                      ? `Week ${pad(n)}: groomed`
                      : `Week ${pad(n)}: open`
                }
                className={cn(
                  "font-display flex aspect-square items-center justify-center border text-xs tabular-nums sm:text-sm",
                  state === "groomed" && "border-gold/60 bg-gold/15 text-gold",
                  state === "current" && "border-gold bg-gold text-ink",
                  state === "open" && "border-hairline text-bone/35",
                  state === "open" && milestone && "border-gold/50",
                )}
              >
                {pad(n)}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export function FiftyTwoLegend() {
  const items = [
    { cls: "border-gold/60 bg-gold/15", label: "Groomed" },
    { cls: "border-gold bg-gold", label: "This week" },
    { cls: "border-gold/50", label: "Milestone week" },
    { cls: "border-hairline", label: "Open" },
  ];
  return (
    <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
      {items.map((i) => (
        <li key={i.label} className="flex items-center gap-3">
          <span aria-hidden className={cn("block h-3 w-3 border", i.cls)} />
          <span className="label text-bone/60 text-[0.6875rem]">{i.label}</span>
        </li>
      ))}
    </ul>
  );
}
