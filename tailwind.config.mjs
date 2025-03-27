/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      colors: {
        'soft-white': '#e2e8f0',
        'soft-gray': '#b8c5d6',
        'soft-blue': '#93c5fd',
        'soft-slate': '#64748b',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};

export default config; 