import { Check, ChevronDown, Gift } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SmartImage } from "@/components/ui/SmartImage";
import { PriceTag } from "@/components/ui/PriceTag";
import { CountdownBadge } from "@/components/ui/CountdownBadge";

const esencialBullets = [
  "+80 recursos visuales terapéuticos",
  "Organizado por motivo de consulta",
  "Acceso inmediato en PDF",
];

const completoBullets = [
  "+80 recursos visuales terapéuticos",
  "Organizado por motivo de consulta",
  "Acceso inmediato en PDF",
  "Acceso de por vida",
  "Garantía de 15 días",
];

const completoBonuses = [
  "Bono 1: Guía de Primera Sesión",
  "Bono 2: Hablando con los Padres",
  "Bono 3: Banco de Consignas",
  "Bono 4: Fichas de Anamnesis y Devoluciones",
];

export function Pricing() {
  return (
    <section id="precio" className="scroll-mt-8 py-20 sm:py-28">
      <Container className="text-center">
        <CountdownBadge />

        <h2 className="mt-5 font-serif text-3xl font-black text-ink sm:text-4xl">
          Elige tu kit
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-ink-soft sm:text-lg">
          Los dos dan acceso inmediato. La diferencia es cuánto quieres
          resolver de una vez.
        </p>

        <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-center">
          {/* Kit Esencial */}
          <div className="flex w-full max-w-sm flex-col items-center rounded-3xl border border-line bg-cream p-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">
              Kit Esencial
            </p>

            <div className="mx-auto mt-6 w-2/3 max-w-[9rem]">
              <SmartImage
                src="mockup kt latam.png"
                alt="Kit Sesión Teen esencial"
                label="Mockup kit esencial (ES): pendiente"
                aspect="aspect-[4/5]"
              />
            </div>

            <p className="mt-6 font-serif text-4xl font-bold text-ink">
              <PriceTag usd={9} />
            </p>
            <p className="mt-1 text-sm text-muted">Pago único</p>

            <div className="mt-6 w-full">
              <Button
                href="https://pay.hotmart.com/V107003312K"
                variant="outline"
                className="w-full"
              >
                Quiero el Kit Esencial
              </Button>
            </div>

            <ul className="mx-auto mt-8 w-fit space-y-3 border-t border-line pt-6">
              {esencialBullets.map((text) => (
                <li key={text} className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-terracotta">
                    <Check className="h-3 w-3 text-cream" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-ink-soft">{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 w-full rounded-2xl border border-line bg-cream-alt px-6 py-5 text-center">
              <p className="text-sm font-semibold text-ink">
                +80 recursos y 4 bonos exclusivos con el Kit Completo
              </p>
              <ChevronDown
                className="mx-auto mt-2 h-5 w-5 animate-bounce text-terracotta"
                strokeWidth={2}
              />
            </div>
          </div>

          {/* Kit Completo */}
          <div className="relative flex w-full max-w-sm flex-col items-center rounded-3xl bg-forest p-8 pt-10 text-center text-cream">
            <span className="absolute -top-3 rounded-full bg-terracotta px-4 py-1 text-xs font-bold uppercase tracking-wide text-cream">
              Más vendido
            </span>

            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-cream/70">
              Kit Completo
            </p>

            <div className="mt-4 rounded-xl border border-cream/25 px-4 py-2">
              <p className="text-xs font-bold uppercase tracking-wide text-cream">
                +80 recursos + 4 bonos exclusivos
              </p>
            </div>

            <div className="mx-auto mt-6 w-2/3 max-w-[9rem]">
              <SmartImage
                src="mockup 2 kt latam.png"
                alt="Kit Sesión Teen completo"
                label="Mockup kit completo (ES): pendiente"
                aspect="aspect-[4/5]"
                tone="dark"
              />
            </div>

            <p className="mt-6 text-sm text-cream/80">
              El kit completo para transformar tus sesiones
            </p>

            <p className="mt-3 font-serif text-4xl font-bold text-cream">
              <PriceTag usd={17} />
            </p>
            <p className="mt-1 text-sm text-cream/80">
              Pago único · Acceso inmediato
            </p>

            <div className="mt-6 w-full">
              <Button
                href="https://pay.hotmart.com/I106911097O"
                variant="primary"
                className="w-full animate-cta-pulse"
              >
                Quiero el Kit Completo
              </Button>
            </div>

            <ul className="mx-auto mt-8 w-fit space-y-3 border-t border-cream/15 pt-6">
              {completoBullets.map((text) => (
                <li key={text} className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-terracotta">
                    <Check className="h-3 w-3 text-cream" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-cream/90">{text}</span>
                </li>
              ))}
            </ul>

            <ul className="mx-auto mt-4 w-fit max-w-xs space-y-2.5">
              {completoBonuses.map((text) => (
                <li key={text} className="flex items-start gap-2">
                  <Gift
                    className="mt-0.5 h-4 w-4 shrink-0 text-cream/50"
                    strokeWidth={2}
                  />
                  <span className="text-left text-sm text-cream/70">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
