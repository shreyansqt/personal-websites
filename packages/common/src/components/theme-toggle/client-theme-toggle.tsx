"use client";

import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import { useClickAway } from "@uidotdev/usehooks";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import type { FC, ReactElement } from "react";
import useDevice from "../../utils/use-device";
import Tooltip from "../tooltip";
import { cn } from "../../utils/cn";

type Theme = "light" | "dark" | "system";

export function ClientThemeToggle(): ReactElement {
  const { isDeviceSm } = useDevice();
  const [isOpen, setIsOpen] = useState(!isDeviceSm);
  const { theme, setTheme } = useTheme();

  const ref = useClickAway<HTMLDivElement>(() => {
    if (isDeviceSm) setIsOpen(false);
  });

  useEffect(() => {
    setIsOpen(!isDeviceSm);
  }, [isDeviceSm]);

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

  return (
    <div
      className={cn(
        "pointer-events-auto absolute right-2 top-2 flex flex-col sm:flex-row bg-baby-peach dark:bg-cobalt bg-opacity-80 dark:bg-opacity-80 p-2 rounded-full backdrop-blur-sm",
        { "gap-1.5": isOpen }
      )}
      ref={ref}
    >
      {isOpen ? (
        <div
          className={cn(
            "size-[28px] rounded-full bg-white bg-opacity-70 absolute inset-2 -z-10 transition-transform ease-in-out",
            isDeviceSm
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
      ) : null}
      {themes.map((t) => {
        const Icon = iconMap[t];
        const title = titleMap[t];
        const isActive = theme === t;
        return (
          <Tooltip
            className={cn(!isOpen && !isActive ? "max-h-0" : "max-h-auto")}
            key={t}
            message={title}
            position={isDeviceSm ? "left" : "bottom"}
          >
            <button
              className={cn(
                "rounded-full bg-white bg-opacity-0 p-1.5 hover:bg-opacity-50 text-cobalt",
                "dark:text-baby-yellow dark:bg-black dark:bg-opacity-0 dark:hover:bg-opacity-10"
              )}
              onClick={() => {
                setIsOpen(true);
                setTheme(t);
              }}
              type="button"
            >
              {!isOpen && !isActive ? null : <Icon className="size-4" />}
            </button>
          </Tooltip>
        );
      })}
    </div>
  );
}
