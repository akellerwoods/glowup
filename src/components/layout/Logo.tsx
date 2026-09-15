import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  size = 48,
  wordmark = true,
}: {
  className?: string;
  size?: number;
  wordmark?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-3", className)}
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src="/images/brand/logo-circle.png"
        alt=""
        width={size}
        height={size}
        priority
        className="shrink-0"
      />
      {wordmark ? (
        <span className="hidden flex-col leading-none sm:flex">
          <span className="text-[0.6875rem] font-semibold tracking-[0.22em] text-white uppercase">
            Grooming
          </span>
          <span className="font-display text-gold text-lg leading-none">Glow-Up</span>
          <span className="text-[0.5625rem] font-semibold tracking-[0.3em] text-white/70 uppercase">
            Project
          </span>
        </span>
      ) : null}
    </Link>
  );
}
