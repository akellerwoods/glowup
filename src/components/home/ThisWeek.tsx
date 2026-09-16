import { featuredTransformation as t, statusLabel } from "@/content/transformations";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { Button } from "@/components/ui/Button";
import { weekLabel } from "@/lib/cycle";
import { formatDate } from "@/lib/utils";

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid grid-cols-[9rem_1fr] gap-4 py-3">
      <dt className="label text-bone/50 self-center text-[0.6875rem]">{k}</dt>
      <dd className="font-display text-xl">{v}</dd>
    </div>
  );
}

export function ThisWeek() {
  return (
    <section className="py-14 sm:py-22">
      <Container>
        <SectionHead label={`This week · ${weekLabel(t.week)}`} title={t.name} />
        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <BeforeAfter before={t.before} after={t.after} name={t.name} priority />
          </div>
          <div className="lg:col-span-5">
            <p className="text-bone/80 max-w-[48ch] text-lg">{t.summary}</p>
            <dl className="hairline-y border-hairline mt-8 border-y">
              <Row k="Time on table" v={`${t.hours} hours`} />
              <Row
                k="Sedation"
                v={t.sedated ? "Yes, with veterinary support" : "Not needed"}
              />
              <Row k="Status" v={statusLabel[t.status]} />
              <Row k="Groomed" v={formatDate(t.date)} />
            </dl>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Button href={`/transformations/${t.slug}`} variant="outline">
                Read {t.name}&apos;s story
              </Button>
              <Button href="/transformations" variant="text">
                All transformations
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
