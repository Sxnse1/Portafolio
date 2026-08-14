import type { ReactNode } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Container } from "./Container";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

/** Encabezado consistente para páginas dedicadas (/proyectos, /sobre-mi, /contacto). */
export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <div className="border-b border-border/60 pb-16 pt-28 sm:pt-32">
      <Container>
        <ScrollReveal>
          <span className="text-sm font-medium text-primary">{eyebrow}</span>
          <h1 className="mt-3 max-w-2xl text-balance text-4xl font-extrabold tracking-tighter sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-xl text-muted-foreground">{description}</p>
          )}
          {children}
        </ScrollReveal>
      </Container>
    </div>
  );
}
