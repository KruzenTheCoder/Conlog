"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp, viewportOnce } from "@/lib/motion";
import type { SectionRecord } from "@/lib/types";

export function Milestone({ section }: { section: SectionRecord }) {
  const data = (section.data as any) ?? {};

  return (
    <section className="relative w-full">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto max-w-4xl text-center px-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#011A27] mb-6">
          {section.title}
        </h2>
        <p className="text-base md:text-lg text-[#0F172A] mb-6 max-w-3xl mx-auto leading-relaxed">
          {section.subtitle}
        </p>
        <p className="text-base md:text-lg text-[#0F172A] mb-10 max-w-3xl mx-auto leading-relaxed">
          {data.body}
        </p>
        {data.cta_label && data.cta_url && (
          <a 
            href={data.cta_url} 
            className="inline-flex items-center gap-2 rounded-full bg-[#004B87] hover:bg-[#003C6C] text-white px-8 py-3.5 text-sm font-medium transition-colors shadow-lg shadow-blue-900/20"
          >
            {data.cta_label}
            <ArrowRight className="h-4 w-4" />
          </a>
        )}
      </motion.div>
    </section>
  );
}