"use client";

import { cn } from "@/lib/utils";

interface LivePreviewFrameProps {
  url: string;
  title: string;
  /**
   * Qué tan "alejada" se ve la página dentro del contenedor. El iframe se
   * dibuja a 100/scale % del tamaño del contenedor y luego se encoge con
   * `transform: scale()` — así el viewport emulado siempre es proporcional
   * al contenedor (responsive sin JS/ResizeObserver).
   */
  scale?: number;
  /** Si es false, el iframe es solo visual (clicks pasan al elemento de abajo). */
  interactive?: boolean;
  className?: string;
}

export function LivePreviewFrame({
  url,
  title,
  scale = 0.28,
  interactive = false,
  className,
}: LivePreviewFrameProps) {
  const size = `${100 / scale}%`;

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      <iframe
        src={url}
        title={`Vista previa en vivo de ${title}`}
        loading="lazy"
        tabIndex={interactive ? 0 : -1}
        style={{
          width: size,
          height: size,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          pointerEvents: interactive ? "auto" : "none",
        }}
        className="absolute left-0 top-0 border-0"
      />
    </div>
  );
}
