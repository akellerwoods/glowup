import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Questions, partnerships, press, or a groomer who wants to help. We answer within 48 hours.",
};

export default function ContactPage() {
  const a = siteConfig.address;
  const mapQuery = encodeURIComponent(`${siteConfig.partnerShelter.name}, Dallas, TX`);
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Say <span className="text-gold italic">hello.</span>
          </>
        }
        description="Partnerships, press, a groomer who wants in, or just a question. We read everything and answer within 48 hours."
      />
      <section className="grain bg-black">
        <Container className="pb-24 sm:pb-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <ContactForm />
              </Reveal>
            </div>
            <aside className="flex flex-col gap-10 lg:col-span-5">
              <Reveal delay={0.1}>
                <dl className="divide-line border-line divide-y border-y text-sm">
                  <div className="grid grid-cols-3 gap-4 py-5">
                    <dt className="text-[0.625rem] tracking-[0.2em] text-white/50 uppercase">
                      Email
                    </dt>
                    <dd className="col-span-2">
                      <a href={`mailto:${siteConfig.email}`} className="link-underline">
                        {siteConfig.email}
                      </a>
                    </dd>
                  </div>
                  <div className="grid grid-cols-3 gap-4 py-5">
                    <dt className="text-[0.625rem] tracking-[0.2em] text-white/50 uppercase">
                      Phone
                    </dt>
                    <dd className="col-span-2">
                      <a
                        href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                        className="link-underline"
                      >
                        {siteConfig.phone}
                      </a>
                    </dd>
                  </div>
                  <div className="grid grid-cols-3 gap-4 py-5">
                    <dt className="text-[0.625rem] tracking-[0.2em] text-white/50 uppercase">
                      Mail
                    </dt>
                    <dd className="col-span-2">
                      {a.street}
                      <br />
                      {a.city}, {a.state} {a.zip}
                    </dd>
                  </div>
                  <div className="grid grid-cols-3 gap-4 py-5">
                    <dt className="text-[0.625rem] tracking-[0.2em] text-white/50 uppercase">
                      Hours
                    </dt>
                    <dd className="col-span-2 flex flex-col gap-1">
                      {siteConfig.hours.map((h) => (
                        <span key={h.days}>
                          <span className="text-white">{h.days}</span>
                          <span className="text-white/60"> · {h.time}</span>
                        </span>
                      ))}
                    </dd>
                  </div>
                  <div className="grid grid-cols-3 gap-4 py-5">
                    <dt className="text-[0.625rem] tracking-[0.2em] text-white/50 uppercase">
                      Social
                    </dt>
                    <dd className="col-span-2 flex flex-wrap gap-4">
                      {Object.entries(siteConfig.social).map(([k, v]) => (
                        <a
                          key={k}
                          href={v}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline capitalize"
                        >
                          {k}
                        </a>
                      ))}
                    </dd>
                  </div>
                </dl>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="border-line bg-surface relative aspect-[4/3] overflow-hidden border">
                  {/* Map embed placeholder. Swap for a Google Maps embed URL if you'd like a live map. */}
                  <iframe
                    title={`Map of ${siteConfig.partnerShelter.name}`}
                    src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                    className="absolute inset-0 h-full w-full contrast-[0.9] grayscale invert-[0.9]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className="mt-3 text-xs text-white/50">
                  Grooming happens on site at {siteConfig.partnerShelter.name}.
                </p>
              </Reveal>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
