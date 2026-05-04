export type SectionType =
  | "trusted-by"
  | "solutions-grid"
  | "why-choose-us"
  | "innovation"
  | "case-studies-summary"
  | "global-presence"
  | "cta-banner"
  | "brand-pillars"
  | "market-segments"
  | "awards"
  | "metrics"
  | "milestone"
  | "pillars";

export interface PageRecord {
  id: string;
  slug: string;
  title: string;
  seo_title: string | null;
  seo_description: string | null;
  hero_heading: string | null;
  hero_subheading: string | null;
  hero_cta_primary_label: string | null;
  hero_cta_primary_url: string | null;
  hero_cta_secondary_label: string | null;
  hero_cta_secondary_url: string | null;
}

export interface SectionRecord {
  id: string;
  page_id: string;
  type: SectionType;
  position: number;
  title: string | null;
  subtitle: string | null;
  data: Record<string, unknown> | null;
}

export interface SolutionRecord {
  id: string;
  category: "smart-meters" | "prepayment" | "software" | "services";
  name: string;
  slug: string;
  positioning: string;
  features: string[];
  benefits_utilities: string[];
  benefits_consumers: string[];
  icon: string;
}

export interface CaseStudyRecord {
  id: string;
  slug: string;
  title: string;
  region: string;
  utility_name: string;
  problem: string;
  solution: string;
  results: string;
  metrics: {
    loss_reduction?: number;
    revenue_uplift?: number;
    households?: number;
  };
  featured: boolean;
}

export interface LeadInput {
  name: string;
  email: string;
  company?: string;
  role?: string;
  country?: string;
  audience_type?: "utility" | "partner" | "consumer" | "other";
  message?: string;
  source_page?: string;
}
