import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { IconInstagram, IconWhatsApp } from "@/components/ui/Icons";
import { footerContent, navigation } from "@/data/content";
import { siteConfig } from "@/data/siteConfig";
import { whatsappUrl } from "@/lib/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sand/80 bg-cream">
      <div className="container-page py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Link href="/" className="inline-block" aria-label={`${siteConfig.fullName} — Inicio`}>
              <Logo size="lg" />
            </Link>
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-ink-soft">{footerContent.tagline}</p>
          </div>

          <nav aria-label="Pie de página" className="md:col-span-4">
            <p className="eyebrow">Navegación</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-10 items-center text-[14px] text-ink-soft transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="eyebrow">Contacto</p>
            <ul className="mt-4 space-y-1">
              <li>
                <a
                  href={whatsappUrl(siteConfig.whatsapp.messages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-2.5 text-[14px] text-ink-soft transition-colors hover:text-ink"
                >
                  <IconWhatsApp className="size-4" />
                  {siteConfig.whatsapp.display}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-2.5 text-[14px] text-ink-soft transition-colors hover:text-ink"
                >
                  <IconInstagram className="size-4" />@{siteConfig.instagram.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-sand pt-6 text-[12.5px] text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.fullName}
          </p>
          <p>Hecho a mano con dedicación.</p>
        </div>
      </div>
    </footer>
  );
}
