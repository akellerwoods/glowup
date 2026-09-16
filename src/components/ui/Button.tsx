import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  external?: boolean;
  variant?: "primary" | "outline" | "text";
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
};

/** Square. Label typography. No arrows, no motion. */
export function Button({
  href,
  external,
  variant = "primary",
  className,
  children,
  type = "button",
  disabled,
}: Props) {
  const cls = cn("btn", `btn-${variant}`, className);
  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
