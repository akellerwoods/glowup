import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { events, upcomingEvents } from "@/content/events";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/layout/JsonLd";
import { formatDate } from "@/lib/utils";
import { CtaBand } from "@/components/sections/home/CtaBand";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Glow-up days, yappy hours, adoption showcases, and fundraisers around Dallas.",
};

function fmtTime(t: string) {
  const [h, m] = t.split(":").map(Number);
  const d = new Date();
  d.setHours(h, m);
  return d.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: m ? "2-digit" : undefined,
  });
}

export default function EventsPage() {
  const upcoming = upcomingEvents();
  const past = events
    .filter((e) => !upcoming.includes(e))
    .sort((a, b) => b.date.localeCompare(a.date));

  const jsonLd = upcoming.map((e) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: e.title,
    startDate: `${e.date}T${e.startTime}:00-05:00`,
    endDate: `${e.date}T${e.endTime}:00-05:00`,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: e.location.name.startsWith("Online")
      ? "https://schema.org/OnlineEventAttendanceMode"
      : "https://schema.org/OfflineEventAttendanceMode",
    location: e.location.name.startsWith("Online")
      ? { "@type": "VirtualLocation", url: e.rsvpUrl }
      : { "@type": "Place", name: e.location.name, address: e.location.address },
    image: `${siteConfig.url}${e.image}`,
    description: e.description,
    organizer: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    offers: {
      "@type": "Offer",
      url: e.rsvpUrl,
      price: e.free ? "0" : undefined,
      priceCurrency: "USD",
    },
  }));

  return (
    <>
      {jsonLd.map((d, i) => (
        <JsonLd key={i} data={d} />
      ))}
      <PageHero
        eyebrow="Events"
        title={
          <>
            Come see a <span className="text-gold italic">glow-up.</span>
          </>
        }
        description="Grooming days you can follow live, fundraisers with dogs on the patio, and showcases where freshly groomed dogs meet their people."
      />
      <section className="bg-black">
        <Container className="pb-24 sm:pb-32">
          <RevealGroup as="ul" className="divide-line border-line divide-y border-y">
            {upcoming.map((e) => (
              <RevealItem key={e.slug} as="li">
                <article
                  id={e.slug}
                  className="grid scroll-mt-28 gap-8 py-10 lg:grid-cols-12 lg:gap-12"
                >
                  <div className="lg:col-span-2">
                    <p className="font-display text-gold text-6xl tabular-nums">
                      {new Date(e.date + "T12:00:00").getDate()}
                    </p>
                    <p className="mt-1 text-xs tracking-[0.18em] text-white/60 uppercase">
                      {formatDate(e.date, {
                        month: "long",
                        day: undefined,
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="lg:col-span-6">
                    <h2 className="font-display text-3xl sm:text-4xl">{e.title}</h2>
                    <p className="mt-3 text-sm text-white/60">
                      {formatDate(e.date, { weekday: "long" })} · {fmtTime(e.startTime)} –{" "}
                      {fmtTime(e.endTime)}
                      <br />
                      {e.location.name} · {e.location.address}
                    </p>
                    <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-white/75">
                      {e.description}
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <Button href={e.rsvpUrl} external>
                        {e.free ? "RSVP" : "Get tickets"}
                      </Button>
                      <span className="text-[0.6875rem] font-semibold tracking-[0.18em] text-white/50 uppercase">
                        {e.free ? "Free" : "Ticketed"}
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-4">
                    <div className="bg-surface relative aspect-[3/2] overflow-hidden">
                      <Image
                        src={e.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 30vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>

          {past.length ? (
            <Reveal>
              <div className="mt-20">
                <p className="eyebrow">Past events</p>
                <ul className="divide-line border-line mt-6 divide-y border-y">
                  {past.map((e) => (
                    <li
                      key={e.slug}
                      className="flex flex-wrap justify-between gap-4 py-4 text-sm text-white/60"
                    >
                      <span className="font-display text-lg text-white/80">
                        {e.title}
                      </span>
                      <span>{formatDate(e.date)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ) : null}
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
