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
    default: "Shreyans, Freelance frontend developer",
    template: `%s | Shreyans, Freelance frontend developer`,
  },
  description:
    "Passionate and results-driven with a diverse background across various company sizes and industries, including agency, fintech, and AI/data sectors. Thriving in remote environments, I've successfully navigated the challenges of freelancing while delivering top-notch solutions.",
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
  { key: "home", label: "Home", href: "/" },
  // { key: 'about', label: 'About me', href: '/about' },
  {
    key: "resume",
    label: "Resume",
    href: "/Jain_Shreyans_Resume.pdf",
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
