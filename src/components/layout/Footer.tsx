import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { VisitCounter } from "@/components/VisitCounter";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/Sxnse1",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/c%C3%A9sar-alejandro-d%C3%A1vila-reyna-039ab824b/",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "mailto:cesardavila1937@gmail.com",
    label: "Correo",
    icon: Mail,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Alejandro Dávila. Todos los derechos reservados.</p>

        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="size-[18px]" />
            </a>
          ))}
          <VisitCounter />
        </div>
      </div>
    </footer>
  );
}
