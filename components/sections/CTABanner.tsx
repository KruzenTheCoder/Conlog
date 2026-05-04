"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { fadeInUp, viewportOnce } from "@/lib/motion";
import type { SectionRecord } from "@/lib/types";

export function CTABanner({ section }: { section: SectionRecord }) {
  const data = (section.data as { 
    ctaLabel?: string; 
    ctaHref?: string;
    primary_label?: string;
    primary_url?: string;
    variant?: string;
  }) ?? {};
  
  const label = data.primary_label || data.ctaLabel || "Talk to us";
  const href = data.primary_url || data.ctaHref || "/contact";
  const variantNum = data.variant === "secondary" ? "2" : "1";

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="relative overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-b from-white to-[#E6F0F7] p-8 shadow-[0_8px_30px_rgba(0,75,135,0.08)] flex flex-col h-full transition-transform hover:-translate-y-1"
    >
      {/* Number Badge */}
      <div className="mb-6 flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-500 shadow-sm">
        {variantNum}
      </div>

      <h3 className="font-display text-2xl font-bold leading-tight text-[#011A27] mb-3">
        {section.title}
      </h3>
      
      <p className="text-sm text-slate-600 mb-8 max-w-sm">
        {section.subtitle}
      </p>

      <div className="mt-auto pt-2">
        <a
          href={href}
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-[#004B87] transition-all hover:border-[#004B87]/30 hover:bg-[#F2FBE5] shadow-sm"
        >
          {label}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
}
