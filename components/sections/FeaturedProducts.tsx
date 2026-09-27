import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { IconArrowRight } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredContent } from "@/data/content";
import { getFeaturedProducts } from "@/lib/catalog";
import { revealDelay } from "@/lib/style";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();
  if (featured.length === 0) return null;

  return (
    <section aria-labelledby="creaciones-title" className="section pt-10 sm:pt-14">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="creaciones-title"
            eyebrow={featuredContent.eyebrow}
            title={featuredContent.title}
            intro={featuredContent.intro}
          />
          <Link
            href="/catalogo"
            className="reveal group hidden shrink-0 items-center gap-2 pb-1 text-[14px] font-medium text-ink md:inline-flex"
          >
            {featuredContent.cta}
            <IconArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 lg:mt-14 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {featured.map((product, index) => (
            <li key={product.slug} className="reveal" style={revealDelay((index % 3) * 90)}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center md:hidden">
          <Link href="/catalogo" className="btn btn-md btn-outline w-full">
            {featuredContent.cta}
            <IconArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
