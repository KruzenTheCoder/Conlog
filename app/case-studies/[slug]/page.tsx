import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LeadForm } from "@/components/forms/LeadForm";
import { getCaseStudies, getCaseStudyBySlug } from "@/lib/queries";

export async function generateStaticParams() {
  const cases = await getCaseStudies();
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = await getCaseStudyBySlug(slug);
  return { title: c?.title ?? "Case study", description: c?.results };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = await getCaseStudyBySlug(slug);
  if (!c) notFound();

  return (
    <>
      <section className="relative pt-20 pb-12 md:pt-28">
        <Container>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs text-slate-400 transition-colors hover:text-slate-200"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All case studies
          </Link>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-slate-800/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">
              {c.region}
            </span>
            <span className="rounded-full bg-brand/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-brand-light">
              {c.utility_name}
            </span>
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-4xl md:text-5xl font-semibold leading-tight">
            {c.title}
          </h1>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            <Stat label="Loss reduction" value={`${c.metrics.loss_reduction ?? "—"}%`} />
            <Stat label="Revenue uplift" value={`${c.metrics.revenue_uplift ?? "—"}%`} />
            <Stat
              label="Households impacted"
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
        </Container>
      </section>

      <section className="py-12 md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            <Block title="Problem" body={c.problem} />
            <Block title="Solution" body={c.solution} />
            <Block title="Results" body={c.results} />
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="font-display text-3xl font-semibold leading-tight">
                Want similar outcomes for your network?
              </h2>
              <p className="mt-3 text-slate-300">
                We tailor every program to local context — regulation, climate,
                comms, channels and revenue protection profile.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/contact">Talk to our team</Button>
                <Button href="/solutions" variant="ghost">
                  Explore solutions
                </Button>
              </div>
            </div>
            <LeadForm sourcePage={`/case-studies/${c.slug}`} compact />
          </div>
        </Container>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-5 shadow-card backdrop-blur">
      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{label}</p>
      <p className="mt-2 font-display text-3xl font-semibold text-brand-light">
        {value}
      </p>
    </div>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 shadow-card backdrop-blur">
      <h3 className="font-display text-base font-semibold text-slate-50">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{body}</p>
    </div>
  );
}
