import { cn } from "@/lib/utils";

/** Hairline, label, heading, optional intro. Left-aligned, always. */
export function SectionHead({
  label,
  title,
  text,
  id,
  as: Tag = "h2",
  className,
}: {
  label: string;
  title: React.ReactNode;
  text?: React.ReactNode;
  id?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <div className={cn("rule pt-4", className)}>
      <p className="label text-gold">{label}</p>
      <Tag
        id={id}
        className="font-display mt-6 max-w-[22ch] text-[2rem] leading-[1.15] sm:text-[2.5rem]"
      >
        {title}
      </Tag>
      {text ? (
        <p className="text-bone/70 mt-6 max-w-[62ch] text-base sm:text-lg">{text}</p>
      ) : null}
    </div>
  );
}
