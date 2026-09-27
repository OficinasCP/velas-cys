/**
 * ============================================================
 *  AROMAS
 *  Agrega, quita o reordena aromas aquí. Si un aroma no tiene
 *  descripción, deja "notes" sin definir.
 *  Importante: "Antropology" se escribe así (nombre confirmado).
 * ============================================================
 */

export type Aroma = {
  name: string;
  notes?: string;
};

/** Marca de las fragancias y atributos comunicados por C&S. */
export const fragranceBrand = {
  name: "Perfumó",
  attributes: ["Puras y auténticas", "Veganas", "Cruelty free"],
};

export const aromas: Aroma[] = [
  {
    name: "Peonías",
    notes: "Notas verdes, notas de rosa, muguet, magnolias y violetas. Fondo de ámbar y maderas.",
  },
  { name: "Lavanda" },
  {
    name: "Rosa Búlgara",
    notes: "Notas de rosa búlgara, suaves tonos de miel y verde de hojas.",
  },
  {
    name: "Mandarina Cake",
    notes: "Notas de mandarina jugosa, cítricos verdes y caramelo.",
  },
  {
    name: "Antropology",
    notes: "Notas verdes, cítricos, frambuesas y frutillas, grosellas y caramelo.",
  },
  {
    name: "Naranja Dulce",
    notes: "Notas de naranja dulce, caramelo y vainilla.",
  },
  { name: "Frutos Rojos" },
  {
    name: "Mango",
    notes: "Notas jugosas, frutos acuáticos, melón, pepino, sandía y caramelo.",
  },
  {
    name: "Café en Venecia",
    notes: "Notas de café, tonos ahumados, vainilla y almendra.",
  },
  { name: "Canela" },
];

/** Opción del formulario para quien aún no decide. */
export const AROMA_RECOMMENDATION = "Quiero una recomendación";
