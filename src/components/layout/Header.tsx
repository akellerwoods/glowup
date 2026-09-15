"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  // The menu is "open" only for the path it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const open = openOn === pathname;
  const setOpen = (v: boolean | ((prev: boolean) => boolean)) =>
    setOpenOn((prev) => {
      const next = typeof v === "function" ? v(prev === pathname) : v;
      return next ? pathname : null;
    });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500",
        scrolled || open
          ? "border-line border-b bg-black/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container
        className={cn(
          "flex items-center justify-between transition-[height] duration-500",
          scrolled ? "h-16" : "h-20 sm:h-24",
        )}
      >
        <Logo size={scrolled ? 40 : 48} />

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="link-underline text-[0.75rem] font-semibold tracking-[0.16em] text-white/85 uppercase transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            href="/donate"
            size="md"
            className="hidden sm:inline-flex"
            magnetic={false}
          >
            Donate
          </Button>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={cn(
                "block h-px w-6 bg-white transition-transform duration-300",
                open && "translate-y-[3.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-6 bg-white transition-transform duration-300",
                open && "-translate-y-[3.5px] -rotate-45",
              )}
            />
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            key="mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.3 }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-black lg:hidden"
          >
            <Container className="flex min-h-full flex-col justify-between py-10">
              <nav aria-label="Mobile" className="flex flex-col">
                {siteConfig.nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduce ? 0 : 0.05 * i, duration: 0.5 }}
                  >
                    <Link
                      href={item.href}
                      className="border-line font-display flex items-baseline gap-4 border-b py-5 text-4xl"
                    >
                      <span className="text-gold font-sans text-xs tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-10 flex flex-col gap-4">
                <Button href="/donate" size="lg">
                  Donate
                </Button>
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-white/70">
                  {siteConfig.email}
                </a>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
