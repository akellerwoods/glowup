import type { Metadata } from "next";
import { Suspense } from "react";
import { sortedTransformations } from "@/content/transformations";
import { impact } from "@/content/impact";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { TransformationGrid } from "@/components/transformations/TransformationGrid";
import { CtaBand } from "@/components/sections/home/CtaBand";

export const metadata: Metadata = {
  title: "Glow-Ups",
  description:
    "Every dog we've groomed at Dallas Animal Services, before and after. Follow each transformation and see who's still looking for a home.",
};

export default function TransformationsPage() {
  return (
    <>
      <PageHero
        eyebrow={`${impact.glowUps} glow-ups and counting`}
        title={
          <>
            Before. After. <span className="text-gold italic">Home.</span>
          </>
        }
        description="One dog a week, chosen because they need it most. Drag the slider on any glow-up to see the difference a groom makes."
      />
      <section className="bg-black">
        <Container className="pb-24 sm:pb-32">
          <Suspense fallback={null}>
            <TransformationGrid items={sortedTransformations} />
          </Suspense>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
