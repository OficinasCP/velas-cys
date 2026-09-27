/**
 * ============================================================
 *  CATEGORÍAS Y FILTROS DEL CATÁLOGO
 *  - productCategories: grupos que se muestran en el catálogo (en este orden).
 *  - catalogFilters: botones de filtro principales.
 *  - candleFilters: etiquetas secundarias dentro de "Velas".
 * ============================================================
 */
import type { ProductCategoryId, ProductTag } from "@/lib/types";

export type ProductCategory = {
  id: ProductCategoryId;
  label: string;
  /** Texto corto para tarjetas. */
  shortLabel: string;
  /** Enlace al catálogo filtrado por esta categoría. */
  catalogHref: string;
};

export const productCategories: ProductCategory[] = [
  {
    id: "velas-decorativas",
    label: "Velas decorativas",
    shortLabel: "Velas decorativas",
    catalogHref: "/catalogo?filtro=velas&tipo=decorativas",
  },
  {
    id: "velas-concreto",
    label: "Velas de concreto",
    shortLabel: "Velas de concreto",
    catalogHref: "/catalogo?filtro=velas&tipo=concreto",
  },
  {
    id: "velas-cuarzo",
    label: "Velas de cuarzo",
    shortLabel: "Velas de cuarzo",
    catalogHref: "/catalogo?filtro=velas&tipo=cuarzo",
  },
  {
    id: "velas-religiosas",
    label: "Velas religiosas",
    shortLabel: "Velas religiosas",
    catalogHref: "/catalogo?filtro=velas&tipo=religiosas",
  },
  {
    id: "figuras-religiosas",
    label: "Figuras religiosas",
    shortLabel: "Figuras",
    catalogHref: "/catalogo?filtro=religiosas",
  },
  {
    id: "flores",
    label: "Flores de cera de abeja",
    shortLabel: "Flores de cera",
    catalogHref: "/catalogo?filtro=flores",
  },
  {
    id: "bandejas",
    label: "Bandejas y posavasos",
    shortLabel: "Bandejas",
    catalogHref: "/catalogo?filtro=bandejas",
  },
  {
    id: "floreros",
    label: "Floreros",
    shortLabel: "Floreros",
    catalogHref: "/catalogo?filtro=floreros",
  },
  {
    id: "accesorios",
    label: "Accesorios y decoración",
    shortLabel: "Accesorios",
    catalogHref: "/catalogo?filtro=accesorios",
  },
];

export type CatalogFilterId = "todos" | Exclude<ProductTag, "cuarzo" | "decorativas" | "cera-de-soya">;

export type CatalogFilter = {
  id: CatalogFilterId;
  label: string;
  /** Imagen para los accesos rápidos de la portada. */
  image?: string;
};

export const catalogFilters: CatalogFilter[] = [
  { id: "todos", label: "Todos" },
  { id: "velas", label: "Velas", image: "/images/products/luxury-candle-2.webp" },
  { id: "religiosas", label: "Religiosas", image: "/images/products/gruta-virgen-de-lourdes.webp" },
  { id: "flores", label: "Flores", image: "/images/products/boton-de-rosa-1-color-con-tallo.webp" },
  { id: "concreto", label: "Concreto", image: "/images/products/portavelas-concreto-bajo.webp" },
  { id: "bandejas", label: "Bandejas", image: "/images/products/bandeja-redonda-grande-concreto-27.webp" },
  { id: "floreros", label: "Floreros", image: "/images/products/florero-esferico.webp" },
  { id: "accesorios", label: "Accesorios", image: "/images/products/cojin-concreto.webp" },
];

export type CandleFilterId = "todas" | "concreto" | "cuarzo" | "decorativas" | "religiosas";

export const candleFilters: { id: CandleFilterId; label: string }[] = [
  { id: "todas", label: "Todas" },
  { id: "decorativas", label: "Decorativas" },
  { id: "concreto", label: "Concreto" },
  { id: "cuarzo", label: "Cuarzo" },
  { id: "religiosas", label: "Religiosas" },
];

export function getCategory(id: ProductCategoryId): ProductCategory {
  const category = productCategories.find((c) => c.id === id);
  if (!category) throw new Error(`Categoría desconocida: ${id}`);
  return category;
}

export function isCatalogFilterId(value: string | null): value is CatalogFilterId {
  return catalogFilters.some((f) => f.id === value);
}

export function isCandleFilterId(value: string | null): value is CandleFilterId {
  return candleFilters.some((f) => f.id === value);
}
