import { Check } from "lucide-react";
import Image from "next/image";
import BonusCover from "@/components/shared/BonusCover";

const Q = '"';

const bullets = [
  "Recursos organizados por 8 motivos de consulta",
  "Material visual e indirecto: el adolescente habla sin darse cuenta",
  "Listo para imprimir o usar en pantalla",
  "Con el lenguaje que el adolescente respeta",
  "Funciona presencial y online",
];

const bonuses = [
  {
    title: "Guía de Primera Sesión con Adolescentes",
    desc: `Guion de 8 pasos para que hable más que un ${Q}no sé${Q} en el primer encuentro.`,
    from: "9,00 €",
  },
  {
    title: "Guía \"Hablar con los Padres\"",
    desc: "Cómo hacer la devolución a los padres sin exponer al adolescente.",
    from: "9,00 €",
  },
  {
    title: "Banco de Frases para Desbloquear la Sesión",
    desc: "60 preguntas probadas para cuando se bloquea o contesta con monosílabos.",
    from: "12,00 €",
  },
  {
    title: "Plantillas de Anamnesis y Devolución",
    desc: "Fichas listas para recoger la historia clínica y devolver resultados a los padres de forma clara y profesional.",
    from: "15,00 €",
    full: true,
  },
];

export default function Stack() {
  return (
    <section id="contenido" className="bg-surface-2 px-5 md:px-8 py-14 md:py-20">
      <div className="max-w-5xl mx-auto">

        <h2 className="font-fraunces font-semibold text-2xl md:text-4xl text-text-primary text-center mb-10 md:mb-14 leading-tight tracking-tight anim-fade-up">
          Todo lo que <span className="text-highlight">vas a recibir</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-center mb-8 anim-fade-up" style={{ animationDelay: "80ms" }}>
          <div className="w-full md:w-72 flex-shrink-0">
            <Image
              src="/mockup 2 kt latam.png"
              alt="Kit Sesión Teen"
              width={1448}
              height={1086}
              sizes="(min-width: 768px) 288px, calc(100vw - 40px)"
              className="w-full h-auto rounded-xl"
            />
          </div>

          <div className="flex-1">
            <p className="font-fraunces font-bold text-xl md:text-2xl text-text-primary leading-tight mb-1">
              Kit Sesión Teen
            </p>
            <p className="font-fraunces font-bold text-xl md:text-2xl text-highlight leading-tight mb-6">
              +80 recursos terapéuticos
            </p>

            <div className="flex flex-col gap-3">
              {bullets.map((b, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 border-highlight flex items-center justify-center">
                    <Check className="w-3 h-3 text-highlight" strokeWidth={3} />
                  </div>
                  <p className="text-text-primary font-inter text-sm md:text-base leading-snug">
                    {b}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p
          className="text-text-primary font-inter text-base md:text-lg leading-relaxed mb-6 anim-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          Y no se queda ahí. Con el kit completo recibes además 4 bonos que
          lo complementan y resuelven los mayores dolores del día a día en consulta:
        </p>

        <div className="mb-6 anim-fade-up" style={{ animationDelay: "200ms" }}>
          <span className="inline-block bg-accent text-white font-inter font-bold text-xs uppercase tracking-widest px-5 py-2 rounded-full">
            4 Bonos Exclusivos
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {bonuses.map(({ title, desc, from, full }, i) => (
            <div
              key={title}
              className={`bg-surface-1 border border-border rounded-2xl p-6 flex gap-5 items-start anim-fade-up${full ? " md:col-span-2" : ""}`}
              style={{ animationDelay: `${240 + i * 70}ms` }}
            >
              <div className="flex-shrink-0 w-20 md:w-24">
                <BonusCover n={i + 1} title={title} />
              </div>
              <div className="flex-1">
                <p className="font-inter font-bold text-text-primary text-sm md:text-base leading-tight mb-1">
                  {title}
                </p>
                <p className="text-text-muted font-inter text-sm leading-relaxed mb-3">
                  {desc}
                </p>
                <p className="font-inter text-sm">
                  <span className="line-through text-red-400 mr-2">Valorado en {from}</span>
                  <span className="font-bold text-highlight">GRATIS</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center anim-fade-up" style={{ animationDelay: "480ms" }}>
          <a
            href="#precio"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-inter font-bold text-base px-12 py-5 rounded-full transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/20 min-h-[44px]"
          >
            Quiero el Kit Completo
          </a>
        </div>

      </div>
    </section>
  );
}
