import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

/** Base para iconos lineales finos (24×24). */
function LineIcon({ children, title, strokeWidth = 1.3, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

/* ---------- Marcas ---------- */

export function IconWhatsApp({ title, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function IconInstagram(props: IconProps) {
  return (
    <LineIcon strokeWidth={1.5} {...props}>
      <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="5.25" />
      <circle cx="12" cy="12" r="4.25" />
      <path d="M17.4 6.6h.01" strokeWidth={2.2} />
    </LineIcon>
  );
}

/* ---------- Interfaz ---------- */

export function IconMenu(props: IconProps) {
  return (
    <LineIcon strokeWidth={1.4} {...props}>
      <path d="M3.5 7.5h17" />
      <path d="M3.5 12h17" />
      <path d="M3.5 16.5h11" />
    </LineIcon>
  );
}

export function IconClose(props: IconProps) {
  return (
    <LineIcon strokeWidth={1.4} {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </LineIcon>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <LineIcon strokeWidth={1.4} {...props}>
      <path d="M4.5 12h15" />
      <path d="m13.5 6 6 6-6 6" />
    </LineIcon>
  );
}

export function IconChevronLeft(props: IconProps) {
  return (
    <LineIcon strokeWidth={1.4} {...props}>
      <path d="m15 18-6-6 6-6" />
    </LineIcon>
  );
}

export function IconPlus(props: IconProps) {
  return (
    <LineIcon strokeWidth={1.5} {...props}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </LineIcon>
  );
}

export function IconMinus(props: IconProps) {
  return (
    <LineIcon strokeWidth={1.5} {...props}>
      <path d="M5 12h14" />
    </LineIcon>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <LineIcon strokeWidth={1.5} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </LineIcon>
  );
}

export function IconCopy(props: IconProps) {
  return (
    <LineIcon {...props}>
      <rect x="8.5" y="8.5" width="12" height="12" rx="2.5" />
      <path d="M15.5 8.5V6a2.5 2.5 0 0 0-2.5-2.5H6A2.5 2.5 0 0 0 3.5 6v7A2.5 2.5 0 0 0 6 15.5h2.5" />
    </LineIcon>
  );
}

export function IconInfo(props: IconProps) {
  return (
    <LineIcon {...props}>
      <circle cx="12" cy="12" r="9.25" />
      <path d="M12 16.25v-5" />
      <path d="M12 7.75h.01" strokeWidth={2} />
    </LineIcon>
  );
}

export function IconMapPin(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M19.25 10c0 5.25-7.25 11-7.25 11s-7.25-5.75-7.25-11a7.25 7.25 0 0 1 14.5 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </LineIcon>
  );
}

/* ---------- Iconos de contenido (materiales, pasos, cuidados) ---------- */

export function IconCandle(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M12 2.75c1.6 1.9 2.25 3.1 2.25 4.15a2.25 2.25 0 0 1-4.5 0c0-1.05.65-2.25 2.25-4.15Z" />
      <path d="M12 9.25v1.5" />
      <rect x="7.75" y="10.75" width="8.5" height="10.5" rx="1.25" />
      <path d="M7.75 14.25c1.5.9 2.9.9 4.25 0s2.75-.9 4.25 0" />
    </LineIcon>
  );
}

export function IconFlame(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M12 21.25c3.6 0 6.25-2.55 6.25-6 0-2.7-1.6-4.55-3.05-6.1-1.25-1.35-2.2-2.9-2.45-5.9-2.75 1.9-4.2 4.4-4.2 7 0 .9.25 1.7.6 2.3-.95-.3-1.8-1.2-2.05-2.3-1.05 1.2-1.35 2.6-1.35 4 0 3.2 2.65 7 6.25 7Z" />
      <path d="M12 21.25c-1.6 0-2.75-1.1-2.75-2.6 0-1.6 1.35-2.55 2.75-4.4 1.4 1.85 2.75 2.8 2.75 4.4 0 1.5-1.15 2.6-2.75 2.6Z" />
    </LineIcon>
  );
}

export function IconMeltPool(props: IconProps) {
  return (
    <LineIcon {...props}>
      <circle cx="12" cy="12" r="9.25" />
      <circle cx="12" cy="12" r="5.25" strokeDasharray="1.6 2.2" />
      <path d="M12 12v-2.25" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </LineIcon>
  );
}

export function IconScissors(props: IconProps) {
  return (
    <LineIcon {...props}>
      <circle cx="6" cy="6.5" r="2.75" />
      <circle cx="6" cy="17.5" r="2.75" />
      <path d="M8.4 8.1 12 12" />
      <path d="M20.25 4.25 8.4 15.9" />
      <path d="M14.6 14.6l5.65 5.15" />
    </LineIcon>
  );
}

export function IconClock(props: IconProps) {
  return (
    <LineIcon {...props}>
      <circle cx="12" cy="12" r="9.25" />
      <path d="M12 7v5l3.25 2" />
    </LineIcon>
  );
}

export function IconSnuffer(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M5.75 13.25a4.75 4.75 0 0 1 9.5 0Z" />
      <path d="M13.9 9.6 20.5 3.5" />
      <path d="M8 16.25h5v5h-5z" />
      <path d="M10.5 13.25v3" />
    </LineIcon>
  );
}

export function IconLeaf(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M11 20.25A7.25 7.25 0 0 1 9.8 5.9c5.7-1.1 7.2-1.6 9.2-4.15 1 2 2 4.25 2 8.1 0 5.6-4.85 10.4-10 10.4Z" />
      <path d="M2.75 21.25c0-3 1.85-5.4 5.1-6.05C10.3 14.7 12.8 13.2 13.8 12" />
    </LineIcon>
  );
}

export function IconVessel(props: IconProps) {
  return (
    <LineIcon {...props}>
      <ellipse cx="12" cy="5.5" rx="6.75" ry="2.25" />
      <path d="M5.25 5.5v12.75c0 1.25 3 2.25 6.75 2.25s6.75-1 6.75-2.25V5.5" />
      <circle cx="9" cy="12" r="0.5" fill="currentColor" />
      <circle cx="14.5" cy="10.5" r="0.5" fill="currentColor" />
      <circle cx="12.5" cy="15" r="0.5" fill="currentColor" />
      <circle cx="16" cy="16.25" r="0.5" fill="currentColor" />
      <circle cx="8.5" cy="16.75" r="0.5" fill="currentColor" />
    </LineIcon>
  );
}

export function IconGem(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M6.25 3.75h11.5l3.5 5.25L12 20.75 2.75 9Z" />
      <path d="M11.25 3.75 8.5 9 12 20.75 15.5 9l-2.75-5.25" />
      <path d="M2.75 9h18.5" />
    </LineIcon>
  );
}

export function IconHoneycomb(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M8.25 3.5 11 5.1v3.2L8.25 9.9 5.5 8.3V5.1Z" />
      <path d="M15.75 3.5 18.5 5.1v3.2l-2.75 1.6L13 8.3V5.1Z" />
      <path d="M12 10.25l2.75 1.6v3.2L12 16.65l-2.75-1.6v-3.2Z" />
      <path d="M8.25 16.9 11 18.5v3.2" />
      <path d="M15.75 16.9 13 18.5v3.2" />
      <path d="M5.5 11.9v3.2l2.75 1.6" />
      <path d="M18.5 11.9v3.2l-2.75 1.6" />
    </LineIcon>
  );
}

export function IconDrop(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M12 21.25a6.75 6.75 0 0 0 6.75-6.75c0-2-1-3.85-2.9-5.4S12.45 5.2 12 2.75c-.45 2.45-1.95 4.8-3.85 6.35S5.25 12.5 5.25 14.5A6.75 6.75 0 0 0 12 21.25Z" />
      <path d="M9 14.75a3 3 0 0 0 3 3" />
    </LineIcon>
  );
}

export function IconPalette(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M12 2.75a9.25 9.25 0 0 0 0 18.5c.95 0 1.6-.7 1.6-1.55 0-.45-.2-.8-.45-1.1-.25-.3-.4-.65-.4-1.1 0-.9.75-1.6 1.65-1.6h1.9a5.4 5.4 0 0 0 5.4-5.4c0-4.4-4.3-7.75-9.7-7.75Z" />
      <circle cx="7.5" cy="11.5" r="1" fill="currentColor" />
      <circle cx="9.75" cy="7.25" r="1" fill="currentColor" />
      <circle cx="14.5" cy="7" r="1" fill="currentColor" />
      <circle cx="17.25" cy="10.75" r="1" fill="currentColor" />
    </LineIcon>
  );
}

export function IconChat(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M7.9 19.6A8.75 8.75 0 1 0 4.4 16.1L3 21Z" />
      <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" strokeWidth={2} />
    </LineIcon>
  );
}

export function IconCheckCircle(props: IconProps) {
  return (
    <LineIcon {...props}>
      <circle cx="12" cy="12" r="9.25" />
      <path d="m8.25 12.25 2.5 2.5 5-5" />
    </LineIcon>
  );
}

const contentIcons = {
  candle: IconCandle,
  flame: IconFlame,
  circle: IconMeltPool,
  scissors: IconScissors,
  clock: IconClock,
  snuffer: IconSnuffer,
  leaf: IconLeaf,
  vessel: IconVessel,
  gem: IconGem,
  honeycomb: IconHoneycomb,
  drop: IconDrop,
  palette: IconPalette,
  chat: IconChat,
  check: IconCheckCircle,
};

export type ContentIconName = keyof typeof contentIcons;

export function ContentIcon({ name, ...props }: IconProps & { name: ContentIconName }) {
  const Icon = contentIcons[name];
  return <Icon {...props} />;
}
