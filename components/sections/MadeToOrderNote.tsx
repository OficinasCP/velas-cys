import { IconInfo } from "@/components/ui/Icons";
import { madeToOrderText } from "@/data/siteConfig";
import { cn } from "@/lib/cn";

/** Aviso "Todos nuestros productos se realizan por encargo…" (texto desde siteConfig). */
export function MadeToOrderNote({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "flex items-start gap-3 rounded-2xl border border-sand/80 bg-paper/70 px-4 py-3.5 text-[13.5px] leading-relaxed text-ink-soft",
        className,
      )}
    >
      <IconInfo className="mt-0.5 size-[18px] shrink-0 text-gold-deep" />
      <span>{madeToOrderText()}</span>
    </p>
  );
}
