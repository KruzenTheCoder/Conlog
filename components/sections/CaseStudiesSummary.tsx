import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { getCaseStudies } from "@/lib/queries";
import type { SectionRecord } from "@/lib/types";

export async function CaseStudiesSummary({
  section,
}: {
  section: SectionRecord;
}) {
  const cases = (await getCaseStudies()).filter((c) => c.featured).slice(0, 3);
  return (
    <Section
      eyebrow="Outcomes"
      title={section.title}
      subtitle={section.subtitle}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {cases.map((c) => (
          <Link
            key={c.id}
            href={`/case-studies/${c.slug}`}
            className="group flex h-full flex-col rounded-3xl border border-slate-800/80 bg-slate-900/50 p-6 shadow-card backdrop-blur transition-all hover:-translate-y-1 hover:border-brand/40"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="rounded-full bg-slate-800/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">
                {c.region}
              </span>
              <ArrowUpRight className="h-5 w-5 text-slate-500 transition-colors group-hover:text-brand-light" />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold text-slate-50">
              {c.title}
            </h3>
            <p className="mt-2 text-sm text-slate-300 line-clamp-3">
              {c.results}
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-800 pt-4 text-center">
              <Stat label="Loss ↓" value={`${c.metrics.loss_reduction ?? "—"}%`} />
              <Stat
                label="Revenue ↑"
                value={`${c.metrics.revenue_uplift ?? "—"}%`}
              />
              <Stat
                label="Households"
                value={
                  c.metrics.households
                    ? new Intl.NumberFormat("en", {
                        notation: "compact",
                        maximumFractionDigits: 1,
                      }).format(c.metrics.households)
                    : "—"
                }
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-10">
        <Link
          href="/case-studies"
          className="text-sm text-brand-light hover:underline"
        >
          See all case studies →
        </Link>
      </div>
    </Section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-display text-base font-semibold text-slate-50">
        {value}
      </p>
      <p className="mt-0.5 text-[10px] uppercase tracking-[0.16em] text-slate-500">
        {label}
      </p>
    </div>
  );
}
