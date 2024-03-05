"use client";

import { useIsClient } from "@uidotdev/usehooks";
import { type ReactElement } from "react";
import { ClientThemeToggle } from "./client-theme-toggle";

type Theme = "light" | "dark" | "system";

export function ThemeToggle(): ReactElement | undefined {
  const isClient = useIsClient();
  if (isClient) {
    return <ClientThemeToggle />;
  }
}
