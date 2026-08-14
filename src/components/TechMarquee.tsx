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
import { skills } from "@/data/skills";

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

/** Tira horizontal con scroll infinito de los íconos de skills — vista rápida en la home. */
export function TechMarquee() {
  const track = [...skills, ...skills];

  return (
    <div className="relative overflow-hidden border-y border-border/60 bg-card/30 py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-[linear-gradient(to_right,var(--background),transparent)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-[linear-gradient(to_left,var(--background),transparent)]" />

      <div className="flex w-max animate-marquee gap-10">
        {track.map((skill, i) => {
          const Icon = ICONS[skill.icon];
          return (
            <div
              key={`${skill.name}-${i}`}
              className="flex shrink-0 items-center gap-2.5 text-muted-foreground"
            >
              {Icon && <Icon className="size-5" />}
              <span className="text-sm font-medium whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
