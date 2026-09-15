import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { BeforeAfter } from "@/components/transformations/BeforeAfter";
import { featuredTransformation as t } from "@/content/transformations";
import { Button } from "@/components/ui/Button";

export function Compassion() {
  return (
    <section className="grain bg-black" aria-labelledby="compassion-heading">
      <Container className="py-20 sm:py-28 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="The process"
              title={
                <span id="compassion-heading">
                  Every transformation begins with compassion.
                </span>
              }
            />
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col gap-5 text-base leading-relaxed text-white/75 sm:text-lg">
                <p>Most transformations take 4 to 6 hours to complete.</p>
                <p>
                  Every dog is assessed individually, and when needed, veterinary support
                  and sedation are used to ensure the grooming process is safe, humane,
                  and as stress-free as possible.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <dl className="border-line mt-10 grid grid-cols-3 gap-6 border-t pt-8">
                <div>
                  <dt className="text-[0.625rem] tracking-[0.2em] text-white/50 uppercase">
                    Typical time
                  </dt>
                  <dd className="font-display text-gold mt-2 text-3xl">4–6 h</dd>
                </div>
                <div>
                  <dt className="text-[0.625rem] tracking-[0.2em] text-white/50 uppercase">
                    Assessment
                  </dt>
                  <dd className="font-display text-gold mt-2 text-3xl">1 : 1</dd>
                </div>
                <div>
                  <dt className="text-[0.625rem] tracking-[0.2em] text-white/50 uppercase">
                    Vet support
                  </dt>
                  <dd className="font-display text-gold mt-2 text-3xl">Always</dd>
                </div>
              </dl>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10">
                <Button href="/how-it-works" variant="secondary">
                  How it works
                </Button>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <BeforeAfter before={t.before} after={t.after} name={t.name} />
              <div className="border-line mt-5 flex flex-wrap items-baseline justify-between gap-3 border-t pt-5">
                <p className="font-display text-2xl">
                  {t.name}{" "}
                  <span className="text-white/50">
                    · Glow-Up Nº {String(t.week).padStart(2, "0")}
                  </span>
                </p>
                <p className="text-sm text-white/60">
                  {t.hours} hours{t.sedated ? " · with veterinary sedation" : ""}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
