"use client";

import { useEffect, useMemo, useState } from "react";
import { ProductCard } from "@/components/product/ProductCard";
import {
  candleFilters,
  catalogFilters,
  isCandleFilterId,
  isCatalogFilterId,
  type CandleFilterId,
  type CatalogFilterId,
} from "@/data/categories";
import { cn } from "@/lib/cn";
import { getVisibleProducts, groupByCategory } from "@/lib/catalog";
import type { Product } from "@/lib/types";

function matches(product: Product, filter: CatalogFilterId, candle: CandleFilterId) {
  if (filter === "todos") return true;
  if (!product.tags.includes(filter)) return false;
  if (filter === "velas" && candle !== "todas") return product.tags.includes(candle);
  return true;
}

/** Catálogo con filtros. El filtro activo se refleja en la URL (?filtro=…&tipo=…) para compartirlo. */
export function CatalogBrowser() {
  const [filter, setFilter] = useState<CatalogFilterId>("todos");
  const [candle, setCandle] = useState<CandleFilterId>("todas");

  // Lee el filtro desde la URL al cargar (ej: /catalogo?filtro=flores)
  useEffect(() => {
    const read = () => {
      const params = new URLSearchParams(window.location.search);
      const f = params.get("filtro");
      const t = params.get("tipo");
      setFilter(isCatalogFilterId(f) ? f : "todos");
      setCandle(isCandleFilterId(t) ? t : "todas");
    };
    read();
    window.addEventListener("popstate", read);
    return () => window.removeEventListener("popstate", read);
  }, []);

  const syncUrl = (nextFilter: CatalogFilterId, nextCandle: CandleFilterId) => {
    const params = new URLSearchParams();
    if (nextFilter !== "todos") params.set("filtro", nextFilter);
    if (nextFilter === "velas" && nextCandle !== "todas") params.set("tipo", nextCandle);
    const query = params.toString();
    window.history.replaceState(null, "", query ? `?${query}` : window.location.pathname);
  };

  const selectFilter = (next: CatalogFilterId) => {
    setFilter(next);
    setCandle("todas");
    syncUrl(next, "todas");
  };

  const selectCandle = (next: CandleFilterId) => {
    setCandle(next);
    syncUrl("velas", next);
  };

  const visible = useMemo(() => getVisibleProducts().filter((p) => matches(p, filter, candle)), [filter, candle]);
  // Orden del catálogo según /data/categories.ts
  // Mientras falten fotos, las piezas sin fotografía se muestran al final (orden estable).
  const ordered = useMemo(
    () =>
      groupByCategory(visible)
        .flatMap((group) => group.items)
        .sort((a, b) => Number(a.images.length === 0) - Number(b.images.length === 0)),
    [visible],
  );

  return (
    <div>
      {/* Filtros */}
      <div className="sticky top-16 z-20 -mx-5 border-b border-sand/70 bg-paper/90 px-5 backdrop-blur-md sm:-mx-8 sm:px-8 lg:top-[72px] lg:-mx-10 lg:px-10">
        <div
          role="group"
          aria-label="Filtrar por categoría"
          className="scrollbar-none -mx-5 flex gap-2 overflow-x-auto px-5 py-3 sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {catalogFilters.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => selectFilter(item.id)}
              aria-pressed={filter === item.id}
              className={cn("chip", filter === item.id ? "chip-active" : "chip-idle")}
            >
              {item.label}
            </button>
          ))}
        </div>

        {filter === "velas" ? (
          <div
            role="group"
            aria-label="Tipo de vela"
            className="scrollbar-none -mx-5 flex items-center gap-2 overflow-x-auto px-5 pb-3 sm:mx-0 sm:flex-wrap sm:px-0"
          >
            <span className="mr-1 shrink-0 text-[12px] text-ink-muted">Tipo:</span>
            {candleFilters.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => selectCandle(item.id)}
                aria-pressed={candle === item.id}
                className={cn(
                  "inline-flex h-9 shrink-0 items-center rounded-full px-4 text-[12.5px] font-medium transition-colors",
                  candle === item.id ? "bg-sand text-ink" : "text-ink-soft hover:bg-cream hover:text-ink",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <p className="mt-6 text-[13px] text-ink-muted" aria-live="polite">
        {visible.length} {visible.length === 1 ? "pieza" : "piezas"}
        {filter === "velas" ? " · Todas nuestras velas son de cera de soya." : ""}
      </p>

      <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 lg:gap-x-8 lg:gap-y-14 xl:grid-cols-4">
        {ordered.map((product) => (
          <li key={product.slug}>
            <ProductCard product={product} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 50vw" />
          </li>
        ))}
      </ul>

      {ordered.length === 0 ? (
        <p className="mt-10 text-center text-ink-muted">No hay productos en esta categoría por ahora.</p>
      ) : null}
    </div>
  );
}
