import localFont from "next/font/local";

/**
 * Tipografías alojadas en el propio sitio (sin depender de servicios externos):
 * - Lora: serif elegante para títulos.
 * - Poppins: sans-serif limpia para textos, botones y navegación.
 * Ambas con licencia SIL Open Font License.
 */
export const fontSerif = localFont({
  src: [
    { path: "../app/fonts/Lora-Variable.woff", weight: "400 700", style: "normal" },
    { path: "../app/fonts/Lora-Italic-Variable.woff", weight: "400 700", style: "italic" },
  ],
  variable: "--font-serif",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const fontSans = localFont({
  src: [
    { path: "../app/fonts/Poppins-Light.woff", weight: "300", style: "normal" },
    { path: "../app/fonts/Poppins-Regular.woff", weight: "400", style: "normal" },
    { path: "../app/fonts/Poppins-Medium.woff", weight: "500", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
});
