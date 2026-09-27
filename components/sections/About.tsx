import Image from "next/image";
import { aboutContent } from "@/data/content";
import { siteConfig } from "@/data/siteConfig";

export function About() {
  return (
    <section id="nosotros" aria-labelledby="nosotros-title" className="section overflow-hidden">
      <div className="container-page grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="reveal relative mx-auto w-[78%] max-w-[380px] lg:col-span-5 lg:w-full">
          <div aria-hidden="true" className="arch absolute -inset-x-5 -bottom-5 top-10 bg-blush/70" />
          <div className="arch relative aspect-[4/5] overflow-hidden bg-linen shadow-soft">
            <Image
              src={siteConfig.images.about.src}
              alt={siteConfig.images.about.alt}
              fill
              sizes="(min-width: 1024px) 380px, 78vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="reveal flex items-center gap-3">
            <span className="hairline" aria-hidden="true" />
            <p className="eyebrow">{aboutContent.eyebrow}</p>
          </div>
          <h2 id="nosotros-title" className="section-title reveal mt-4">
            {aboutContent.title}
          </h2>

          <blockquote className="reveal mt-8 border-l border-gold/60 pl-6 sm:pl-8">
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={
                  index === 0
                    ? "font-serif text-[1.45rem] leading-[1.45] text-ink sm:text-[1.7rem]"
                    : "mt-5 text-[15px] leading-[1.8] text-ink-soft sm:text-base"
                }
              >
                {paragraph}
              </p>
            ))}
            <footer className="mt-6 font-serif text-[1.35rem] italic text-gold-deep">— {aboutContent.signature}</footer>
          </blockquote>

          <ul className="reveal mt-9 flex flex-wrap gap-2.5">
            {aboutContent.values.map((value) => (
              <li
                key={value}
                className="rounded-full border border-sand px-4 py-2 text-[12.5px] font-medium uppercase tracking-[0.14em] text-ink-soft"
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
