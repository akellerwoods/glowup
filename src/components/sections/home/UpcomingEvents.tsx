import Link from "next/link";
import { upcomingEvents } from "@/content/events";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";

export function UpcomingEvents() {
  const items = upcomingEvents().slice(0, 3);
  if (items.length === 0) return null;
  return (
    <section className="border-line border-t bg-black" aria-labelledby="events-heading">
      <Container className="py-20 sm:py-28">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Events"
            size="md"
            title={<span id="events-heading">Come see a glow-up.</span>}
          />
          <Reveal delay={0.1}>
            <Button href="/events" variant="secondary">
              All events
            </Button>
          </Reveal>
        </div>
        <RevealGroup as="ul" className="divide-line border-line mt-12 divide-y border-y">
          {items.map((e) => {
            const d = new Date(e.date + "T12:00:00");
            return (
              <RevealItem key={e.slug} as="li">
                <Link
                  href={`/events#${e.slug}`}
                  className="group grid items-center gap-4 py-6 sm:grid-cols-12 sm:gap-8"
                >
                  <div className="flex items-baseline gap-3 sm:col-span-2 sm:flex-col sm:gap-0">
                    <span className="font-display text-gold text-4xl tabular-nums">
                      {d.getDate()}
                    </span>
                    <span className="text-xs tracking-[0.18em] text-white/60 uppercase">
                      {d.toLocaleDateString("en-US", { month: "short" })}
                    </span>
                  </div>
                  <div className="sm:col-span-7">
                    <p className="font-display group-hover:text-gold text-2xl transition-colors">
                      {e.title}
                    </p>
                    <p className="mt-1 text-sm text-white/60">
                      {e.location.name} ·{" "}
                      {formatDate(e.date, {
                        weekday: "long",
                        month: undefined,
                        day: undefined,
                        year: undefined,
                      })}
                    </p>
                  </div>
                  <p className="text-gold text-[0.6875rem] font-semibold tracking-[0.18em] uppercase sm:col-span-3 sm:text-right">
                    {e.free ? "Free" : "Ticketed"} <span aria-hidden>→</span>
                  </p>
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
