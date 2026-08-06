import { Container } from "@/components/ui/Container";
import { NextSectionArrow } from "@/components/ui/NextSectionArrow";

export function ViaLateral() {
  return (
    <section className="bg-cream-alt py-20 sm:py-28">
      <Container className="flex flex-col items-center text-center">
        <h2 className="font-serif text-3xl font-black text-ink sm:text-4xl">
          Se llama Vía Lateral.
        </h2>

        <div className="mt-8 max-w-2xl space-y-5 text-left text-base leading-relaxed text-ink-soft sm:text-lg">
          <p>
            El adulto lo pone en palabras. El niño lo saca jugando. El
            adolescente quedó en el medio.
          </p>
          <p>
            Si le llevas algo de niños, se siente tratado como niño. Si le
            haces la pregunta directa, se protege.
          </p>
          <p>
            La Vía Lateral es la tercera entrada. Él opina sobre una carta,
            una escena, un feed, una decisión que no es suya. Y mientras
            habla del material, se está hablando a él.
          </p>
        </div>

        <p className="mt-10 max-w-2xl font-serif text-2xl font-bold italic text-terracotta sm:text-3xl">
          Ninguno de los 80 recursos empieza por &ldquo;¿cómo te sientes?&rdquo;.
        </p>

        <NextSectionArrow />
      </Container>
    </section>
  );
}
