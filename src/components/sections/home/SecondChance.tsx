import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

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
    href: "/get-involved#foster",
  },
  {
    n: "03",
    title: "Donate",
    body: "A single glow-up costs $150 to $300 in groomer time, tools, medicated shampoo, and sedation. Fund the next one.",
    cta: "Give now",
    href: "/donate",
  },
];

export function SecondChance() {
  return (
    <section
      className="on-light bg-cream text-black"
      aria-labelledby="second-chance-heading"
    >
      <Container className="py-20 sm:py-28 lg:py-36">
        <SectionHeading
          eyebrow="Three ways to help"
          title={<span id="second-chance-heading">Give a dog a second chance.</span>}
          description="A groom changes how a dog feels. What happens next is up to all of us."
        />
        <RevealGroup className="border-line-light bg-line-light mt-14 grid gap-px border md:grid-cols-3">
          {ways.map((w) => (
            <RevealItem key={w.n} className="group bg-cream">
              {w.external ? (
                <a
                  href={w.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col justify-between gap-10 p-8 transition-colors duration-500 hover:bg-black hover:text-white sm:p-10"
                >
                  <Card w={w} />
                </a>
              ) : (
                <Link
                  href={w.href}
                  className="flex h-full flex-col justify-between gap-10 p-8 transition-colors duration-500 hover:bg-black hover:text-white sm:p-10"
                >
                  <Card w={w} />
                </Link>
              )}
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

function Card({ w }: { w: (typeof ways)[number] }) {
  return (
    <>
      <div>
        <p className="font-display text-gold-deep group-hover:text-gold text-sm tabular-nums">
          {w.n}
        </p>
        <h3 className="font-display mt-6 text-4xl sm:text-5xl">{w.title}</h3>
        <p className="text-muted-light mt-5 max-w-[34ch] text-sm leading-relaxed group-hover:text-white/70 sm:text-base">
          {w.body}
        </p>
      </div>
      <p className="text-gold-deep group-hover:text-gold flex items-center gap-3 text-[0.6875rem] font-semibold tracking-[0.18em] uppercase">
        {w.cta}
        <span
          aria-hidden
          className="inline-block h-px w-8 bg-current transition-all duration-500 group-hover:w-12"
        />
      </p>
    </>
  );
}
