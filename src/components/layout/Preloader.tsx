"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/config/site.config";

const KEY = "ggp-preloader-seen";

export function Preloader() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (reduce) return;
    let seen = false;
    try {
      seen = sessionStorage.getItem(KEY) === "1";
    } catch {}
    if (seen) return;
    const raf = requestAnimationFrame(() => setShow(true));
    document.documentElement.style.overflow = "hidden";
    const t = setTimeout(() => {
      setShow(false);
      document.documentElement.style.overflow = "";
      try {
        sessionStorage.setItem(KEY, "1");
      } catch {}
    }, 1150);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
      document.documentElement.style.overflow = "";
    };
  }, [reduce]);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          key="preloader"
          aria-hidden
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.span
            className="font-display text-2xl tracking-tight text-white sm:text-3xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {siteConfig.name.split(" ").slice(0, 2).join(" ")}{" "}
            <span className="text-gold italic">
              {siteConfig.name.split(" ").slice(2).join(" ")}
            </span>
          </motion.span>
          <motion.span
            className="bg-gold mt-6 block h-px"
            initial={{ width: 0 }}
            animate={{ width: 160 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
