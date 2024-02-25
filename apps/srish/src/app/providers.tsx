"use client";

import { ThemeProvider } from "next-themes";
import type { ReactElement, ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }): ReactElement {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
