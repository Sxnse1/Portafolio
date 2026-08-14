import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Egresado de Ingeniería en Sistemas Computacionales y Electrónicos, desarrollador backend/full-stack. Stack, intereses y experiencia profesional.",
};

export default function SobreMiPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre mí"
        title="Backend en el corazón, full-stack por necesidad"
        description="Un poco más sobre cómo pienso el software, con qué trabajo y dónde he aplicado todo esto en entornos reales."
      />
      <About />
      <Skills />
      <Experience />
    </>
  );
}
