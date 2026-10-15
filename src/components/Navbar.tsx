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
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left bg-[var(--accent)]"
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
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 py-3">
          {/* Logo section */}
          <motion.div className="flex items-center flex-shrink-0" {...navItemAnimation}>
            <Link href="/">
              <span className="nav-pill brand-pill relative overflow-hidden">
                <span className="absolute inset-[2px] rounded-full border border-white/10 pointer-events-none" />
                <span className="absolute -left-2 -top-2 w-10 h-10 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_55%)]" />
                <span className="absolute -right-3 -bottom-3 w-14 h-14 bg-[radial-gradient(circle_at_60%_60%,rgba(248,101,62,0.2),transparent_60%)]" />
                <span className="relative flex items-center gap-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[var(--accent-2)] shadow-[0_0_0_6px_rgba(255,218,71,0.2)]" />
                  <span className="tracking-[0.12em] font-semibold">Portfolio</span>
                </span>
              </span>
            </Link>
          </motion.div>

          {/* Navigation links */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            {/* Link to Profile page */}
            <motion.div {...navItemAnimation}>
              <Link
                href="/profile"
                aria-label="Profile"
                className={`nav-circle w-12 h-12 overflow-hidden ${
                  pathname === "/profile" ? "border-[var(--accent-2)]" : ""
                }`}
                prefetch={true}
              >
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/50 flex-shrink-0">
                  <Image
                    src="/images/icon.png"
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>
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
