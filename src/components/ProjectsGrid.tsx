"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const tags = React.useMemo(
    () => Array.from(new Set(projects.flatMap((p) => p.stack))).sort(),
    [projects]
  );
  const [active, setActive] = React.useState<string | null>(null);

  const filtered = active
    ? projects.filter((p) => p.stack.includes(active))
    : projects;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive(null)}
          className={cn(
            "rounded-full border px-3.5 py-1.5 text-sm transition-colors",
            active === null
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card text-muted-foreground hover:text-foreground"
          )}
        >
          Todos
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActive(tag)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-sm transition-colors",
              active === tag
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:text-foreground"
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.map((project, i) => (
          <motion.div key={project.id} layout>
            <ProjectCard project={project} priority={i === 0} />
          </motion.div>
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-10 text-sm text-muted-foreground">
          No hay proyectos con ese tag todavía.
        </p>
      )}
    </div>
  );
}
