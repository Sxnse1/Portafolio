import { ScrollReveal } from "@/components/ScrollReveal";
import type { ExperienceItem } from "@/types";

interface TimelineItemProps {
  item: ExperienceItem;
  delay?: number;
  isLast?: boolean;
}

export function TimelineItem({ item, delay = 0, isLast }: TimelineItemProps) {
  return (
    <ScrollReveal delay={delay}>
      <div className="relative flex gap-6 pb-12">
        {!isLast && (
          <span className="absolute left-[7px] top-4 h-full w-px bg-border" />
        )}
        <span
          className={`relative z-10 mt-1.5 flex size-4 shrink-0 items-center justify-center rounded-full ${
            item.current ? "bg-primary" : "bg-border"
          }`}
        >
          {item.current && (
            <span className="absolute inline-flex size-4 animate-ping rounded-full bg-primary opacity-60" />
          )}
        </span>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="font-medium text-foreground">{item.role}</h3>
            {item.current && (
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                Actual
              </span>
            )}
          </div>
          <p className="mt-0.5 text-sm text-primary">{item.organization}</p>
          <p className="mt-0.5 text-xs text-muted-foreground">{item.period}</p>
          {item.highlights && item.highlights.length > 0 ? (
            <ul className="mt-3 flex max-w-xl flex-col gap-2">
              {item.highlights.map((point) => (
                <li
                  key={point}
                  className="flex gap-2.5 text-sm text-muted-foreground"
                >
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/60" />
                  {point}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 max-w-xl text-sm text-muted-foreground">
              {item.description}
            </p>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
