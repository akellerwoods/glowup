import { cn } from "@/lib/utils";

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
    <Tag className={cn("mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12", className)}>
      {children}
    </Tag>
  );
}
