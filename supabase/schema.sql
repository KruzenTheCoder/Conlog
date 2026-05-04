-- Conlog marketing site — schema
-- Run this in the Supabase SQL editor.

create extension if not exists "pgcrypto";

-- =========================================================================
-- pages
-- =========================================================================
create table if not exists public.pages (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  seo_title text,
  seo_description text,
  hero_heading text,
  hero_subheading text,
  hero_cta_primary_label text,
  hero_cta_primary_url text,
  hero_cta_secondary_label text,
  hero_cta_secondary_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- =========================================================================
-- sections
-- =========================================================================
create table if not exists public.sections (
  id uuid primary key default gen_random_uuid(),
  page_id uuid not null references public.pages(id) on delete cascade,
  type text not null,
  position int not null default 0,
  title text,
  subtitle text,
  data jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists sections_page_position_idx
  on public.sections (page_id, position);

-- =========================================================================
-- solutions
-- =========================================================================
create table if not exists public.solutions (
  id uuid primary key default gen_random_uuid(),
  category text not null check (category in ('smart-meters','prepayment','software','services')),
  name text not null,
  slug text not null unique,
  positioning text not null,
  features jsonb not null default '[]'::jsonb,
  benefits_utilities jsonb not null default '[]'::jsonb,
  benefits_consumers jsonb not null default '[]'::jsonb,
  icon text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- =========================================================================
-- case_studies
-- =========================================================================
create table if not exists public.case_studies (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  region text not null,
  utility_name text not null,
  problem text not null,
  solution text not null,
  results text not null,
  metrics jsonb not null default '{}'::jsonb,
  featured boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- =========================================================================
-- leads
-- =========================================================================
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  role text,
  country text,
  audience_type text check (audience_type in ('utility','partner','consumer','other')),
  message text,
  source_page text,
  created_at timestamptz not null default now()
);

create index if not exists leads_created_at_idx
  on public.leads (created_at desc);

-- =========================================================================
-- blog_posts (optional)
-- =========================================================================
create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text,
  content text,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- =========================================================================
-- Row Level Security
-- =========================================================================

alter table public.pages          enable row level security;
alter table public.sections       enable row level security;
alter table public.solutions      enable row level security;
alter table public.case_studies   enable row level security;
alter table public.leads          enable row level security;
alter table public.blog_posts     enable row level security;

-- Public read for marketing content
do $$ begin
  if not exists (select 1 from pg_policies where schemaname='public' and tablename='pages' and policyname='pages_public_read') then
    create policy pages_public_read on public.pages for select using (true);
  end if;
  if not exists (select 1 from pg_policies where schemaname='public' and tablename='sections' and policyname='sections_public_read') then
    create policy sections_public_read on public.sections for select using (true);
  end if;
  if not exists (select 1 from pg_policies where schemaname='public' and tablename='solutions' and policyname='solutions_public_read') then
    create policy solutions_public_read on public.solutions for select using (true);
  end if;
  if not exists (select 1 from pg_policies where schemaname='public' and tablename='case_studies' and policyname='case_studies_public_read') then
    create policy case_studies_public_read on public.case_studies for select using (true);
  end if;
  if not exists (select 1 from pg_policies where schemaname='public' and tablename='blog_posts' and policyname='blog_posts_public_read') then
    create policy blog_posts_public_read on public.blog_posts for select using (published_at is not null and published_at <= now());
  end if;
end $$;

-- Anonymous lead inserts (form submissions). No public reads.
do $$ begin
  if not exists (select 1 from pg_policies where schemaname='public' and tablename='leads' and policyname='leads_anon_insert') then
    create policy leads_anon_insert on public.leads for insert with check (true);
  end if;
end $$;

-- Note: writes to pages/sections/solutions/case_studies/blog_posts should
-- happen via the Supabase dashboard or with the service role key only.
