"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[92vh] items-center overflow-hidden"
    >
      {/* Fondo: gradiente animado sutil, sin morados-azules genéricos */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-noise">
        <div className="absolute left-1/2 top-[-10%] h-[36rem] w-[36rem] -translate-x-1/2 animate-hero-glow rounded-full bg-primary/20 blur-[110px] dark:bg-primary/15" />
        <div className="absolute right-[8%] top-[30%] h-72 w-72 animate-hero-glow-delayed rounded-full bg-accent-warm/15 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,var(--background)_92%)]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto flex w-full max-w-6xl flex-col px-6 py-24"
      >
        <motion.span
          variants={item}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground"
        >
          <span className="size-2 rounded-full bg-primary animate-pulse" />
          Disponible para nuevas oportunidades
        </motion.span>

        <motion.h1
          variants={item}
          className="text-balance text-5xl font-extrabold tracking-tighter text-foreground sm:text-6xl md:text-7xl"
        >
          Alejandro Dávila
        </motion.h1>

        <motion.h2
          variants={item}
          className="mt-3 text-2xl font-medium text-primary sm:text-3xl"
        >
          Desarrollador Backend / Full-Stack
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-balance text-lg text-muted-foreground"
        >
          Construyo software confiable de backend a frontend: APIs sólidas,
          bases de datos bien diseñadas y experiencias de usuario cuidadas.
          Egresado de Ingeniería en Sistemas Computacionales y Electrónicos.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <Button asChild size="lg" className="group">
            <Link href="/proyectos">
              Ver proyectos
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contacto">Contáctame</Link>
          </Button>
          <Button asChild size="lg" variant="ghost">
            {/* PLACEHOLDER: coloca tu CV real en /public/cv/alejandro-davila-cv.pdf */}
            <a href="/cv/alejandro-davila-cv.pdf" download>
              <Download className="size-4" />
              Descargar CV
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
