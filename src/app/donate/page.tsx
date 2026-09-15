import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { PageHero } from "@/components/layout/PageHero";
import { DonateSection } from "@/components/sections/home/DonateSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ImpactTracker } from "@/components/sections/home/ImpactTracker";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Fund professional grooming, tools, and veterinary sedation for Dallas Animal Services dogs in urgent need. Give once or monthly through Givebutter.",
};

const other = [
  {
    title: "Supply wishlist",
    body: "Blades, medicated shampoos, towels, and dryers, shipped straight to the grooming table.",
    cta: "Shop the wishlist",
    href: siteConfig.wishlistUrl,
    external: true,
  },
  {
    title: "Sponsor a month",
    body: "Four glow-ups, your name on every before-and-after we share that month. Ideal for salons and local businesses.",
    cta: "Talk to us",
    href: "/contact",
  },
  {
    title: "Employer matching",
    body: "Many employers double gifts to 501(c)(3) organizations. Search your company on Givebutter's matching tool at checkout.",
    cta: "Give now",
    href: "#donate",
  },
  {
    title: "Host a fundraiser",
    body: "A yappy hour, a groom-a-thon, a birthday campaign. We'll send photos, a story, and a Givebutter link.",
    cta: "Get in touch",
    href: "/contact",
  },
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        image="/images/donate.jpg"
        title={
          <>
            Fund the next <span className="text-gold italic">glow-up.</span>
          </>
        }
        description="A single transformation costs between $150 and $300. Every dollar goes to groomer time, tools, medicated care, and veterinary sedation when a dog is in pain."
      >
        <div className="mt-10">
          <Button href="#donate" size="lg">
            Give now
          </Button>
        </div>
      </PageHero>
      <DonateSection headingLevel="h2" />
      <ImpactTracker />
      <section className="grain bg-black" aria-labelledby="other-heading">
        <Container className="py-20 sm:py-28 lg:py-36">
          <SectionHeading
            eyebrow="Other ways to give"
            title={<span id="other-heading">Not every gift is a dollar.</span>}
          />
          <RevealGroup
            as="ul"
            className="border-line bg-line mt-12 grid gap-px border sm:grid-cols-2"
          >
            {other.map((o) => (
              <RevealItem key={o.title} as="li" className="bg-black">
                <div className="flex h-full flex-col justify-between gap-8 p-8 sm:p-10">
                  <div>
                    <h3 className="font-display text-3xl">{o.title}</h3>
                    <p className="mt-4 max-w-[40ch] text-sm leading-relaxed text-white/70 sm:text-base">
                      {o.body}
                    </p>
                  </div>
                  <div>
                    <Button href={o.href} external={o.external} variant="secondary">
                      {o.cta}
                    </Button>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal delay={0.2}>
            <p className="mt-10 text-xs text-white/50">
              {siteConfig.name} is a registered 501(c)(3) nonprofit, EIN {siteConfig.ein}.
              Donations are tax-deductible to the extent allowed by law.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
