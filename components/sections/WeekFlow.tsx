import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { NextSectionArrow } from "@/components/ui/NextSectionArrow";

const bullets = [
  "Abres una carpeta organizada por motivo de consulta y en 30 segundos sabes qué aplicar.",
  'Le pones algo adelante y lo ves pensar "esto no es para nenes".',
  "Lo escuchas hablar por la vía lateral, sin sentir que está siendo interrogado.",
  'Cuando los padres preguntan "¿está sirviendo?", tienes con qué responder.',
  "Dejas de improvisar la entrada. Empiezas a aplicar.",
];

export function WeekFlow() {
  return (
    <section className="bg-cream-alt py-20 sm:py-28">
      <Container>
        <h2 className="text-center font-serif text-3xl font-black text-ink sm:text-4xl">
          Cómo se ve tu semana con el kit adentro.
        </h2>

        <ul className="mx-auto mt-12 max-w-2xl space-y-4">
          {bullets.map((text) => (
            <li
              key={text}
              className="flex items-start gap-4 rounded-2xl border border-line bg-cream p-5 text-left shadow-sm"
            >
              <ArrowRight
                className="mt-1 h-4 w-4 shrink-0 text-terracotta"
                strokeWidth={2.5}
              />
              <span className="text-base leading-relaxed text-ink-soft sm:text-lg">
                {text}
              </span>
            </li>
          ))}
        </ul>

        <NextSectionArrow />
      </Container>
    </section>
  );
}
