import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "soft" | "light";
type Size = "md" | "sm";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Abre en otra pestaña (WhatsApp, Instagram). */
  external?: boolean;
  className?: string;
  "aria-label"?: string;
};

// Nombres completos para que Tailwind detecte las clases.
const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  outline: "btn-outline",
  soft: "btn-soft",
  light: "btn-light",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn("btn", size === "md" ? "btn-md" : "btn-sm", variantClass[variant], className);
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className,
  ...rest
}: ButtonLinkProps) {
  const classes = buttonClasses(variant, size, className);

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
