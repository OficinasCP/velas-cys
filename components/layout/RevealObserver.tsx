"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Activa las apariciones suaves (clase "reveal") cuando los elementos entran en pantalla.
 * Un solo observador para todo el sitio: los componentes solo agregan className="reveal".
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const reveal = (el: Element) => el.classList.add("is-visible");

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(reveal);
      return;
    }

    // Lo que ya está en pantalla se muestra de inmediato (sin parpadeo);
    // el resto aparece al hacer scroll.
    const viewportHeight = window.innerHeight;
    document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < viewportHeight && rect.bottom > 0) reveal(el);
    });
    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    const scan = () => {
      document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => observer.observe(el));
    };
    scan();

    // Elementos que aparecen después (filtros del catálogo, cambios de página)
    let frame = 0;
    const mutations = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(scan);
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(frame);
      mutations.disconnect();
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
