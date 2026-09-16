import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { events, upcomingEvents } from "@/content/events";
import { PageHead } from "@/components/ui/PageHead";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/layout/JsonLd";
import { formatDate } from "@/lib/utils";

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
      <PageHead
        label="Events"
        title="Come see a glow-up."
        text="Grooming days you can follow live, fundraisers with dogs on the patio, and showcases where freshly groomed dogs meet their people."
      />
      <section className="pb-14 sm:pb-22">
        <Container>
          <ul className="hairline-y border-hairline border-y">
            {upcoming.map((e) => (
              <li
                key={e.slug}
                id={e.slug}
                className="grid scroll-mt-16 gap-6 py-8 lg:grid-cols-12"
              >
                <div className="lg:col-span-2">
                  <p className="font-display text-gold text-5xl tabular-nums">
                    {new Date(e.date + "T12:00:00").getDate()}
                  </p>
                  <p className="label text-bone/60 mt-2 text-[0.6875rem]">
                    {formatDate(e.date, {
                      month: "long",
                      day: undefined,
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <h2 className="font-display text-2xl sm:text-3xl">{e.title}</h2>
                  <p className="text-bone/60 mt-2 text-sm">
                    {formatDate(e.date, { weekday: "long" })} · {fmtTime(e.startTime)} –{" "}
                    {fmtTime(e.endTime)}
                    <br />
                    {e.location.name} · {e.location.address}
                  </p>
                  <p className="text-bone/75 mt-4 max-w-[62ch]">{e.description}</p>
                </div>
                <div className="flex items-start gap-6 lg:col-span-3 lg:justify-end">
                  <Button href={e.rsvpUrl} external variant="outline">
                    {e.free ? "RSVP" : "Get tickets"}
                  </Button>
                </div>
              </li>
            ))}
          </ul>

          {past.length ? (
            <div className="mt-14">
              <p className="label rule text-gold pt-4">Past events</p>
              <ul className="hairline-y border-hairline mt-6 border-y">
                {past.map((e) => (
                  <li key={e.slug} className="flex flex-wrap justify-between gap-4 py-4">
                    <span className="font-display text-bone/80 text-lg">{e.title}</span>
                    <span className="text-bone/60 text-sm">{formatDate(e.date)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Container>
      </section>
    </>
  );
}
