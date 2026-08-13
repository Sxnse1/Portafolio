import { Database, Server, WifiOff } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const INTERESTS = [
  {
    icon: Server,
    title: "Backend",
    description:
      "APIs claras, bien documentadas y pensadas para escalar sin volverse frágiles.",
  },
  {
    icon: WifiOff,
    title: "Arquitecturas offline-first",
    description:
      "Software que sigue funcionando cuando la conexión falla, y sincroniza cuando vuelve.",
  },
  {
    icon: Database,
    title: "Bases de datos",
    description:
      "Modelado de datos cuidadoso: la base de todo sistema confiable.",
  },
];

export function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid gap-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-12">
        <ScrollReveal>
          <span className="text-sm font-medium text-primary">Sobre mí</span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tighter sm:text-4xl">
            Egresado de Ingeniería en Sistemas, formado en proyectos reales.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Soy egresado de Ingeniería en Sistemas Computacionales y
            Electrónicos (actualmente en proceso de titulación). He
            construido software en entornos profesionales reales, no solo en
            el aula: desde APIs backend hasta sistemas completos que resuelven
            problemas concretos de negocio.
          </p>
          <p className="mt-4 text-muted-foreground">
            Actualmente desarrollo, en mis estadías profesionales, un sistema
            de gestión notarial — un proyecto que combina backend robusto,
            modelado de datos cuidadoso y atención a los detalles que
            importan cuando el software maneja procesos legales.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-6">
          {INTERESTS.map(({ icon: Icon, title, description }, i) => (
            <ScrollReveal key={title} delay={i * 0.1}>
              <div className="group flex gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
