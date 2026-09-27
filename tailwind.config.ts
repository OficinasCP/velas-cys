import type { Config } from "tailwindcss";

/**
 * Paleta C&S — tonos cálidos tomados de la identidad de Instagram.
 * Para ajustar un color de marca, cámbialo aquí y se actualiza en todo el sitio.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.ts", "./lib/**/*.ts"],
  theme: {
    extend: {
      colors: {
        paper: "#FBF8F4", // blanco cálido (fondo principal)
        cream: "#F5EFE8", // crema (secciones alternas)
        linen: "#F0E9E0", // fondo de fotografías
        sand: "#E6DCD0", // beige (bordes, divisores)
        taupe: "#B3A091", // taupe (ilustraciones, detalles)
        blush: "#F3E5DF", // rosa muy suave (acentos puntuales)
        gold: {
          DEFAULT: "#B09257", // dorado discreto (líneas y detalles)
          deep: "#80652F", // dorado legible para texto pequeño
        },
        ink: {
          DEFAULT: "#3B302A", // café oscuro (texto y botones)
          deep: "#2B221D",
          soft: "#5C4D44",
          muted: "#76665B",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "Times New Roman", "serif"],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      maxWidth: {
        page: "76rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(59, 48, 42, 0.04), 0 8px 24px -12px rgba(59, 48, 42, 0.18)",
        float: "0 10px 30px -10px rgba(43, 34, 29, 0.35)",
      },
      transitionTimingFunction: {
        gentle: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
