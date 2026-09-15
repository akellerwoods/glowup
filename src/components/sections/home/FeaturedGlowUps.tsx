import { sortedTransformations } from "@/content/transformations";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { TransformationCard } from "@/components/transformations/TransformationCard";

export function FeaturedGlowUps() {
  const items = sortedTransformations.slice(0, 3);
  return (
    <section className="bg-black" aria-labelledby="glowups-heading">
      <Container className="py-20 sm:py-28 lg:py-36">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Recent glow-ups"
            title={<span id="glowups-heading">Before. After. Home.</span>}
          />
          <Reveal delay={0.1}>
            <Button href="/transformations" variant="secondary">
              All transformations
            </Button>
          </Reveal>
        </div>
        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <RevealItem key={t.slug}>
              <TransformationCard t={t} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
