-- Ejecutar en el SQL Editor de tu proyecto de Supabase.

create table if not exists contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table contact_submissions enable row level security;

create policy "Allow public insert"
  on contact_submissions for insert
  to anon
  with check (true);

-- Sin política de SELECT para "anon": los mensajes solo son legibles desde el dashboard
-- de Supabase o con la service role key, nunca desde el navegador del visitante.

create table if not exists page_visits (
  id smallint primary key default 1,
  count bigint not null default 0,
  constraint single_row check (id = 1)
);

insert into page_visits (id, count) values (1, 0)
on conflict (id) do nothing;

alter table page_visits enable row level security;

create policy "Allow public read"
  on page_visits for select
  to anon
  using (true);

-- No se otorga UPDATE a "anon": el incremento del contador se hace desde
-- /api/visits (route handler) usando la service role key en el servidor,
-- a través de esta función (evita condiciones de carrera en el UPDATE).
create or replace function increment_page_visits()
returns bigint
language sql
security definer
set search_path = public
as $$
  update page_visits set count = count + 1 where id = 1 returning count;
$$;
