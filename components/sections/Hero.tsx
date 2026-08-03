import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SmartImage } from "@/components/ui/SmartImage";

export function Hero() {
  return (
    <section className="pt-16 pb-12 sm:pt-24 sm:pb-16">
      <Container className="flex flex-col items-center text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-terracotta sm:text-sm">
          Sin improvisar la entrada. Sin adaptar material de niños.
        </p>

        <h1 className="mt-5 max-w-3xl font-serif text-4xl font-black uppercase leading-[1.15] text-ink sm:text-5xl md:text-6xl">
          +80 Recursos que hacen hablar al adolescente{" "}
          <span className="text-terracotta">sin preguntarle nada</span>
        </h1>

        <p className="mt-6 max-w-xl text-base text-ink-soft sm:text-lg">
          Habla del material primero. Después habla de él. Visuales, maduros,
          organizados por motivo de consulta y listos para imprimir.
        </p>

        <div className="mt-10 w-full max-w-md sm:max-w-lg">
          <SmartImage
            src="mockup 2 kt latam.png"
            alt="Kit Sesión Teen"
            label="Mockup kit completo (ES): pendiente"
            aspect="aspect-[5/4]"
            priority
          />
        </div>

        <div className="mt-10 w-full sm:w-auto">
          <Button href="#precio">Quiero mi kit ahora</Button>
        </div>

        {/*
          BLOQUEO 1 (ver doc, sección 5): la línea "+2.000 psicólogas ya usan
          los Kits Consultorio" solo puede publicarse si el número es un
          agregado real que incluye compradoras hispanas. No confirmado
          todavía, por eso se omite del render. Preguntar a Cauã antes de
          agregar cualquier prueba social numérica.
        */}
      </Container>
    </section>
  );
}
