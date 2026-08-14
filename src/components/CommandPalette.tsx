"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Download,
  FolderGit2,
  Home,
  Mail,
  Moon,
  Sun,
  User,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { projects } from "@/data/projects";

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  const openExternal = (href: string) => {
    setOpen(false);
    window.open(href, "_blank", "noreferrer");
  };

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      title="Paleta de comandos"
      description="Navega por el portafolio"
    >
      <Command>
        <CommandInput placeholder="Buscar una página, proyecto o acción..." />
        <CommandList>
          <CommandEmpty>Sin resultados.</CommandEmpty>

          <CommandGroup heading="Navegación">
            <CommandItem onSelect={() => go("/")}>
              <Home />
              Inicio
            </CommandItem>
            <CommandItem onSelect={() => go("/proyectos")}>
              <FolderGit2 />
              Proyectos
            </CommandItem>
            <CommandItem onSelect={() => go("/sobre-mi")}>
              <User />
              Sobre mí
            </CommandItem>
            <CommandItem onSelect={() => go("/contacto")}>
              <Mail />
              Contacto
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Proyectos">
            {projects.map((project) => (
              <CommandItem
                key={project.id}
                onSelect={() => go(`/proyectos/${project.id}`)}
              >
                <FolderGit2 />
                {project.title}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Enlaces">
            <CommandItem onSelect={() => openExternal("https://github.com/Sxnse1")}>
              <FaGithub />
              GitHub
            </CommandItem>
            <CommandItem onSelect={() => openExternal("https://linkedin.com/in/tu-usuario")}>
              <FaLinkedin />
              LinkedIn
            </CommandItem>
            <CommandItem onSelect={() => openExternal("mailto:cesardavila1937@gmail.com")}>
              <Mail />
              Enviar correo
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setOpen(false);
                const link = document.createElement("a");
                link.href = "/cv/alejandro-davila-cv.pdf";
                link.download = "";
                link.click();
              }}
            >
              <Download />
              Descargar CV
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Preferencias">
            <CommandItem
              onSelect={() => {
                setTheme(resolvedTheme === "dark" ? "light" : "dark");
                setOpen(false);
              }}
            >
              {resolvedTheme === "dark" ? <Sun /> : <Moon />}
              Cambiar a modo {resolvedTheme === "dark" ? "claro" : "oscuro"}
            </CommandItem>
          </CommandGroup>
        </CommandList>
        <div className="flex items-center justify-end gap-1 border-t border-border px-3 py-2 text-xs text-muted-foreground">
          <CommandShortcut className="static">⌘K</CommandShortcut>
          para abrir en cualquier momento
        </div>
      </Command>
    </CommandDialog>
  );
}
