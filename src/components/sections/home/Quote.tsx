import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Quote() {
  return (
    <section className="on-light bg-cream text-black" aria-label="Why grooming matters">
      <Container className="py-20 sm:py-28 lg:py-36">
        <Reveal>
          <p className="eyebrow">Why grooming matters</p>
        </Reveal>
        <Reveal delay={0.1}>
          <blockquote className="font-display text-display-md mt-8 max-w-[22ch] font-normal text-balance">
            “A groom is more than a makeover. It is comfort, dignity, visibility, and a
            better first step toward a new life.”
          </blockquote>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-muted-light mt-8 text-sm tracking-[0.18em] uppercase">
            The Grooming Glow-Up Project
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
