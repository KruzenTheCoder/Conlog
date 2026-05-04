"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import type { SectionRecord } from "@/lib/types";

export function Awards({ section }: { section: SectionRecord }) {
  const awards = (section.data as { awards?: string[] } | null)?.awards ?? [];
  return (
    <Section
      eyebrow="Awards & accreditation"
      title={section.title}
      subtitle={section.subtitle}
    >
      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2"
      >
        {awards.map((a) => (
          <motion.li
            key={a}
            variants={fadeInUp}
            className="group flex items-start gap-4 rounded-2xl border border-slate-800/80 bg-slate-900/50 p-5 shadow-card backdrop-blur transition-colors hover:border-accent/40"
          >
            <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-accent/15 text-accent ring-1 ring-accent/30">
              <Trophy className="h-5 w-5" />
            </span>
            <p className="text-sm leading-relaxed text-slate-200">{a}</p>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
