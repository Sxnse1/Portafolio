import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { TechMarquee } from "@/components/TechMarquee";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <FeaturedProjects />

      <Section alt>
        <ScrollReveal className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-lg text-balance text-3xl font-extrabold tracking-tighter sm:text-4xl">
            ¿Buscas a alguien que pueda con el backend y con todo lo demás?
          </h2>
          <p className="max-w-md text-muted-foreground">
            Conoce más sobre mi experiencia o escríbeme directamente —
            respondo rápido.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contacto">Contáctame</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="group">
              <Link href="/sobre-mi">
                Sobre mí
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
