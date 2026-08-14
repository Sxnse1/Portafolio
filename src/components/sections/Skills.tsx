"use client";

import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiNextdotjs,
  SiPostgresql,
  SiFirebase,
  SiSupabase,
  SiElectron,
} from "react-icons/si";
import { FaJava, FaNodeJs, FaReact, FaAngular, FaGitAlt } from "react-icons/fa";
import { TbApi, TbPlugConnected, TbDatabase } from "react-icons/tb";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Section } from "@/components/layout/Section";
import { skills } from "@/data/skills";
import type { SkillCategory } from "@/types";

const ICONS: Record<string, IconType> = {
  SiJavascript,
  SiTypescript,
  FaJava,
  FaNodeJs,
  SiExpress,
  TbApi,
  TbPlugConnected,
  FaReact,
  SiNextdotjs,
  FaAngular,
  TbDatabase,
  SiPostgresql,
  SiFirebase,
  SiSupabase,
  SiElectron,
  FaGitAlt,
};

const CATEGORY_ORDER: SkillCategory[] = [
  "Lenguajes",
  "Backend",
  "Frontend",
  "Bases de Datos",
  "Cloud / Plataformas",
  "Herramientas",
];

export function Skills() {
  return (
    <Section id="habilidades">
      <ScrollReveal>
        <span className="text-sm font-medium text-primary">
          Habilidades técnicas
        </span>
        <h2 className="mt-3 max-w-xl text-balance text-3xl font-extrabold tracking-tighter sm:text-4xl">
          Con qué trabajo
        </h2>
      </ScrollReveal>

      <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORY_ORDER.map((category, i) => {
          const items = skills.filter((s) => s.category === category);
          if (items.length === 0) return null;

          return (
            <ScrollReveal key={category} delay={i * 0.06}>
              <h3 className="mb-4 text-sm font-medium text-muted-foreground">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => {
                  const Icon = ICONS[skill.icon];
                  return (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2.5 text-sm text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-sm"
                    >
                      {Icon && (
                        <Icon className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                      )}
                      {skill.name}
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}
