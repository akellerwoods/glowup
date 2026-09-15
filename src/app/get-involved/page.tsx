import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { PageHero } from "@/components/layout/PageHero";
import { SecondChance } from "@/components/sections/home/SecondChance";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { FosterForm } from "@/components/forms/FosterForm";
import { VolunteerForm } from "@/components/forms/VolunteerForm";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Adopt through Dallas Animal Services, foster a recovering glow-up dog, volunteer as a groomer, or fill our supply wishlist.",
};

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
      <PageHero
        eyebrow="Get involved"
        title={
          <>
            Be part of the <span className="text-gold italic">next</span> glow-up.
          </>
        }
        description="A groom takes one afternoon. A second chance takes a community. Here's where you fit."
      />
      <SecondChance />

      <section
        id="foster"
        className="grain scroll-mt-24 bg-black"
        aria-labelledby="foster-heading"
      >
        <Container className="py-20 sm:py-28 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Foster"
                title={
                  <span id="foster-heading">
                    A living room heals faster than a kennel.
                  </span>
                }
                description="Some dogs come off the table with raw skin, sores, or a fear of hands. A few weeks in a quiet home changes everything."
              />
              <Reveal delay={0.15}>
                <ul className="divide-line border-line mt-10 divide-y border-y">
                  {fosterProvides.map((f) => (
                    <li key={f} className="flex gap-4 py-4 text-sm text-white/75">
                      <span aria-hidden className="bg-gold mt-2 h-px w-6 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="bg-surface relative mt-10 aspect-[4/5] max-w-sm overflow-hidden">
                  <Image
                    src="/images/foster.jpg"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <h3 className="font-display mb-8 text-2xl">Foster interest form</h3>
                <FosterForm />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="volunteer"
        className="on-light bg-cream scroll-mt-24 text-black"
        aria-labelledby="volunteer-heading"
      >
        <Container className="py-20 sm:py-28 lg:py-36">
          <SectionHeading
            eyebrow="Volunteer"
            title={<span id="volunteer-heading">Give your hands.</span>}
            description="Most of what we do happens on a grooming table on a Saturday. Here's who we need there."
          />
          <RevealGroup
            as="ul"
            className="border-line-light bg-line-light mt-12 grid gap-px border sm:grid-cols-2 lg:grid-cols-5"
          >
            {roles.map((r) => (
              <RevealItem key={r.title} as="li" className="bg-cream">
                <div className="flex h-full flex-col gap-4 p-6">
                  <h3 className="font-display text-2xl">{r.title}</h3>
                  <p className="text-muted-light text-sm leading-relaxed">{r.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="grain bg-black" aria-labelledby="volunteer-form-heading">
        <Container className="py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Sign up"
                size="md"
                title={<span id="volunteer-form-heading">Volunteer form</span>}
                description="Tell us what you're good at. We'll reach out before the next glow-up day."
              />
              <Reveal delay={0.15}>
                <div className="border-line mt-10 border p-6">
                  <p className="eyebrow">Supply wishlist</p>
                  <p className="mt-3 text-sm text-white/70">
                    Blades, medicated shampoo, towels, dryers. Every item ships straight
                    to the table.
                  </p>
                  <div className="mt-5">
                    <Button href={siteConfig.wishlistUrl} external variant="secondary">
                      View the wishlist
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal delay={0.1}>
                <VolunteerForm />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
