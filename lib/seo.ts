import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

/** Imagen por defecto al compartir enlaces (WhatsApp, Instagram, Facebook…). */
export const defaultOgImages = [
  {
    url: siteConfig.images.og,
    width: 1200,
    height: 630,
    alt: "C&S · Velas artesanales hechas a mano",
  },
];

/** Metadata de una página con título, descripción, canonical y Open Graph completos. */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.fullName,
      title: `${title} | ${siteConfig.fullName}`,
      description,
      url: path,
      images: defaultOgImages,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.fullName}`,
      description,
      images: [siteConfig.images.og],
    },
  };
}
