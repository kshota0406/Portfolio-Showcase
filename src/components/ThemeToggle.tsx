'use client';

import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      className={`nav-circle w-12 h-12 transition-all ${
        isDark
          ? "border-[var(--accent-2)] shadow-[0_0_0_4px_rgba(88,211,162,0.22)]"
          : "border-[var(--accent)] shadow-[0_0_0_4px_rgba(216,76,42,0.22)]"
      }`}
      style={{
        background: isDark
          ? "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.12), transparent 55%), #0f1729"
          : "radial-gradient(circle at 70% 20%, rgba(255,216,115,0.32), transparent 55%), #0f1729",
      }}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      whileHover={{ rotate: 10 }}
      whileTap={{ scale: 0.92 }}
    >
      <SunIcon className="h-6 w-6 hidden dark:block text-[var(--accent-2)]" />
      <MoonIcon className="h-6 w-6 block dark:hidden text-yellow-300" />
    </motion.button>
  );
} 
