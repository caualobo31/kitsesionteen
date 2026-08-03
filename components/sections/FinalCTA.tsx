import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="flex justify-center">
        <Button href="#precio">Quiero mi kit ahora</Button>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col items-center gap-2 text-center text-sm text-muted">
        <p>Kit Sesión Teen © 2026</p>
        <p>Política de Privacidad · Términos · Contacto</p>
      </Container>
    </footer>
  );
}
