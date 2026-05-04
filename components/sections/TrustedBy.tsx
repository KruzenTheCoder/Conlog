"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import type { SectionRecord } from "@/lib/types";

export function TrustedBy({ section }: { section: SectionRecord }) {
  const logos = (section.data as { logos?: string[] } | null)?.logos ?? [];
  return (
    <Section
      eyebrow="Trusted partners"
      title={section.title}
      subtitle={section.subtitle}
      className="py-16 md:py-20"
    >
      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-800 bg-slate-800 sm:grid-cols-4 md:grid-cols-8"
      >
        {logos.map((name) => (
          <motion.li
            key={name}
            variants={fadeInUp}
            className="flex items-center justify-center bg-slate-950/80 px-4 py-6 text-sm font-medium tracking-wide text-slate-400 transition-colors hover:text-slate-200"
          >
            {name}
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
