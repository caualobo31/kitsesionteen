import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const Q = '"';

const items = [
  `Abrir una carpeta organizada por motivo de consulta y saber en 30 segundos qué aplicar.`,
  `Darle un material que mira y piensa ${Q}esto es diferente${Q}.`,
  `Verlo hablar por la vía lateral, sin darse cuenta de que lo estás trabajando.`,
  `Responder con seguridad cuando los padres preguntan ${Q}¿está funcionando?${Q}.`,
  `Dejar de improvisar. Empezar a aplicar.`,
];

export default function Transformation() {
  return (
    <section className="bg-surface-2 px-5 md:px-8 py-14 md:py-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title={<>Tu trabajo se vuelve <span className="text-accent">más ligero</span> después de esto...</>}
        />

        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 items-start anim-fade-left"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="mt-1.5 flex-shrink-0">
                <ArrowRight className="w-5 h-5 text-accent" strokeWidth={2} />
              </div>
              <p className="text-base md:text-lg text-text-primary font-inter leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
