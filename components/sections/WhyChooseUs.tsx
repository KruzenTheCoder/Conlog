"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import type { SectionRecord } from "@/lib/types";

interface Reason {
  title: string;
  body: string;
}

export function WhyChooseUs({ section }: { section: SectionRecord }) {
  const reasons =
    (section.data as { reasons?: Reason[] } | null)?.reasons ?? [];

  return (
    <Section
      eyebrow="Why Conlog"
      title={section.title}
      subtitle={section.subtitle}
      className="bg-slate-950/40"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-px overflow-hidden rounded-3xl border border-slate-800 bg-slate-800/80 sm:grid-cols-2 lg:grid-cols-4"
      >
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            variants={fadeInUp}
            className="bg-slate-950/80 p-6"
          >
            <p className="font-display text-3xl font-semibold text-brand-light">
              0{i + 1}
            </p>
            <h3 className="mt-3 font-display text-base font-semibold text-slate-50">
              {r.title}
            </h3>
            <p className="mt-2 text-sm text-slate-300">{r.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
