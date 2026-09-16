import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { PageHead } from "@/components/ui/PageHead";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";
import { TierTable } from "@/components/home/Sponsor";
import { GivebutterWidget } from "@/components/GivebutterWidget";

export const metadata: Metadata = {
  title: "Sponsor a Week",
  description:
    "Sponsor one week of professional grooming, tools, and veterinary sedation for a Dallas Animal Services dog in urgent need. Give once or monthly through Givebutter.",
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
    href: "#give",
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
      <PageHead
        label="Sponsor a Week"
        title="One week. One dog. Your name on the transformation."
        text="A single glow-up runs $150 to $300 in groomer time, tools, medicated care, and veterinary sedation when a dog is in pain. Every dollar goes to the dog."
      >
        <Button href="#give">Give now</Button>
      </PageHead>

      <section id="give" className="scroll-mt-16 pb-14 sm:pb-22">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="label rule text-gold pt-4">What a gift covers</p>
              <div className="mt-8">
                <TierTable />
              </div>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <GivebutterWidget />
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-14 sm:pb-22">
        <Container>
          <SectionHead label="Other ways to give" title="Not every gift is a dollar." />
          <ul className="hairline-y border-hairline mt-10 border-y">
            {other.map((o) => (
              <li key={o.title} className="grid gap-3 py-6 sm:grid-cols-12 sm:gap-6">
                <h3 className="font-display text-2xl sm:col-span-4">{o.title}</h3>
                <p className="text-bone/75 max-w-[52ch] sm:col-span-6">{o.body}</p>
                <div className="sm:col-span-2 sm:text-right">
                  <Button href={o.href} external={o.external} variant="text">
                    {o.cta}
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-bone/50 mt-8 text-xs">
            {siteConfig.name} is a registered 501(c)(3) nonprofit, EIN {siteConfig.ein}.
            Donations are tax-deductible to the extent allowed by law.
          </p>
        </Container>
      </section>
    </>
  );
}
