import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function CtaBand() {
  return (
    <section
      className="grain relative isolate overflow-hidden bg-black"
      aria-labelledby="cta-heading"
    >
      <Image
        src="/images/cta.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-40"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-black/70 to-black" />
      <Container className="py-24 sm:py-32 lg:py-44">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <h2
                id="cta-heading"
                className="font-display text-display-lg max-w-[12ch] font-normal text-balance"
              >
                Change a life <span className="text-gold italic">today.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[48ch] text-base text-white/75 sm:text-lg">
                Fifty-two dogs a year need a community behind them. Be part of the next
                transformation.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/donate" size="lg">
                  Donate
                </Button>
                <Button href="/get-involved" variant="secondary" size="lg">
                  Get involved
                </Button>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:self-end">
            <Reveal delay={0.25}>
              <p className="eyebrow mb-4">Weekly glow-up email</p>
              <NewsletterForm />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
