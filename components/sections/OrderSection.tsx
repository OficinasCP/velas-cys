import { OrderForm } from "@/components/order/OrderForm";
import { IconWhatsApp } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { orderContent } from "@/data/content";
import { siteConfig } from "@/data/siteConfig";
import { whatsappUrl } from "@/lib/whatsapp";

export function OrderSection() {
  return (
    <section id="pedido" aria-labelledby="pedido-title" className="section">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              id="pedido-title"
              eyebrow={orderContent.eyebrow}
              title={orderContent.title}
              intro={orderContent.intro}
            />
            <div className="reveal mt-8 hidden border-t border-sand pt-6 lg:block">
              <p className="text-[13.5px] leading-relaxed text-ink-muted">¿Prefieres escribirnos directamente?</p>
              <a
                href={whatsappUrl(siteConfig.whatsapp.messages.order)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex min-h-10 items-center gap-2 text-[14px] font-medium text-ink underline decoration-sand underline-offset-4 transition-colors hover:decoration-ink"
              >
                <IconWhatsApp className="size-4" />
                {siteConfig.whatsapp.display}
              </a>
            </div>
          </div>
        </div>

        <div className="reveal rounded-[1.75rem] border border-sand/80 bg-white/55 p-5 shadow-soft sm:p-8 lg:col-span-8 lg:p-10">
          <OrderForm />
        </div>
      </div>
    </section>
  );
}
