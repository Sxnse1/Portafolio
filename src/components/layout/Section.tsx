import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  /** Aplica el fondo alterno + borde superior usado para separar secciones en la home. */
  alt?: boolean;
  id?: string;
}

export function Section({ children, className, alt, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(alt && "border-t border-border/60 bg-card/30")}
    >
      <Container className={cn("py-20 sm:py-28", className)}>
        {children}
      </Container>
    </section>
  );
}
