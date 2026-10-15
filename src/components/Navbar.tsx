"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

// Animation settings
const navItemAnimation = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY, scrollYProgress } = useScroll();
  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  // Change navigation background based on scroll position
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-[color-mix(in_srgb,var(--line)_30%,transparent)]" aria-hidden="true" />
      <motion.div
        className="scroll-progress-indicator fixed left-0 top-0 z-[61] h-[2px] w-full origin-left"
        style={{ scaleX: scrollProgress }}
        aria-hidden="true"
      />
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 nav-surface ${
          scrolled ? "backdrop-blur-md border-b" : ""
        } border-[var(--line)]`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 py-3">
          {/* Logo section */}
          <div className="flex shrink-0 items-center gap-1">
            <motion.div {...navItemAnimation}>
              <Link
                href="/"
                aria-label="Home — Profile"
                title="Home"
                className={`home-nav-link flex h-7 w-auto shrink-0 items-center gap-1 rounded-full px-2 min-[360px]:h-[30px] min-[375px]:h-[34px] min-[375px]:gap-1.5 min-[375px]:px-2.5 sm:h-11 sm:gap-2 sm:px-3 ${pathname === "/" ? "is-active" : ""}`}
                prefetch={true}
              >
                <span className="relative h-[18px] w-[18px] shrink-0 overflow-hidden rounded-full border border-white/50 min-[375px]:h-5 min-[375px]:w-5 sm:h-7 sm:w-7">
                  <Image src="/images/icon.png" alt="" fill sizes="28px" className="object-cover" />
                </span>
                <span className="font-[var(--font-display)] text-[10px] font-bold uppercase leading-none tracking-[0.14em] min-[375px]:text-[11px] sm:text-xs">Home</span>
              </Link>
            </motion.div>
          </div>

          {/* Navigation links */}
          <div className="flex shrink-0 items-center gap-0 min-[360px]:gap-1 sm:gap-4 md:gap-6">
            {/* Portfolio page */}
            <motion.div {...navItemAnimation}>
              <Link
                href="/portfolio"
                aria-label="Portfolio"
                title="Portfolio"
                className={`nav-circle h-7 w-7 shrink-0 min-[360px]:h-[30px] min-[360px]:w-[30px] min-[375px]:h-[34px] min-[375px]:w-[34px] sm:h-11 sm:w-11 ${pathname.startsWith("/portfolio") ? "border-[var(--accent-2)]" : ""}`}
                prefetch={true}
              >
                <span className="text-sm leading-none min-[375px]:text-base sm:text-xl" aria-hidden="true">💻</span>
              </Link>
            </motion.div>

            {/* Travel map page */}
            <motion.div {...navItemAnimation}>
              <Link
                href="/places"
                aria-label="Travel map"
                title="Travel map"
                className={`nav-circle h-7 w-7 shrink-0 min-[360px]:h-[30px] min-[360px]:w-[30px] min-[375px]:h-[34px] min-[375px]:w-[34px] sm:h-11 sm:w-11 ${pathname === "/places" ? "border-[var(--accent-2)]" : ""}`}
                prefetch={true}
              >
                <span className="text-sm leading-none min-[375px]:text-base sm:text-xl" aria-hidden="true">🇯🇵</span>
              </Link>
            </motion.div>

            {/* Visited destinations page */}
            <motion.div {...navItemAnimation}>
              <Link
                href="/destinations"
                aria-label="Places I’ve visited"
                title="Places I’ve visited"
                className={`nav-circle h-7 w-7 shrink-0 min-[360px]:h-[30px] min-[360px]:w-[30px] min-[375px]:h-[34px] min-[375px]:w-[34px] sm:h-11 sm:w-11 ${pathname === "/destinations" ? "border-[var(--accent-2)]" : ""}`}
                prefetch={true}
              >
                <span className="text-sm leading-none min-[375px]:text-base sm:text-xl" aria-hidden="true">🌏</span>
              </Link>
            </motion.div>

            {/* Cars page */}
            <motion.div {...navItemAnimation}>
              <Link
                href="/cars"
                aria-label="Cars I’ve owned"
                title="Cars I’ve owned"
                className={`nav-circle h-7 w-7 shrink-0 min-[360px]:h-[30px] min-[360px]:w-[30px] min-[375px]:h-[34px] min-[375px]:w-[34px] sm:h-11 sm:w-11 ${pathname === "/cars" ? "border-[var(--accent-2)]" : ""}`}
                prefetch={true}
              >
                <span className="text-sm leading-none min-[375px]:text-base sm:text-xl" aria-hidden="true">🚗</span>
              </Link>
            </motion.div>

            {/* Running page */}
            <motion.div {...navItemAnimation}>
              <Link
                href="/running"
                aria-label="Running"
                title="Running"
                className={`nav-circle h-7 w-7 shrink-0 min-[360px]:h-[30px] min-[360px]:w-[30px] min-[375px]:h-[34px] min-[375px]:w-[34px] sm:h-11 sm:w-11 ${pathname === "/running" ? "border-[var(--accent-2)]" : ""}`}
                prefetch={true}
              >
                <span className="text-sm leading-none min-[375px]:text-base sm:text-xl" aria-hidden="true">🏃</span>
              </Link>
            </motion.div>

            {/* Theme toggle button */}
            <ThemeToggle />
          </div>
        </div>
      </div>
      </motion.nav>
    </>
  );
}
