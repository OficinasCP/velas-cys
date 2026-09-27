import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  size?: "md" | "lg";
};

/**
 * Logotipo de C&S.
 * Mientras no exista el logo original (siteConfig.logo.src = null) se usa
 * un logotipo tipográfico. Al cargar el archivo, se reemplaza automáticamente.
 */
export function Logo({ className, size = "md" }: LogoProps) {
  const { logo } = siteConfig;

  if (logo.src) {
    return (
      <Image
        src={logo.src}
        alt={siteConfig.fullName}
        width={logo.width}
        height={logo.height}
        priority
        className={cn("h-10 w-auto", size === "lg" && "h-14", className)}
      />
    );
  }

  return (
    <span className={cn("inline-flex flex-col items-center leading-none text-ink", className)}>
      <span aria-hidden="true" className="contents">
        <span className={cn("font-serif tracking-[0.04em]", size === "lg" ? "text-[2.1rem]" : "text-[1.55rem]")}>
          C<span className="mx-[0.06em] italic text-gold-deep">&amp;</span>S
        </span>
        <span
          className={cn(
            "font-sans font-medium uppercase text-ink-muted",
            size === "lg" ? "mt-1.5 text-[9px] tracking-[0.5em]" : "mt-1 text-[7.5px] tracking-[0.48em]",
          )}
        >
          <span className="pl-[0.48em]">Velas</span>
        </span>
      </span>
      <span className="sr-only">{siteConfig.fullName}</span>
    </span>
  );
}
