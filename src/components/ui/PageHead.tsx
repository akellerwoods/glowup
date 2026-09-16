import { Container } from "./Container";

/** Interior page opener: hairline, label, one headline, one paragraph. */
export function PageHead({
  label,
  title,
  text,
  children,
}: {
  label: string;
  title: React.ReactNode;
  text?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="py-14 sm:py-22">
      <Container>
        <div className="rule pt-4">
          <p className="label text-gold">{label}</p>
        </div>
        <h1 className="font-display mt-10 max-w-[16ch] text-[2.75rem] leading-[1.1] sm:text-[3.5rem] lg:text-[4.25rem]">
          {title}
        </h1>
        {text ? <p className="text-bone/70 mt-8 max-w-[62ch] text-lg">{text}</p> : null}
        {children ? <div className="mt-10">{children}</div> : null}
      </Container>
    </section>
  );
}
