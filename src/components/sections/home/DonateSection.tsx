import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GivebutterWidget } from "@/components/GivebutterWidget";

const tiers = [
  { amount: "$25", what: "Medicated shampoo and conditioner for one dog" },
  { amount: "$75", what: "Specialty blades and tools for a pelted coat" },
  { amount: "$150", what: "A full professional groom, start to finish" },
  { amount: "$300", what: "A groom with veterinary sedation for a dog in pain" },
];

export function DonateSection({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  return (
    <section
      id="donate"
      className="grain border-line border-t bg-black"
      aria-labelledby="donate-heading"
    >
      <Container className="py-20 sm:py-28 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Donate"
              as={headingLevel}
              title={<span id="donate-heading">Fund the next glow-up.</span>}
              description="Every gift goes to groomer time, tools, medicated care, and sedation when a dog needs it. One-time or monthly, it's all tax-deductible."
            />
            <Reveal delay={0.15}>
              <ul className="divide-line border-line mt-10 divide-y border-y">
                {tiers.map((t) => (
                  <li key={t.amount} className="flex items-baseline gap-6 py-4">
                    <span className="font-display text-gold w-20 shrink-0 text-2xl tabular-nums">
                      {t.amount}
                    </span>
                    <span className="text-sm text-white/75 sm:text-base">{t.what}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <GivebutterWidget />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
