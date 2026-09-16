import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { PageHead } from "@/components/ui/PageHead";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Questions, partnerships, press, or a groomer who wants to help. We answer within 48 hours.",
};

export default function ContactPage() {
  const a = siteConfig.address;
  const rows: [string, React.ReactNode][] = [
    [
      "Email",
      <a key="e" href={`mailto:${siteConfig.email}`} className="hover:text-gold">
        {siteConfig.email}
      </a>,
    ],
    [
      "Phone",
      <a
        key="p"
        href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
        className="hover:text-gold"
      >
        {siteConfig.phone}
      </a>,
    ],
    [
      "Mail",
      <span key="m">
        {a.street}
        <br />
        {a.city}, {a.state} {a.zip}
      </span>,
    ],
    [
      "Hours",
      <span key="h" className="flex flex-col gap-1">
        {siteConfig.hours.map((h) => (
          <span key={h.days}>
            {h.days}
            <span className="text-bone/60"> · {h.time}</span>
          </span>
        ))}
      </span>,
    ],
    [
      "Social",
      <span key="s" className="flex flex-wrap gap-4">
        {Object.entries(siteConfig.social).map(([k, v]) => (
          <a
            key={k}
            href={v}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold capitalize"
          >
            {k}
          </a>
        ))}
      </span>,
    ],
  ];

  return (
    <>
      <PageHead
        label="Contact"
        title="Talk to a person."
        text="Partnerships, press, a groomer who wants in, or just a question. We read everything and answer within 48 hours."
      />
      <section className="pb-14 sm:pb-22">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <aside className="lg:col-span-4 lg:col-start-9">
              <dl className="hairline-y border-hairline border-y text-sm">
                {rows.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[5rem_1fr] gap-4 py-4">
                    <dt className="label text-bone/50 text-[0.6875rem]">{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="text-bone/50 mt-6 text-xs">
                Grooming happens on site at {siteConfig.partnerShelter.name}.
              </p>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
