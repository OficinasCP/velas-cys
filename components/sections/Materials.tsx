import { ContentIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { materialsContent } from "@/data/content";
import { revealDelay } from "@/lib/style";

export function Materials() {
  return (
    <section id="materiales" aria-labelledby="materiales-title" className="section border-t border-sand/70">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading
            id="materiales-title"
            eyebrow={materialsContent.eyebrow}
            title={materialsContent.title}
            intro={materialsContent.intro}
          />
        </div>

        <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:col-span-8 lg:gap-y-4">
          {materialsContent.items.map((item, index) => (
            <li
              key={item.title}
              className="reveal flex gap-4 border-b border-sand/70 py-5 sm:py-6"
              style={revealDelay((index % 2) * 90)}
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-cream text-gold-deep">
                <ContentIcon name={item.icon} className="size-[22px]" />
              </span>
              <div>
                <h3 className="font-serif text-[1.15rem] leading-snug text-ink">{item.title}</h3>
                <p className="mt-1 text-[14px] leading-relaxed text-ink-muted">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
