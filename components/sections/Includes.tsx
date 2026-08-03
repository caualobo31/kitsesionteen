import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SmartImage } from "@/components/ui/SmartImage";

const bullets = [
  "Organizados por 8 motivos de consulta",
  "Material visual e indirecto: habla del recurso y termina hablando de él",
  "Listo para imprimir o para usar en pantalla",
  "Con el lenguaje que él respeta",
  "Funciona presencial y online",
];

const bonuses = [
  {
    n: "01",
    title: "Guía de Primera Sesión con Adolescente",
    desc: 'Ruta de 8 pasos para que el primer encuentro no termine en "no sé".',
  },
  {
    n: "02",
    title: "Hablando con los Padres",
    desc: "Cómo hacer la devolución familiar sin exponer al adolescente.",
  },
  {
    n: "03",
    title: "Banco de Consignas para Destrabar la Sesión",
    desc: "60 consignas listas para cuando contesta con monosílabos.",
  },
  {
    n: "04",
    title: "Fichas de Anamnesis y Devoluciones",
    desc: "Listas para tomar historia y devolver a los padres con claridad.",
  },
];

export function Includes() {
  return (
    <section className="bg-cream-alt py-20 sm:py-28">
      <Container>
        <h2 className="text-center font-serif text-3xl font-black text-ink sm:text-4xl">
          Todo lo que te llevas
        </h2>

        <div className="mt-12 flex flex-col items-center gap-10 sm:flex-row sm:items-center sm:gap-14">
          <div className="w-full max-w-xs sm:w-2/5">
            <SmartImage
              src="mockup 2 kt latam.png"
              alt="Kit Sesión Teen"
              label="Mockup kit completo (ES): pendiente"
              aspect="aspect-[4/5]"
            />
          </div>

          <div className="w-full sm:w-3/5">
            <h3 className="font-serif text-2xl font-bold text-ink">
              Kit Sesión Teen
            </h3>
            <p className="mt-1 text-lg font-semibold text-forest">
              +80 recursos terapéuticos
            </p>

            <ul className="mt-6 space-y-3">
              {bullets.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-terracotta"
                    strokeWidth={2.5}
                  />
                  <span className="text-base text-ink-soft">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-xl border-t border-line pt-10 text-center">
          <p className="font-serif text-xl font-bold leading-snug text-ink sm:text-2xl">
            Y no termina ahí. En el kit completo te llevas{" "}
            <span className="text-terracotta">4 bonos</span> que resuelven lo
            que más pesa en el día a día clínico:
          </p>
        </div>

        <div className="mt-10 text-center">
          <span className="inline-block rounded-full bg-forest px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-cream">
            4 Bonos Exclusivos
          </span>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5">
          {bonuses.map(({ n, title, desc }) => (
            <div
              key={n}
              className="flex flex-col items-start rounded-2xl border border-line bg-cream p-4 text-left shadow-sm sm:p-6"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest text-xs font-bold text-cream sm:h-9 sm:w-9 sm:text-sm">
                {n}
              </span>
              <h3 className="mt-3 font-serif text-sm font-bold text-ink sm:mt-4 sm:text-lg">
                {title}
              </h3>
              <p className="mt-2 text-xs text-ink-soft sm:text-sm">{desc}</p>
              <p className="mt-3 text-xs sm:mt-4 sm:text-sm">
                <span className="font-semibold text-red-600 line-through">
                  USD 10
                </span>{" "}
                <span className="font-semibold text-green-600">GRATIS</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-sm rounded-2xl border border-line bg-cream px-8 py-7 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            Valor real de estos 4 bonos
          </p>
          <p className="mt-2 font-serif text-3xl font-black text-red-600 line-through sm:text-4xl">
            USD 40
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted">
            Hoy, con tu Kit Completo
          </p>
          <p className="mt-2 font-serif text-4xl font-black text-green-600 sm:text-5xl">
            GRATIS
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <Button href="#precio">Quiero el kit completo</Button>
        </div>
      </Container>
    </section>
  );
}
