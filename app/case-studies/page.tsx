import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { getCaseStudies } from "@/lib/queries";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "Measured outcomes for utilities and communities — loss reduction, revenue uplift, customer experience.",
};

export default async function CaseStudiesPage() {
  const cases = await getCaseStudies();
  return (
    <main className="relative bg-white min-h-screen">
      <PageHeader eyebrow="Case studies" title="Outcomes that compound, year over year." />
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
          <p className="max-w-2xl text-base text-slate-700 mb-10">
            Real metering programs, measured impact. From dense urban feeders to
            national rollouts.
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            {cases.map((c) => (
              <Link
                key={c.id}
                href={`/case-studies/${c.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-slate-800/80 bg-slate-900/50 p-6 shadow-card backdrop-blur transition-all hover:-translate-y-1 hover:border-brand/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-800/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">
                      {c.region}
                    </span>
                    {c.featured && (
                      <span className="rounded-full bg-brand/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-brand-light">
                        Featured
                      </span>
                    )}
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-slate-500 transition-colors group-hover:text-brand-light" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-slate-50">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300 line-clamp-3">
                  {c.results}
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-800 pt-4 text-center">
                  <div>
                    <p className="font-display text-base font-semibold text-slate-50">
                      {c.metrics.loss_reduction ?? "—"}%
                    </p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-[0.16em] text-slate-500">
                      Loss ↓
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-base font-semibold text-slate-50">
                      {c.metrics.revenue_uplift ?? "—"}%
                    </p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-[0.16em] text-slate-500">
                      Revenue ↑
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-base font-semibold text-slate-50">
                      {c.metrics.households
                        ? new Intl.NumberFormat("en", {
                            notation: "compact",
                            maximumFractionDigits: 1,
                          }).format(c.metrics.households)
                        : "—"}
                    </p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-[0.16em] text-slate-500">
                      Households
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </main>
  );
}
