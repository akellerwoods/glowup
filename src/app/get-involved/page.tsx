import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { PageHead } from "@/components/ui/PageHead";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";
import { FosterForm } from "@/components/forms/FosterForm";
import { VolunteerForm } from "@/components/forms/VolunteerForm";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Adopt through Dallas Animal Services, foster a recovering glow-up dog, volunteer as a groomer, or fill our supply wishlist.",
};

const ways = [
  {
    n: "01",
    title: "Adopt",
    body: `Every glow-up dog stays in the care of ${siteConfig.partnerShelter.name}. Meet them freshly groomed, then adopt through the shelter.`,
    cta: "Adopt through DAS",
    href: siteConfig.partnerShelter.adoptUrl,
    external: true,
  },
  {
    n: "02",
    title: "Foster",
    body: "Some dogs heal better in a living room than a kennel. Open your home for a few weeks while the coat and skin recover.",
    cta: "Become a foster",
    href: "#foster",
  },
  {
    n: "03",
    title: "Sponsor",
    body: "A single glow-up costs $150 to $300 in groomer time, tools, medicated shampoo, and sedation. Fund the next one.",
    cta: "Sponsor a week",
    href: "/donate",
  },
];

const fosterProvides = [
  "Food, crate, bedding, and any medicated shampoo or ointment the dog needs",
  "All veterinary care through Dallas Animal Services",
  "A short, defined commitment, usually two to four weeks",
  "A text line to a partner, seven days a week",
];

const roles = [
  {
    title: "Professional groomers",
    body: "Donate a few hours a month on a glow-up day. Experience with pelted coats and fearful dogs is gold.",
  },
  {
    title: "Bathers & assistants",
    body: "Help prep, bathe, dry, and comfort. No certification needed, just steady hands and patience.",
  },
  {
    title: "Transport",
    body: "Move a dog between the shelter, the grooming table, and a foster home.",
  },
  {
    title: "Photo & video",
    body: "Capture the before, the during, and the reveal. Our stories are how dogs get seen.",
  },
  {
    title: "Events & fundraising",
    body: "Staff a table, run a raffle, or host a yappy hour.",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHead
        label="Get involved"
        title="Give a dog a second chance."
        text="A groom takes one afternoon. A second chance takes a community. Here's where you fit."
      />

      <section className="pb-14 sm:pb-22">
        <Container>
          <ol className="divide-hairline border-hairline grid divide-y border-y md:grid-cols-3 md:divide-x md:divide-y-0">
            {ways.map((w) => (
              <li
                key={w.n}
                className="flex flex-col justify-between gap-8 py-8 md:px-8 md:first:pl-0 md:last:pr-0"
              >
                <div>
                  <span className="font-display text-gold text-4xl tabular-nums">
                    {w.n}
                  </span>
                  <h2 className="font-display mt-6 text-2xl">{w.title}</h2>
                  <p className="text-bone/70 mt-3 max-w-[38ch]">{w.body}</p>
                </div>
                <div>
                  <Button href={w.href} external={w.external} variant="text">
                    {w.cta}
                  </Button>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="foster" className="scroll-mt-16 pb-14 sm:pb-22">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHead
                label="Foster"
                title="A living room heals faster than a kennel."
                text="Some dogs come off the table with raw skin, sores, or a fear of hands. A few weeks in a quiet home changes everything."
              />
              <ul className="hairline-y border-hairline mt-8 border-y">
                {fosterProvides.map((f) => (
                  <li key={f} className="text-bone/75 py-3">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="label rule text-gold pt-4">Foster interest form</p>
              <div className="mt-8">
                <FosterForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="volunteer" className="scroll-mt-16 pb-14 sm:pb-22">
        <Container>
          <SectionHead
            label="Volunteer"
            title="Give your hands."
            text="Most of what we do happens on a grooming table on a Saturday. Here's who we need there."
          />
          <ul className="hairline-y border-hairline mt-10 border-y">
            {roles.map((r) => (
              <li key={r.title} className="grid gap-2 py-5 sm:grid-cols-12 sm:gap-6">
                <h3 className="font-display text-xl sm:col-span-4">{r.title}</h3>
                <p className="text-bone/75 max-w-[62ch] sm:col-span-8">{r.body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-14 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="label rule text-gold pt-4">Volunteer form</p>
              <p className="text-bone/70 mt-6">
                Tell us what you&apos;re good at. We&apos;ll reach out before the next
                glow-up day.
              </p>
              <p className="label rule text-gold mt-10 pt-4">Supply wishlist</p>
              <p className="text-bone/70 mt-4">
                Blades, medicated shampoo, towels, dryers. Every item ships straight to
                the table.
              </p>
              <div className="mt-6">
                <Button href={siteConfig.wishlistUrl} external variant="outline">
                  View the wishlist
                </Button>
              </div>
            </div>
            <div className="lg:col-span-8">
              <VolunteerForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
