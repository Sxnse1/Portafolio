import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <Section id="proyectos">
      <ScrollReveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-sm font-medium text-primary">Proyectos</span>
            <h2 className="mt-3 max-w-xl text-balance text-3xl font-extrabold tracking-tighter sm:text-4xl">
              Cosas que he construido
            </h2>
          </div>
          <Button asChild variant="outline" className="group">
            <Link href="/proyectos">
              Ver todos los proyectos
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </ScrollReveal>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <ScrollReveal key={project.id} delay={i * 0.08}>
            <ProjectCard project={project} priority={i === 0} />
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
