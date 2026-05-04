import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LeadForm } from "@/components/forms/LeadForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to a Conlog specialist about smart metering, prepayment and data solutions.",
};

export default function ContactPage() {
  return (
    <section className="relative pt-20 pb-24 md:pt-28">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-light/80">
              Talk to us
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
              Let&apos;s map your path from <span className="gradient-text">pilot to scale</span>.
            </h1>
            <p className="mt-4 max-w-md text-base text-slate-300">
              Tell us about your network, regulatory context and goals. A
              Conlog specialist will respond within one business day.
            </p>

            <ul className="mt-10 space-y-5 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand/15 text-brand-light ring-1 ring-brand/30">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-medium text-slate-100">Email</p>
                  <a
                    href="mailto:info@conlog.com"
                    className="text-brand-light hover:underline"
                  >
                    info@conlog.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand/15 text-brand-light ring-1 ring-brand/30">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-medium text-slate-100">Phone</p>
                  <p className="text-slate-300">+27 (0) 31 000 0000</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand/15 text-brand-light ring-1 ring-brand/30">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-medium text-slate-100">Headquarters</p>
                  <p className="text-slate-300">
                    Dube TradePort, La Mercy, Durban, South Africa
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <LeadForm sourcePage="/contact" />
        </div>
      </Container>
    </section>
  );
}
