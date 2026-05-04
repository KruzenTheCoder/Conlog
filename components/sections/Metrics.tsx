"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import type { SectionRecord } from "@/lib/types";
import { ShieldCheck, Globe, Gauge, Home } from "lucide-react";

export function Metrics({ section }: { section: SectionRecord }) {
  const metrics = (section.data as any)?.metrics ?? [];

  const getIcon = (index: number) => {
    switch(index) {
      case 0: return <ShieldCheck className="h-5 w-5 text-slate-400" />;
      case 1: return <Globe className="h-5 w-5 text-slate-400" />;
      case 2: return <Gauge className="h-5 w-5 text-slate-400" />;
      case 3: return <Home className="h-5 w-5 text-slate-400" />;
      default: return null;
    }
  };

  return (
    <section className="relative w-full pt-4 pb-2">
      <div className="relative mb-6">
        {/* Faint world map background placeholder */}
        <div className="absolute -inset-x-10 -inset-y-10 opacity-20 pointer-events-none bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-contain bg-center bg-no-repeat" />
        
        <h2 className="relative text-2xl md:text-3xl font-bold text-[#011A27]">
          {section.title}
        </h2>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-4 grid-cols-2 md:grid-cols-4 relative z-10"
      >
        {metrics.map((m: any, i: number) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            className="relative overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-b from-white to-[#E6F0F7] p-5 shadow-[0_8px_30px_rgba(0,75,135,0.08)] transition-transform hover:-translate-y-1"
          >
            {/* Bottom Cyan Glow */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-cyan-400 opacity-80" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-4 bg-cyan-400/30 blur-md" />

            <div className="flex justify-between items-start mb-2">
              <p className="text-3xl lg:text-4xl font-bold text-[#004B87] tracking-tight">
                {m.value}
              </p>
              <div className="p-1 rounded-full bg-slate-100">
                {getIcon(i)}
              </div>
            </div>
            <p className="text-[11px] font-medium leading-tight text-slate-500">
              {m.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}