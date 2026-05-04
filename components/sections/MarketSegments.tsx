"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import type { SectionRecord } from "@/lib/types";

interface Segment {
  icon?: string;
  title: string;
  items: string[];
}

export function MarketSegments({ section }: { section: SectionRecord }) {
  const segments =
    (section.data as { segments?: Segment[] } | null)?.segments ?? [];
  return (
    <Section
      eyebrow="Market segments"
      title={section.title}
      subtitle={section.subtitle}
      className="bg-slate-950/40"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-5 md:grid-cols-3"
      >
        {segments.map((s) => (
          <motion.div
            key={s.title}
            variants={fadeInUp}
            className="flex h-full flex-col rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/70 to-slate-950/70 p-6 shadow-card backdrop-blur"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/15 text-brand-light ring-1 ring-brand/30">
              <Icon name={s.icon} className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold text-slate-50">
              {s.title}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              {s.items.map((it) => (
                <li key={it} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-light" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
