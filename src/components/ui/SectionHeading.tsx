import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  size = "lg",
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  size?: "md" | "lg";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <Tag
          className={cn(
            "font-display font-normal text-balance",
            size === "lg" ? "text-display-lg" : "text-display-md",
          )}
        >
          {title}
        </Tag>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <div className="max-w-[60ch] text-base leading-relaxed text-pretty opacity-80 sm:text-lg">
            {description}
          </div>
        </Reveal>
      ) : null}
    </div>
  );
}
