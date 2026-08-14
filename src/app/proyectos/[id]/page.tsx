import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/ScrollReveal";
import { LivePreviewFrame } from "@/components/LivePreviewFrame";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    openGraph: project.image ? { images: [{ url: project.image }] } : undefined,
  };
}

const SECTIONS = [
  { key: "problem", label: "El problema" },
  { key: "approach", label: "El enfoque" },
  { key: "result", label: "El resultado" },
] as const;

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const index = projects.findIndex((p) => p.id === id);
  const project = projects[index];
  if (!project) notFound();

  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const cs = project.caseStudy;

  return (
    <>
      <div className="border-b border-border/60 pb-16 pt-28 sm:pt-32">
        <Container>
          <ScrollReveal>
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-3.5" />
              Todos los proyectos
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              {project.year && <span>{project.year}</span>}
              {project.role && (
                <>
                  <span className="size-1 rounded-full bg-border" />
                  <span>{project.role}</span>
                </>
              )}
            </div>

            <h1 className="mt-3 max-w-3xl text-balance text-4xl font-extrabold tracking-tighter sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="font-normal">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-3">
                {project.repoUrl && (
                  <Button asChild size="sm" variant="outline">
                    <a href={project.repoUrl} target="_blank" rel="noreferrer">
                      <FaGithub className="size-4" />
                      Repo
                    </a>
                  </Button>
                )}
                {project.demoUrl && (
                  <Button asChild size="sm">
                    <a href={project.demoUrl} target="_blank" rel="noreferrer">
                      <ExternalLink className="size-4" />
                      Ver demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </div>

      <Container className="py-16 sm:py-20">
        {(project.image || project.demoUrl) && (
          <ScrollReveal>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-muted">
              {project.image && (
                <Image
                  src={project.image}
                  alt={`Vista previa de ${project.title}`}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1152px"
                  className="object-cover"
                  priority
                />
              )}
              {project.demoUrl && (
                <>
                  <LivePreviewFrame
                    url={project.demoUrl}
                    title={project.title}
                    scale={0.5}
                    interactive
                    className="absolute inset-0"
                  />
                  <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur">
                    <span className="size-1.5 rounded-full bg-primary" />
                    Vista previa en vivo
                  </span>
                </>
              )}
            </div>
          </ScrollReveal>
        )}

        {cs && (
          <div className="mt-16 grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
            <ScrollReveal className="md:sticky md:top-24 md:self-start">
              <h2 className="text-sm font-medium text-muted-foreground">
                Arquitectura y decisiones técnicas
              </h2>
              <ul className="mt-4 flex flex-col gap-3">
                {cs.architecture.map((point) => (
                  <li
                    key={point}
                    className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground"
                  >
                    {point}
                  </li>
                ))}
              </ul>

              {cs.challenges.length > 0 && (
                <>
                  <h2 className="mt-8 text-sm font-medium text-muted-foreground">
                    Retos técnicos
                  </h2>
                  <ul className="mt-4 flex flex-col gap-3">
                    {cs.challenges.map((point) => (
                      <li
                        key={point}
                        className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </ScrollReveal>

            <div className="flex flex-col gap-10">
              {SECTIONS.map(({ key, label }) => (
                <ScrollReveal key={key}>
                  <h2 className="text-2xl font-extrabold tracking-tighter">
                    {label}
                  </h2>
                  <p className="mt-3 text-muted-foreground">{cs[key]}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
      </Container>

      <div className="border-t border-border/60">
        <Container className="flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
          <Button asChild variant="ghost" className="group justify-start">
            <Link href={`/proyectos/${prev.id}`}>
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
              {prev.title}
            </Link>
          </Button>
          <Button asChild variant="ghost" className="group justify-end">
            <Link href={`/proyectos/${next.id}`}>
              {next.title}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </Container>
      </div>
    </>
  );
}
