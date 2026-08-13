import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

/**
 * Cliente de Supabase para uso exclusivo en el servidor (route handlers).
 * Usa la service role key, que ignora RLS — nunca importar este archivo desde un componente cliente.
 * Se crea de forma diferida (no al importar el módulo) para no romper la recolección
 * de datos de build de Next.js cuando las variables de entorno aún no están configuradas.
 */
export function getSupabaseServer() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

  return createClient<Database>(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  });
}
