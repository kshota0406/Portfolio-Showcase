'use client';

import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'system',
  resolvedTheme: 'light',
  setTheme: () => undefined,
});

function systemTheme(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme: Theme): 'light' | 'dark' {
  const resolved = theme === 'system' ? systemTheme() : theme;
  document.documentElement.classList.toggle('dark', resolved === 'dark');
  document.documentElement.style.colorScheme = resolved;
  return resolved;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');
  const themeRef = useRef<Theme>('system');

  const setTheme = useCallback((nextTheme: Theme) => {
    themeRef.current = nextTheme;
    setThemeState(nextTheme);
    try {
      localStorage.setItem('theme', nextTheme);
    } catch {
      // Theme switching still works for the current tab when storage is unavailable.
    }
    setResolvedTheme(applyTheme(nextTheme));
  }, []);

  useEffect(() => {
    let initialTheme: Theme = 'system';
    try {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme === 'light' || storedTheme === 'dark' || storedTheme === 'system') {
        initialTheme = storedTheme;
      }
    } catch {
      // Fall back to the system preference when storage is unavailable.
    }

    themeRef.current = initialTheme;
    setThemeState(initialTheme);
    setResolvedTheme(applyTheme(initialTheme));

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const updateSystemTheme = () => {
      if (themeRef.current === 'system') setResolvedTheme(applyTheme('system'));
    };
    const updateFromStorage = (event: StorageEvent) => {
      if (event.key !== 'theme') return;
      const value = event.newValue;
      const nextTheme: Theme = value === 'light' || value === 'dark' || value === 'system' ? value : 'system';
      themeRef.current = nextTheme;
      setThemeState(nextTheme);
      setResolvedTheme(applyTheme(nextTheme));
    };

    mediaQuery.addEventListener('change', updateSystemTheme);
    window.addEventListener('storage', updateFromStorage);
    return () => {
      mediaQuery.removeEventListener('change', updateSystemTheme);
      window.removeEventListener('storage', updateFromStorage);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
