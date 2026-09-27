import { MadeToOrderNote } from "@/components/sections/MadeToOrderNote";
import { ContentIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { howToOrderContent } from "@/data/content";
import { revealDelay } from "@/lib/style";

export function HowToOrder() {
  return (
    <section id="como-pedir" aria-labelledby="como-pedir-title" className="section bg-cream">
      <div className="container-page">
        <SectionHeading
          id="como-pedir-title"
          eyebrow={howToOrderContent.eyebrow}
          title={howToOrderContent.title}
          intro={howToOrderContent.intro}
          align="center"
        />

        <div className="relative mt-14 lg:mt-16">
          {/* Línea que une los pasos (desktop) */}
          <span
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-[2.1rem] hidden h-px bg-gradient-to-r from-sand via-gold/50 to-sand lg:block"
          />
          <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {howToOrderContent.steps.map((step, index) => (
              <li
                key={step.title}
                className="reveal relative flex gap-4 rounded-2xl bg-paper/80 p-5 lg:flex-col lg:items-center lg:bg-transparent lg:p-0 lg:text-center"
                style={revealDelay(index * 110)}
              >
                <span className="relative flex size-[4.2rem] shrink-0 items-center justify-center rounded-full border border-sand bg-paper text-ink-soft">
                  <ContentIcon name={step.icon} className="size-7" />
                  <span className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-ink font-sans text-[11px] font-medium text-paper">
                    {index + 1}
                  </span>
                </span>
                <div className="lg:mt-5">
                  <h3 className="font-serif text-[1.2rem] leading-snug text-ink">{step.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-ink-muted lg:mx-auto lg:max-w-[15rem]">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <MadeToOrderNote className="reveal mx-auto mt-12 max-w-2xl justify-center sm:items-center" />
      </div>
    </section>
  );
}
