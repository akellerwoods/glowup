import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { partners, partnerOrganizations } from "@/content/team";
import { PageHead } from "@/components/ui/PageHead";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Partners",
  description: `The three partners behind ${siteConfig.name}, and the shelter every dog in the program calls home.`,
};

export default function PartnersPage() {
  return (
    <>
      <PageHead
        label="Partners"
        title="Three groomers. One promise."
        text={`${siteConfig.name} is run by three partners who give their hands, their hours, and their Saturdays to dogs nobody else could reach.`}
      />

      <section className="pb-14 sm:pb-22">
        <Container>
          {/* partners.jpg is pre-cropped chest-up (original kept as partners-full.jpg) */}
          <div className="bg-ink relative aspect-[50/19]">
            <Image
              src="/images/brand/partners.jpg"
              alt={`${partners.map((p) => p.name).join(", ")}, the three partners behind ${siteConfig.name}`}
              fill
              sizes="(min-width: 1200px) 1100px, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <ul className="hairline-y border-hairline mt-14 border-y">
            {partners.map((p) => (
              <li key={p.name} className="grid gap-2 py-6 sm:grid-cols-12 sm:gap-6">
                <div className="sm:col-span-4">
                  <p className="font-display text-2xl">{p.name}</p>
                  <p className="label text-gold mt-2 text-[0.6875rem]">{p.role}</p>
                </div>
                <p className="text-bone/75 max-w-[62ch] sm:col-span-8">{p.bio}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="pb-14 sm:pb-22">
        <Container>
          {partnerOrganizations.map((o) => (
            <div key={o.name}>
              <SectionHead
                label="Shelter partner"
                title={o.name}
                text="Every dog in the program is in their care. Grooming happens on site, and adoptions go through the shelter."
              />
              <div className="mt-8">
                <Button
                  href={siteConfig.partnerShelter.adoptUrl}
                  external
                  variant="outline"
                >
                  Adopt through {siteConfig.partnerShelter.name}
                </Button>
              </div>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
