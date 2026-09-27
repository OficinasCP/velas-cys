import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OrderForm } from "@/components/order/OrderForm";
import { ProductCard } from "@/components/product/ProductCard";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductSpecs } from "@/components/product/ProductSpecs";
import { StickyOrderBar } from "@/components/product/StickyOrderBar";
import { MadeToOrderNote } from "@/components/sections/MadeToOrderNote";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { IconChevronLeft, IconInfo, IconWhatsApp } from "@/components/ui/Icons";
import { aromas } from "@/data/aromas";
import { getCategory } from "@/data/categories";
import { siteConfig } from "@/data/siteConfig";
import { getProductBySlug, getRelatedProducts, getVisibleProducts } from "@/lib/catalog";
import { formatCLP } from "@/lib/format";
import { defaultOgImages } from "@/lib/seo";
import { productInquiryMessage, whatsappUrl } from "@/lib/whatsapp";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getVisibleProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const title = `${product.name} — ${formatCLP(product.price)}`;
  const description = `${product.description} Hecho a mano y por encargo por C&S. Consulta y pide por WhatsApp.`;
  const path = `/catalogo/${product.slug}`;
  const images = product.images.length
    ? product.images.slice(0, 1).map((image) => ({ url: image.src, width: 960, height: 1200, alt: image.alt }))
    : defaultOgImages;

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
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.fullName}`,
      description,
      images: images.map((image) => image.url),
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = getRelatedProducts(product);
  const available = product.available !== false;
  const orderTargetId = "pedido";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: category.label,
    image: product.images.map((image) => new URL(image.src, siteConfig.url).toString()),
    brand: { "@type": "Brand", name: siteConfig.name },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "CLP",
      availability: available ? "https://schema.org/MadeToOrder" : "https://schema.org/OutOfStock",
      url: new URL(`/catalogo/${product.slug}`, siteConfig.url).toString(),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="container-page pb-28 pt-5 sm:pt-8 lg:pb-24">
        {/* Migas de pan */}
        <nav aria-label="Ruta de navegación" className="text-[12.5px] text-ink-muted">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link
                href="/catalogo"
                className="inline-flex min-h-10 items-center gap-1 transition-colors hover:text-ink"
              >
                <IconChevronLeft className="size-4" />
                Catálogo
              </Link>
            </li>
            <li aria-hidden="true" className="text-taupe">
              /
            </li>
            <li>
              <Link
                href={category.catalogHref}
                className="inline-flex min-h-10 items-center transition-colors hover:text-ink"
              >
                {category.label}
              </Link>
            </li>
          </ol>
        </nav>

        <div className="mt-3 grid gap-10 lg:mt-6 lg:grid-cols-12 lg:gap-14">
          {/* Fotografía (protagonista) */}
          <div className="lg:col-span-7">
            <div className="lg:sticky lg:top-24">
              <ProductGallery product={product} />
            </div>
          </div>

          {/* Información */}
          <div className="lg:col-span-5">
            <p className="eyebrow">{category.label}</p>
            <h1 className="mt-3 font-serif text-[2.1rem] leading-[1.1] tracking-[-0.01em] text-ink sm:text-[2.6rem]">
              {product.name}
            </h1>
            <p className="mt-4 flex items-baseline gap-3">
              <span className="text-[1.5rem] font-medium tracking-[0.01em] text-ink">{formatCLP(product.price)}</span>
              <span className="text-[12.5px] text-ink-muted">CLP · valor por unidad</span>
            </p>
            {!available ? (
              <p className="mt-3 inline-flex rounded-full bg-blush px-3 py-1 text-[12.5px] font-medium text-ink-soft">
                Consultar disponibilidad
              </p>
            ) : null}

            <p className="mt-6 text-[15.5px] leading-[1.75] text-ink-soft">{product.description}</p>

            {product.notes?.map((note) => (
              <p
                key={note}
                className="mt-4 flex gap-2.5 rounded-xl bg-cream px-4 py-3 text-[13.5px] leading-relaxed text-ink-soft"
              >
                <IconInfo className="mt-0.5 size-4 shrink-0 text-gold-deep" />
                {note}
              </p>
            ))}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <ButtonLink href={`#${orderTargetId}`} className="sm:flex-1 lg:flex-none xl:flex-1">
                Preparar pedido
              </ButtonLink>
              <ButtonLink
                href={whatsappUrl(productInquiryMessage(product))}
                external
                variant="outline"
                className="sm:flex-1 lg:flex-none"
              >
                <IconWhatsApp className="size-[18px]" />
                Consultar por WhatsApp
              </ButtonLink>
            </div>

            <MadeToOrderNote className="mt-5" />

            <div className="mt-10">
              <h2 className="eyebrow mb-3">Detalles</h2>
              <ProductSpecs product={product} />
            </div>

            {product.aroma ? (
              <details className="group mt-6 rounded-xl border border-sand">
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between px-4 text-[14px] font-medium text-ink [&::-webkit-details-marker]:hidden">
                  Aromas disponibles
                  <span
                    aria-hidden="true"
                    className="text-lg text-ink-muted transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <ul className="divide-y divide-sand/70 border-t border-sand px-4">
                  {aromas.map((aroma) => (
                    <li key={aroma.name} className="py-3">
                      <p className="font-serif text-[1.05rem] text-ink">{aroma.name}</p>
                      {aroma.notes ? (
                        <p className="mt-0.5 text-[13px] leading-relaxed text-ink-muted">{aroma.notes}</p>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </details>
            ) : null}
          </div>
        </div>

        {/* Pedido */}
        <section
          id={orderTargetId}
          aria-labelledby="pedido-title"
          className="mt-20 scroll-mt-24 rounded-[1.75rem] border border-sand/80 bg-cream/60 p-5 sm:p-8 lg:mt-24 lg:grid lg:grid-cols-12 lg:gap-12 lg:p-12"
        >
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="hairline" aria-hidden="true" />
              <p className="eyebrow">Pedido</p>
            </div>
            <h2 id="pedido-title" className="mt-4 font-serif text-[1.9rem] leading-tight text-ink sm:text-[2.2rem]">
              Haz tu pedido
            </h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
              Completa los datos y te llevamos a WhatsApp con tu mensaje listo. En este sitio no se realiza ningún pago.
            </p>
          </div>
          <div className="mt-8 lg:col-span-8 lg:mt-0">
            <OrderForm initialProductSlug={product.slug} />
          </div>
        </section>

        {/* Relacionados */}
        {related.length > 0 ? (
          <section aria-labelledby="relacionados-title" className="mt-20 lg:mt-24">
            <div className="flex items-end justify-between gap-4">
              <h2 id="relacionados-title" className="font-serif text-[1.7rem] text-ink sm:text-[2rem]">
                También te puede gustar
              </h2>
              <Link href="/catalogo" className="hidden text-[14px] font-medium text-ink-soft hover:text-ink sm:inline">
                Ver catálogo
              </Link>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
              {related.map((item) => (
                <li key={item.slug}>
                  <ProductCard product={item} sizes="(min-width: 1024px) 22vw, 50vw" />
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>

      <StickyOrderBar product={product} targetId={orderTargetId} />
    </>
  );
}
