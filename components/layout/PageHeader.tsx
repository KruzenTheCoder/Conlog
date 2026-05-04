"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

interface PageHeaderProps {
  title: string;
  eyebrow?: string;
}

export function PageHeader({ title, eyebrow }: PageHeaderProps) {
  return (
    <div className="relative w-full pt-40 pb-24 overflow-hidden bg-[#011A27]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-65"
        >
          <source src="/page-header-bg.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Gradient overlay for text readability and blending into the content below */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#011A27]/70 via-[#011A27]/40 to-white z-0" />

      <Container className="relative z-10 text-center flex flex-col items-center">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-[#011A27]/60 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-400 backdrop-blur-md shadow-[0_0_15px_rgba(0,229,255,0.15)]"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-lg"
        >
          {title}
        </motion.h1>
      </Container>
    </div>
  );
}