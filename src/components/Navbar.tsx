'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";

// Animation settings
const navItemAnimation = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // Change navigation background based on scroll position
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-soft-gray/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo section */}
          <motion.div
            className="flex items-center"
            {...navItemAnimation}
          >
            <Link href="/" className="text-xl font-bold flex items-center gap-2">
              <RocketLaunchIcon className="h-6 w-6" />
              Portfolio
            </Link>
          </motion.div>
          
          {/* Navigation links */}
          <div className="flex items-center space-x-8">
            {/* Link to Profile page */}
            <motion.div
              {...navItemAnimation}
            >
              <Link
                href="/profile"
                className={`transition-colors duration-200 flex items-center gap-1 ${
                  pathname === '/profile' 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'hover:text-blue-600 dark:hover:text-blue-400'
                }`}
                prefetch={true}
              >
                <div className="relative w-5 h-5 rounded-full overflow-hidden">
                  <Image
                    src="/images/icon.png"
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>
                Profile
              </Link>
            </motion.div>
            
            {/* Theme toggle button */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
} 