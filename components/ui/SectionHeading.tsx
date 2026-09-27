import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  id?: string;
  className?: string;
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as: Tag = "h2",
  id,
  className,
  children,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={cn("reveal", centered && "mx-auto text-center", "max-w-2xl", className)}>
      {eyebrow ? (
        <div className={cn("flex items-center gap-3", centered && "justify-center")}>
          <span className="hairline" aria-hidden="true" />
          <p className="eyebrow">{eyebrow}</p>
          {centered ? <span className="hairline" aria-hidden="true" /> : null}
        </div>
      ) : null}
      <Tag id={id} className={cn("section-title", eyebrow && "mt-4")}>
        {title}
      </Tag>
      {intro ? <div className={cn("lead mt-4", centered && "mx-auto max-w-xl")}>{intro}</div> : null}
      {children}
    </div>
  );
}
