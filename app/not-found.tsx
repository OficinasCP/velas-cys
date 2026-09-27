import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-4 font-serif text-[2.4rem] leading-tight text-ink sm:text-[3rem]">Esta página se apagó</h1>
      <p className="lead mt-4 max-w-md">
        No encontramos lo que buscabas. Puede que el enlace haya cambiado o que el producto ya no esté disponible.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/catalogo">Ver catálogo</ButtonLink>
        <ButtonLink href="/" variant="outline">
          Volver al inicio
        </ButtonLink>
      </div>
    </section>
  );
}
