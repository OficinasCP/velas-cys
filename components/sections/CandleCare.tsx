import { ContentIcon, IconInfo } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { careContent } from "@/data/content";
import { cn } from "@/lib/cn";
import { revealDelay } from "@/lib/style";

type CandleCareProps = {
  /** "page" usa h1 (para /cuidados). */
  variant?: "section" | "page";
};

export function CandleCare({ variant = "section" }: CandleCareProps) {
  const isPage = variant === "page";

  return (
    <section
      id={isPage ? undefined : "cuidados"}
      aria-labelledby="cuidados-title"
      className={cn("section", !isPage && "bg-cream")}
    >
      <div className="container-page">
        <SectionHeading
          id="cuidados-title"
          as={isPage ? "h1" : "h2"}
          eyebrow={careContent.eyebrow}
          title={careContent.title}
          intro={careContent.intro}
          align="center"
        />

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-5">
          {careContent.steps.map((step, index) => (
            <li
              key={step.title}
              className="reveal flex flex-col rounded-[1.25rem] border border-sand/80 bg-paper p-6 sm:p-7"
              style={revealDelay((index % 3) * 90)}
            >
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-full bg-cream text-gold-deep">
                  <ContentIcon name={step.icon} className="size-6" />
                </span>
                <span className="font-serif text-[1.1rem] italic text-taupe" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 font-serif text-[1.3rem] leading-snug text-ink">{step.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">{step.text}</p>
              {"tip" in step && step.tip ? (
                <p className="mt-4 border-t border-sand/80 pt-4 text-[13.5px] leading-relaxed text-ink-soft">
                  {step.tip}
                </p>
              ) : null}
            </li>
          ))}

          <li
            className="reveal flex flex-col justify-center rounded-[1.25rem] bg-ink p-6 text-paper sm:p-7"
            style={revealDelay(180)}
          >
            <IconInfo className="size-7 text-gold" />
            <p className="mt-4 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-paper/70">
              Importante
            </p>
            <p className="mt-2 font-serif text-[1.35rem] leading-snug">{careContent.important}</p>
          </li>
        </ol>
      </div>
    </section>
  );
}
