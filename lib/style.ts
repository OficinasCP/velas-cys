import type { CSSProperties } from "react";

/** Retraso escalonado para la animación de aparición (clase "reveal"). */
export function revealDelay(ms: number): CSSProperties {
  return { "--reveal-delay": `${ms}ms` } as CSSProperties;
}
