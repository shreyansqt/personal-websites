"use client";

import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import classNames from "classnames";
import { useTheme } from "next-themes";
import { FC, ReactNode, useEffect, useState } from "react";
import Tooltip from "./tooltip";
import { useClickAway, useMediaQuery } from "@uidotdev/usehooks";

type Theme = "light" | "dark" | "system";

export const ThemeToggle: FC = () => {
  const isSmallDevice = useMediaQuery("(max-width: 640px)");
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(!isSmallDevice);
  const { theme, setTheme } = useTheme();

  const ref = useClickAway<HTMLDivElement>(() => {
    if (isSmallDevice) setIsOpen(false);
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsOpen(!isSmallDevice);
  }, [isSmallDevice]);

  const themes: Theme[] = ["light", "dark", "system"];

  const iconMap: Record<Theme, FC<any>> = {
    light: SunIcon,
    dark: MoonIcon,
    system: ComputerDesktopIcon,
  };

  const titleMap: Record<Theme, string> = {
    light: "Light",
    dark: "Dark",
    system: "System",
  };

  if (!mounted) {
    return null;
  }
  return (
    <div
      ref={ref}
      className={classNames(
        "pointer-events-auto absolute right-2 top-2 flex flex-col sm:flex-row bg-baby-peach dark:bg-cobalt bg-opacity-80 dark:bg-opacity-80 p-2 rounded-full backdrop-blur-sm",
        { "gap-1.5": isOpen }
      )}
    >
      {isOpen && (
        <div
          className={classNames(
            "size-[28px] rounded-full bg-white bg-opacity-70 absolute inset-2 -z-10 transition-transform ease-in-out",
            isSmallDevice
              ? {
                  "translate-y-0": theme === "light",
                  "translate-y-[34px]": theme === "dark",
                  "translate-y-[68px]": theme === "system",
                }
              : {
                  "sm:translate-x-[0]": theme === "light",
                  "sm:translate-x-[34px]": theme === "dark",
                  "sm:translate-x-[68px]": theme === "system",
                },
            "dark:bg-black dark:bg-opacity-20"
          )}
        />
      )}
      {themes.map((t) => {
        const Icon = iconMap[t];
        const title = titleMap[t];
        const isActive = theme === t;
        return (
          <Tooltip
            message={title}
            key={t}
            position={isSmallDevice ? "left" : "bottom"}
            className={classNames(
              !isOpen && !isActive ? "max-h-0" : "max-h-auto"
            )}
          >
            <button
              onClick={() => {
                setIsOpen(true);
                setTheme(t);
              }}
              className={classNames(
                "rounded-full bg-white bg-opacity-0 p-1.5 hover:bg-opacity-50 text-cobalt",
                "dark:text-baby-yellow dark:bg-black dark:bg-opacity-0 dark:hover:bg-opacity-10"
              )}
            >
              {!isOpen && !isActive ? null : <Icon className="size-4" />}
            </button>
          </Tooltip>
        );
      })}
    </div>
  );
};
