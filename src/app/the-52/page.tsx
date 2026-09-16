import type { Metadata } from "next";
import Link from "next/link";
import { impact } from "@/content/impact";
import { sortedTransformations, statusLabel } from "@/content/transformations";
import { PageHead } from "@/components/ui/PageHead";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { FiftyTwoGrid, FiftyTwoLegend } from "@/components/ui/FiftyTwoGrid";
import { weekLabel } from "@/lib/cycle";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "The 52",
  description:
    "One dog a week, 52 weeks a year. Every week of the current cycle and the dog it belongs to.",
};

const figures = [
  { value: impact.glowUps, label: "Groomed" },
  { value: impact.placed, label: "Placed in homes" },
  { value: impact.inFoster, label: "In foster" },
];

export default function TheFiftyTwoPage() {
  return (
    <>
      <PageHead
        label="The 52"
        title="52 isn't a slogan. It's the operating structure."
        text="One dog a week, thirteen weeks a quarter, four quarters a cycle. Every dog we publish carries a week number, so the whole year reads as one continuous count."
      />

      <section className="pb-14 sm:pb-22">
        <Container>
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
            <p className="label text-bone/50 text-[0.6875rem]">
              Cycle beginning {formatDate(impact.since)}
            </p>
            <p className="label text-bone/50 text-[0.6875rem]">
              Updated {formatDate(impact.updatedAt)}
            </p>
          </div>
          <div className="mt-8 overflow-x-auto">
            <FiftyTwoGrid groomed={impact.glowUps} />
          </div>
          <FiftyTwoLegend />

          <dl className="divide-hairline border-hairline mt-14 grid divide-y border-y sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {figures.map((f) => (
              <div key={f.label} className="py-8 sm:px-8 sm:first:pl-0 sm:last:pr-0">
                <dd className="metallic font-display text-[5.5rem] leading-none tabular-nums">
                  {f.value}
                </dd>
                <dt className="label text-bone/70 mt-4">{f.label}</dt>
              </div>
            ))}
          </dl>
          <p className="text-bone/50 mt-6 max-w-[62ch] text-sm">
            Milestone weeks 13, 26, 39, and 52 close a quarter with a recap: dogs groomed,
            pounds of coat removed, adoptions confirmed. Week 52 is the annual report.
          </p>
        </Container>
      </section>

      <section className="pb-14 sm:pb-22">
        <Container>
          <SectionHead label="Every week" title="The count so far." />
          <ol className="hairline-y border-hairline mt-10 border-y">
            {sortedTransformations.map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/transformations/${t.slug}`}
                  className="hover:text-gold grid grid-cols-[7.5rem_1fr] items-baseline gap-4 py-4 transition-colors sm:grid-cols-[9rem_1fr_10rem_9rem]"
                >
                  <span className="label text-gold text-[0.6875rem]">
                    {weekLabel(t.week)}
                  </span>
                  <span className="font-display text-2xl">{t.name}</span>
                  <span className="text-bone/60 hidden text-sm sm:block">
                    {formatDate(t.date)}
                  </span>
                  <span className="label text-bone/60 col-start-2 text-[0.6875rem] sm:col-start-auto sm:text-right">
                    {statusLabel[t.status]}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
