import { Zap, ShieldCheck, Lock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function NotBigKid() {
  return (
    <section className="bg-terracotta py-20 text-cream sm:py-24">
      <Container className="flex flex-col items-center text-center">
        <h2 className="font-serif text-3xl font-black sm:text-4xl">
          Él no es un niño grande.
        </h2>

        <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-cream/90 sm:text-lg">
          <p>
            No atiendes a un adulto con una ficha de niños. No atiendes a un
            niño con una técnica de adultos. El adolescente también necesita
            material pensado para él.
          </p>
          <p>Y se da cuenta cuando no lo es.</p>
        </div>

        <div className="mt-10 w-full sm:w-auto">
          <Button href="#precio" variant="onDark">
            Quiero mi kit ahora
          </Button>
        </div>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-cream/85">
          <li className="flex items-center gap-2">
            <Zap className="h-4 w-4" strokeWidth={2} />
            Acceso inmediato
          </li>
          <li className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4" strokeWidth={2} />
            Garantía de 15 días
          </li>
          <li className="flex items-center gap-2">
            <Lock className="h-4 w-4" strokeWidth={2} />
            Compra 100% segura
          </li>
        </ul>
      </Container>
    </section>
  );
}
