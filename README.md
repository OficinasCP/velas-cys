# C&S · Velas C y S — sitio web

Sitio de catálogo y pedidos por WhatsApp para **C&S / Velas C y S** (@velas.cys).
Sin carrito, sin pagos en línea y sin backend: el cliente arma su pedido y el sitio abre WhatsApp con el mensaje listo para enviar.

**Tecnología:** Next.js 15 (App Router) · TypeScript · Tailwind CSS 3 · diseño mobile-first · listo para Vercel.

---

## Publicar en Vercel (primera vez)

1. Sube esta carpeta a un repositorio de GitHub (o usa `vercel` desde la terminal).
2. En [vercel.com](https://vercel.com) → **Add New… → Project** → importa el repositorio.
3. Vercel detecta Next.js automáticamente. No hay que configurar nada más: **Deploy**.
4. Cuando tengan dominio propio, agrega en Vercel → *Settings → Environment Variables*:
   `NEXT_PUBLIC_SITE_URL = https://tudominio.cl` y vuelve a desplegar (se usa para SEO, sitemap y enlaces al compartir).

## Trabajar en local

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # compilación de producción (la misma que ejecuta Vercel)
```

Requiere Node.js 18.18 o superior (recomendado 20 o 22).

---

## Dónde se edita cada cosa

Toda la información comercial está centralizada en `/data`. No hace falta tocar los componentes.

| Quiero cambiar… | Archivo |
| --- | --- |
| Precios, productos, medidas, descripciones, fotos, disponibilidad | `data/products.ts` |
| Aromas | `data/aromas.ts` |
| Categorías y filtros del catálogo | `data/categories.ts` |
| WhatsApp, Instagram, mensajes predefinidos, plazo de pedidos, entregas, productos destacados, logo | `data/siteConfig.ts` |
| Textos de las secciones (portada, cómo pedir, materiales, nosotros, cuidados, contacto) | `data/content.ts` |
| Colores de marca | `tailwind.config.ts` |

### Productos (`data/products.ts`)
- **Precio:** `price: 25000` (número sin puntos, en CLP).
- **Ocultar sin borrar:** `hidden: true`.
- **Sin disponibilidad:** `available: false` (se muestra “Consultar disponibilidad”).
- **Campos del pedido según producto:**
  - `aroma: "a-eleccion"` → el formulario muestra el selector de aromas.
  - `colorOptions: true` → permite indicar color o “Consultar disponibilidad”.
  - `finish: { label: "Terminación", options: ["1 color", "Marmoleado"] }` → opciones a elegir.
  - `customizable: true` → muestra el campo “Personalización”.
- **Destacados de la portada:** lista `featuredProducts` en `data/siteConfig.ts`.

### Pendientes preparados en `data/siteConfig.ts`
- `orderLeadTime: null` → cuando se defina, escribir por ejemplo `"5 días"` o `"Entre 5 y 7 días"`. El texto “por encargo” se actualiza solo en todo el sitio.
- `delivery: { pickup, delivery, shipping, areas, description }` → hoy todo en `null`; el sitio indica que la entrega se coordina por WhatsApp. Al completarlo, aparece en la sección Contacto.

### Fotos y logo
- Las fotos actuales son **recortes provisorios** de las historias de Instagram (se les quitó el texto y se unificó el fondo).
- Para reemplazarlas: guarda la foto nueva en `public/images/products/` **con el mismo nombre de archivo** (o cambia `src` en `data/products.ts`). Formato recomendado: vertical 4:5, mínimo 1200 px de alto, `.webp` o `.jpg`.
- Productos sin foto (se muestra una ilustración “Fotografía próximamente”): velas de concreto 250/350 ml, velas de cuarzo 250/350 ml y tope de puerta. Basta con agregar la imagen en `images: [...]`.
- **Logo:** sube el archivo a `public/images/brand/` y escribe su ruta en `siteConfig.logo.src`. Mientras sea `null`, se usa el logotipo tipográfico “C&S”.
- **Favicon:** reemplaza `app/icon.png`, `app/apple-icon.png` y `app/favicon.ico`.
- **Imagen al compartir en redes:** `public/images/og.jpg` (1200 × 630).
- Fotos de la sección Instagram: `public/images/instagram/` (rutas en `siteConfig.instagram.gallery`).

---

## Estructura

```
app/
  layout.tsx              Header, footer, botón flotante de WhatsApp, SEO base
  page.tsx                Portada (una sola página con todas las secciones)
  catalogo/page.tsx       Catálogo con filtros (?filtro=flores, ?filtro=velas&tipo=cuarzo)
  catalogo/[slug]/page.tsx Ficha de producto + formulario de pedido (30 páginas estáticas)
  cuidados/page.tsx       “Cuida tu vela” como página independiente (útil para un QR)
  sitemap.ts, robots.ts   SEO
  fonts/                  Lora (títulos) y Poppins (texto), alojadas en el sitio
components/
  layout/                 Header (menú móvil), Footer, Logo, botón flotante, animaciones
  sections/               Hero, destacados, cómo pedir, pedido, materiales, aromas, nosotros, cuidados, Instagram, contacto
  product/                Tarjeta, galería, ficha técnica, barra inferior móvil
  catalog/                Filtros del catálogo
  order/OrderForm.tsx     Formulario → mensaje de WhatsApp
data/                     ← contenido editable
lib/
  whatsapp.ts             Construcción del mensaje y del enlace wa.me (URL-encoded)
  catalog.ts, format.ts, seo.ts, fonts.ts
public/images/            Fotos de productos, Instagram, colores, imagen para compartir
```

## Cómo funciona el pedido

1. El cliente elige producto (o llega desde la ficha con el producto ya seleccionado).
2. El formulario muestra solo los campos que aplican: aroma, color, terminación/base o personalización.
3. “Continuar por WhatsApp” abre `https://wa.me/56993265164?text=…` con el mensaje codificado. **No se envía nada automáticamente**: el cliente revisa y presiona enviar.
4. El cliente puede ver y copiar el mensaje antes de abrir WhatsApp.

## Notas técnicas

- Imágenes optimizadas con `next/image` (AVIF/WebP, lazy loading, tamaños responsivos).
- SEO: metadata por página, Open Graph, canonical, sitemap, robots, datos estructurados (Store y Product).
- Accesibilidad: HTML semántico, textos alternativos, foco visible, “Saltar al contenido”, menú móvil con Escape, `prefers-reduced-motion` respetado.
- Tipografías con licencia SIL Open Font License (Lora, Poppins).
