import { ScrollReveal } from "@/components/ScrollReveal";
import { Section } from "@/components/layout/Section";
import { TimelineItem } from "@/components/TimelineItem";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experiencia" alt>
      <ScrollReveal>
        <span className="text-sm font-medium text-primary">Experiencia</span>
        <h2 className="mt-3 max-w-xl text-balance text-3xl font-extrabold tracking-tighter sm:text-4xl">
          Dónde he trabajado
        </h2>
      </ScrollReveal>

      <div className="mt-14 max-w-2xl">
        {experience.map((item, i) => (
          <TimelineItem
            key={item.id}
            item={item}
            delay={i * 0.1}
            isLast={i === experience.length - 1}
          />
        ))}
      </div>
    </Section>
  );
}
