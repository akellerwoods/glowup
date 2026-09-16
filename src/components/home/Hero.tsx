import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { impact } from "@/content/impact";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Sparkles } from "@/components/ui/Sparkles";
import { CYCLE_LENGTH, pad } from "@/lib/cycle";

/**
 * The badge lockup and the mission line are the two things the brand centers.
 * Clear space around the badge is a quarter of its diameter on every side.
 */
export function Hero() {
  const groomed = Math.min(CYCLE_LENGTH, impact.glowUps);
  return (
    <section className="relative overflow-hidden">
      <Sparkles />
      <Container className="relative flex flex-col items-center py-22 text-center sm:py-30">
        <Image
          src="/images/brand/logo-circle.png"
          alt={`${siteConfig.name} badge`}
          width={224}
          height={224}
          priority
          className="h-44 w-44 sm:h-56 sm:w-56"
        />
        <p className="label text-gold mt-14">{siteConfig.city}</p>
        <h1 className="font-display mt-6 max-w-[14ch] text-[2.75rem] leading-[1.1] sm:text-[3.5rem] lg:text-[4.25rem]">
          {siteConfig.tagline}
        </h1>
        <p className="text-bone/70 mt-8 max-w-[56ch] text-base sm:text-lg">
          We sponsor professional grooming for neglected shelter dogs at{" "}
          {siteConfig.partnerShelter.name}, relieving real discomfort, and changing what
          an adopter sees walking down the kennel row.
        </p>
        <div className="border-hairline mt-10 inline-flex items-baseline gap-4 border px-6 py-4">
          <span className="font-display text-gold text-3xl tabular-nums">
            {pad(groomed)}
          </span>
          <span className="font-display text-bone/50 text-lg">/ {CYCLE_LENGTH}</span>
          <span className="label text-bone/60 text-[0.6875rem]">
            Groomed · this cycle
          </span>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/donate">Sponsor a Glow-Up</Button>
          <Button href="/the-52" variant="outline">
            See the 52
          </Button>
        </div>
      </Container>
    </section>
  );
}
