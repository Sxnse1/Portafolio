"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Mail, XCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Section } from "@/components/layout/Section";
import { getSupabaseBrowser } from "@/lib/supabase/client";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";

type SubmitState = "idle" | "success" | "error";

const DIRECT_LINKS = [
  {
    href: "mailto:cesardavila1937@gmail.com",
    label: "cesardavila1937@gmail.com",
    icon: Mail,
  },
  {
    href: "https://linkedin.com/in/tu-usuario", // PLACEHOLDER: tu LinkedIn real
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "https://github.com/tu-usuario", // PLACEHOLDER: tu GitHub real
    label: "GitHub",
    icon: FaGithub,
  },
];

export function Contact() {
  const [submitState, setSubmitState] = React.useState<SubmitState>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitState("idle");

    try {
      const { error } = await getSupabaseBrowser()
        .from("contact_submissions")
        .insert(values);

      if (error) {
        setSubmitState("error");
        return;
      }
    } catch {
      setSubmitState("error");
      return;
    }

    setSubmitState("success");
    reset();
  };

  return (
    <Section id="contacto" className="pt-16">
      <div className="grid gap-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-12">
        <ScrollReveal>
          <p className="max-w-sm text-muted-foreground">
            ¿Tienes una vacante, un proyecto o simplemente quieres saludar?
            Escríbeme por el formulario o directamente por estos medios.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            {DIRECT_LINKS.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex w-fit items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Icon className="size-4" />
                {label}
              </a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Nombre</Label>
              <Input
                id="name"
                autoComplete="name"
                aria-invalid={!!errors.name}
                {...register("name")}
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Correo</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                aria-invalid={!!errors.email}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea
                id="message"
                rows={5}
                aria-invalid={!!errors.message}
                {...register("message")}
              />
              {errors.message && (
                <p className="text-sm text-destructive">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button type="submit" disabled={isSubmitting} className="mt-2">
              {isSubmitting && <Loader2 className="size-4 animate-spin" />}
              Enviar mensaje
            </Button>

            <AnimatePresence mode="wait">
              {submitState === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  role="status"
                  className="flex items-center gap-2 text-sm text-primary"
                >
                  <CheckCircle2 className="size-4" />
                  ¡Mensaje enviado! Te responderé pronto.
                </motion.p>
              )}
              {submitState === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  role="alert"
                  className="flex items-center gap-2 text-sm text-destructive"
                >
                  <XCircle className="size-4" />
                  Algo salió mal. Intenta de nuevo o escríbeme directo por correo.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </ScrollReveal>
      </div>
    </Section>
  );
}
