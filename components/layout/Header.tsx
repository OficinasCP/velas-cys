"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { IconClose, IconInstagram, IconMenu, IconWhatsApp } from "@/components/ui/Icons";
import { navigation } from "@/data/content";
import { madeToOrderText, siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/cn";
import { whatsappUrl } from "@/lib/whatsapp";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const waHref = whatsappUrl(siteConfig.whatsapp.messages.general);

  // Cambio sutil del header al hacer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar el menú al cambiar de página
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Menú móvil: bloquear scroll, cerrar con Escape y manejar el foco
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const firstLink = panelRef.current?.querySelector<HTMLElement>("a[href]");
    firstLink?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    const menuButton = menuButtonRef.current;
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      menuButton?.focus();
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 transition-[background-color,box-shadow,border-color] duration-500",
          scrolled || open
            ? "border-b border-sand/70 bg-paper/95 shadow-[0_1px_0_rgba(59,48,42,0.02)] backdrop-blur-md"
            : "border-b border-transparent bg-paper/0",
        )}
      >
        <div className="container-page flex h-16 items-center justify-between gap-6 lg:h-[72px]">
          <Link href="/" className="-m-2 rounded-md p-2" aria-label={`${siteConfig.fullName} — Inicio`}>
            <Logo />
          </Link>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-7 xl:gap-9">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "relative py-2 text-[13.5px] tracking-[0.02em] transition-colors duration-300",
                      "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-500 hover:after:scale-x-100",
                      isActive(item.href) ? "text-ink after:scale-x-100" : "text-ink-soft hover:text-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <a
              href={siteConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden size-11 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-cream hover:text-ink sm:inline-flex"
              aria-label={`Instagram @${siteConfig.instagram.handle} (se abre en otra pestaña)`}
            >
              <IconInstagram className="size-[19px]" />
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary hidden px-5 lg:inline-flex"
            >
              <IconWhatsApp className="size-4" />
              WhatsApp
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-cream lg:hidden"
              aria-label="Escribir por WhatsApp (se abre en otra pestaña)"
            >
              <IconWhatsApp className="size-[19px]" />
            </a>
            <button
              ref={menuButtonRef}
              type="button"
              className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-cream lg:hidden"
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <IconClose className="size-6" /> : <IconMenu className="size-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil (fuera del header para que position: fixed no dependa del blur) */}
      <div
        id="menu-movil"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menú"
        inert={!open}
        className={cn(
          "fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-paper transition-[opacity,transform] duration-500 ease-gentle lg:hidden",
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <div className="container-page flex min-h-full flex-col pb-safe pt-6">
          <nav aria-label="Menú móvil">
            <ul className="divide-y divide-sand/70 border-y border-sand/70">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className="flex items-center justify-between py-4 font-serif text-[1.65rem] leading-tight text-ink"
                  >
                    {item.label}
                    <span aria-hidden="true" className="text-base text-gold">
                      ›
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8 grid gap-3">
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn-md btn-primary w-full">
              <IconWhatsApp className="size-[18px]" />
              Escribir por WhatsApp
            </a>
            <a
              href={siteConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-md btn-outline w-full"
            >
              <IconInstagram className="size-[18px]" />@{siteConfig.instagram.handle}
            </a>
          </div>

          <p className="mt-auto pt-10 text-center text-[12.5px] leading-relaxed text-ink-muted">{madeToOrderText()}</p>
        </div>
      </div>
    </>
  );
}
