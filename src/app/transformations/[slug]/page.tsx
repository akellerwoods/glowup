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
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { BeforeAfter } from "@/components/transformations/BeforeAfter";
import { TransformationCard } from "@/components/transformations/TransformationCard";
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
    title: `${t.name} — Glow-Up Nº ${t.week}`,
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
  const more = sortedTransformations.filter((x) => x.slug !== t.slug).slice(0, 3);
  const lookingForHome = t.status === "available" || t.status === "in-foster";

  return (
    <>
      <article className="grain bg-black pt-28 sm:pt-36">
        <Container>
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="text-xs tracking-[0.16em] text-white/50 uppercase"
            >
              <Link href="/transformations" className="link-underline hover:text-white">
                Glow-Ups
              </Link>
              <span className="mx-3" aria-hidden>
                /
              </span>
              <span className="text-gold">Nº {String(t.week).padStart(2, "0")}</span>
            </nav>
          </Reveal>
          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal delay={0.05}>
                <BeforeAfter before={t.before} after={t.after} name={t.name} priority />
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal>
                <h1 className="font-display text-display-lg font-normal">{t.name}</h1>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-4 text-lg text-white/75">{t.summary}</p>
              </Reveal>
              <Reveal delay={0.1}>
                <dl className="border-line mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-y py-6 text-sm">
                  <div>
                    <dt className="text-[0.625rem] tracking-[0.2em] text-white/50 uppercase">
                      Status
                    </dt>
                    <dd className="text-gold mt-1">{statusLabel[t.status]}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.625rem] tracking-[0.2em] text-white/50 uppercase">
                      Groomed
                    </dt>
                    <dd className="mt-1">{formatDate(t.date)}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.625rem] tracking-[0.2em] text-white/50 uppercase">
                      Breed
                    </dt>
                    <dd className="mt-1">{t.breed}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.625rem] tracking-[0.2em] text-white/50 uppercase">
                      Age
                    </dt>
                    <dd className="mt-1">{t.ageLabel}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.625rem] tracking-[0.2em] text-white/50 uppercase">
                      Groom time
                    </dt>
                    <dd className="mt-1">{t.hours} hours</dd>
                  </div>
                  <div>
                    <dt className="text-[0.625rem] tracking-[0.2em] text-white/50 uppercase">
                      Sedation
                    </dt>
                    <dd className="mt-1">
                      {t.sedated ? "Yes, with veterinary support" : "Not needed"}
                    </dd>
                  </div>
                </dl>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap gap-4">
                  {lookingForHome ? (
                    <Button href={siteConfig.partnerShelter.adoptUrl} external>
                      Ask about {t.name}
                    </Button>
                  ) : (
                    <Button href="/donate">Fund the next glow-up</Button>
                  )}
                  <Button href="/get-involved#foster" variant="secondary">
                    Foster a dog like {t.name}
                  </Button>
                </div>
                {lookingForHome ? (
                  <p className="mt-4 text-xs text-white/50">
                    {t.name} is in the care of {siteConfig.partnerShelter.name}. Adoptions
                    go through the shelter.
                  </p>
                ) : null}
              </Reveal>
            </div>
          </div>

          <div className="border-line mt-16 grid gap-10 border-t pt-12 sm:mt-24 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Reveal>
                <p className="eyebrow">{t.name}&apos;s story</p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.05}>
                <p className="font-display text-2xl leading-snug text-pretty sm:text-3xl">
                  {t.story}
                </p>
              </Reveal>
            </div>
          </div>

          <nav
            aria-label="Other glow-ups"
            className="border-line mt-16 flex justify-between border-y py-6 text-sm sm:mt-24"
          >
            {prev ? (
              <Link
                href={`/transformations/${prev.slug}`}
                className="group flex items-center gap-3"
              >
                <span
                  aria-hidden
                  className="text-gold transition-transform group-hover:-translate-x-1"
                >
                  ←
                </span>
                <span>
                  <span className="block text-[0.625rem] tracking-[0.2em] text-white/50 uppercase">
                    Previous
                  </span>
                  <span className="font-display text-xl">{prev.name}</span>
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/transformations/${next.slug}`}
                className="group flex items-center gap-3 text-right"
              >
                <span>
                  <span className="block text-[0.625rem] tracking-[0.2em] text-white/50 uppercase">
                    Next
                  </span>
                  <span className="font-display text-xl">{next.name}</span>
                </span>
                <span
                  aria-hidden
                  className="text-gold transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            ) : (
              <span />
            )}
          </nav>

          <div className="py-16 sm:py-24">
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-display text-display-sm font-normal">More glow-ups</h2>
              <Link
                href="/transformations"
                className="link-underline text-gold text-xs tracking-[0.16em] uppercase"
              >
                See all
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {more.map((m) => (
                <TransformationCard key={m.slug} t={m} />
              ))}
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
