import type { Metadata } from "next";
import { impact } from "@/content/impact";
import { sortedTransformations, statusLabel } from "@/content/transformations";
import { PageHead } from "@/components/ui/PageHead";
import { Container } from "@/components/ui/Container";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { Button } from "@/components/ui/Button";
import { weekLabel } from "@/lib/cycle";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Transformations",
  description:
    "Every dog we've groomed at Dallas Animal Services, before and after, by week. Same crop, same angle, same distance.",
};

export default function TransformationsPage() {
  return (
    <>
      <PageHead
        label={`${impact.glowUps} transformations and counting`}
        title="Before. After. Home."
        text="One dog a week, chosen because they need it most. Same crop, same angle, same distance. The only thing that changes is the dog."
      />
      <section className="pb-14 sm:pb-22">
        <Container>
          <ol className="hairline-y border-hairline border-t">
            {sortedTransformations.map((t, i) => (
              <li key={t.slug} className="grid gap-10 py-14 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <BeforeAfter
                    before={t.before}
                    after={t.after}
                    name={t.name}
                    priority={i < 2}
                  />
                </div>
                <div className="lg:col-span-5">
                  <p className="label text-gold">{weekLabel(t.week)}</p>
                  <h2 className="font-display mt-4 text-[2rem] sm:text-[2.5rem]">
                    {t.name}
                  </h2>
                  <p className="text-bone/75 mt-4 max-w-[48ch]">{t.summary}</p>
                  <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
                    {[
                      ["Groomed", formatDate(t.date)],
                      ["Time on table", `${t.hours} hours`],
                      ["Sedation", t.sedated ? "With veterinary support" : "Not needed"],
                      ["Status", statusLabel[t.status]],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <dt className="label text-bone/50 text-[0.6875rem]">{k}</dt>
                        <dd className="font-display mt-1 text-lg">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-8">
                    <Button href={`/transformations/${t.slug}`} variant="text">
                      Read {t.name}&apos;s story
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
