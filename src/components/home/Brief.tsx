import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/** The approved boilerplate, verbatim. The mission line closes it as a pull quote. */
export function Brief() {
  const [p1, p2, p3, mission] = siteConfig.boilerplate;
  return (
    <section className="py-14 sm:py-22">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label rule text-gold pt-4">The Project</p>
          </div>
          <div className="lg:col-span-8">
            <div className="prose-brand text-bone/80 max-w-[62ch] text-lg">
              <p>{p1}</p>
              <p>{p2}</p>
              <p>{p3}</p>
            </div>
            <p className="font-display text-champagne mt-10 max-w-[24ch] text-2xl italic sm:text-3xl">
              {mission}
            </p>
            <div className="mt-10">
              <Button href="/about" variant="text">
                About the project
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
