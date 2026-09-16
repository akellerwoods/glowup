import { impact } from "@/content/impact";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { FiftyTwoGrid, FiftyTwoLegend } from "@/components/ui/FiftyTwoGrid";
import { Button } from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";

export function TheFiftyTwo() {
  return (
    <section className="py-14 sm:py-22">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHead
            label="The 52"
            title="One dog a week. Thirteen weeks a quarter. Four quarters a cycle."
          />
          <p className="label text-bone/50 shrink-0 text-[0.6875rem]">
            Cycle beginning {formatDate(impact.since)}
          </p>
        </div>
        <div className="mt-10 overflow-x-auto">
          <FiftyTwoGrid groomed={impact.glowUps} />
        </div>
        <FiftyTwoLegend />
        <div className="mt-10">
          <Button href="/the-52" variant="text">
            See every week
          </Button>
        </div>
      </Container>
    </section>
  );
}
