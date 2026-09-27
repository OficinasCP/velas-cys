import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { IconInstagram } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { instagramContent } from "@/data/content";
import { siteConfig } from "@/data/siteConfig";
import { revealDelay } from "@/lib/style";

export function InstagramSection() {
  const { instagram } = siteConfig;

  return (
    <section aria-labelledby="instagram-title" className="section">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="instagram-title"
            eyebrow={instagramContent.eyebrow}
            title={instagramContent.title}
            intro={
              <>
                {instagramContent.text}{" "}
                <a
                  href={instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-ink underline decoration-sand underline-offset-4 hover:decoration-ink"
                >
                  @{instagram.handle}
                </a>
                .
              </>
            }
          />
          <ButtonLink href={instagram.url} external variant="outline" className="reveal hidden md:inline-flex">
            <IconInstagram className="size-[18px]" />
            {instagramContent.cta}
          </ButtonLink>
        </div>

        <ul className="mt-10 grid grid-cols-3 gap-2 sm:gap-3 lg:grid-cols-6">
          {instagram.gallery.map((photo, index) => (
            <li key={photo.src} className="reveal" style={revealDelay((index % 6) * 70)}>
              <a
                href={instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-[4px] bg-linen"
                aria-label={`${photo.alt} — ver en Instagram`}
              >
                <Image
                  src={photo.src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 16vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-gentle group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-ink/0 text-paper opacity-0 transition duration-500 group-hover:bg-ink/25 group-hover:opacity-100">
                  <IconInstagram className="size-6" />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <ButtonLink href={instagram.url} external variant="outline" className="mt-8 w-full md:hidden">
          <IconInstagram className="size-[18px]" />
          {instagramContent.cta}
        </ButtonLink>
      </div>
    </section>
  );
}
