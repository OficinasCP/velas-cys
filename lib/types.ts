/**
 * Tipos compartidos del sitio. Normalmente no necesitas editar este archivo:
 * los datos comerciales viven en /data.
 */

/** Etiquetas usadas por los filtros del catálogo. */
export type ProductTag =
  | "velas"
  | "religiosas"
  | "flores"
  | "concreto"
  | "cuarzo"
  | "decorativas"
  | "bandejas"
  | "floreros"
  | "accesorios"
  | "cera-de-soya";

/** Categorías del catálogo (ver /data/categories.ts). */
export type ProductCategoryId =
  | "velas-decorativas"
  | "velas-concreto"
  | "velas-cuarzo"
  | "velas-religiosas"
  | "figuras-religiosas"
  | "flores"
  | "bandejas"
  | "floreros"
  | "accesorios";

export type ProductImage = {
  /** Ruta dentro de /public, por ejemplo "/images/products/luxury-candle.webp" */
  src: string;
  /** Descripción breve de la foto (accesibilidad y SEO) */
  alt: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  /** Identificador en la URL: /catalogo/[slug]. Solo minúsculas, números y guiones. */
  slug: string;
  name: string;
  category: ProductCategoryId;
  /** Etiquetas para filtros (una pieza puede estar en varios filtros). */
  tags: ProductTag[];
  /** Precio en pesos chilenos, sin puntos. Ej: 25000 */
  price: number;
  /** Texto corto para tarjetas (1 línea idealmente). */
  shortDescription: string;
  /** Descripción para la ficha del producto. */
  description: string;
  materials?: string;
  /** Medidas: altura, diámetro, largo, etc. */
  measurements: ProductSpec[];
  /** Cantidad de cera, ej: "300 g de cera de soya". */
  wax?: string;
  /**
   * "a-eleccion": el cliente elige el aroma de la lista.
   * "con-aroma": la pieza lleva aroma (se puede indicar preferencia).
   * Déjalo sin definir si el producto no lleva aroma.
   */
  aroma?: "a-eleccion" | "con-aroma";
  /** Permite indicar preferencia de color en el pedido. */
  colorOptions?: boolean;
  /** Opciones a elegir: terminación, base, etc. */
  finish?: {
    label: string;
    options: string[];
  };
  /** Pedido personalizado. Muestra el campo "Personalización" en el formulario. */
  customizable?: boolean;
  includesPlate?: boolean;
  /** Otros datos para la ficha, ej: { label: "Uso", value: "Velas, flores..." } */
  extraSpecs?: ProductSpec[];
  /** Notas destacadas en la ficha. */
  notes?: string[];
  /** Fotos. Si está vacío se muestra una ilustración "Fotografía próximamente". */
  images: ProductImage[];
  /** false = se muestra como "Consultar disponibilidad" (por defecto true). */
  available?: boolean;
  /** true = se oculta del sitio sin borrarlo. */
  hidden?: boolean;
};
