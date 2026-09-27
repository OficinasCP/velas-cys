import { productCategories } from "@/data/categories";
import { products } from "@/data/products";
import { siteConfig } from "@/data/siteConfig";
import type { Product, ProductCategoryId } from "@/lib/types";

/** Productos visibles (sin los marcados como hidden). */
export function getVisibleProducts(): Product[] {
  return products.filter((p) => !p.hidden);
}

export function getProductBySlug(slug: string): Product | undefined {
  return getVisibleProducts().find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return siteConfig.featuredProducts.map((slug) => getProductBySlug(slug)).filter((p): p is Product => Boolean(p));
}

/** Agrupa productos según el orden de categorías definido en /data/categories.ts. */
export function groupByCategory(list: Product[]) {
  return productCategories
    .map((category) => ({
      category,
      items: list.filter((p) => p.category === category.id),
    }))
    .filter((group) => group.items.length > 0);
}

/** Productos relacionados: primero de la misma categoría, luego que compartan etiqueta. */
export function getRelatedProducts(product: Product, limit = 4): Product[] {
  const others = getVisibleProducts().filter((p) => p.slug !== product.slug);
  const sameCategory = others.filter((p) => p.category === product.category);
  const sharedTag = others.filter(
    (p) => p.category !== product.category && p.tags.some((t) => product.tags.includes(t)),
  );
  return [...sameCategory, ...sharedTag].slice(0, limit);
}

/** Orden de categorías para el selector del formulario. */
export function productsForSelect(): { category: ProductCategoryId; label: string; items: Product[] }[] {
  return groupByCategory(getVisibleProducts()).map((g) => ({
    category: g.category.id,
    label: g.category.label,
    items: g.items,
  }));
}
