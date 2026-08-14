import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "¿Tienes una vacante o un proyecto en mente? Escríbeme por el formulario o directamente por correo, LinkedIn o GitHub.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHeader eyebrow="Contacto" title="Hablemos" />
      <Contact />
    </>
  );
}
