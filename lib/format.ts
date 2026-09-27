/**
 * Formatea un valor en pesos chilenos: 25000 → "$25.000".
 * Se hace manualmente para que el resultado sea idéntico en servidor y navegador.
 */
export function formatCLP(value: number): string {
  const rounded = Math.round(value);
  return "$" + String(rounded).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const DAYS = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
const MONTHS = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

/** "2026-10-10" → "sábado 10 de octubre de 2026" */
export function formatDateEs(isoDate: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate);
  if (!match) return isoDate;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const date = new Date(Date.UTC(year, month - 1, day));
  if (Number.isNaN(date.getTime()) || month < 1 || month > 12) return isoDate;
  return `${DAYS[date.getUTCDay()]} ${day} de ${MONTHS[month - 1]} de ${year}`;
}

/** Fecha local de hoy en formato YYYY-MM-DD (para el mínimo del selector de fecha). */
export function todayIso(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
