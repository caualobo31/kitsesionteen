"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { NextSectionArrow } from "@/components/ui/NextSectionArrow";

const faqs = [
  {
    q: "¿Sirve para adolescentes de cualquier edad?",
    a: "Está pensado para adolescentes de 12 a 18 años. Los recursos están organizados por motivo de consulta, así que eliges cuál usar según el momento del paciente.",
  },
  {
    q: "Ya tengo el Kit Sesión Lista. ¿Tiene sentido este también?",
    a: "Sí. Son kits distintos, pensados para momentos clínicos distintos. El Kit Sesión Teen tiene recursos propios, hechos para adolescentes.",
  },
  {
    q: "¿Funciona en sesión online?",
    a: "Sí. Puedes compartir pantalla o enviar el PDF antes de la sesión. Todo el material fue pensado para funcionar presencial y online.",
  },
  {
    q: "¿Puedo imprimirlo para varios pacientes?",
    a: "Sí. Es para tu uso profesional. Puedes imprimirlo las veces que necesites para tus propios pacientes.",
  },
  {
    q: "¿Los materiales son editables?",
    a: "No. Vienen listos para imprimir en PDF, pensados para que no necesites editar nada antes de usarlos.",
  },
  {
    q: "¿Cuánto tiempo tengo de acceso?",
    a: "Accedes de inmediato después de la compra y puedes descargar tu material cuando quieras.",
  },
  {
    q: "¿Cómo puedo pagar?",
    a: "El pago se realiza de forma segura al finalizar tu compra, con los medios disponibles para tu país.",
  },
  {
    q: "¿Esto reemplaza mi criterio clínico?",
    a: "No. El recurso no reemplaza tu escucha. Crea una entrada.",
  },
  {
    q: "¿Y si no me gusta?",
    a: "Tienes 15 días de garantía incondicional. Si no es para ti, te devolvemos el dinero completo, sin trámite.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <h2 className="text-center font-serif text-3xl font-black text-ink sm:text-4xl">
          Respondemos lo que estás pensando ahora.
        </h2>

        <div className="mx-auto mt-10 max-w-2xl divide-y divide-line">
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <div key={q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-ink">{q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-terracotta transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    strokeWidth={2}
                  />
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm leading-relaxed text-ink-soft sm:text-base">
                    {a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <NextSectionArrow />
      </Container>
    </section>
  );
}
