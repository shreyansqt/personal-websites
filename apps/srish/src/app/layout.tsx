import "./globals.css";
import "@repo/common/styles.css";

import { Footer } from "@repo/common/components/Footer";
import { Header, NavItem } from "@repo/common/components/header";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import {
  Bricolage_Grotesque as BricolageGrotesque,
  Laila,
} from "next/font/google";
import { Providers } from "./providers";

const titleFont = BricolageGrotesque({
  subsets: ["latin"],
  variable: "--font-title",
});

const bodyFont = Laila({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: "Srish, A UX Designer",
    template: `%s | Srish, A UX Designer`,
  },
  description:
    "I am a dedicated product designer with a focus on User Research. I am driven by empathy, self-reliance, and a relentless commitment to solving complex problems in a user-centric manner.",
};

export const viewport: Viewport = {
  themeColor: [
    {
      color: "#FFF6F3",
      media: "(prefers-color-scheme: light)",
    },
    {
      color: "#3B3C62",
      media: "(prefers-color-scheme: dark)",
    },
  ],
};

const navigationItems: NavItem[] = [
  { key: "home", label: "Portfolio", href: "/" },
  // { key: 'about', label: 'About me', href: '/about' },
  {
    key: "resume",
    label: "Resume",
    href: "/Matta_Srishti_Resume.pdf",
    canDownload: true,
    isExternal: true,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${titleFont.variable} ${bodyFont.variable}`}>
        <Providers>
          <div className="background" />
          <Header items={navigationItems} />

          <main className="pt-20">{children}</main>

          <Footer />
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
