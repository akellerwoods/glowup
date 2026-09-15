import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  children,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  image?: string;
  children?: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <section className="grain relative isolate overflow-hidden bg-black pt-32 sm:pt-40 lg:pt-48">
      {image ? (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover opacity-50"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/60 to-black" />
        </>
      ) : null}
      <Container
        className={cn(
          "pb-16 sm:pb-24",
          align === "center" && "flex flex-col items-center text-center",
        )}
      >
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-display text-display-lg mt-6 max-w-[14ch] font-normal text-balance">
            {title}
          </h1>
        </Reveal>
        {description ? (
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-[56ch] text-base leading-relaxed text-pretty text-white/75 sm:text-lg">
              {description}
            </p>
          </Reveal>
        ) : null}
        {children ? <Reveal delay={0.15}>{children}</Reveal> : null}
      </Container>
    </section>
  );
}
