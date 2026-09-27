import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { IconWhatsApp } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aromas, fragranceBrand } from "@/data/aromas";
import { aromasContent } from "@/data/content";
import { siteConfig } from "@/data/siteConfig";
import { whatsappUrl } from "@/lib/whatsapp";

export function AromasSection() {
  return (
    <section id="aromas" aria-labelledby="aromas-title" className="section bg-cream">
      <div className="container-page">
        <SectionHeading
          id="aromas-title"
          eyebrow={aromasContent.eyebrow}
          title={aromasContent.title}
          intro={
            <>
              {aromasContent.intro} <span className="font-medium text-ink">{fragranceBrand.name}</span>:
            </>
          }
        >
          <ul
            className="reveal mt-5 flex flex-wrap gap-2"
            aria-label={`Atributos de las fragancias ${fragranceBrand.name}`}
          >
            {fragranceBrand.attributes.map((attribute) => (
              <li
                key={attribute}
                className="rounded-full border border-sand bg-paper/70 px-3.5 py-1.5 text-[12.5px] font-medium text-ink-soft"
              >
                {attribute}
              </li>
            ))}
          </ul>
        </SectionHeading>

        <div className="mt-12 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-12">
          <ul className="grid content-start gap-x-10 sm:grid-cols-2 lg:col-span-8">
            {aromas.map((aroma) => (
              <li key={aroma.name} className="reveal border-b border-sand py-5">
                <h3 className="font-serif text-[1.3rem] leading-snug text-ink">{aroma.name}</h3>
                {aroma.notes ? (
                  <p className="mt-1.5 text-[14px] leading-relaxed text-ink-muted">{aroma.notes}</p>
                ) : null}
              </li>
            ))}
          </ul>

          {/* Colores */}
          <aside
            aria-labelledby="colores-title"
            className="reveal self-start overflow-hidden rounded-[1.5rem] border border-sand bg-paper lg:col-span-4"
          >
            <div className="relative aspect-[4/3] bg-linen">
              <Image
                src={siteConfig.images.colors.src}
                alt={siteConfig.images.colors.alt}
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 id="colores-title" className="font-serif text-[1.4rem] text-ink">
                {aromasContent.colorsTitle}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">{aromasContent.colorsText}</p>
              <ButtonLink
                href={whatsappUrl(siteConfig.whatsapp.messages.colors)}
                external
                variant="outline"
                size="sm"
                className="mt-5 w-full"
              >
                <IconWhatsApp className="size-4" />
                {aromasContent.colorsCta}
              </ButtonLink>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
