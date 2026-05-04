import { PageHeader } from "@/components/layout/PageHeader";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { getSolutions } from "@/lib/queries";
import type { SolutionRecord } from "@/lib/types";

export const metadata: Metadata = {
  title: "Our Offer",
  description:
    "Smart meters and accessories for electricity and water — iDM APEX, iDM Hydra, Conlog Cloud Platform, prepayment, vending and managed services.",
};

const CATEGORY_LABEL: Record<SolutionRecord["category"], string> = {
  "smart-meters": "Smart meters",
  prepayment: "Prepayment",
  software: "Software",
  services: "Services",
};

const CATEGORY_ANCHOR: Record<SolutionRecord["category"], string> = {
  "smart-meters": "smart-meters",
  prepayment: "prepayment",
  software: "software",
  services: "services",
};

export default async function SolutionsPage() {
  const solutions = await getSolutions();
  const grouped = solutions.reduce<Record<string, SolutionRecord[]>>(
    (acc, s) => {
      (acc[s.category] ||= []).push(s);
      return acc;
    },
    {}
  );

  return (
    <main className="relative bg-white min-h-screen">
      
      <PageHeader eyebrow="Our Offer" title="Smart meters & accessories for electricity and water." />
      <div className="relative py-16">
        <div
          className="absolute inset-0 z-0 opacity-80"
          style={{
            backgroundImage: "url('/light-bg.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "repeat-y",
          }}
        />
        <Container className="relative z-10">
          
          <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-slate-300">
            A proudly South African product range — our electrical meters are
            manufactured using 98% local materials, and water meters 85%.
            Hardware, software and services engineered together to secure
            revenue and connect communities.
          </p>
        
        </Container>
      </div>
    

      {(
        Object.keys(grouped) as Array<SolutionRecord["category"]>
      ).map((category) => (
        <Section
          key={category}
          id={CATEGORY_ANCHOR[category]}
          eyebrow={CATEGORY_LABEL[category]}
          title={`${CATEGORY_LABEL[category]} that scale`}
        >
          <div className="grid gap-5 md:grid-cols-2">
            {grouped[category].map((s) => (
              <Link
                key={s.id}
                href={`/solutions/${s.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-slate-800/80 bg-slate-900/50 p-6 shadow-card backdrop-blur transition-all hover:-translate-y-1 hover:border-brand/40"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand/15 text-brand-light ring-1 ring-brand/30">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-slate-500 transition-colors group-hover:text-brand-light" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-slate-50">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm text-slate-300">{s.positioning}</p>
                <ul className="mt-4 space-y-1.5 text-xs text-slate-400">
                  {s.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-light" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </Section>
      ))}
        </main>
  );
}
