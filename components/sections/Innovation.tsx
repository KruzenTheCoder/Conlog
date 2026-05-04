"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import type { SectionRecord } from "@/lib/types";

interface Pillar {
  label: string;
  value: string;
}

export function Innovation({ section }: { section: SectionRecord }) {
  const pillars =
    (section.data as { pillars?: Pillar[] } | null)?.pillars ?? [];

  return (
    <Section
      eyebrow="Engineering & innovation"
      title={section.title}
      subtitle={section.subtitle}
    >
      <div className="grid gap-8 md:grid-cols-12 md:items-center">
        <div className="md:col-span-5">
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-950 p-8">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand/30 blur-3xl" />
            <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
            <p className="font-display text-2xl md:text-3xl font-semibold leading-tight text-slate-50">
              Built to <span className="gradient-text">withstand</span> tampering, harsh climates and decades of duty.
            </p>
            <p className="mt-3 text-sm text-slate-400">
              Every Conlog meter is engineered around standards-led
              architectures and rigorously tested against real-world conditions.
            </p>
          </div>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="md:col-span-7 grid grid-cols-2 gap-3"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.label}
              variants={fadeInUp}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-card backdrop-blur"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                {p.label}
              </p>
              <p className="mt-2 font-display text-lg font-semibold text-slate-50">
                {p.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
