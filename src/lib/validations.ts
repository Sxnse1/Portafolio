import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Tu nombre debe tener al menos 2 caracteres.")
    .max(100, "Tu nombre es demasiado largo."),
  email: z.string().trim().email("Ingresa un correo válido."),
  message: z
    .string()
    .trim()
    .min(10, "Cuéntame un poco más (mínimo 10 caracteres).")
    .max(2000, "Tu mensaje es demasiado largo."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
