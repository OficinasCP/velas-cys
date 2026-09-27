import Image from "next/image";
import Link from "next/link";
import { catalogFilters } from "@/data/categories";
import { categoriesContent } from "@/data/content";

/** Accesos rápidos a las categorías, al estilo de las historias destacadas de Instagram. */
export function CategoryShortcuts() {
  const items = catalogFilters.filter((f) => f.id !== "todos" && f.image);

  return (
    <section aria-labelledby="categorias-title" className="border-y border-sand/70 bg-cream/60 py-12 sm:py-14">
      <div className="container-page">
        <h2 id="categorias-title" className="reveal text-center font-serif text-[1.45rem] text-ink sm:text-[1.7rem]">
          {categoriesContent.title}
        </h2>
        <ul className="scrollbar-none -mx-5 mt-8 flex snap-x scroll-px-5 gap-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:justify-center sm:gap-8 sm:px-0 lg:gap-10">
          {items.map((filter) => (
            <li key={filter.id} className="reveal snap-start">
              <Link
                href={`/catalogo?filtro=${filter.id}`}
                className="group flex w-[76px] flex-col items-center gap-3 sm:w-[88px]"
              >
                <span className="relative block size-[76px] overflow-hidden rounded-full border border-sand bg-linen p-[3px] transition-colors duration-300 group-hover:border-gold sm:size-[88px]">
                  <span className="relative block size-full overflow-hidden rounded-full">
                    <Image
                      src={filter.image as string}
                      alt=""
                      fill
                      sizes="88px"
                      className="scale-[1.3] object-cover transition-transform duration-700 ease-gentle group-hover:scale-[1.4]"
                    />
                  </span>
                </span>
                <span className="text-[12.5px] font-medium tracking-[0.02em] text-ink-soft group-hover:text-ink">
                  {filter.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
