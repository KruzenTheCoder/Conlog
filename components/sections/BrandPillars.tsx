"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import type { SectionRecord } from "@/lib/types";

interface Pillar {
  icon?: string;
  title?: string;
  name?: string;
  body: string;
}

export function BrandPillars({ section }: { section: SectionRecord }) {
  const pillars =
    (section.data as { pillars?: Pillar[] } | null)?.pillars ?? [];

  return (
    <section className="relative w-full h-full rounded-[2rem] overflow-hidden bg-[#011A27] text-white p-10 md:p-12 lg:p-16 shadow-2xl">
      {/* Background Graphics */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div 
          className="absolute inset-0 bg-no-repeat bg-right bg-contain"
          style={{ backgroundImage: "url('/hero-bg.png')", backgroundPosition: "150% 50%" }}
        />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-transparent to-[#011A27]" />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-12">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-400 mb-3">
            OUR BRAND PILLARS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] max-w-md">
            {section.title}
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-4 sm:grid-cols-3 mt-auto"
        >
          {pillars.map((p, i) => (
            <motion.div
              key={p.title || p.name}
              variants={fadeInUp}
              className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#004B87]/20 p-6 backdrop-blur-md transition-all hover:bg-[#004B87]/40"
            >
              <div className="relative">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 mb-4">
                  <Icon name={p.icon ?? "Lightbulb"} className="h-5 w-5" />
                </span>
                <p className="font-display text-[10px] font-medium uppercase tracking-widest text-cyan-400/80 mb-2">
                  0{i + 1}
                </p>
                <h3 className="font-display text-lg font-semibold text-white mb-3">
                  {p.title || p.name}
                </h3>
                <p className="text-[11px] leading-relaxed text-slate-300">
                  {p.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
