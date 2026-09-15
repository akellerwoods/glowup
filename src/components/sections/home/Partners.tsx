import Image from "next/image";
import { partners, partnerOrganizations } from "@/content/team";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function Partners({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  return (
    <section className="grain bg-black" aria-labelledby="partners-heading">
      <Container className="py-20 sm:py-28 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              {/* partners.jpg is pre-cropped chest-up (original kept as partners-full.jpg) */}
              <div className="bg-surface relative aspect-[50/19] overflow-hidden">
                <Image
                  src="/images/brand/partners.jpg"
                  alt={`${partners.map((p) => p.name).join(", ")} — the ${partners.length} partners behind the Grooming Glow-Up Project`}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </Reveal>
          </div>
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <SectionHeading
                eyebrow="Partners"
                as={headingLevel}
                size="md"
                title={<span id="partners-heading">Three groomers. One promise.</span>}
                description="The Grooming Glow-Up Project is run by three partners who give their hands, their hours, and their Saturdays to dogs nobody else could reach."
              />
              <RevealGroup
                as="ul"
                className="divide-line border-line mt-10 divide-y border-y"
              >
                {partners.map((p) => (
                  <RevealItem key={p.name} as="li" className="py-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <p className="font-display text-2xl">{p.name}</p>
                      <p className="text-gold text-[0.6875rem] font-semibold tracking-[0.18em] uppercase">
                        {p.role}
                      </p>
                    </div>
                    <p className="mt-2 max-w-[48ch] text-sm leading-relaxed text-white/65">
                      {p.bio}
                    </p>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
            <Reveal delay={0.2}>
              <div className="mt-10">
                <p className="eyebrow">Shelter partner</p>
                {partnerOrganizations.map((o) => (
                  <a
                    key={o.name}
                    href={o.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-line hover:border-gold mt-4 flex items-center justify-between gap-6 border p-5 transition-colors"
                  >
                    <span>
                      <span className="font-display block text-xl">{o.name}</span>
                      <span className="mt-1 block text-sm text-white/60">
                        {o.description}
                      </span>
                    </span>
                    <span aria-hidden className="text-gold">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
