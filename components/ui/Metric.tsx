"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";

interface MetricProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  format?: "compact" | "plain";
  duration?: number;
}

const compactFormatter = new Intl.NumberFormat("en", {
  notation: "compact",
  maximumFractionDigits: 1,
});
const plainFormatter = new Intl.NumberFormat("en");

export function Metric({
  value,
  label,
  suffix = "",
  prefix = "",
  format = "compact",
  duration = 1.6,
}: MetricProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const mv = useMotionValue(0);
  const formatter = format === "compact" ? compactFormatter : plainFormatter;
  const display = useTransform(mv, (v) =>
    `${prefix}${formatter.format(Math.round(v))}${suffix}`
  );

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [inView, value, duration, mv]);

  return (
    <div className="rounded-3xl border border-slate-800/80 bg-slate-900/50 p-6 shadow-card backdrop-blur">
      <motion.span
        ref={ref}
        className="font-display text-3xl md:text-4xl font-semibold text-brand-light"
      >
        <motion.span>{display}</motion.span>
      </motion.span>
      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
        {label}
      </p>
    </div>
  );
}
