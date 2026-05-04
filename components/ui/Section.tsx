"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { Container } from "./Container";
import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string | null;
  subtitle?: string | null;
  className?: string;
  children?: ReactNode;
  align?: "left" | "center";
}

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  className,
  children,
  align = "left",
}: SectionProps) {
  return (
    <section id={id} className={cn("relative py-20 md:py-28", className)}>
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {(eyebrow || title || subtitle) && (
            <motion.div
              variants={fadeInUp}
              className={cn(
                "mb-12 max-w-2xl",
                align === "center" && "mx-auto text-center"
              )}
            >
              {eyebrow && (
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-light/80">
                  {eyebrow}
                </p>
              )}
              {title && (
                <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight text-slate-50">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="mt-4 text-base text-slate-300">{subtitle}</p>
              )}
            </motion.div>
          )}
          {children}
        </motion.div>
      </Container>
    </section>
  );
}
