import type { Metadata } from "next";
import { CandleCare } from "@/components/sections/CandleCare";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { IconWhatsApp } from "@/components/ui/Icons";
import { siteConfig } from "@/data/siteConfig";
import { pageMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = pageMetadata({
  title: "Cuida tu vela",
  description:
    "Cómo encender, usar y apagar tu vela C&S para que se consuma de forma pareja: primer encendido, largo de la mecha, tiempo de uso y más.",
  path: "/cuidados",
});

/** Página independiente de cuidados (útil para compartir o imprimir en un QR). */
export default function CarePage() {
  return (
    <>
      <CandleCare variant="page" />
      <div className="container-page -mt-6 flex flex-col items-center gap-3 pb-24 text-center sm:flex-row sm:justify-center">
        <ButtonLink href="/catalogo">Ver catálogo</ButtonLink>
        <ButtonLink href={whatsappUrl(siteConfig.whatsapp.messages.general)} external variant="outline">
          <IconWhatsApp className="size-[18px]" />
          ¿Dudas? Escríbenos
        </ButtonLink>
      </div>
    </>
  );
}
