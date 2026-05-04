import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { LeadForm } from "@/components/forms/LeadForm";
import { getSolutionBySlug, getSolutions } from "@/lib/queries";

export async function generateStaticParams() {
  const solutions = await getSolutions();
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = await getSolutionBySlug(slug);
  return {
    title: s?.name ?? "Solution",
    description: s?.positioning,
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = await getSolutionBySlug(slug);
  if (!s) notFound();

  return (
    <>
      <section className="relative pt-20 pb-12 md:pt-28">
        <Container>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-xs text-slate-400 transition-colors hover:text-slate-200"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All solutions
          </Link>
          <div className="mt-6 flex items-start gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand/15 text-brand-light ring-1 ring-brand/30">
              <Icon name={s.icon} className="h-6 w-6" />
            </span>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-light/80">
                {s.category.replace("-", " ")}
              </p>
              <h1 className="mt-2 font-display text-4xl md:text-5xl font-semibold leading-tight">
                {s.name}
              </h1>
              <p className="mt-3 max-w-2xl text-base text-slate-300">
                {s.positioning}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            <FeatureBlock title="Capabilities" items={s.features} />
            <FeatureBlock
              title="Benefits for utilities"
              items={s.benefits_utilities}
            />
            <FeatureBlock
              title="Benefits for consumers"
              items={s.benefits_consumers}
            />
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="font-display text-3xl font-semibold leading-tight">
                Pilot in weeks. Scale with confidence.
              </h2>
              <p className="mt-3 text-slate-300">
                Talk to our team about your network, regulatory context and
                integration needs. We&apos;ll map a pragmatic path from pilot to
                full rollout.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/contact">Talk to our team</Button>
                <Button href="/case-studies" variant="ghost">
                  See customer outcomes
                </Button>
              </div>
            </div>
            <LeadForm sourcePage={`/solutions/${s.slug}`} compact />
          </div>
        </Container>
      </section>
    </>
  );
}

function FeatureBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 shadow-card backdrop-blur">
      <h3 className="font-display text-base font-semibold text-slate-50">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-light" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
