import "@repo/common/styles.css";
import "./globals.css";

import { Footer, type FooterProps } from "@repo/common/components/footer";
import { Header, type HeaderProps } from "@repo/common/components/header";
import type { TMetadata } from "@repo/common/types";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import {
  Bricolage_Grotesque as BricolageGrotesque,
  Laila,
} from "next/font/google";
import { draftMode } from "next/headers";
import type { ReactElement } from "react";
import { loadQuery } from "@/sanity/lib/store";
import {
  FOOTER_QUERY,
  HEADER_QUERY,
  METADATA_QUERY,
} from "@/sanity/lib/queries";
import LiveVisualEditing from "@/sanity/components/live-visual-editing";
import { Providers } from "./providers";

const titleFont = BricolageGrotesque({
  subsets: ["latin"],
  variable: "--font-title",
  display: "swap",
  adjustFontFallback: false,
});

const bodyFont = Laila({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
});

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await loadQuery<TMetadata>(METADATA_QUERY);
  return {
    title: data.title,
    description: data.description,
  };
}

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): Promise<ReactElement> {
  const { data: headerProps } = await loadQuery<HeaderProps>(HEADER_QUERY);
  const { data: footerProps } = await loadQuery<FooterProps>(FOOTER_QUERY);
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${titleFont.variable} ${bodyFont.variable}`}>
        <Providers>
          <div className="background" />

          <Header {...headerProps} />

          <main className="pt-20">{children}</main>

          <Footer {...footerProps} />
        </Providers>
        <SpeedInsights />
        <Analytics />
        {draftMode().isEnabled ? <LiveVisualEditing /> : null}
      </body>
    </html>
  );
}
