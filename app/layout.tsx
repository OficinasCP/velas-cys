import type { Metadata, Viewport } from "next";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { RevealObserver } from "@/components/layout/RevealObserver";
import { siteConfig } from "@/data/siteConfig";
import { fontSans, fontSerif } from "@/lib/fonts";
import { defaultOgImages } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.fullName} | Velas artesanales hechas a mano`,
    template: `%s | ${siteConfig.fullName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.fullName,
  keywords: [
    "velas artesanales",
    "velas de soya",
    "velas de concreto",
    "velas de cuarzo",
    "velas religiosas",
    "flores de cera de abeja",
    "bandejas de concreto",
    "regalos hechos a mano",
    "Chile",
  ],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.fullName,
    title: `${siteConfig.fullName} | Velas artesanales hechas a mano`,
    description: siteConfig.description,
    url: "/",
    images: defaultOgImages,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.fullName} | Velas artesanales hechas a mano`,
    description: siteConfig.description,
    images: [siteConfig.images.og],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#FBF8F4",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CL" className={`${fontSerif.variable} ${fontSans.variable}`} suppressHydrationWarning>
      <body className="min-h-dvh">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-paper"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <RevealObserver />
      </body>
    </html>
  );
}
