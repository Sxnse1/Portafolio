import { ScrollReveal } from "@/components/ScrollReveal";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="proyectos" className="border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <ScrollReveal>
          <span className="text-sm font-medium text-primary">Proyectos</span>
          <h2 className="mt-3 max-w-xl text-balance text-3xl font-extrabold tracking-tighter sm:text-4xl">
            Cosas que he construido
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Una selección de proyectos personales y profesionales. Cada uno
            incluye el stack usado y links a repositorio o demo cuando están
            disponibles.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.08}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
