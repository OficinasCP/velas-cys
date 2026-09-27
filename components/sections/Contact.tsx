import { MadeToOrderNote } from "@/components/sections/MadeToOrderNote";
import { IconArrowRight, IconInstagram, IconMapPin, IconWhatsApp } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactContent } from "@/data/content";
import { deliveryDetails, siteConfig } from "@/data/siteConfig";
import { whatsappUrl } from "@/lib/whatsapp";

export function Contact() {
  const delivery = deliveryDetails();

  const channels = [
    {
      label: "WhatsApp",
      value: siteConfig.whatsapp.display,
      action: "Escribir por WhatsApp",
      href: whatsappUrl(siteConfig.whatsapp.messages.general),
      Icon: IconWhatsApp,
    },
    {
      label: "Instagram",
      value: `@${siteConfig.instagram.handle}`,
      action: "Ir a Instagram",
      href: siteConfig.instagram.url,
      Icon: IconInstagram,
    },
  ];

  return (
    <section id="contacto" aria-labelledby="contacto-title" className="section border-t border-sand/70 bg-cream/50">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            id="contacto-title"
            eyebrow={contactContent.eyebrow}
            title={contactContent.title}
            intro={contactContent.intro}
          />

          <div className="reveal mt-8 flex gap-3">
            <IconMapPin className="mt-0.5 size-5 shrink-0 text-gold-deep" />
            <div>
              <h3 className="font-sans text-[13px] font-medium text-ink">{contactContent.deliveryTitle}</h3>
              {delivery.length > 0 ? (
                <ul className="mt-1 space-y-1 text-[14px] leading-relaxed text-ink-muted">
                  {delivery.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-1 text-[14px] leading-relaxed text-ink-muted">{contactContent.deliveryFallback}</p>
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ul className="grid gap-4 sm:grid-cols-2">
            {channels.map(({ label, value, action, href, Icon }) => (
              <li key={label} className="reveal">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-[1.25rem] border border-sand bg-paper p-6 transition-colors duration-300 hover:border-taupe sm:p-7"
                >
                  <span className="flex size-12 items-center justify-center rounded-full bg-cream text-ink">
                    <Icon className="size-[22px]" />
                  </span>
                  <span className="eyebrow mt-6">{label}</span>
                  <span className="mt-2 font-serif text-[1.5rem] leading-tight text-ink">{value}</span>
                  <span className="mt-6 inline-flex items-center gap-2 text-[13.5px] font-medium text-ink-soft group-hover:text-ink">
                    {action}
                    <IconArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <MadeToOrderNote className="reveal mt-4" />
        </div>
      </div>
    </section>
  );
}
