"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  // The menu is "open" only for the path it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="border-hairline bg-obsidian/95 sticky top-0 z-50 border-b backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between gap-6">
        {/* Beside typeset text the badge may run at 46 px: an icon, with the name carried by type. */}
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`${siteConfig.name} home`}
        >
          <Image
            src="/images/brand/logo-circle.png"
            alt=""
            width={46}
            height={46}
            priority
            className="shrink-0"
          />
          <span className="flex flex-col leading-none whitespace-nowrap">
            <span className="font-display text-bone text-[1.0625rem]">
              Grooming Glow-Up
            </span>
            <span className="label text-bone/60 mt-1 text-[0.5625rem]">Project</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex xl:gap-8">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "label hover:text-gold text-[0.6875rem] whitespace-nowrap transition-colors",
                isActive(item.href) ? "text-gold" : "text-bone/75",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={siteConfig.cta.href}
            className="btn btn-primary h-10 px-5 text-[0.6875rem]"
          >
            {siteConfig.cta.label}
          </Link>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpenOn(open ? null : pathname)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={cn(
              "bg-bone block h-px w-6 transition-transform duration-200",
              open && "translate-y-[3.5px] rotate-45",
            )}
          />
          <span
            className={cn(
              "bg-bone block h-px w-6 transition-transform duration-200",
              open && "-translate-y-[3.5px] -rotate-45",
            )}
          />
        </button>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-hairline bg-obsidian border-t lg:hidden">
          <Container className="flex flex-col py-4">
            <nav aria-label="Mobile" className="hairline-y flex flex-col">
              {[...siteConfig.nav, ...siteConfig.footerNav].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "label py-4 text-[0.75rem]",
                    isActive(item.href) ? "text-gold" : "text-bone/80",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link href={siteConfig.cta.href} className="btn btn-primary mt-6">
              {siteConfig.cta.label}
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
