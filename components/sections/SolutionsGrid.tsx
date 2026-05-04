"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { cardHover, fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import type { SectionRecord } from "@/lib/types";

interface Card {
  icon?: string;
  title: string;
  description: string;
  href?: string;
}

export function SolutionsGrid({ section }: { section: SectionRecord }) {
  const cards = (section.data as { cards?: Card[] } | null)?.cards ?? [];
  return (
    <Section
      eyebrow="Solutions"
      title={section.title}
      subtitle={section.subtitle}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
      >
        {cards.map((card) => (
          <motion.div key={card.title} variants={fadeInUp}>
            <motion.div
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              className="group h-full rounded-3xl border border-slate-800/80 bg-slate-900/50 p-6 shadow-card backdrop-blur transition-colors hover:border-brand/40"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand/15 text-brand-light ring-1 ring-brand/30">
                  <Icon name={card.icon} className="h-5 w-5" />
                </span>
                {card.href && (
                  <Link
                    href={card.href}
                    aria-label={`Learn more about ${card.title}`}
                    className="text-slate-400 transition-colors group-hover:text-brand-light"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                )}
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-slate-50">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">{card.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
