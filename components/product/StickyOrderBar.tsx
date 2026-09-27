"use client";

import { useEffect, useState } from "react";
import { IconWhatsApp } from "@/components/ui/Icons";
import { cn } from "@/lib/cn";
import { formatCLP } from "@/lib/format";
import type { Product } from "@/lib/types";
import { productInquiryMessage, whatsappUrl } from "@/lib/whatsapp";

/**
 * Barra inferior en móvil para la ficha de producto: precio + "Preparar pedido".
 * Se oculta cuando el formulario de pedido está en pantalla.
 */
export function StickyOrderBar({ product, targetId }: { product: Product; targetId: string }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting), {
      rootMargin: "0px 0px -20% 0px",
    });
    observer.observe(target);
    return () => observer.disconnect();
  }, [targetId]);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 border-t border-sand/80 bg-paper/95 backdrop-blur-md transition-transform duration-500 ease-gentle lg:hidden",
        hidden ? "translate-y-full" : "translate-y-0",
      )}
      aria-hidden={hidden}
      inert={hidden}
    >
      <div className="container-page flex items-center gap-3 pb-safe pt-3">
        <div className="min-w-0 flex-1">
          <p className="truncate font-serif text-[15px] leading-tight text-ink">{product.name}</p>
          <p className="mt-0.5 text-[13px] font-medium text-ink-soft">{formatCLP(product.price)}</p>
        </div>
        <a
          href={whatsappUrl(productInquiryMessage(product))}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-soft w-11 shrink-0 px-0"
          aria-label={`Consultar por WhatsApp: ${product.name}`}
        >
          <IconWhatsApp className="size-[18px]" />
        </a>
        <a href={`#${targetId}`} className="btn btn-sm btn-primary shrink-0 px-5">
          Preparar pedido
        </a>
      </div>
    </div>
  );
}
