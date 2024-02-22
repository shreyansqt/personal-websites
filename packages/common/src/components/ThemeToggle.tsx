'use client';
import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';
import { FC, ReactNode, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

export const ThemeToggle: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const themes: Theme[] = ['light', 'dark', 'system'];
  const iconMap: Record<Theme, FC<any>> = {
    light: SunIcon,
    dark: MoonIcon,
    system: ComputerDesktopIcon,
  };
  if (!mounted) {
    return null;
  }
  return (
    <div className="pointer-events-auto fixed right-8 top-8 flex">
      {themes.map((t) => {
        const Icon = iconMap[t];
        const isActive = theme === t;
        return (
          <button
            key={t}
            onClick={() => setTheme(t)}
            className={`mx-2 rounded-full bg-white bg-opacity-0 p-2 hover:bg-opacity-40 dark:bg-black dark:bg-opacity-0 hover:dark:bg-opacity-30 ${isActive ? 'bg-opacity-30 dark:bg-opacity-20' : ''}`}
          >
            <Icon className="size-4" />
          </button>
        );
      })}
    </div>
  );
};
