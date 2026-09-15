import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/**
 * Hero entrance is CSS-only (see .hero-* in globals.css) so it paints before
 * hydration and keeps LCP low. Everything else on the page uses Framer Motion.
 */
function Words({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <span className="inline">
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <span
            className="hero-word inline-block"
            style={{ animationDelay: `${delay + i * 0.07}s` }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section className="grain relative isolate flex min-h-[100svh] items-end overflow-hidden bg-black pt-24">
      <div className="hero-image absolute inset-0 -z-10">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
      </div>

      <Container className="relative pb-14 sm:pb-20 lg:pb-24">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="eyebrow hero-fade mb-6" style={{ animationDelay: "0.1s" }}>
              {siteConfig.city} · With {siteConfig.partnerShelter.name}
            </p>
            <h1 className="font-display text-display-xl font-normal text-white">
              <Words text="Every dog" delay={0.15} />
              <br />
              <Words text="deserves a" delay={0.3} />
              <br />
              <span className="text-gold italic">
                <Words text="glow-up." delay={0.45} />
              </span>
            </h1>
            <p
              className="hero-fade mt-8 max-w-[52ch] text-base leading-relaxed text-pretty text-white/80 sm:text-lg"
              style={{ animationDelay: "0.55s" }}
            >
              {siteConfig.description}
            </p>
            <div
              className="hero-fade mt-10 flex flex-wrap gap-4"
              style={{ animationDelay: "0.7s" }}
            >
              <Button href="/donate" size="lg">
                Fund a glow-up
              </Button>
              <Button href="/transformations" variant="secondary" size="lg">
                See the transformations
              </Button>
            </div>
          </div>

          <div className="hero-logo hidden justify-end lg:col-span-4 lg:flex">
            <Image
              src="/images/brand/logo-circle.png"
              alt={`${siteConfig.name} logo`}
              width={340}
              height={340}
              priority
              className="drop-shadow-[0_0_40px_rgba(201,162,39,0.25)]"
            />
          </div>
        </div>
      </Container>

      <div
        aria-hidden
        className="hero-fade absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.625rem] tracking-[0.3em] text-white/50 uppercase sm:flex"
        style={{ animationDelay: "1.2s" }}
      >
        Scroll
        <span className="block h-10 w-px overflow-hidden bg-white/20">
          <span className="hero-scroll-line bg-gold block h-full w-full" />
        </span>
      </div>
    </section>
  );
}
