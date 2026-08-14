import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Proyectos personales y profesionales de Alejandro Dávila: backend, full-stack y arquitecturas de datos.",
};

export default function ProyectosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Proyectos"
        title="Cosas que he construido"
        description="Cada proyecto tiene su propia case study: el problema, el enfoque técnico y los retos que resolví en el camino."
      />
      <Container className="py-16 sm:py-20">
        <ProjectsGrid projects={projects} />
      </Container>
    </>
  );
}
