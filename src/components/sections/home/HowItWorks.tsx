import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export const steps = [
  {
    n: "01",
    title: "Identify",
    body: "Dallas Animal Services flags a dog entering the shelter with severe matting, an overgrown coat, or skin hidden under neglect. We assess each one individually.",
  },
  {
    n: "02",
    title: "Transform",
    body: "A professional groom, usually 4 to 6 hours, with veterinary support and sedation when it's the humane choice. Relief from pain comes first.",
  },
  {
    n: "03",
    title: "Shine",
    body: "We share the before and after so the dog is seen, and we help connect them with a foster or adopter through the shelter.",
  },
];

export function HowItWorks({ compact = false }: { compact?: boolean }) {
  return (
    <section className="bg-black" aria-labelledby="how-heading">
      <Container className={compact ? "py-20 sm:py-28" : "py-20 sm:py-28 lg:py-36"}>
        <SectionHeading
          eyebrow="How it works"
          title={
            <span id="how-heading">One dog. One week. One transformation at a time.</span>
          }
        />
        <RevealGroup
          as="ul"
          className="border-line bg-line mt-14 grid gap-px border md:grid-cols-3"
        >
          {steps.map((s) => (
            <RevealItem key={s.n} as="li" className="bg-black">
              <div className="flex h-full flex-col gap-8 p-8 sm:p-10">
                <span className="font-display text-gold text-5xl tabular-nums">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-display text-3xl">{s.title}</h3>
                  <p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-white/70 sm:text-base">
                    {s.body}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
