/**
 * ============================================================
 *  CONFIGURACIÓN GENERAL DE C&S
 *  Edita aquí los datos de contacto, textos de WhatsApp,
 *  plazos, entregas, productos destacados e imágenes de marca.
 * ============================================================
 */

export type DeliveryConfig = {
  /** true / false cuando esté definido. null = aún no definido (no se muestra). */
  pickup: boolean | null;
  /** Delivery dentro de la ciudad. */
  delivery: boolean | null;
  /** Envíos a regiones. */
  shipping: boolean | null;
  /** Comunas o zonas de entrega, ej: ["Providencia", "Ñuñoa"]. */
  areas: string[];
  /** Texto libre con la política de entrega. */
  description: string | null;
};

export type SiteConfig = {
  name: string;
  fullName: string;
  description: string;
  url: string;
  locale: string;
  whatsapp: {
    /** Número en formato internacional sin "+" ni espacios (para wa.me). */
    number: string;
    /** Número como se muestra en pantalla. */
    display: string;
    messages: {
      general: string;
      order: string;
      help: string;
      colors: string;
    };
  };
  instagram: {
    handle: string;
    url: string;
    /** Fotos de la sección "Síguenos en Instagram" (rutas dentro de /public). */
    gallery: { src: string; alt: string }[];
  };
  /**
   * Tiempo de anticipación de los pedidos.
   * null = aún no definido. Ejemplos: "5 días", "7 días", "Entre 5 y 7 días".
   */
  orderLeadTime: string | null;
  delivery: DeliveryConfig;
  /** Productos de "Nuestras creaciones" (slugs de /data/products.ts, en orden). */
  featuredProducts: string[];
  hero: {
    /** Producto de la fotografía principal. */
    productSlug: string;
    /** Producto de la fotografía secundaria (círculo). */
    secondaryProductSlug: string;
  };
  /**
   * Logo. Mientras src sea null se muestra el logotipo tipográfico "C&S".
   * Para usar el logo original: sube el PNG/SVG a /public/images/brand/
   * y escribe aquí su ruta, por ejemplo "/images/brand/logo-cys.png".
   */
  logo: {
    src: string | null;
    width: number;
    height: number;
  };
  images: {
    about: { src: string; alt: string };
    colors: { src: string; alt: string };
    /** Imagen al compartir el sitio (1200×630). */
    og: string;
  };
};

const productionUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const siteConfig: SiteConfig = {
  name: "C&S",
  fullName: "C&S · Velas C y S",
  description:
    "Velas artesanales de cera de soya, concreto y cuarzo, flores de cera de abeja y piezas de concreto hechas a mano y por encargo. Haz tu pedido por WhatsApp.",
  url: productionUrl,
  locale: "es_CL",

  whatsapp: {
    number: "56993265164",
    display: "+56 9 9326 5164",
    messages: {
      general: "Hola C&S, quisiera hacer una consulta.",
      order: "Hola C&S, quisiera hacer un pedido.",
      help: "Hola C&S, necesito ayuda con un pedido.",
      colors: "Hola C&S, quisiera consultar los colores disponibles.",
    },
  },

  instagram: {
    handle: "velas.cys",
    url: "https://www.instagram.com/velas.cys/",
    gallery: [
      { src: "/images/instagram/instagram-1.webp", alt: "Vela volcán con base de concreto" },
      { src: "/images/instagram/instagram-2.webp", alt: "Cojines de concreto en tonos dorado y rosa" },
      { src: "/images/instagram/instagram-3.webp", alt: "Gruta de la Virgen de Lourdes" },
      { src: "/images/instagram/instagram-4.webp", alt: "Botón de rosa de cera de abeja" },
      { src: "/images/instagram/instagram-5.webp", alt: "Luxury Candle en dos versiones" },
      { src: "/images/instagram/instagram-6.webp", alt: "Rosa de cera de abeja sobre bandeja" },
    ],
  },

  // PENDIENTE: definir el plazo real. Mientras sea null se muestra
  // "Consulta disponibilidad y tiempo de preparación por WhatsApp".
  orderLeadTime: null,

  // PENDIENTE: definir métodos y zonas de entrega. Mientras todo sea null
  // se indica que la entrega se coordina por WhatsApp.
  delivery: {
    pickup: null,
    delivery: null,
    shipping: null,
    areas: [],
    description: null,
  },

  featuredProducts: [
    "luxury-candle",
    "volcan-base-concreto",
    "gruta-virgen-de-lourdes",
    "rosa-grande-2-colores-con-tallo",
    "cojin-concreto",
    "florero-cilindrico",
  ],

  hero: {
    productSlug: "volcan-base-concreto",
    secondaryProductSlug: "rosa-grande-1-color-sin-tallo",
  },

  logo: {
    src: null,
    width: 140,
    height: 56,
  },

  images: {
    about: {
      src: "/images/products/luxury-candle-3.webp",
      alt: "Luxury Candle de cera de soya hecha a mano por C&S",
    },
    colors: {
      src: "/images/brand/colores.webp",
      alt: "Piedras de distintos colores sobre una tela blanca",
    },
    og: "/images/og.jpg",
  },
};

/** Texto sobre el modelo por encargo (usa orderLeadTime cuando esté definido). */
export function madeToOrderText(): string {
  if (siteConfig.orderLeadTime) {
    return `Todos nuestros productos se realizan por encargo. Tiempo de preparación: ${siteConfig.orderLeadTime}. Consulta disponibilidad por WhatsApp.`;
  }
  return "Todos nuestros productos se realizan por encargo. Consulta disponibilidad y tiempo de preparación por WhatsApp.";
}

/** Líneas de entrega definidas en siteConfig.delivery (vacío si aún no hay datos). */
export function deliveryDetails(): string[] {
  const d = siteConfig.delivery;
  const lines: string[] = [];
  if (d.pickup === true) lines.push("Retiro presencial disponible.");
  if (d.delivery === true) lines.push("Delivery disponible.");
  if (d.shipping === true) lines.push("Envíos a regiones.");
  if (d.areas.length > 0) lines.push(`Zonas de entrega: ${d.areas.join(", ")}.`);
  if (d.description) lines.push(d.description);
  return lines;
}
