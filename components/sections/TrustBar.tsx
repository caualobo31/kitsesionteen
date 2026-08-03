import { Zap, Printer, LayoutGrid, Layers, Monitor } from "lucide-react";
import { Container } from "@/components/ui/Container";

const items = [
  { icon: Zap, label: "Acceso inmediato después de la compra" },
  { icon: Printer, label: "Imprimes y lo usas en la misma sesión" },
  { icon: LayoutGrid, label: "Organizado por motivo de consulta" },
  { icon: Layers, label: "+80 recursos listos para aplicar" },
  { icon: Monitor, label: "Funciona online y presencial" },
];

export function TrustBar() {
  return (
    <section className="pb-16 sm:pb-20">
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-ink-soft">
          {items.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2">
              <Icon className="h-4 w-4 shrink-0 text-terracotta" strokeWidth={2} />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
