import { NextResponse } from "next/server";
import { getSupabaseServer } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

// Incrementa y devuelve el contador de visitas guardado en la fila única de `page_visits`.
export async function POST() {
  const { data, error } = await getSupabaseServer().rpc("increment_page_visits");

  if (error) {
    return NextResponse.json({ count: null, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ count: data as number });
}
