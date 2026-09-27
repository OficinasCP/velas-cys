import Link from "next/link";
import type { ReactNode } from "react";
import { getCategory } from "@/data/categories";
import type { Product } from "@/lib/types";

type Row = { label: string; value: ReactNode };

/** Ficha técnica: solo muestra los datos que existen para cada producto. */
export function ProductSpecs({ product }: { product: Product }) {
  const rows: Row[] = [{ label: "Categoría", value: getCategory(product.category).label }];

  if (product.materials) rows.push({ label: "Materiales", value: product.materials });
  product.measurements.forEach((m) => rows.push({ label: m.label, value: m.value }));
  if (product.wax) rows.push({ label: "Cera", value: product.wax });

  if (product.aroma) {
    rows.push({
      label: "Aroma",
      value: (
        <>
          {product.aroma === "a-eleccion" ? "A elección" : "Sí, con aroma"}
          {" · "}
          <Link href="/#aromas" className="underline decoration-sand underline-offset-4 hover:decoration-ink">
            Ver aromas
          </Link>
        </>
      ),
    });
  }

  if (product.colorOptions) rows.push({ label: "Color", value: "Consulta disponibilidad de colores" });
  if (product.finish)
    rows.push({ label: product.finish.label, value: `A elegir: ${product.finish.options.join(" o ").toLowerCase()}` });
  if (product.customizable) rows.push({ label: "Personalización", value: "Sí, pedido personalizado" });
  if (product.includesPlate) rows.push({ label: "Incluye", value: "Plato" });
  product.extraSpecs?.forEach((s) => rows.push({ label: s.label, value: s.value }));

  return (
    <dl className="divide-y divide-sand/80 border-y border-sand/80">
      {rows.map((row) => (
        <div key={row.label} className="grid grid-cols-[8.5rem_1fr] gap-4 py-3 text-[14px] sm:grid-cols-[10rem_1fr]">
          <dt className="text-ink-muted">{row.label}</dt>
          <dd className="text-ink">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
