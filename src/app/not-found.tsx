import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="grain relative isolate flex min-h-[100svh] items-end overflow-hidden bg-black pt-24">
      <Image
        src="/images/not-found.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-60"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/60 to-black/20" />
      <Container className="pb-20 sm:pb-28">
        <p className="eyebrow">404</p>
        <h1 className="font-display text-display-xl mt-6 font-normal">
          This pup <span className="text-gold italic">wandered off.</span>
        </h1>
        <p className="mt-6 max-w-[44ch] text-lg text-white/75">
          The page you&apos;re looking for isn&apos;t here. The dogs are, though.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/" size="lg">
            Back home
          </Button>
          <Button href="/transformations" variant="secondary" size="lg">
            See the glow-ups
          </Button>
        </div>
      </Container>
    </section>
  );
}
