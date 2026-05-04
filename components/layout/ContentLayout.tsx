"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ContentSectionProps {
  title?: string;
  children: ReactNode;
  delay?: number;
}

export function ContentSection({ title, children, delay = 0 }: ContentSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="mb-12 bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200 shadow-[0_8px_30px_rgba(0,75,135,0.04)] relative overflow-hidden"
    >
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00E5FF] to-[#004B87]" />
      
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold text-[#011A27] mb-6">
          {title}
        </h2>
      )}
      <div className="text-slate-700 leading-relaxed space-y-4">
        {children}
      </div>
    </motion.div>
  );
}

export function ContentGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {children}
    </div>
  );
}

export function ContentCard({ title, children, icon, delay = 0 }: ContentSectionProps & { icon?: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="bg-white/80 p-6 rounded-2xl border border-slate-200 shadow-sm backdrop-blur-md hover:-translate-y-1 transition-transform"
    >
      {icon && <div className="mb-4 text-[#004B87] bg-[#004B87]/5 w-12 h-12 rounded-xl flex items-center justify-center">{icon}</div>}
      {title && <h3 className="text-xl font-bold text-[#011A27] mb-3">{title}</h3>}
      <div className="text-sm text-slate-600 leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
}