import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site.config";
import {
  getTransformation,
  sortedTransformations,
  statusLabel,
  transformations,
} from "@/content/transformations";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { weekLabel } from "@/lib/cycle";
import { formatDate } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return transformations.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const t = getTransformation(slug);
  if (!t) return {};
  return {
    title: `${t.name} — ${weekLabel(t.week)}`,
    description: t.summary,
    openGraph: { images: [{ url: t.after, alt: `${t.name} after grooming` }] },
    twitter: { images: [t.after] },
  };
}

export default async function TransformationPage({ params }: Props) {
  const { slug } = await params;
  const t = getTransformation(slug);
  if (!t) notFound();

  const idx = sortedTransformations.findIndex((x) => x.slug === t.slug);
  const prev = sortedTransformations[idx + 1];
  const next = sortedTransformations[idx - 1];
  const lookingForHome = t.status === "available" || t.status === "in-foster";

  // Every dog record carries: name · week · groom date · groomer credit · status.
  const facts: [string, string][] = [
    ["Week", weekLabel(t.week)],
    ["Groomed", formatDate(t.date)],
    ["Breed", t.breed],
    ["Age", t.ageLabel],
    ["Time on table", `${t.hours} hours`],
    ["Sedation", t.sedated ? "Yes, with veterinary support" : "Not needed"],
    ["Status", statusLabel[t.status]],
    ["Groom sponsored by", siteConfig.name],
  ];

  return (
    <article>
      <section className="py-14 sm:py-22">
        <Container>
          <nav aria-label="Breadcrumb" className="rule pt-4">
            <Link
              href="/transformations"
              className="label text-bone/60 hover:text-gold text-[0.6875rem]"
            >
              Transformations
            </Link>
            <span className="label text-bone/30 mx-3 text-[0.6875rem]" aria-hidden>
              /
            </span>
            <span className="label text-gold text-[0.6875rem]">{weekLabel(t.week)}</span>
          </nav>
          <h1 className="font-display mt-10 text-[2.75rem] leading-[1.1] sm:text-[3.5rem] lg:text-[4.25rem]">
            {t.name}
          </h1>
          <p className="text-bone/75 mt-6 max-w-[56ch] text-lg">{t.summary}</p>

          <div className="mt-14 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <BeforeAfter before={t.before} after={t.after} name={t.name} priority />
            </div>
            <div className="lg:col-span-5">
              <dl className="hairline-y border-hairline border-y">
                {facts.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[10rem_1fr] gap-4 py-3">
                    <dt className="label text-bone/50 self-center text-[0.6875rem]">
                      {k}
                    </dt>
                    <dd className="font-display text-lg">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                {lookingForHome ? (
                  <Button href={siteConfig.partnerShelter.adoptUrl} external>
                    Ask about {t.name}
                  </Button>
                ) : (
                  <Button href="/donate">Sponsor the next week</Button>
                )}
                <Button href="/get-involved#foster" variant="text">
                  Foster a dog like {t.name}
                </Button>
              </div>
              {lookingForHome ? (
                <p className="text-bone/50 mt-4 text-xs">
                  {t.name} is in the care of {siteConfig.partnerShelter.name}. Adoptions
                  go through the shelter.
                </p>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-14 sm:pb-22">
        <Container>
          <div className="border-hairline grid gap-10 border-t pt-4 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="label text-gold">{t.name}&apos;s story</p>
            </div>
            <div className="prose-brand text-bone/80 max-w-[62ch] text-lg lg:col-span-8">
              {t.story.split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <nav
            aria-label="More transformations"
            className="border-hairline mt-14 grid gap-4 border-t pt-6 sm:grid-cols-2"
          >
            {prev ? (
              <Link href={`/transformations/${prev.slug}`} className="group">
                <span className="label text-bone/50 text-[0.6875rem]">
                  Previous · {weekLabel(prev.week)}
                </span>
                <span className="font-display group-hover:text-gold mt-2 block text-2xl transition-colors">
                  {prev.name}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/transformations/${next.slug}`}
                className="group sm:text-right"
              >
                <span className="label text-bone/50 text-[0.6875rem]">
                  Next · {weekLabel(next.week)}
                </span>
                <span className="font-display group-hover:text-gold mt-2 block text-2xl transition-colors">
                  {next.name}
                </span>
              </Link>
            ) : null}
          </nav>
        </Container>
      </section>
    </article>
  );
}
