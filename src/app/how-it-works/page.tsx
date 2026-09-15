import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { HowItWorks } from "@/components/sections/home/HowItWorks";
import { Compassion } from "@/components/sections/home/Compassion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "@/content/faqs";
import { CtaBand } from "@/components/sections/home/CtaBand";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How the Grooming Glow-Up Project identifies, transforms, and shares one Dallas Animal Services dog each week, and why compassion comes first.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title={
          <>
            Relief first. Then a <span className="text-gold italic">fresh start.</span>
          </>
        }
        description="A dog who can't see through their own coat, or who winces when they walk, isn't going to get chosen. We fix the first problem so the second one has a chance."
      />
      <HowItWorks compact />
      <Compassion />
      <section className="on-light bg-cream text-black" aria-labelledby="faq-heading">
        <Container className="py-20 sm:py-28 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Questions"
                size="md"
                title={<span id="faq-heading">Good to know.</span>}
                description="Everything people ask us at events, in one place."
              />
            </div>
            <div className="lg:col-span-8">
              <Reveal delay={0.1}>
                <Accordion items={faqs} tone="light" />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
