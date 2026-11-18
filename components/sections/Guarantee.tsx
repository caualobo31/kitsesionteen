import { Shield } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="bg-background px-5 md:px-8 py-14 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-5 anim-fade-up">
          <Shield className="w-16 h-16 text-success" strokeWidth={1.5} />

          <h2 className="font-fraunces font-semibold text-2xl md:text-4xl text-text-primary leading-tight tracking-tight">
            Garantía <span className="text-accent">incondicional</span> de 15 días
          </h2>

          <p className="text-base md:text-lg text-text-muted font-inter leading-relaxed">
            Compra, descarga y úsalo durante 15 días. Si no es para ti,
            te devolvemos el dinero. Sin preguntas, sin trámites.
          </p>

          <p className="font-fraunces italic font-semibold text-xl text-accent leading-snug">
            El riesgo es todo nuestro.
          </p>
        </div>
      </div>
    </section>
  );
}
