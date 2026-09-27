import type { Metadata } from "next";
import { CatalogBrowser } from "@/components/catalog/CatalogBrowser";
import { MadeToOrderNote } from "@/components/sections/MadeToOrderNote";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Catálogo",
  description:
    "Catálogo completo de C&S: velas de soya, concreto y cuarzo, velas religiosas, flores de cera de abeja, bandejas, floreros y accesorios de concreto. Pedidos por WhatsApp.",
  path: "/catalogo",
});

export default function CatalogPage() {
  return (
    <div className="container-page pb-24 pt-8 sm:pt-12">
      <header className="grid gap-6 pb-8 lg:grid-cols-12 lg:items-end lg:gap-10 lg:pb-10">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3">
            <span className="hairline" aria-hidden="true" />
            <p className="eyebrow">Hecho a mano, por encargo</p>
          </div>
          <h1 className="mt-4 font-serif text-[2.6rem] leading-[1.05] tracking-[-0.01em] text-ink sm:text-[3.4rem]">
            Catálogo
          </h1>
          <p className="lead mt-4 max-w-xl">
            Velas, flores de cera de abeja y piezas de concreto. Elige tu pieza, revisa sus detalles y prepara tu pedido
            para confirmarlo por WhatsApp.
          </p>
        </div>
        <div className="lg:col-span-5">
          <MadeToOrderNote />
        </div>
      </header>

      <CatalogBrowser />
    </div>
  );
}
