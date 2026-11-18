"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronsDown } from "lucide-react";
import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";

const images = [
  { src: "/testimonio1.png", alt: "Testimonio de una psicóloga que usa el kit" },
  { src: "/testimonio2.png", alt: "Testimonio de una psicóloga que usa el kit" },
  { src: "/testimonio3.png", alt: "Testimonio de una psicóloga que usa el kit" },
];

export default function SocialProof() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const go = (index: number) => {
    if (index === current) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(index);
      setFading(false);
    }, 150);
  };

  const prev = () => go(current === 0 ? images.length - 1 : current - 1);
  const next = () => go(current === images.length - 1 ? 0 : current + 1);

  return (
    <section id="testimonios" className="bg-background px-5 md:px-8 py-14 md:py-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title={<><span className="text-accent">Lo que cuentan</span> quienes ya lo usan:</>}
        />

        <div className="relative max-w-lg mx-auto">
          <div className="overflow-hidden rounded-2xl bg-surface-1 border border-border">
            <div
              className="transition-opacity duration-150"
              style={{ opacity: fading ? 0 : 1 }}
            >
              <Image
                src={images[current].src}
                alt={images[current].alt}
                width={600}
                height={900}
                sizes="(min-width: 768px) 512px, calc(100vw - 40px)"
                className="w-full h-auto"
                priority={current === 0}
              />
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-[-20px] md:left-[-28px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface-1 border border-border shadow-sm flex items-center justify-center text-text-muted hover:text-text-primary transition-colors duration-200"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2} />
          </button>

          <button
            onClick={next}
            className="absolute right-[-20px] md:right-[-28px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface-1 border border-border shadow-sm flex items-center justify-center text-text-muted hover:text-text-primary transition-colors duration-200"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={2} />
          </button>

          <div className="flex justify-center gap-2 mt-5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`h-2 rounded-full transition-all duration-200 ${
                  i === current ? "bg-accent w-5" : "bg-border w-2"
                }`}
                aria-label={`Ir al testimonio ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 text-center flex flex-col items-center gap-4">
          <p className="text-text-muted font-inter text-sm">
            Oferta por tiempo limitado. Asegura el tuyo antes de que termine.
          </p>
          <a
            href="#precio"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-inter font-bold text-base px-10 py-4 rounded-full transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/20 min-h-[44px] anim-cta-pulse"
          >
            Yo también quiero el material completo
            <ChevronsDown className="w-5 h-5" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
