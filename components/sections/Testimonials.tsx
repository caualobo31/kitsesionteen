import { Container } from "@/components/ui/Container";
import { SmartImage } from "@/components/ui/SmartImage";

const testimonials = [1, 2, 3];
const track = [...testimonials, ...testimonials];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="text-center">
        <h2 className="font-serif text-3xl font-black text-ink sm:text-4xl">
          Lo que dicen las psicólogas que ya lo usan
        </h2>
      </Container>

      <div className="group mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused]">
          {track.map((n, i) => (
            <div
              key={`${n}-${i}`}
              className="w-64 shrink-0 overflow-hidden rounded-2xl border border-line bg-black shadow-md sm:w-72"
            >
              <SmartImage
                src={`testimonio${n}.png`}
                alt="Captura de conversación con una psicóloga que aplica el kit"
                label={`Testimonio ${n} (ES): pendiente`}
                aspect="aspect-[4/5]"
                fit="contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
