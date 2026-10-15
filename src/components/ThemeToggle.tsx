'use client';

import { useTheme } from '@/components/ThemeProvider';
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <motion.button
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className={`nav-circle rounded-lg border h-7 w-7 shrink-0 transition-all min-[360px]:h-[30px] min-[360px]:w-[30px] min-[375px]:h-[34px] min-[375px]:w-[34px] sm:h-11 sm:w-11 ${
        isDark
          ? "border-[#58d3a2] bg-[#101827] text-[#b7f3dc] shadow-[0_0_0_3px_rgba(88,211,162,0.2),0_4px_14px_rgba(0,0,0,0.3)]"
          : "border-[#d84c2a] bg-[#fff3cf] text-[#d84c2a] shadow-[0_0_0_3px_rgba(216,76,42,0.15),0_4px_14px_rgba(132,78,30,0.16)]"
      }`}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      whileHover={{ rotate: isDark ? -12 : 12, scale: 1.06 }}
      whileTap={{ scale: 0.92 }}
    >
      {isDark ? (
        <MoonIcon className="h-[14px] w-[14px] sm:h-5 sm:w-5" aria-hidden="true" />
      ) : (
        <SunIcon className="h-[14px] w-[14px] sm:h-5 sm:w-5" aria-hidden="true" />
      )}
    </motion.button>
  );
} 
