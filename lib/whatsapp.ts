import { siteConfig } from "@/data/siteConfig";
import { formatCLP, formatDateEs } from "@/lib/format";
import type { Product } from "@/lib/types";

/**
 * Enlace a WhatsApp con un mensaje prellenado.
 * El mensaje se codifica con encodeURIComponent (tildes, ñ, "&", saltos de línea).
 * WhatsApp solo abre la conversación: el cliente decide cuándo enviar.
 */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsapp.number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Mensaje corto para "Consultar por WhatsApp" desde una tarjeta o ficha. */
export function productInquiryMessage(product: Product): string {
  return [
    `Hola C&S, quisiera consultar por: ${product.name} (${formatCLP(product.price)}).`,
    "¿Me pueden indicar disponibilidad y tiempo de preparación?",
  ].join("\n");
}

export type ColorMode = "consultar" | "preferencia";

export type OrderDetails = {
  name: string;
  quantity: number;
  aroma?: string;
  colorMode?: ColorMode;
  color?: string;
  finish?: string;
  customization?: string;
  /** Formato YYYY-MM-DD */
  date?: string;
  location?: string;
  comments?: string;
};

/** Construye el mensaje del pedido. Solo incluye los campos que aplican al producto. */
export function buildOrderMessage(details: OrderDetails, product: Product): string {
  const clean = (value?: string) => (value ?? "").trim();
  const lines: string[] = ["Hola C&S, quisiera consultar por el siguiente pedido:", ""];

  lines.push(`Producto: ${product.name} (${formatCLP(product.price)} c/u)`);
  lines.push(`Cantidad: ${details.quantity}`);

  if (product.aroma && clean(details.aroma)) {
    lines.push(`Aroma: ${clean(details.aroma)}`);
  }

  if (product.colorOptions) {
    if (details.colorMode === "preferencia" && clean(details.color)) {
      lines.push(`Color: ${clean(details.color)}`);
    } else {
      lines.push("Color: Quisiera consultar disponibilidad");
    }
  }

  if (product.finish && clean(details.finish) && product.finish.options.includes(clean(details.finish))) {
    lines.push(`${product.finish.label}: ${clean(details.finish)}`);
  }

  if (product.customizable && clean(details.customization)) {
    lines.push(`Personalización: ${clean(details.customization)}`);
  }

  if (clean(details.date)) {
    lines.push(`Fecha en que lo necesito: ${formatDateEs(clean(details.date))}`);
  }

  if (clean(details.location)) {
    lines.push(`Comuna / ubicación: ${clean(details.location)}`);
  }

  if (clean(details.comments)) {
    lines.push("", "Comentarios:", clean(details.comments));
  }

  lines.push("", `Mi nombre es ${clean(details.name)}.`, "", "Quedo atento/a a disponibilidad y valor final.");

  return lines.join("\n");
}
