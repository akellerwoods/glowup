import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { board } from "@/content/team";
import { testimonials } from "@/content/testimonials";
import { PageHero } from "@/components/layout/PageHero";
import { Partners } from "@/components/sections/home/Partners";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Quote } from "@/components/sections/home/Quote";
import { CtaBand } from "@/components/sections/home/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Grooming Glow-Up Project is a Dallas nonprofit that provides professional grooming to Dallas Animal Services dogs in urgent need, in partnership with the shelter.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            Care changes how they feel. A glow-up changes{" "}
            <span className="text-gold italic">what happens next.</span>
          </>
        }
        description={siteConfig.description}
      />

      <section className="grain bg-black" aria-labelledby="story-heading">
        <Container className="pb-20 sm:pb-28 lg:pb-36">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <Reveal>
                <div className="bg-surface relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/about-story.jpg"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="Our story"
                size="md"
                title={
                  <span id="story-heading">
                    It started with one dog who couldn&apos;t see.
                  </span>
                }
              />
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-col gap-5 text-base leading-relaxed text-white/75 sm:text-lg">
                  <p>
                    Dogs arrive at {siteConfig.partnerShelter.name} every day carrying
                    months of neglect in their coats: matting fused into pelts, hair
                    sealed over eyes and ears, skin raw underneath. They are in pain, and
                    they are the last dogs anyone stops to look at.
                  </p>
                  <p>
                    In May 2026, three professional groomers decided to fix that one dog
                    at a time. We sponsor a full professional groom for one dog each week,
                    with veterinary support and sedation whenever it&apos;s the humane
                    choice. Then we share the transformation so the dog gets seen, and we
                    help them find a foster or a family through the shelter.
                  </p>
                  <p>
                    That&apos;s the whole model. Fifty-two dogs a year. Fifty-two second
                    chances.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="mt-10">
                  <Button href="/how-it-works" variant="secondary">
                    How it works
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <Partners />
      <Quote />

      <section className="grain bg-black" aria-labelledby="voices-heading">
        <Container className="py-20 sm:py-28 lg:py-36">
          <SectionHeading
            eyebrow="Voices"
            size="md"
            title={<span id="voices-heading">What people say.</span>}
          />
          <RevealGroup as="ul" className="mt-12 grid gap-6 lg:grid-cols-2">
            {testimonials.map((t) => (
              <RevealItem
                key={t.name}
                as="li"
                className="border-line flex flex-col justify-between gap-8 border p-8 sm:p-10"
              >
                <blockquote className="font-display text-2xl leading-snug text-pretty sm:text-3xl">
                  “{t.quote}”
                </blockquote>
                <p className="text-sm text-white/60">
                  <span className="text-white">{t.name}</span> · {t.detail}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="on-light bg-cream text-black" aria-labelledby="board-heading">
        <Container className="py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Governance"
                size="md"
                title={<span id="board-heading">Board of directors</span>}
              />
              <Reveal delay={0.15}>
                <ul className="divide-line-light border-line-light mt-8 divide-y border-y">
                  {board.map((b) => (
                    <li key={b.name} className="flex justify-between gap-6 py-4">
                      <span className="font-display text-xl">{b.name}</span>
                      <span className="text-muted-light text-xs tracking-[0.18em] uppercase">
                        {b.role}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={0.1}>
                <div className="border-line-light border p-8 sm:p-10">
                  <p className="eyebrow">Nonprofit status</p>
                  <p className="font-display mt-4 text-2xl">
                    {siteConfig.name} is a registered 501(c)(3) nonprofit organization.
                  </p>
                  <p className="text-muted-light mt-4 text-sm">
                    EIN {siteConfig.ein}. Donations are tax-deductible to the extent
                    allowed by law. Our annual report and financials are available on
                    request and will be published here.
                  </p>
                  <div className="mt-6">
                    {/* TODO: link the annual report PDF once published */}
                    <Button href="/contact" variant="light" arrow={false}>
                      Request the annual report
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
