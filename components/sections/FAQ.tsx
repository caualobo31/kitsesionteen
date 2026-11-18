"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeader from "@/components/shared/SectionHeader";
import { PRICE } from "@/lib/offer";

const faqs = [
  {
    q: "¿Este kit sirve para adolescentes de cualquier edad?",
    a: "Sí. Está pensado para la franja de 12 a 18 años, con adaptaciones sugeridas en cada recurso según la madurez del paciente.",
  },
  {
    q: "Ya tengo el Kit Sesión Lista. ¿Tiene sentido tener también este?",
    a: "Totalmente. El Kit Sesión Lista es para niños hasta los 11 años. Este empieza a los 12. Juntos, cubres todos tus casos sin improvisar.",
  },
  {
    q: "¿Funciona en sesiones online?",
    a: "Sí. Todos los recursos funcionan en presencial (impresos o en la tablet) y online (compartes pantalla o lo envías antes de la sesión).",
  },
  {
    q: "¿Puedo imprimirlo para varios pacientes?",
    a: "Sí. Es para tu uso profesional: puedes imprimirlo tantas veces como necesites para tus propios pacientes.",
  },
  {
    q: "¿Los materiales son editables?",
    a: "Vienen en PDF de alta resolución, listos para imprimir o usar en pantalla, para que no tengas que editar nada antes de usarlos.",
  },
  {
    q: "¿Durante cuánto tiempo tengo acceso?",
    a: "Acceso de por vida. Lo descargas y es tuyo para siempre, incluidas las actualizaciones futuras.",
  },
  {
    q: "¿Cómo funciona el pago?",
    a: `Es un pago único de ${PRICE}, en un checkout 100% seguro. Recibes el acceso al momento, sin mensualidades.`,
  },
  {
    q: "¿Esto sustituye mi criterio clínico?",
    a: "No. El recurso no sustituye tu escucha: abre una puerta para que el adolescente hable.",
  },
  {
    q: "¿Y si no me gusta?",
    a: "Tienes 15 días de garantía. Nos escribes un e-mail y te devolvemos el 100% del importe. Sin preguntas.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-surface-2 px-5 md:px-8 py-14 md:py-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title={<>Respondemos <span className="text-accent">lo que estás pensando</span> ahora.</>}
        />

        <div className="max-w-3xl mx-auto mb-12">
          <Accordion multiple={false} className="flex flex-col gap-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={i}
                className="bg-surface-1 border border-border rounded-2xl px-6 data-[open]:border-accent/40 transition-colors duration-200"
              >
                <AccordionTrigger className="text-text-primary font-inter font-semibold text-sm md:text-base text-left py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-text-muted font-inter text-sm md:text-base leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center">
          <a
            href="#precio"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-inter font-semibold text-base px-10 py-5 rounded-full transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/20 min-h-[44px]"
          >
            Quiero mi kit ahora
          </a>
        </div>
      </div>
    </section>
  );
}
