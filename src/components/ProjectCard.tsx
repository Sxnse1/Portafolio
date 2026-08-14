"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { LivePreviewFrame } from "@/components/LivePreviewFrame";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  /** Marca la imagen como prioritaria para LCP — úsalo solo en la primera card visible. */
  priority?: boolean;
}

export function ProjectCard({ project, priority }: ProjectCardProps) {
  const { id, title, description, stack, image, video, repoUrl, demoUrl } = project;
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [previewActive, setPreviewActive] = React.useState(false);

  const handleEnter = () => {
    videoRef.current?.play();
    setPreviewActive(true);
  };
  const handleLeave = () => {
    const el = videoRef.current;
    if (el) {
      el.pause();
      el.currentTime = 0;
    }
    setPreviewActive(false);
  };

  return (
    <motion.article
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-colors hover:border-primary/40 hover:shadow-lg"
    >
      <Link href={`/proyectos/${id}`} className="flex flex-1 flex-col">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
          {/* Base: imagen estática, siempre presente como fallback. */}
          {image && (
            <Image
              src={image}
              alt={`Vista previa de ${title}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={priority}
              className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                video || demoUrl ? "group-hover:opacity-0" : ""
              }`}
            />
          )}

          {/* En hover: loop mudo de video si se provee, si no, un iframe en vivo de la demo. */}
          {video && (
            <video
              ref={videoRef}
              src={video}
              muted
              loop
              playsInline
              preload="none"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          )}
          {!video && demoUrl && previewActive && (
            <div className="absolute inset-0 animate-in fade-in duration-300">
              <LivePreviewFrame url={demoUrl} title={title} scale={0.28} />
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6 pb-0">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
          </div>
          <p className="mt-2 flex-1 text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </Link>

      <div className="p-6 pt-4">
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <Badge key={tech} variant="secondary" className="font-normal">
              {tech}
            </Badge>
          ))}
        </div>

        {(repoUrl || demoUrl) && (
          <div className="mt-5 flex items-center gap-4 border-t border-border pt-4 text-sm">
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <FaGithub className="size-4" />
                Repo
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <ExternalLink className="size-4" />
                Demo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
