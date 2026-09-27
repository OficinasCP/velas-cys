"use client";

import { usePathname } from "next/navigation";
import { IconWhatsApp } from "@/components/ui/Icons";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/cn";
import { whatsappUrl } from "@/lib/whatsapp";

/**
 * Botón flotante de WhatsApp.
 * - Desktop: "¿Necesitas ayuda?"
 * - Móvil: solo el icono.
 * En las fichas de producto, en móvil se oculta porque existe la barra inferior de pedido.
 */
export function FloatingWhatsApp() {
  const pathname = usePathname();
  const isProductPage = pathname.startsWith("/catalogo/");

  return (
    <a
      href={whatsappUrl(siteConfig.whatsapp.messages.help)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="¿Necesitas ayuda? Escríbenos por WhatsApp (se abre en otra pestaña)"
      className={cn(
        "group fixed bottom-5 right-4 z-30 items-center gap-2.5 rounded-full bg-ink text-paper shadow-float transition-[transform,background-color] duration-300 ease-gentle hover:-translate-y-0.5 hover:bg-ink-deep sm:right-6 lg:bottom-7 lg:right-7",
        "size-[54px] justify-center lg:size-auto lg:h-12 lg:pl-4 lg:pr-5",
        isProductPage ? "hidden lg:inline-flex" : "inline-flex",
      )}
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <IconWhatsApp className="size-[22px] lg:size-[18px]" />
      <span className="hidden text-[13.5px] font-medium tracking-[0.01em] lg:inline">¿Necesitas ayuda?</span>
    </a>
  );
}
