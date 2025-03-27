'use client';

import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.button
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      whileHover={{ rotate: 15 }}
      whileTap={{ scale: 0.9 }}
    >
      <SunIcon className="h-5 w-5 hidden dark:block text-yellow-400" />
      <MoonIcon className="h-5 w-5 block dark:hidden text-blue-600" />
    </motion.button>
  );
} 