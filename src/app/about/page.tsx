import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { board } from "@/content/team";
import { testimonials } from "@/content/testimonials";
import { PageHead } from "@/components/ui/PageHead";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "The Project",
  description: siteConfig.description,
};

export default function AboutPage() {
  const [p1, p2, p3, mission] = siteConfig.boilerplate;
  return (
    <>
      <PageHead
        label="The Project"
        title="Care changes how they feel. A glow-up changes what happens next."
      />

      <section className="pb-14 sm:pb-22">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="label rule text-gold pt-4">Who we are</p>
            </div>
            <div className="lg:col-span-8">
              <div className="prose-brand text-bone/80 max-w-[62ch] text-lg">
                <p>{p1}</p>
                <p>{p2}</p>
                <p>{p3}</p>
              </div>
              <p className="font-display text-champagne mt-10 max-w-[24ch] text-2xl italic sm:text-3xl">
                {mission}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-14 sm:pb-22">
        <Container>
          <SectionHead
            label="Our story"
            title="It started with one dog who couldn't see."
          />
          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="bg-ink relative aspect-[4/3]">
                <Image
                  src="/images/about-story.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="prose-brand text-bone/80 max-w-[62ch] text-lg lg:col-span-7">
              <p>
                Dogs arrive at {siteConfig.partnerShelter.name} every day carrying months
                of neglect in their coats: matting fused into pelts, hair sealed over eyes
                and ears, skin raw underneath. They are in pain, and they are the last
                dogs anyone stops to look at.
              </p>
              <p>
                In May 2026, three professional groomers decided to fix that one dog at a
                time. We sponsor a full professional groom for one dog each week, with
                veterinary support and sedation whenever it&apos;s the humane choice. Then
                we share the transformation so the dog gets seen, and we help them find a
                foster or a family through the shelter.
              </p>
              <p>That&apos;s the whole model. 52 dogs a year. 52 second chances.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-14 sm:pb-22">
        <Container>
          <SectionHead label="Voices" title="What people say." />
          <ul className="hairline-y border-hairline mt-10 border-y">
            {testimonials.map((t) => (
              <li key={t.name} className="py-8">
                <blockquote className="font-display text-champagne max-w-[32ch] text-2xl italic sm:text-3xl">
                  “{t.quote}”
                </blockquote>
                <p className="label text-bone/60 mt-6 text-[0.6875rem]">
                  {t.name} · {t.detail}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="pb-14 sm:pb-22">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHead label="Governance" title="Board of directors." />
              <ul className="hairline-y border-hairline mt-8 border-y">
                {board.map((b) => (
                  <li key={b.name} className="flex justify-between gap-6 py-4">
                    <span className="font-display text-xl">{b.name}</span>
                    <span className="label text-bone/60 self-center text-[0.6875rem]">
                      {b.role}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="label rule text-gold pt-4">Nonprofit status</p>
              <p className="font-display mt-6 text-2xl">
                {siteConfig.name} is a registered 501(c)(3) nonprofit organization.
              </p>
              <p className="text-bone/60 mt-4 max-w-[52ch] text-sm">
                EIN {siteConfig.ein}. Donations are tax-deductible to the extent allowed
                by law. Our annual report and financials are available on request and will
                be published here.
              </p>
              <div className="mt-8">
                {/* TODO: link the annual report PDF once published */}
                <Button href="/contact" variant="outline">
                  Request the annual report
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
