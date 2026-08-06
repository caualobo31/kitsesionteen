import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { NextSectionArrow } from "@/components/ui/NextSectionArrow";

export function Guarantee() {
  return (
    <section className="bg-cream-alt py-20 sm:py-24">
      <Container className="flex flex-col items-center text-center">
        <ShieldCheck className="h-10 w-10 text-forest" strokeWidth={1.5} />
        <h2 className="mt-5 font-serif text-3xl font-black text-ink sm:text-4xl">
          Garantía incondicional de 15 días
        </h2>
        <div className="mt-5 max-w-xl space-y-3 text-base text-ink-soft sm:text-lg">
          <p>
            Compra, descarga, úsalo 15 días. Si no es para ti, te devolvemos
            el dinero. Sin preguntas, sin trámite.
          </p>
          <p className="font-medium text-ink">El riesgo es todo nuestro.</p>
        </div>

        <NextSectionArrow />
      </Container>
    </section>
  );
}
