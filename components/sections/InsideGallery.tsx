import { Container } from "@/components/ui/Container";
import { SmartImage } from "@/components/ui/SmartImage";

const examples = [1, 2, 3, 4, 5, 6];
const track = [...examples, ...examples];

export function InsideGallery() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="text-center">
        <h2 className="font-serif text-3xl font-black text-ink sm:text-4xl">
          Míralo por dentro. Con calma.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-ink-soft sm:text-lg">
          Ninguno de estos recursos era de niños antes. No hay nada adaptado.
        </p>
      </Container>

      <div className="group mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused]">
          {track.map((n, i) => (
            <div key={`${n}-${i}`} className="w-56 shrink-0 sm:w-64">
              <SmartImage
                src={`exemplo${n}.png`}
                alt={`Ejemplo de recurso ${n}`}
                label={`Ejemplo ${n} (ES): pendiente`}
                aspect="aspect-[4/5]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
