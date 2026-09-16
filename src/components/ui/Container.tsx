import { cn } from "@/lib/utils";

/** Margins are generous: 24 px on a phone, more as the viewport grows. */
export function Container({
  className,
  children,
  as: Tag = "div",
}: {
  className?: string;
  children: React.ReactNode;
  as?: "div" | "section" | "header" | "footer" | "nav" | "article";
}) {
  return (
    <Tag
      className={cn("mx-auto w-full max-w-[1200px] px-6 sm:px-10 lg:px-14", className)}
    >
      {children}
    </Tag>
  );
}
