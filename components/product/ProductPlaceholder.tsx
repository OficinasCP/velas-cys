import { cn } from "@/lib/cn";
import type { Product } from "@/lib/types";

type Variant = "vela" | "vela-cuarzo" | "objeto";

function variantFor(product: Product): Variant {
  if (product.tags.includes("velas") && product.tags.includes("cuarzo")) return "vela-cuarzo";
  if (product.tags.includes("velas")) return "vela";
  return "objeto";
}

/**
 * Ilustración lineal para productos que aún no tienen fotografía.
 * Desaparece automáticamente al agregar una imagen en /data/products.ts.
 */
export function ProductPlaceholder({ product, className }: { product: Product; className?: string }) {
  const variant = variantFor(product);

  return (
    <div
      className={cn(
        "absolute inset-0 flex flex-col items-center justify-center gap-4 bg-linen px-4 text-center text-taupe",
        className,
      )}
      role="img"
      aria-label={`${product.name}: fotografía próximamente`}
    >
      <svg
        viewBox="0 0 120 150"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        className="h-[40%] w-auto shrink-0"
        aria-hidden="true"
      >
        {variant !== "objeto" ? (
          <>
            <path d="M60 14c4.4 5.4 6 8.6 6 11.4a6 6 0 0 1-12 0c0-2.8 1.6-6 6-11.4Z" />
            <path d="M60 32v10" />
          </>
        ) : (
          <path d="M50 44c0-10 20-10 20 0" />
        )}
        <ellipse cx="60" cy="46" rx="28" ry="6.5" />
        <path d="M32 46v70c0 3.6 12.5 6.5 28 6.5s28-2.9 28-6.5V46" />
        {variant === "vela" || variant === "vela-cuarzo" ? (
          <path d="M32 66c0 3.6 12.5 6.5 28 6.5s28-2.9 28-6.5" strokeDasharray="2 3" />
        ) : null}
        {variant === "vela-cuarzo" ? (
          <g strokeWidth="0.9">
            <path d="M38 104l5-6 6 3 1 6-7 3z" />
            <path d="M52 98l6-4 6 4-2 7h-8z" />
            <path d="M66 103l7-5 5 5-3 6-7-1z" />
            <path d="M44 88l5-3 4 4-3 4-5-1z" />
            <path d="M70 86l5-2 3 4-3 4-5-2z" />
          </g>
        ) : (
          <g fill="currentColor" stroke="none">
            <circle cx="42" cy="92" r="1" />
            <circle cx="55" cy="100" r="1" />
            <circle cx="70" cy="90" r="1" />
            <circle cx="78" cy="104" r="1" />
            <circle cx="48" cy="110" r="1" />
            <circle cx="64" cy="112" r="1" />
            <circle cx="60" cy="82" r="1" />
          </g>
        )}
      </svg>
      <span className="font-sans text-[9.5px] font-medium uppercase leading-relaxed tracking-[0.2em] text-ink-muted sm:text-[10px] sm:tracking-[0.24em]">
        Fotografía próximamente
      </span>
    </div>
  );
}
