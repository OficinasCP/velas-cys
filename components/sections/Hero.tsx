import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { IconWhatsApp } from "@/components/ui/Icons";
import { heroContent } from "@/data/content";
import { siteConfig } from "@/data/siteConfig";
import { getProductBySlug } from "@/lib/catalog";
import { formatCLP } from "@/lib/format";
import { whatsappUrl } from "@/lib/whatsapp";

export function Hero() {
  const main = getProductBySlug(siteConfig.hero.productSlug);
  const secondary = getProductBySlug(siteConfig.hero.secondaryProductSlug);
  const mainImage = main?.images[0];
  const secondaryImage = secondary?.images[0];

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="container-page relative grid items-center gap-12 pb-16 pt-8 sm:pt-12 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-14">
        <div className="lg:col-span-6">
          <div className="rise flex items-center gap-3">
            <span className="hairline" aria-hidden="true" />
            <p className="eyebrow">{heroContent.eyebrow}</p>
          </div>
          <h1
            id="hero-title"
            className="rise mt-6 font-serif text-[2.55rem] leading-[1.06] tracking-[-0.015em] text-ink [--reveal-delay:80ms] sm:text-[3.4rem] lg:text-[3.85rem] xl:text-[4.2rem]"
          >
            {heroContent.titleStart} <em className="font-normal italic text-ink-soft">{heroContent.titleEmphasis}</em>
          </h1>
          <p className="rise mt-6 max-w-md text-[15.5px] leading-[1.75] text-ink-soft [--reveal-delay:160ms] sm:text-[17px]">
            {heroContent.subtitle}
          </p>
          <div className="rise mt-9 flex flex-col gap-3 [--reveal-delay:240ms] sm:flex-row">
            <ButtonLink href="/catalogo" className="sm:px-8">
              {heroContent.primaryCta}
            </ButtonLink>
            <ButtonLink href={whatsappUrl(siteConfig.whatsapp.messages.order)} external variant="outline">
              <IconWhatsApp className="size-[18px]" />
              {heroContent.secondaryCta}
            </ButtonLink>
          </div>
        </div>

        {main && mainImage ? (
          <div className="relative lg:col-span-6">
            <div className="rise relative mx-auto w-[84%] max-w-[430px] [--reveal-delay:120ms] sm:w-[62%] lg:w-[82%]">
              {/* Arco de fondo */}
              <div aria-hidden="true" className="arch absolute -inset-x-5 -bottom-5 top-8 bg-blush/70 sm:-inset-x-7" />
              <Link
                href={`/catalogo/${main.slug}`}
                className="settle arch relative block aspect-[4/5] overflow-hidden bg-linen shadow-soft"
              >
                <Image
                  src={mainImage.src}
                  alt={mainImage.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 430px, (min-width: 640px) 62vw, 84vw"
                  className="object-cover transition-transform duration-[1200ms] ease-gentle hover:scale-[1.03]"
                />
              </Link>

              {secondary && secondaryImage ? (
                <Link
                  href={`/catalogo/${secondary.slug}`}
                  className="absolute -bottom-6 -left-8 hidden aspect-square w-[38%] overflow-hidden rounded-full border-[6px] border-paper bg-linen shadow-soft sm:block lg:-left-14"
                  aria-label={secondary.name}
                >
                  <Image src={secondaryImage.src} alt="" fill sizes="180px" className="scale-[1.35] object-cover" />
                </Link>
              ) : null}
            </div>

            <p className="rise relative mt-10 text-center text-[12.5px] tracking-[0.02em] text-ink-muted [--reveal-delay:200ms] sm:mt-12">
              <Link href={`/catalogo/${main.slug}`} className="transition-colors hover:text-ink">
                <span className="font-serif text-[15px] italic text-ink-soft">{main.name}</span>
                <span className="mx-2 text-taupe" aria-hidden="true">
                  ·
                </span>
                {formatCLP(main.price)}
              </Link>
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
