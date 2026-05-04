"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Metric } from "@/components/ui/Metric";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import type { SectionRecord } from "@/lib/types";

interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export function GlobalPresence({ section }: { section: SectionRecord }) {
  const stats = (section.data as { stats?: Stat[] } | null)?.stats ?? [];
  return (
    <Section
      eyebrow="Global presence"
      title={section.title}
      subtitle={section.subtitle}
      className="bg-slate-950/40"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((s) => (
          <motion.div key={s.label} variants={fadeInUp}>
            <Metric
              label={s.label}
              value={s.value}
              suffix={s.suffix}
              prefix={s.prefix}
              format={s.value >= 1000 ? "compact" : "plain"}
            />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
