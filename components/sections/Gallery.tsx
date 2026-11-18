import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";

// Prévias em espanhol. Para adicionar mais, coloque os ficheiros em /public e
// acrescente-os a esta lista.
const mockups = [1, 2, 3, 4, 5, 6].map((n) => `/exemplo${n}.png`);

// Mesma velocidade do carrossel PT (6 imagens em 32s).
const MARQUEE_SECONDS = Math.round((32 / 6) * mockups.length);

export default function Gallery() {
  return (
    <section id="galeria" className="bg-surface-2 py-14 md:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeader
          title={<>Mira el <span className="text-accent">material por dentro:</span></>}
        />
      </div>

      <div className="overflow-hidden">
        <div
          className="flex gap-4 w-max animate-marquee"
          style={{ animationDuration: `${MARQUEE_SECONDS}s` }}
        >
          {[...mockups, ...mockups].map((src, i) => (
            <div
              key={i}
              className="w-52 md:w-64 flex-shrink-0 aspect-[1055/1491] relative rounded-2xl overflow-hidden border border-border shadow-sm"
            >
              <Image
                src={src}
                alt={`Ejemplo de recurso ${(i % mockups.length) + 1}`}
                fill
                sizes="(min-width: 768px) 256px, 208px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <a
          href="#contenido"
          className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-inter font-semibold text-sm px-8 py-3 rounded-full transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/20 min-h-[44px]"
        >
          Ver todo lo que incluye
        </a>
      </div>
    </section>
  );
}
