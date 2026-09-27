/**
 * ============================================================
 *  TEXTOS DEL SITIO
 *  Todos los textos de las secciones están aquí para editarlos
 *  sin tocar los componentes.
 * ============================================================
 */

export const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Cómo pedir", href: "/#como-pedir" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Cuidados", href: "/#cuidados" },
  { label: "Contacto", href: "/#contacto" },
];

export const heroContent = {
  eyebrow: "Velas artesanales · Por encargo",
  titleStart: "Velas hechas a mano para regalar",
  titleEmphasis: "luz, calma y significado.",
  subtitle: "Piezas artesanales creadas con dedicación para acompañar momentos especiales.",
  primaryCta: "Ver catálogo",
  secondaryCta: "Pedir por WhatsApp",
};

export const featuredContent = {
  eyebrow: "Hecho a mano",
  title: "Nuestras creaciones",
  intro: "Una selección de nuestras piezas. Cada una se elabora por encargo y se confirma por WhatsApp.",
  cta: "Ver catálogo completo",
};

export const categoriesContent = {
  title: "Explora por categoría",
};

export const howToOrderContent = {
  eyebrow: "Pedidos",
  title: "Cómo pedir",
  intro: "Sin carrito ni pagos en línea: preparas tu pedido aquí y lo confirmamos contigo por WhatsApp.",
  steps: [
    {
      title: "Elige tu vela",
      text: "Recorre el catálogo: velas, flores de cera, bandejas, floreros y más.",
      icon: "candle",
    },
    {
      title: "Personaliza tu pedido",
      text: "Indica la cantidad y, según el producto, el aroma, color o terminación.",
      icon: "palette",
    },
    {
      title: "Escríbenos por WhatsApp",
      text: "Tu pedido se arma en un mensaje listo. Tú decides cuándo enviarlo.",
      icon: "chat",
    },
    {
      title: "Confirmamos disponibilidad, valor y entrega",
      text: "Te respondemos para confirmar los detalles y coordinar la entrega.",
      icon: "check",
    },
  ],
} as const;

export const orderContent = {
  eyebrow: "Pedido",
  title: "Haz tu pedido",
  intro:
    "Completa los datos y te llevamos a WhatsApp con tu mensaje listo para enviar. En este sitio no se realiza ningún pago.",
};

export const materialsContent = {
  eyebrow: "Materiales",
  title: "Hecho a mano, pieza por pieza",
  intro:
    "Cada pieza se elabora de forma artesanal y por encargo. Los materiales varían según el producto: en cada ficha encontrarás el detalle.",
  items: [
    {
      title: "Cera de soya",
      text: "La base de nuestras velas. Trabajamos con cera de soya premium.",
      icon: "leaf",
    },
    {
      title: "Concreto texturizado",
      text: "Hecho a mano para bases, bandejas, floreros, portavelas y piezas decorativas.",
      icon: "vessel",
    },
    {
      title: "Cuarzo",
      text: "Piedra y arena de cuarzo presentes en algunas velas y bases.",
      icon: "gem",
    },
    {
      title: "Cera de abeja",
      text: "El material de nuestras flores: rosas y botones de rosa con aroma.",
      icon: "honeycomb",
    },
    {
      title: "Aromas seleccionados",
      text: "Fragancias Perfumó para las velas con aroma a elección.",
      icon: "drop",
    },
    {
      title: "Personalización",
      text: "Aroma, color o terminación según cada producto, coordinado contigo por WhatsApp.",
      icon: "palette",
    },
  ],
} as const;

export const aromasContent = {
  eyebrow: "Aromas",
  title: "Elige tu aroma",
  intro: "Para los productos con aroma a elección. Trabajamos con fragancias",
  colorsTitle: "Colores",
  colorsText: "Trabajamos con una variedad de colores. Consulta disponibilidad de colores por WhatsApp.",
  colorsCta: "Consultar colores",
};

export const aboutContent = {
  eyebrow: "Nosotros",
  title: "Sobre C&S",
  paragraphs: [
    "Soy Pilar, ingeniera que encontró un mundo maravilloso en la creación de velas.",
    "Trabajo con cera de soya premium, aromas finos y concreto texturizado hecho a mano. Cada pieza está creada con dedicación, buscando transmitir elegancia, calma y luz.",
  ],
  signature: "Pilar",
  values: ["Artesanal", "Por encargo", "Personalizable"],
};

export const careContent = {
  eyebrow: "Cuidados",
  title: "Cuida tu vela",
  intro: "Unos pocos cuidados hacen que tu vela se consuma de forma pareja y la disfrutes por más tiempo.",
  steps: [
    {
      title: "Primer encendido",
      text: "Enciende la mecha y deja que la cera se derrita de manera uniforme hasta formar el círculo completo.",
      tip: "Si la mecha se inclina hacia un lado: apágala, enderézala con cuidado y vuelve a encenderla.",
      icon: "flame",
    },
    {
      title: "Segundo encendido",
      text: "Permite nuevamente que se forme el círculo completo. En estas primeras sesiones considera aproximadamente 1 hora y 45 minutos.",
      icon: "circle",
    },
    {
      title: "Antes de volver a encender",
      text: "La mecha no debería superar aproximadamente 5 mm. Retira los residuos quemados de la punta.",
      tip: "Si la mecha quedó profunda, usa un encendedor largo, apropiado para velas o chimenea.",
      icon: "scissors",
    },
    {
      title: "Tiempo de uso",
      text: "Después de las primeras sesiones, una sesión ideal no debería superar aproximadamente 3 horas.",
      icon: "clock",
    },
    {
      title: "Cómo apagar",
      text: "Usa un apagador de velas o una tapa que cubra la superficie para reducir el humo.",
      icon: "snuffer",
    },
  ],
  important: "Después de apagar la vela, no la muevas hasta que la cera se haya endurecido.",
} as const;

export const instagramContent = {
  eyebrow: "Instagram",
  title: "Síguenos en Instagram",
  text: "Descubre nuestras piezas más recientes y novedades en",
  cta: "Ver Instagram",
};

export const contactContent = {
  eyebrow: "Contacto",
  title: "Conversemos",
  intro: "Escríbenos para consultas, pedidos o personalizaciones.",
  deliveryTitle: "Entregas",
  deliveryFallback: "Coordinamos la entrega de tu pedido por WhatsApp.",
};

export const footerContent = {
  tagline: "Velas y piezas artesanales hechas a mano, por encargo.",
};
