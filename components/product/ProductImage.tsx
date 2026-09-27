import Image from "next/image";
import { ProductPlaceholder } from "@/components/product/ProductPlaceholder";
import { cn } from "@/lib/cn";
import type { Product } from "@/lib/types";

type ProductImageProps = {
  product: Product;
  /** Índice de la foto (0 = principal). */
  index?: number;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/** Foto de producto en formato 4:5 con fondo cálido. */
export function ProductImage({ product, index = 0, sizes, priority = false, className }: ProductImageProps) {
  const image = product.images[index];

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-linen">
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", className)}
        />
      ) : (
        <ProductPlaceholder product={product} />
      )}
    </div>
  );
}
