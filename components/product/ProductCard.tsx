import Link from "next/link";
import { ProductImage } from "@/components/product/ProductImage";
import { IconWhatsApp } from "@/components/ui/Icons";
import { getCategory } from "@/data/categories";
import { cn } from "@/lib/cn";
import { formatCLP } from "@/lib/format";
import type { Product } from "@/lib/types";
import { productInquiryMessage, whatsappUrl } from "@/lib/whatsapp";

type ProductCardProps = {
  product: Product;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

export function ProductCard({
  product,
  priority = false,
  className,
  sizes = "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 50vw",
}: ProductCardProps) {
  const href = `/catalogo/${product.slug}`;
  const category = getCategory(product.category);
  const available = product.available !== false;

  return (
    <article className={cn("group flex flex-col", className)}>
      <Link href={href} tabIndex={-1} aria-hidden="true" className="relative block overflow-hidden rounded-[4px]">
        <ProductImage
          product={product}
          sizes={sizes}
          priority={priority}
          className="transition-transform duration-[900ms] ease-gentle group-hover:scale-[1.035]"
        />
        {!available ? (
          <span className="absolute left-3 top-3 rounded-full bg-paper/90 px-3 py-1 text-[11px] font-medium text-ink-soft">
            Consultar disponibilidad
          </span>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col pt-4">
        <p className="eyebrow text-[10px] tracking-[0.2em] sm:text-[11px]">{category.shortLabel}</p>
        <h3 className="mt-1.5 font-serif text-[1.05rem] leading-snug text-ink sm:text-[1.2rem]">
          <Link href={href} className="transition-colors hover:text-ink-soft">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-ink-muted sm:text-[13.5px]">
          {product.shortDescription}
        </p>
        <p className="mt-2.5 text-[15px] font-medium tracking-[0.01em] text-ink">{formatCLP(product.price)}</p>

        <div className="mt-auto flex gap-2 pt-4">
          <Link href={href} className="btn btn-sm btn-outline flex-1 px-3">
            Ver detalles
          </Link>
          <a
            href={whatsappUrl(productInquiryMessage(product))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-soft w-11 shrink-0 px-0 sm:w-auto sm:px-4"
            aria-label={`Consultar por WhatsApp: ${product.name}`}
          >
            <IconWhatsApp className="size-4" />
            <span className="hidden sm:inline">Consultar</span>
          </a>
        </div>
      </div>
    </article>
  );
}
