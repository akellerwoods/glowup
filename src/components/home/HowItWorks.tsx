import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";

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

export function Steps() {
  return (
    <ol className="divide-hairline border-hairline grid divide-y border-y md:grid-cols-3 md:divide-x md:divide-y-0">
      {steps.map((s) => (
        <li
          key={s.n}
          className="flex flex-col gap-6 py-8 md:px-8 md:first:pl-0 md:last:pr-0"
        >
          <span className="font-display text-gold text-4xl tabular-nums">{s.n}</span>
          <div>
            <h3 className="font-display text-2xl">{s.title}</h3>
            <p className="text-bone/70 mt-3 max-w-[38ch]">{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function HowItWorks() {
  return (
    <section className="py-14 sm:py-22">
      <Container>
        <SectionHead
          label="How it works"
          title="One dog. One week. One transformation at a time."
        />
        <div className="mt-10">
          <Steps />
        </div>
        <div className="mt-10">
          <Button href="/how-it-works" variant="text">
            The whole process
          </Button>
        </div>
      </Container>
    </section>
  );
}
