import { getSupabase } from "./supabaseClient";
import {
  fallbackCaseStudies,
  fallbackHomePage,
  fallbackHomeSections,
  fallbackSolutions,
} from "./content";
import type {
  CaseStudyRecord,
  PageRecord,
  SectionRecord,
  SolutionRecord,
} from "./types";

export async function getPageWithSections(slug: string): Promise<{
  page: PageRecord;
  sections: SectionRecord[];
}> {
  const sb = getSupabase();
  if (!sb) {
    if (slug === "home") {
      return { page: fallbackHomePage, sections: fallbackHomeSections };
    }
    return { page: { ...fallbackHomePage, slug, title: slug }, sections: [] };
  }

  const { data: page, error: pageErr } = await sb
    .from("pages")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (pageErr || !page) {
    if (slug === "home") {
      return { page: fallbackHomePage, sections: fallbackHomeSections };
    }
    return { page: { ...fallbackHomePage, slug, title: slug }, sections: [] };
  }

  const { data: sections } = await sb
    .from("sections")
    .select("*")
    .eq("page_id", page.id)
    .order("position", { ascending: true });

  return {
    page: page as PageRecord,
    sections: (sections as SectionRecord[]) ?? [],
  };
}

export async function getSolutions(): Promise<SolutionRecord[]> {
  const sb = getSupabase();
  if (!sb) return fallbackSolutions;
  const { data, error } = await sb
    .from("solutions")
    .select("*")
    .order("category")
    .order("name");
  if (error || !data || data.length === 0) return fallbackSolutions;
  return data as SolutionRecord[];
}

export async function getSolutionBySlug(
  slug: string
): Promise<SolutionRecord | null> {
  const sb = getSupabase();
  if (!sb) return fallbackSolutions.find((s) => s.slug === slug) ?? null;
  const { data } = await sb
    .from("solutions")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();
  return (data as SolutionRecord) ?? fallbackSolutions.find((s) => s.slug === slug) ?? null;
}

export async function getCaseStudies(): Promise<CaseStudyRecord[]> {
  const sb = getSupabase();
  if (!sb) return fallbackCaseStudies;
  const { data, error } = await sb
    .from("case_studies")
    .select("*")
    .order("featured", { ascending: false });
  if (error || !data || data.length === 0) return fallbackCaseStudies;
  return data as CaseStudyRecord[];
}

export async function getCaseStudyBySlug(
  slug: string
): Promise<CaseStudyRecord | null> {
  const sb = getSupabase();
  if (!sb) return fallbackCaseStudies.find((c) => c.slug === slug) ?? null;
  const { data } = await sb
    .from("case_studies")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();
  return (
    (data as CaseStudyRecord) ??
    fallbackCaseStudies.find((c) => c.slug === slug) ??
    null
  );
}
