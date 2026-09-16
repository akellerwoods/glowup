import type { Metadata } from "next";
import { faqs } from "@/content/faqs";
import { PageHead } from "@/components/ui/PageHead";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Steps } from "@/components/home/HowItWorks";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How Grooming Glow-Up Project identifies, transforms, and shares one Dallas Animal Services dog each week, and why compassion comes first.",
};

const process = [
  ["Typical time", "4–6 h"],
  ["Assessment", "1 : 1"],
  ["Vet support", "Always"],
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHead
        label="How it works"
        title="Relief first. Then a fresh start."
        text="A dog who can't see through their own coat, or who winces when they walk, isn't going to get chosen. We fix the first problem so the second one has a chance."
      />

      <section className="pb-14 sm:pb-22">
        <Container>
          <Steps />
        </Container>
      </section>

      <section className="pb-14 sm:pb-22">
        <Container>
          <SectionHead
            label="The process"
            title="Every transformation begins with compassion."
          />
          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <div className="prose-brand text-bone/80 max-w-[62ch] text-lg lg:col-span-7">
              <p>Most transformations take 4 to 6 hours to complete.</p>
              <p>
                Every dog is assessed individually, and when needed, veterinary support
                and sedation are used to ensure the grooming process is safe, humane, and
                as stress-free as possible.
              </p>
            </div>
            <dl className="hairline-y border-hairline border-y lg:col-span-4 lg:col-start-9">
              {process.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-6 py-4">
                  <dt className="label text-bone/50 text-[0.6875rem]">{k}</dt>
                  <dd className="font-display text-gold text-2xl">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section className="pb-14 sm:pb-22">
        <Container>
          <SectionHead
            label="Questions"
            title="Good to know."
            text="Everything people ask us at events, in one place."
          />
          <div className="hairline-y border-hairline mt-10 border-y">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="font-display flex cursor-pointer list-none items-baseline justify-between gap-6 text-xl sm:text-2xl">
                  <span>{f.q}</span>
                  <span
                    aria-hidden
                    className="text-gold font-sans text-2xl leading-none transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="text-bone/75 mt-4 max-w-[62ch]">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
