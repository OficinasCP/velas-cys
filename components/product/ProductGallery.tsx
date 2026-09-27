"use client";

import Image from "next/image";
import { useState } from "react";
import { ProductPlaceholder } from "@/components/product/ProductPlaceholder";
import { cn } from "@/lib/cn";
import type { Product } from "@/lib/types";

/** Galería simple: foto principal + miniaturas (sin carrusel). */
export function ProductGallery({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const images = product.images;
  const current = images[active];

  return (
    <div>
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[6px] bg-linen">
        {current ? (
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            priority={active === 0}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="animate-[fadeIn_.5s_ease] object-cover"
          />
        ) : (
          <ProductPlaceholder product={product} />
        )}
      </div>

      {images.length > 1 ? (
        <ul className="mt-3 grid grid-cols-4 gap-2.5 sm:gap-3" aria-label="Fotografías del producto">
          {images.map((image, index) => (
            <li key={image.src}>
              <button
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Ver foto ${index + 1} de ${images.length}`}
                aria-pressed={active === index}
                className={cn(
                  "relative block aspect-[4/5] w-full overflow-hidden rounded-[4px] bg-linen ring-offset-2 ring-offset-paper transition",
                  active === index ? "ring-1 ring-ink/60" : "opacity-75 hover:opacity-100",
                )}
              >
                <Image src={image.src} alt="" fill sizes="120px" className="object-cover" />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
