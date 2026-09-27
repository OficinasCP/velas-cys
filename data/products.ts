/**
 * ============================================================
 *  CATÁLOGO DE PRODUCTOS C&S
 *
 *  Cómo editar:
 *  - Precio: cambia "price" (número sin puntos, en CLP).
 *  - Fotos: reemplaza el archivo en /public/images/products/ con el
 *    mismo nombre, o cambia "src". Formato recomendado: vertical 4:5.
 *    Si "images" está vacío se muestra "Fotografía próximamente".
 *  - Ocultar un producto sin borrarlo: hidden: true
 *  - Marcar sin disponibilidad: available: false
 *  - Destacados de la portada: /data/siteConfig.ts → featuredProducts
 * ============================================================
 */
import type { Product } from "@/lib/types";

const img = (file: string, alt: string) => ({ src: `/images/products/${file}`, alt });

export const products: Product[] = [
  /* ---------------------------------------------------------- */
  /*  VELAS DE CONCRETO                                          */
  /* ---------------------------------------------------------- */
  {
    slug: "vela-concreto-250-ml",
    name: "Vela de concreto 250 ml",
    category: "velas-concreto",
    tags: ["velas", "concreto", "cera-de-soya"],
    price: 20000,
    shortDescription: "Cera de soya y concreto, con aroma a elección.",
    description:
      "Vela de cera de soya y concreto, con el aroma que prefieras. Es un pedido personalizado: cuéntanos lo que tienes en mente y lo coordinamos por WhatsApp.",
    materials: "Concreto y cera de soya",
    measurements: [
      { label: "Altura", value: "12 cm" },
      { label: "Diámetro", value: "7 cm" },
    ],
    wax: "250 ml de cera de soya",
    aroma: "a-eleccion",
    colorOptions: true,
    customizable: true,
    images: [],
  },
  {
    slug: "vela-concreto-350-ml",
    name: "Vela de concreto 350 ml",
    category: "velas-concreto",
    tags: ["velas", "concreto", "cera-de-soya"],
    price: 25000,
    shortDescription: "Cera de soya y concreto, con aroma a elección.",
    description:
      "Vela de cera de soya y concreto en formato más alto, con el aroma que prefieras. Es un pedido personalizado: cuéntanos lo que tienes en mente y lo coordinamos por WhatsApp.",
    materials: "Concreto y cera de soya",
    measurements: [
      { label: "Altura", value: "16 cm" },
      { label: "Diámetro", value: "7 cm" },
    ],
    wax: "350 ml de cera de soya",
    aroma: "a-eleccion",
    colorOptions: true,
    customizable: true,
    images: [],
  },

  /* ---------------------------------------------------------- */
  /*  VELAS DE CUARZO                                            */
  /* ---------------------------------------------------------- */
  {
    slug: "vela-cuarzo-250-ml",
    name: "Vela de piedra y arena de cuarzo 250 ml",
    category: "velas-cuarzo",
    tags: ["velas", "cuarzo", "cera-de-soya"],
    price: 20000,
    shortDescription: "Cera de soya con piedra y arena de cuarzo.",
    description:
      "Vela de cera de soya con piedra y arena de cuarzo, y el aroma que elijas. Es un pedido personalizado: cuéntanos lo que tienes en mente y lo coordinamos por WhatsApp.",
    materials: "Piedra y arena de cuarzo, cera de soya",
    measurements: [
      { label: "Altura", value: "10 cm" },
      { label: "Diámetro", value: "7 cm" },
    ],
    wax: "250 ml de cera de soya",
    aroma: "a-eleccion",
    colorOptions: true,
    customizable: true,
    images: [],
  },
  {
    slug: "vela-cuarzo-350-ml",
    name: "Vela de piedra y arena de cuarzo 350 ml",
    category: "velas-cuarzo",
    tags: ["velas", "cuarzo", "cera-de-soya"],
    price: 25000,
    shortDescription: "Cera de soya con piedra y arena de cuarzo.",
    description:
      "Vela de cera de soya con piedra y arena de cuarzo en formato más alto, con el aroma que elijas. Es un pedido personalizado: cuéntanos lo que tienes en mente y lo coordinamos por WhatsApp.",
    materials: "Piedra y arena de cuarzo, cera de soya",
    measurements: [
      { label: "Altura", value: "15 cm" },
      { label: "Diámetro", value: "7 cm" },
    ],
    wax: "350 ml de cera de soya",
    aroma: "a-eleccion",
    colorOptions: true,
    customizable: true,
    images: [],
  },

  /* ---------------------------------------------------------- */
  /*  VELAS DECORATIVAS                                          */
  /* ---------------------------------------------------------- */
  {
    slug: "volcan-base-concreto",
    name: "Volcán con base de concreto",
    category: "velas-decorativas",
    tags: ["velas", "decorativas", "concreto", "cera-de-soya"],
    price: 25000,
    shortDescription: "Vela de cera de soya sobre base de concreto.",
    description:
      "Vela de cera de soya con base de concreto trabajada a mano. Una pieza sobria y cálida para cualquier rincón de la casa.",
    materials: "Cera de soya y concreto",
    measurements: [
      { label: "Altura", value: "15 cm" },
      { label: "Diámetro", value: "7,5 cm" },
    ],
    wax: "300 g de cera de soya",
    images: [img("volcan-base-concreto.webp", "Vela Volcán de cera de soya con base de concreto texturizado")],
  },
  {
    slug: "luxury-candle",
    name: "Luxury Candle",
    category: "velas-decorativas",
    tags: ["velas", "decorativas", "cera-de-soya"],
    price: 30000,
    shortDescription: "Vela decorativa de cera de soya, 350 g.",
    description:
      "Vela decorativa de cera de soya con terminaciones hechas a mano. Una pieza protagonista para regalar o decorar.",
    materials: "Cera de soya",
    measurements: [
      { label: "Altura", value: "17 cm" },
      { label: "Diámetro base", value: "7,5 cm" },
    ],
    wax: "350 g de cera de soya",
    images: [
      img("luxury-candle.webp", "Dos Luxury Candle de cera de soya con detalles en tonos cobre y dorado"),
      img("luxury-candle-2.webp", "Luxury Candle de cera de soya, vista individual"),
      img("luxury-candle-3.webp", "Luxury Candle de cera de soya sobre base clara"),
    ],
  },

  /* ---------------------------------------------------------- */
  /*  VELAS RELIGIOSAS                                           */
  /* ---------------------------------------------------------- */
  {
    slug: "gruta-sagrada-familia",
    name: "Gruta de la Sagrada Familia",
    category: "velas-religiosas",
    tags: ["velas", "religiosas", "cera-de-soya"],
    price: 44000,
    shortDescription: "Vela gruta con figura de la Sagrada Familia.",
    description:
      "Vela de cera de soya con una gruta que acoge la figura de la Sagrada Familia. Un regalo con significado para el hogar.",
    materials: "Cera de soya",
    measurements: [
      { label: "Altura", value: "25 cm" },
      { label: "Diámetro base", value: "10 cm" },
    ],
    wax: "350 g de cera de soya",
    images: [img("gruta-sagrada-familia.webp", "Vela gruta de la Sagrada Familia con detalles dorados")],
  },
  {
    slug: "gruta-de-la-virgen",
    name: "Gruta de la Virgen",
    category: "velas-religiosas",
    tags: ["velas", "religiosas", "cera-de-soya"],
    price: 34000,
    shortDescription: "Vela gruta con figura de la Virgen. Incluye plato.",
    description:
      "Vela de cera de soya con una gruta que acoge la figura de la Virgen, con terminaciones hechas a mano. Incluye plato.",
    materials: "Cera de soya",
    measurements: [
      { label: "Altura", value: "26 cm" },
      { label: "Diámetro base", value: "7,5 cm" },
    ],
    wax: "300 g de cera de soya",
    includesPlate: true,
    images: [
      img(
        "gruta-de-la-virgen.webp",
        "Dos versiones de la Gruta de la Virgen: con piedras azules y con detalles dorados",
      ),
      img("gruta-de-la-virgen-2.webp", "Gruta de la Virgen con piedras azules y detalles dorados"),
      img("gruta-de-la-virgen-3.webp", "Gruta de la Virgen blanca con marco dorado"),
    ],
  },
  {
    slug: "gruta-virgen-maria-nino-jesus",
    name: "Gruta Virgen María y el Niño Jesús",
    category: "velas-religiosas",
    tags: ["velas", "religiosas", "concreto", "cuarzo", "cera-de-soya"],
    price: 44000,
    shortDescription: "Base de concreto texturizado o piedras de cuarzo.",
    description:
      "Vela de cera de soya con una gruta que acoge la figura de la Virgen María con el Niño Jesús. Puedes elegir base de concreto texturizado o de piedras de cuarzo.",
    materials: "Cera de soya; base de concreto texturizado o piedras de cuarzo",
    measurements: [
      { label: "Altura", value: "26 cm" },
      { label: "Diámetro", value: "10 cm" },
    ],
    wax: "350 g de cera de soya",
    finish: {
      label: "Base",
      options: ["Concreto texturizado", "Piedras de cuarzo"],
    },
    images: [
      img(
        "gruta-virgen-maria-nino-jesus.webp",
        "Gruta de la Virgen María y el Niño Jesús en base de concreto y en base de cuarzo azul",
      ),
      img(
        "gruta-virgen-maria-nino-jesus-2.webp",
        "Gruta de la Virgen María y el Niño Jesús con base de concreto texturizado",
      ),
      img(
        "gruta-virgen-maria-nino-jesus-3.webp",
        "Gruta de la Virgen María y el Niño Jesús con base de piedras de cuarzo azul",
      ),
    ],
  },
  {
    slug: "gruta-de-jesus",
    name: "Gruta de Jesús",
    category: "velas-religiosas",
    tags: ["velas", "religiosas", "cera-de-soya"],
    price: 34000,
    shortDescription: "Vela gruta con figura de Jesús. Incluye plato.",
    description:
      "Vela de cera de soya con una gruta que acoge la figura de Jesús, con detalles dorados. Incluye plato.",
    materials: "Cera de soya",
    measurements: [
      { label: "Altura", value: "26 cm" },
      { label: "Diámetro base", value: "7,5 cm" },
    ],
    wax: "300 g de cera de soya",
    includesPlate: true,
    images: [img("gruta-de-jesus.webp", "Vela gruta de Jesús con detalles dorados")],
  },
  {
    slug: "gruta-virgen-de-lourdes",
    name: "Gruta Virgen de Lourdes",
    category: "velas-religiosas",
    tags: ["velas", "religiosas", "concreto", "cera-de-soya"],
    price: 40000,
    shortDescription: "Base de concreto texturizado. Incluye plato.",
    description:
      "Vela de cera de soya con una gruta que acoge la figura de la Virgen de Lourdes, sobre base de concreto texturizado. Incluye plato.",
    materials: "Cera de soya y concreto texturizado",
    measurements: [
      { label: "Altura", value: "31 cm" },
      { label: "Diámetro base", value: "7,5 cm" },
    ],
    wax: "300 g de cera de soya",
    includesPlate: true,
    extraSpecs: [{ label: "Base", value: "Concreto texturizado" }],
    images: [img("gruta-virgen-de-lourdes.webp", "Vela gruta de la Virgen de Lourdes, blanca con detalles dorados")],
  },
  {
    slug: "gruta-espiritu-santo",
    name: "Gruta del Espíritu Santo",
    category: "velas-religiosas",
    tags: ["velas", "religiosas", "concreto", "cuarzo", "cera-de-soya"],
    price: 34000,
    shortDescription: "Base de concreto texturizado o piedra de cuarzo. Incluye plato.",
    description:
      "Vela de cera de soya con una gruta que acoge la figura del Espíritu Santo. Puedes elegir base de concreto texturizado o de piedra de cuarzo. Incluye plato.",
    materials: "Cera de soya; base de concreto texturizado o piedra de cuarzo",
    measurements: [
      { label: "Altura", value: "26 cm" },
      { label: "Diámetro base", value: "7,5 cm" },
    ],
    wax: "300 g de cera de soya",
    includesPlate: true,
    finish: {
      label: "Base",
      options: ["Concreto texturizado", "Piedra de cuarzo"],
    },
    images: [
      img(
        "gruta-espiritu-santo.webp",
        "Gruta del Espíritu Santo en dos versiones: base de cuarzo y base de concreto texturizado",
      ),
      img("gruta-espiritu-santo-2.webp", "Gruta del Espíritu Santo con base de piedra de cuarzo y detalles dorados"),
      img("gruta-espiritu-santo-3.webp", "Gruta del Espíritu Santo con base de concreto texturizado rosado"),
    ],
  },

  /* ---------------------------------------------------------- */
  /*  FIGURAS RELIGIOSAS                                         */
  /* ---------------------------------------------------------- */
  {
    slug: "santa-rita-de-casia",
    name: "Santa Rita de Casia",
    category: "figuras-religiosas",
    tags: ["religiosas", "concreto"],
    price: 38000,
    shortDescription: "Figura realizada en concreto, 28 cm.",
    description: "Figura de Santa Rita de Casia realizada en concreto.",
    materials: "Concreto",
    measurements: [{ label: "Altura", value: "28 cm" }],
    images: [img("santa-rita-de-casia.webp", "Figura de Santa Rita de Casia en concreto con rosas rojas en la base")],
  },

  /* ---------------------------------------------------------- */
  /*  FLORES DE CERA DE ABEJA                                    */
  /* ---------------------------------------------------------- */
  {
    slug: "rosa-grande-1-color-con-tallo",
    name: "Rosa grande de 1 color con tallo",
    category: "flores",
    tags: ["flores"],
    price: 10000,
    shortDescription: "Rosa de cera de abeja con tallo y aroma.",
    description: "Rosa grande de cera de abeja en un color, con tallo y aroma.",
    materials: "Cera de abeja",
    measurements: [
      { label: "Tallo", value: "18 cm" },
      { label: "Diámetro flor", value: "10 cm" },
      { label: "Diámetro con hojas", value: "13 cm" },
    ],
    aroma: "con-aroma",
    colorOptions: true,
    images: [
      img("rosa-grande-1-color-con-tallo.webp", "Rosa grande de cera de abeja color rosa viejo, sostenida en la mano"),
    ],
  },
  {
    slug: "rosa-grande-2-colores-con-tallo",
    name: "Rosa grande de 2 colores con tallo",
    category: "flores",
    tags: ["flores"],
    price: 12000,
    shortDescription: "Rosa bicolor de cera de abeja con aroma.",
    description: "Rosa grande de cera de abeja en dos colores, con tallo y aroma.",
    materials: "Cera de abeja",
    measurements: [
      { label: "Tallo", value: "18 cm" },
      { label: "Diámetro flor", value: "10 cm" },
      { label: "Diámetro con hojas", value: "13 cm" },
    ],
    aroma: "con-aroma",
    colorOptions: true,
    images: [
      img("rosa-grande-2-colores-con-tallo.webp", "Rosa grande bicolor de cera de abeja en tonos rojo y blanco"),
    ],
  },
  {
    slug: "boton-de-rosa-1-color-con-tallo",
    name: "Botón de rosa de 1 color con tallo",
    category: "flores",
    tags: ["flores"],
    price: 6000,
    shortDescription: "Botón de rosa de cera de abeja con aroma.",
    description: "Botón de rosa de cera de abeja en un color, con tallo y aroma.",
    materials: "Cera de abeja",
    measurements: [
      { label: "Tallo", value: "18 cm" },
      { label: "Diámetro", value: "7 cm" },
    ],
    aroma: "con-aroma",
    colorOptions: true,
    images: [img("boton-de-rosa-1-color-con-tallo.webp", "Botón de rosa de cera de abeja color fucsia con tallo")],
  },
  {
    slug: "boton-de-rosa-2-colores-con-tallo",
    name: "Botón de rosa de 2 colores con tallo",
    category: "flores",
    tags: ["flores"],
    price: 8000,
    shortDescription: "Botón de rosa bicolor de cera de abeja.",
    description: "Botón de rosa de cera de abeja en dos colores, con tallo y aroma.",
    materials: "Cera de abeja",
    measurements: [
      { label: "Tallo", value: "18 cm" },
      { label: "Diámetro", value: "7 cm" },
    ],
    aroma: "con-aroma",
    colorOptions: true,
    images: [
      img("boton-de-rosa-2-colores-con-tallo.webp", "Botón de rosa bicolor de cera de abeja en tonos morado y dorado"),
    ],
  },
  {
    slug: "rosa-grande-1-color-sin-tallo",
    name: "Rosa grande de 1 color sin tallo",
    category: "flores",
    tags: ["flores"],
    price: 7000,
    shortDescription: "Rosa de cera de abeja de 11 cm.",
    description: "Rosa grande de cera de abeja en un color, sin tallo. La bandeja se vende por separado.",
    materials: "Cera de abeja",
    measurements: [{ label: "Diámetro", value: "11 cm" }],
    colorOptions: true,
    notes: ["La bandeja se vende por separado."],
    images: [
      img("rosa-grande-1-color-sin-tallo.webp", "Rosa grande de cera de abeja color burdeo sobre bandeja rosada"),
    ],
  },

  /* ---------------------------------------------------------- */
  /*  BANDEJAS Y POSAVASOS                                       */
  /* ---------------------------------------------------------- */
  {
    slug: "bandeja-redonda-concreto-17-cm",
    name: "Bandeja redonda de concreto 17 cm",
    category: "bandejas",
    tags: ["bandejas", "concreto"],
    price: 6000,
    shortDescription: "Diámetro interior de 17 cm.",
    description:
      "Bandeja redonda de concreto con 17 cm de diámetro interior, ideal para velas, flores o pequeños objetos.",
    materials: "Concreto",
    measurements: [{ label: "Diámetro interior", value: "17 cm" }],
    images: [img("bandeja-redonda-concreto-17.webp", "Bandeja redonda de concreto en tono gris oscuro")],
  },
  {
    slug: "posavasos-concreto",
    name: "Posavasos de concreto",
    category: "bandejas",
    tags: ["bandejas", "concreto"],
    price: 1500,
    shortDescription: "Diámetro interior de 11 cm.",
    description: "Posavasos de concreto con 11 cm de diámetro interior.",
    materials: "Concreto",
    measurements: [{ label: "Diámetro interior", value: "11 cm" }],
    notes: ["Si pides más de una vela, se incluye un posavasos de regalo por cada unidad."],
    images: [img("posavasos-concreto.webp", "Tres posavasos de concreto en tono terracota junto a flores")],
  },
  {
    slug: "bandeja-redonda-grande-concreto-24-cm",
    name: "Bandeja redonda grande de concreto 24 cm",
    category: "bandejas",
    tags: ["bandejas", "concreto"],
    price: 12000,
    shortDescription: "Diámetro interior de 24 cm, 2 cm de alto.",
    description: "Bandeja redonda grande de concreto con 24 cm de diámetro interior y 2 cm de altura.",
    materials: "Concreto",
    measurements: [
      { label: "Diámetro interior", value: "24 cm" },
      { label: "Altura", value: "2 cm" },
    ],
    images: [
      img("bandeja-redonda-grande-concreto-24.webp", "Bandeja redonda grande de concreto en tonos dorado y café"),
    ],
  },
  {
    slug: "bandeja-ovalada-concreto",
    name: "Bandeja ovalada de concreto",
    category: "bandejas",
    tags: ["bandejas", "concreto"],
    price: 6000,
    shortDescription: "23 × 12 cm.",
    description: "Bandeja ovalada de concreto de 23 cm de largo y 12 cm de ancho.",
    materials: "Concreto",
    measurements: [
      { label: "Largo", value: "23 cm" },
      { label: "Ancho", value: "12 cm" },
    ],
    images: [img("bandeja-ovalada-concreto.webp", "Bandeja ovalada de concreto en tono gris claro")],
  },
  {
    slug: "bandeja-redonda-concreto-15-cm",
    name: "Bandeja redonda de concreto 15 cm",
    category: "bandejas",
    tags: ["bandejas", "concreto"],
    price: 6000,
    shortDescription: "Diámetro de 15 cm.",
    description: "Bandeja redonda de concreto de 15 cm de diámetro, con borde de forma orgánica.",
    materials: "Concreto",
    measurements: [{ label: "Diámetro", value: "15 cm" }],
    images: [
      img("bandeja-redonda-concreto-15.webp", "Bandeja redonda de concreto blanca con borde ondulado"),
      img("bandeja-redonda-concreto-15-2.webp", "Bandeja redonda de concreto color crema de forma orgánica"),
    ],
  },
  {
    slug: "bandeja-redonda-grande-concreto-27-cm",
    name: "Bandeja redonda grande de concreto 27 cm",
    category: "bandejas",
    tags: ["bandejas", "concreto"],
    price: 12000,
    shortDescription: "Diámetro de 27 cm.",
    description: "Bandeja redonda grande de concreto de 27 cm de diámetro, con detalles dorados.",
    materials: "Concreto",
    measurements: [{ label: "Diámetro", value: "27 cm" }],
    images: [
      img(
        "bandeja-redonda-grande-concreto-27.webp",
        "Bandeja redonda grande de concreto marmoleado con detalles dorados en el borde",
      ),
    ],
  },

  /* ---------------------------------------------------------- */
  /*  FLOREROS                                                   */
  /* ---------------------------------------------------------- */
  {
    slug: "florero-esferico",
    name: "Florero esférico",
    category: "floreros",
    tags: ["floreros", "concreto"],
    price: 7000,
    shortDescription: "De concreto, en 1 color o marmoleado.",
    description: "Florero de concreto de formas esféricas, disponible en un color o marmoleado.",
    materials: "Concreto",
    measurements: [
      { label: "Altura", value: "18 cm" },
      { label: "Diámetro base", value: "8 cm" },
      { label: "Diámetro agujero", value: "2,5 cm" },
    ],
    colorOptions: true,
    finish: {
      label: "Terminación",
      options: ["1 color", "Marmoleado"],
    },
    images: [img("florero-esferico.webp", "Florero esférico de concreto marmoleado en tonos blanco y gris")],
  },
  {
    slug: "florero-cilindrico",
    name: "Florero cilíndrico",
    category: "floreros",
    tags: ["floreros", "concreto"],
    price: 9000,
    shortDescription: "De concreto, en 1 color o marmoleado.",
    description: "Florero cilíndrico de concreto, disponible en un color o marmoleado.",
    materials: "Concreto",
    measurements: [
      { label: "Altura", value: "16 cm" },
      { label: "Diámetro base", value: "6 cm" },
      { label: "Diámetro agujero", value: "4 cm" },
    ],
    colorOptions: true,
    finish: {
      label: "Terminación",
      options: ["1 color", "Marmoleado"],
    },
    images: [img("florero-cilindrico.webp", "Florero cilíndrico de concreto marmoleado en tonos rosados")],
  },

  /* ---------------------------------------------------------- */
  /*  ACCESORIOS Y DECORACIÓN                                    */
  /* ---------------------------------------------------------- */
  {
    slug: "cojin-concreto",
    name: "Cojín de concreto",
    category: "accesorios",
    tags: ["accesorios", "concreto"],
    price: 8000,
    shortDescription: "Para velas, flores, joyas y más.",
    description: "Cojín de concreto para apoyar velas, flores, joyas, entre otros.",
    materials: "Concreto",
    measurements: [
      { label: "Altura", value: "2 cm" },
      { label: "Ancho", value: "15 cm" },
      { label: "Largo", value: "15 cm" },
    ],
    extraSpecs: [{ label: "Uso", value: "Velas, flores, joyas, entre otros" }],
    images: [
      img(
        "cojin-concreto.webp",
        "Dos cojines de concreto, uno con detalles dorados y otro rosado con detalles plateados",
      ),
    ],
  },
  {
    slug: "tope-puerta-concreto",
    name: "Tope de puerta de concreto",
    category: "accesorios",
    tags: ["accesorios", "concreto"],
    price: 12000,
    shortDescription: "7 cm de diámetro, 10 cm de alto.",
    description: "Tope de puerta de concreto de 7 cm de diámetro y 10 cm de altura.",
    materials: "Concreto",
    measurements: [
      { label: "Altura", value: "10 cm" },
      { label: "Diámetro", value: "7 cm" },
    ],
    images: [],
  },
  {
    slug: "portavelas-concreto-alto",
    name: "Portavelas de concreto — modelo alto",
    category: "accesorios",
    tags: ["accesorios", "concreto"],
    price: 3500,
    shortDescription: "7 cm de alto.",
    description: "Portavelas de concreto, modelo alto, para velas pequeñas.",
    materials: "Concreto",
    measurements: [
      { label: "Altura", value: "7 cm" },
      { label: "Diámetro", value: "5 cm" },
    ],
    images: [
      img("portavelas-concreto-alto.webp", "Portavelas alto de concreto en forma de tulipán con una vela encendida"),
    ],
  },
  {
    slug: "portavelas-concreto-bajo",
    name: "Portavelas de concreto — modelo bajo",
    category: "accesorios",
    tags: ["accesorios", "concreto"],
    price: 2000,
    shortDescription: "3 cm de alto.",
    description: "Portavelas de concreto, modelo bajo, para velas pequeñas.",
    materials: "Concreto",
    measurements: [
      { label: "Altura", value: "3 cm" },
      { label: "Diámetro", value: "5 cm" },
    ],
    images: [
      img("portavelas-concreto-bajo.webp", "Portavelas bajo de concreto blanco trenzado con una vela encendida"),
    ],
  },
];
