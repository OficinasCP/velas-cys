"use client";

import { useEffect, useId, useMemo, useRef, useState, type FormEvent, type ReactNode } from "react";
import { IconCheck, IconCopy, IconMinus, IconPlus, IconWhatsApp } from "@/components/ui/Icons";
import { AROMA_RECOMMENDATION, aromas } from "@/data/aromas";
import { cn } from "@/lib/cn";
import { getVisibleProducts, productsForSelect } from "@/lib/catalog";
import { formatCLP, todayIso } from "@/lib/format";
import { buildOrderMessage, whatsappUrl, type ColorMode } from "@/lib/whatsapp";

type FormValues = {
  name: string;
  productSlug: string;
  quantity: number;
  aroma: string;
  colorMode: ColorMode;
  color: string;
  finish: string;
  customization: string;
  date: string;
  location: string;
  comments: string;
};

type ErrorKey = "name" | "productSlug" | "quantity" | "color";

const MAX_QUANTITY = 99;

type OrderFormProps = {
  /** Producto preseleccionado (desde la ficha de producto). */
  initialProductSlug?: string;
};

export function OrderForm({ initialProductSlug }: OrderFormProps) {
  const uid = useId();
  const fieldId = (name: string) => `${uid}-${name}`;
  const formRef = useRef<HTMLFormElement>(null);

  const [values, setValues] = useState<FormValues>({
    name: "",
    productSlug: initialProductSlug ?? "",
    quantity: 1,
    aroma: "",
    colorMode: "consultar",
    color: "",
    finish: "",
    customization: "",
    date: "",
    location: "",
    comments: "",
  });
  const [quantityText, setQuantityText] = useState("1");
  const [errors, setErrors] = useState<Partial<Record<ErrorKey, string>>>({});
  const [sentUrl, setSentUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  // La fecha mínima se calcula en el navegador (evita usar la fecha del build).
  const [minDate, setMinDate] = useState<string | undefined>(undefined);

  useEffect(() => {
    setMinDate(todayIso());
  }, []);

  const groups = useMemo(() => productsForSelect(), []);
  const product = useMemo(() => getVisibleProducts().find((p) => p.slug === values.productSlug), [values.productSlug]);

  const message = useMemo(() => {
    if (!product) return "";
    return buildOrderMessage(
      {
        name: values.name || "[tu nombre]",
        quantity: values.quantity,
        aroma: values.aroma,
        colorMode: values.colorMode,
        color: values.color,
        finish: values.finish,
        customization: values.customization,
        date: values.date,
        location: values.location,
        comments: values.comments,
      },
      product,
    );
  }, [product, values]);

  const selectedAroma = aromas.find((a) => a.name === values.aroma);

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setSentUrl(null);
    if (key in errors) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key as ErrorKey];
        return next;
      });
    }
  }

  function changeProduct(slug: string) {
    setValues((prev) => ({ ...prev, productSlug: slug, finish: "", aroma: "", colorMode: "consultar", color: "" }));
    setSentUrl(null);
    setErrors((prev) => {
      const next = { ...prev };
      delete next.productSlug;
      delete next.color;
      return next;
    });
  }

  function setQuantity(next: number) {
    const safe = Number.isFinite(next) ? Math.min(MAX_QUANTITY, Math.max(1, Math.round(next))) : 1;
    update("quantity", safe);
    setQuantityText(String(safe));
  }

  function typeQuantity(raw: string) {
    const digits = raw.replace(/\D/g, "").slice(0, 2);
    setQuantityText(digits);
    const parsed = parseInt(digits, 10);
    if (parsed >= 1) update("quantity", Math.min(MAX_QUANTITY, parsed));
  }

  function validate(): Partial<Record<ErrorKey, string>> {
    const found: Partial<Record<ErrorKey, string>> = {};
    if (!values.name.trim()) found.name = "Escribe tu nombre para que sepamos a quién responder.";
    if (!product) found.productSlug = "Selecciona el producto que quieres pedir.";
    if (!Number.isInteger(values.quantity) || values.quantity < 1) found.quantity = "Indica una cantidad válida.";
    if (product?.colorOptions && values.colorMode === "preferencia" && !values.color.trim()) {
      found.color = "Describe el color que te gustaría o elige “Consultar disponibilidad”.";
    }
    return found;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate();
    setErrors(found);

    const firstError = (["name", "productSlug", "quantity", "color"] as ErrorKey[]).find((k) => found[k]);
    if (firstError) {
      formRef.current?.querySelector<HTMLElement>(`#${CSS.escape(fieldId(firstError))}`)?.focus();
      return;
    }
    if (!product) return;

    const finalMessage = buildOrderMessage({ ...values }, product);
    const url = whatsappUrl(finalMessage);
    setSentUrl(url);

    // Abre WhatsApp con el mensaje listo. No se envía nada automáticamente.
    const opened = window.open(url, "_blank");
    if (opened) {
      opened.opener = null;
    } else {
      window.location.href = url;
    }
  }

  async function copyMessage() {
    if (!product) return;
    try {
      await navigator.clipboard.writeText(
        buildOrderMessage({ ...values, name: values.name || "[tu nombre]" }, product),
      );
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  const errorProps = (key: ErrorKey) =>
    errors[key] ? { "aria-invalid": true as const, "aria-describedby": `${fieldId(key)}-error` } : {};

  return (
    <form ref={formRef} noValidate onSubmit={handleSubmit} className="space-y-7">
      {/* Producto */}
      <Field id={fieldId("productSlug")} label="Producto" required error={errors.productSlug}>
        <select
          id={fieldId("productSlug")}
          name="producto"
          className="field-input field-select"
          value={values.productSlug}
          onChange={(e) => changeProduct(e.target.value)}
          {...errorProps("productSlug")}
        >
          <option value="">Selecciona un producto</option>
          {groups.map((group) => (
            <optgroup key={group.category} label={group.label}>
              {group.items.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name} — {formatCLP(item.price)}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </Field>

      {product ? (
        <div className="-mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 rounded-xl bg-cream/80 px-4 py-3 text-[13px] text-ink-soft">
          <span className="font-medium text-ink">{formatCLP(product.price)}</span>
          <span aria-hidden="true" className="text-taupe">
            ·
          </span>
          <span>{product.shortDescription}</span>
        </div>
      ) : null}

      <div className="grid gap-7 sm:grid-cols-2">
        {/* Nombre */}
        <Field id={fieldId("name")} label="Tu nombre" required error={errors.name}>
          <input
            id={fieldId("name")}
            name="nombre"
            type="text"
            autoComplete="name"
            className="field-input"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            {...errorProps("name")}
          />
        </Field>

        {/* Cantidad */}
        <Field id={fieldId("quantity")} label="Cantidad" required error={errors.quantity}>
          <div className="flex h-12 items-stretch overflow-hidden rounded-xl border border-sand bg-white/80">
            <button
              type="button"
              className="flex w-12 items-center justify-center text-ink-soft transition-colors hover:bg-cream disabled:opacity-40"
              onClick={() => setQuantity(values.quantity - 1)}
              disabled={values.quantity <= 1}
              aria-label="Disminuir cantidad"
            >
              <IconMinus className="size-4" />
            </button>
            <input
              id={fieldId("quantity")}
              name="cantidad"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              className="w-full min-w-0 border-x border-sand bg-transparent text-center text-base text-ink focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold/25"
              value={quantityText}
              onChange={(e) => typeQuantity(e.target.value)}
              onBlur={() => setQuantity(parseInt(quantityText, 10) || 1)}
              {...errorProps("quantity")}
            />
            <button
              type="button"
              className="flex w-12 items-center justify-center text-ink-soft transition-colors hover:bg-cream disabled:opacity-40"
              onClick={() => setQuantity(values.quantity + 1)}
              disabled={values.quantity >= MAX_QUANTITY}
              aria-label="Aumentar cantidad"
            >
              <IconPlus className="size-4" />
            </button>
          </div>
        </Field>
      </div>

      {/* Aroma (solo si el producto lleva aroma) */}
      {product?.aroma ? (
        <Field
          id={fieldId("aroma")}
          label="Aroma"
          hint={
            selectedAroma?.notes ??
            (product.aroma === "a-eleccion"
              ? "Elige el aroma de tu vela."
              : "Si tienes una preferencia de aroma, indícala aquí.")
          }
        >
          <select
            id={fieldId("aroma")}
            name="aroma"
            className="field-input field-select"
            value={values.aroma}
            onChange={(e) => update("aroma", e.target.value)}
          >
            <option value="">Elige un aroma (opcional)</option>
            {aromas.map((aroma) => (
              <option key={aroma.name} value={aroma.name}>
                {aroma.name}
              </option>
            ))}
            <option value={AROMA_RECOMMENDATION}>{AROMA_RECOMMENDATION}</option>
          </select>
        </Field>
      ) : null}

      {/* Color */}
      {product?.colorOptions ? (
        <fieldset>
          <legend className="field-label">Color</legend>
          <div className="grid gap-2.5 sm:grid-cols-2">
            <ChoiceCard
              name={`${uid}-colorMode`}
              checked={values.colorMode === "consultar"}
              onChange={() => update("colorMode", "consultar")}
              label="Consultar disponibilidad"
            />
            <ChoiceCard
              name={`${uid}-colorMode`}
              checked={values.colorMode === "preferencia"}
              onChange={() => update("colorMode", "preferencia")}
              label="Tengo un color en mente"
            />
          </div>
          {values.colorMode === "preferencia" ? (
            <div className="mt-3">
              <label htmlFor={fieldId("color")} className="sr-only">
                Color deseado
              </label>
              <input
                id={fieldId("color")}
                name="color"
                type="text"
                className="field-input"
                placeholder="Describe el color que te gustaría"
                value={values.color}
                onChange={(e) => update("color", e.target.value)}
                {...errorProps("color")}
              />
              {errors.color ? (
                <p id={`${fieldId("color")}-error`} className="field-error">
                  {errors.color}
                </p>
              ) : null}
            </div>
          ) : null}
          <p className="field-hint">Consulta disponibilidad de colores: te confirmamos las opciones por WhatsApp.</p>
        </fieldset>
      ) : null}

      {/* Terminación / Base */}
      {product?.finish ? (
        <fieldset>
          <legend className="field-label">{product.finish.label}</legend>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {product.finish.options.map((option) => (
              <ChoiceCard
                key={option}
                name={`${uid}-finish`}
                checked={values.finish === option}
                onChange={() => update("finish", option)}
                label={option}
              />
            ))}
          </div>
        </fieldset>
      ) : null}

      {/* Personalización */}
      {product?.customizable ? (
        <Field id={fieldId("customization")} label="Personalización" hint="Cuéntanos qué te gustaría personalizar.">
          <textarea
            id={fieldId("customization")}
            name="personalizacion"
            rows={3}
            className="field-input resize-y"
            value={values.customization}
            onChange={(e) => update("customization", e.target.value)}
          />
        </Field>
      ) : null}

      <div className="grid gap-7 sm:grid-cols-2">
        <Field id={fieldId("date")} label="Fecha en que lo necesitas" hint="Opcional. Te confirmamos si es posible.">
          <input
            id={fieldId("date")}
            name="fecha"
            type="date"
            min={minDate}
            className="field-input"
            value={values.date}
            onChange={(e) => update("date", e.target.value)}
          />
        </Field>

        <Field
          id={fieldId("location")}
          label="Comuna / ubicación"
          hint="¿Dónde necesitas recibir tu pedido? La entrega se coordina por WhatsApp."
        >
          <input
            id={fieldId("location")}
            name="ubicacion"
            type="text"
            autoComplete="address-level2"
            className="field-input"
            value={values.location}
            onChange={(e) => update("location", e.target.value)}
          />
        </Field>
      </div>

      <Field
        id={fieldId("comments")}
        label="Comentarios"
        hint="Opcional: dedicatoria, ocasión u otros productos que quieras sumar."
      >
        <textarea
          id={fieldId("comments")}
          name="comentarios"
          rows={3}
          className="field-input resize-y"
          value={values.comments}
          onChange={(e) => update("comments", e.target.value)}
        />
      </Field>

      {/* Vista previa del mensaje */}
      {product ? (
        <details className="group rounded-xl border border-sand bg-white/60">
          <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 px-4 text-[13.5px] font-medium text-ink [&::-webkit-details-marker]:hidden">
            Ver el mensaje que se enviará
            <IconPlus className="size-4 shrink-0 text-ink-muted transition-transform duration-300 group-open:rotate-45" />
          </summary>
          <div className="border-t border-sand px-4 pb-4 pt-3">
            <pre className="whitespace-pre-wrap break-words font-sans text-[13.5px] leading-relaxed text-ink-soft">
              {message}
            </pre>
            <button
              type="button"
              onClick={copyMessage}
              className="mt-3 inline-flex min-h-10 items-center gap-2 text-[13px] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {copied ? <IconCheck className="size-4" /> : <IconCopy className="size-4" />}
              {copied ? "Mensaje copiado" : "Copiar mensaje"}
            </button>
          </div>
        </details>
      ) : null}

      <div>
        <button type="submit" className="btn btn-md btn-primary w-full sm:w-auto sm:px-8">
          <IconWhatsApp className="size-[18px]" />
          Continuar por WhatsApp
        </button>
        <p className="mt-3 text-[12.5px] leading-relaxed text-ink-muted">
          Se abrirá WhatsApp con tu mensaje listo. Nada se envía hasta que tú lo confirmes.
        </p>
      </div>

      <div aria-live="polite">
        {sentUrl ? (
          <div className="rounded-xl border border-sand bg-cream px-4 py-4 text-[13.5px] leading-relaxed text-ink-soft">
            <p className="font-medium text-ink">¡Listo! Abrimos WhatsApp con tu pedido.</p>
            <p className="mt-1">
              Revisa el mensaje y presiona enviar. Si WhatsApp no se abrió,{" "}
              <a
                href={sentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ink underline decoration-gold underline-offset-4"
              >
                toca aquí para abrirlo
              </a>
              .
            </p>
          </div>
        ) : null}
      </div>
    </form>
  );
}

/* ---------- Subcomponentes ---------- */

function Field({
  id,
  label,
  required = false,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
        {required ? (
          <span className="ml-1 text-gold-deep" aria-hidden="true">
            *
          </span>
        ) : null}
        {required ? <span className="sr-only"> (obligatorio)</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="field-error">
          {error}
        </p>
      ) : hint ? (
        <p className="field-hint">{hint}</p>
      ) : null}
    </div>
  );
}

function ChoiceCard({
  name,
  checked,
  onChange,
  label,
}: {
  name: string;
  checked: boolean;
  onChange: () => void;
  label: string;
}) {
  return (
    <label
      className={cn(
        "flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-[14px] transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-gold/40",
        checked ? "border-ink/50 bg-white text-ink" : "border-sand bg-white/60 text-ink-soft hover:border-taupe",
      )}
    >
      <input type="radio" name={name} checked={checked} onChange={onChange} className="peer sr-only" />
      <span
        aria-hidden="true"
        className={cn(
          "flex size-[18px] shrink-0 items-center justify-center rounded-full border transition-colors",
          checked ? "border-ink bg-ink" : "border-taupe bg-white",
        )}
      >
        <span className={cn("size-1.5 rounded-full bg-paper", checked ? "opacity-100" : "opacity-0")} />
      </span>
      <span>{label}</span>
    </label>
  );
}
