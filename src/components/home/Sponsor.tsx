import { tiers } from "@/content/sponsorship";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { GivebutterWidget } from "@/components/GivebutterWidget";

export function TierTable() {
  return (
    <dl className="hairline-y border-hairline border-y">
      {tiers.map((t) => (
        <div key={t.amount} className="grid grid-cols-[6rem_1fr] gap-6 py-4">
          <dt className="font-display text-gold self-center text-2xl tabular-nums">
            {t.amount}
          </dt>
          <dd className="text-bone/80 self-center">{t.what}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Sponsor({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  return (
    <section id="give" className="scroll-mt-16 py-14 sm:py-22">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHead
              label="Sponsor a Week"
              as={headingLevel}
              title="One week. One dog. Your name on the transformation."
              text="A single glow-up runs $150 to $300 in groomer time, tools, medicated care, and veterinary sedation when a dog is in pain. Every dollar goes to the dog."
            />
            <div className="mt-10">
              <TierTable />
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <GivebutterWidget />
          </div>
        </div>
      </Container>
    </section>
  );
}
