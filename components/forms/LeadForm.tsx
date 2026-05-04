"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Field, Input, Select, Textarea } from "@/components/ui/Input";
import { cn } from "@/lib/cn";

interface LeadFormProps {
  sourcePage: string;
  compact?: boolean;
}

type Status = "idle" | "submitting" | "success" | "error";

export function LeadForm({ sourcePage, compact = false }: LeadFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    payload.source_page = sourcePage;

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error ?? "Submission failed");
      }
      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-start gap-3 rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-emerald-100"
      >
        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-300" />
        <div>
          <p className="font-display text-base font-semibold">
            Thanks — we&apos;ll be in touch.
          </p>
          <p className="mt-1 text-sm text-emerald-200/80">
            A Conlog specialist will reach out within one business day.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-card backdrop-blur",
        compact ? "space-y-4" : "space-y-5"
      )}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <Input id="name" name="name" required autoComplete="name" />
        </Field>
        <Field label="Work email" htmlFor="email">
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
          />
        </Field>
        <Field label="Company" htmlFor="company">
          <Input id="company" name="company" autoComplete="organization" />
        </Field>
        <Field label="Role" htmlFor="role">
          <Input id="role" name="role" placeholder="e.g. Head of Metering" />
        </Field>
        <Field label="Country" htmlFor="country">
          <Input id="country" name="country" autoComplete="country-name" />
        </Field>
        <Field label="I am a..." htmlFor="audience_type">
          <Select id="audience_type" name="audience_type" defaultValue="utility">
            <option value="utility">Utility</option>
            <option value="partner">Partner / channel</option>
            <option value="consumer">Consumer</option>
            <option value="other">Other</option>
          </Select>
        </Field>
      </div>
      <Field label="How can we help?" htmlFor="message">
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your network, scale and timelines."
        />
      </Field>

      {error && <p className="text-xs text-red-300">{error}</p>}

      <div className="flex items-center justify-between gap-3 pt-1">
        <p className="text-[11px] text-slate-500">
          By submitting you agree to our privacy notice.
        </p>
        <Button
          type="submit"
          disabled={status === "submitting"}
          className="min-w-[140px]"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            "Submit"
          )}
        </Button>
      </div>
    </form>
  );
}
