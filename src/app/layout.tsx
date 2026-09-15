import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { siteConfig } from "@/config/site.config";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/layout/Preloader";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Cursor } from "@/components/layout/Cursor";
import { OrganizationJsonLd } from "@/components/layout/JsonLd";
import "./globals.css";

// Static 400 regular + italic keeps the display font small (the variable file is ~120 KB).
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "dog grooming nonprofit",
    "Dallas Animal Services",
    "shelter dog grooming",
    "matted dog rescue",
    "Dallas dog nonprofit",
    "donate dog grooming",
  ],
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="focus:bg-gold sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[300] focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        <Preloader />
        <Cursor />
        <SmoothScroll>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
        <OrganizationJsonLd />
      </body>
    </html>
  );
}
