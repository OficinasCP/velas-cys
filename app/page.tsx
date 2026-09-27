import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { AromasSection } from "@/components/sections/AromasSection";
import { CandleCare } from "@/components/sections/CandleCare";
import { CategoryShortcuts } from "@/components/sections/CategoryShortcuts";
import { Contact } from "@/components/sections/Contact";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { Hero } from "@/components/sections/Hero";
import { HowToOrder } from "@/components/sections/HowToOrder";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { Materials } from "@/components/sections/Materials";
import { OrderSection } from "@/components/sections/OrderSection";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: siteConfig.fullName,
    alternateName: "Velas C y S",
    description: siteConfig.description,
    url: siteConfig.url,
    image: new URL(siteConfig.images.og, siteConfig.url).toString(),
    telephone: siteConfig.whatsapp.display.replace(/\s/g, ""),
    sameAs: [siteConfig.instagram.url],
    currenciesAccepted: "CLP",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <Hero />
      <FeaturedProducts />
      <CategoryShortcuts />
      <HowToOrder />
      <OrderSection />
      <Materials />
      <AromasSection />
      <About />
      <CandleCare />
      <InstagramSection />
      <Contact />
    </>
  );
}
