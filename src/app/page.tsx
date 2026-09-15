import { Hero } from "@/components/sections/home/Hero";
import { Marquee } from "@/components/ui/Marquee";
import { ImpactTracker } from "@/components/sections/home/ImpactTracker";
import { Compassion } from "@/components/sections/home/Compassion";
import { SecondChance } from "@/components/sections/home/SecondChance";
import { FeaturedGlowUps } from "@/components/sections/home/FeaturedGlowUps";
import { HowItWorks } from "@/components/sections/home/HowItWorks";
import { Partners } from "@/components/sections/home/Partners";
import { Quote } from "@/components/sections/home/Quote";
import { DonateSection } from "@/components/sections/home/DonateSection";
import { UpcomingEvents } from "@/components/sections/home/UpcomingEvents";
import { CtaBand } from "@/components/sections/home/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee
        items={[
          "Glow-Ups",
          "Second Chances",
          "Dallas Animal Services",
          "Foster",
          "Donate",
          "Adopt",
        ]}
      />
      <ImpactTracker />
      <Compassion />
      <SecondChance />
      <FeaturedGlowUps />
      <HowItWorks compact />
      <Partners />
      <Quote />
      <DonateSection />
      <UpcomingEvents />
      <CtaBand />
    </>
  );
}
