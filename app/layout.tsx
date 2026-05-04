import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { PageTransition } from "@/components/layout/PageTransition";

export const metadata: Metadata = {
  metadataBase: new URL("https://conlog.com"),
  title: {
    default: "Conlog · Think Smarter — World leaders in smart metering solutions",
    template: "%s · Conlog",
  },
  description:
    "Conlog designs, manufactures and delivers smart metering solutions for electricity and water. 200+ patents, 17M+ meters deployed, and a presence in 58+ countries.",
  keywords: [
    "smart metering",
    "prepayment meter",
    "STS",
    "DLMS",
    "smart water meter",
    "iDM APEX",
    "iDM Hydra",
    "Conlog Cloud Platform",
    "CoDi",
    "revenue enhancement",
    "demand management",
    "utility",
    "South Africa",
  ],
  openGraph: {
    title: "Conlog · Think Smarter — World leaders in smart metering solutions",
    description:
      "Smart metering solutions for electricity and water. 200+ patents, 17M+ meters deployed, 58+ countries.",
    type: "website",
    siteName: "Conlog",
    locale: "en_ZA",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-slate-900 focus:px-3 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <div className="relative flex min-h-screen flex-col">
          <Nav />
          <main id="main" className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <FloatingCTA />
        </div>
      </body>
    </html>
  );
}
