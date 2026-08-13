import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

let client: ReturnType<typeof createClient<Database>> | null = null;

/** Cliente de Supabase para uso en el navegador (respeta RLS, usa la anon key). */
export function getSupabaseBrowser() {
  if (!client) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    client = createClient<Database>(supabaseUrl, supabaseAnonKey);
  }
  return client;
}
