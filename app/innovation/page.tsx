import { PageHeader } from "@/components/layout/PageHeader";
import type { Metadata } from "next";
import {
  Cloud,
  Cpu,
  GraduationCap,
  Layers,
  Lightbulb,
  Radio,
  ShieldCheck,
  Trophy,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Innovation",
  description:
    "Over 200 patents and trademarks, cloud-native platforms on AWS and Azure, and a MERSETA-accredited training academy. Explore how Conlog innovates.",
};

const PILLARS = [
  {
    icon: Lightbulb,
    title: "200+ patents & trademarks",
    body: "Decades of world-firsts in prepayment — from our first STS meter to today's cloud-native platforms.",
  },
  {
    icon: Cloud,
    title: "Cloud-native on AWS & Azure",
    body: "CoDi, POS and data storage hosted with high availability, fault tolerance and disaster recovery.",
  },
  {
    icon: Layers,
    title: "Multi-protocol engineering",
    body: "STS, DLMS and IEC profiles harmonised in one codebase — interoperable by design.",
  },
  {
    icon: Radio,
    title: "Comms agnostic",
    body: "Cellular, PLC and RF — choose the right transport for each feeder, region or regulator.",
  },
  {
    icon: ShieldCheck,
    title: "Cyber-secure firmware",
    body: "Signed OTA updates, secure boot and hardware-backed key storage on every Conlog meter.",
  },
  {
    icon: Cpu,
    title: "World-class engineering",
    body: "Embedded software, hardware, validation, mechanical, systems and R&D — under one roof.",
  },
];

const AWARDS = [
  "Inaugural Innovation Award for the prepayment industry",
  "Best Metering Company Award — 6 of 8 times",
  "Exporter of the Year Award",
  "Metering Excellence Award — Service Desk (2010)",
  "ESI Silver Award — Best Service Provider",
  "Impumelelo Top 300 Black Empowered Companies",
  "Technology Top 100 — ICT category, top three",
  "5-Star Gold Cleaner Production — 2024 KZN Waste Management Awards",
];

export default function InnovationPage() {
  return (
    <main className="relative bg-white min-h-screen">
      
      <PageHeader eyebrow="Innovation & Achievements" title="Engineering that compounds over decades." />
      <div className="relative py-16">
        <div
          className="absolute inset-0 z-0 opacity-80"
          style={{
            backgroundImage: "url('/light-bg.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "repeat-y",
          }}
        />
        <Container className="relative z-10">
          
          <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-slate-300">
            Innovation is at the heart of everything we do. Our engineering
            department combines unrivalled expertise across embedded software,
            hardware design, validation, mechanical and systems engineering —
            developing products that consistently outperform the rest.
          </p>
        
        </Container>
      </div>
    

      <Section title="Where we invest" eyebrow="R&D pillars">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="group rounded-3xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-card backdrop-blur transition-all hover:-translate-y-1 hover:border-brand/40"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/15 text-brand-light ring-1 ring-brand/30">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-slate-50">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Conlog Cloud Platform"
        title="Driving innovation through cloud-based technology."
        subtitle="A resilient and secure foundation for utility providers — hosted on AWS or Microsoft Azure with high availability, fault tolerance and disaster recovery."
      >
        <div className="grid gap-5 md:grid-cols-3">
          <CloudCard title="CoDi platform" body="Revenue management and collection, hosted in the cloud with enterprise-grade resilience." />
          <CloudCard title="POS systems" body="Reliable, always-on retail channels for prepayment and vending at any scale." />
          <CloudCard title="Data storage" body="Secure, compliant storage with disaster recovery — uninterrupted service for utilities and their customers." />
        </div>
      </Section>

      <Section
        eyebrow="Conlog Training Academy"
        title="Preparing the innovators of tomorrow."
        subtitle="A dedicated MERSETA-accredited training facility covering all aspects of smart prepayment solutions — product application, installation and commissioning."
      >
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-brand/15 via-slate-900 to-slate-950 p-8 md:p-10">
          <div className="flex flex-wrap items-start gap-6">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand/20 text-brand-light ring-1 ring-brand/30">
              <GraduationCap className="h-7 w-7" />
            </span>
            <div className="max-w-2xl">
              <h3 className="font-display text-2xl font-semibold text-slate-50">
                MERSETA accredited · Delivered on-site or at our facility
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                We train utility teams, installers and partners — building the
                capability to deploy, commission and maintain smart prepayment
                systems for the long term.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button href="/contact" size="sm">
                  Enquire about training
                </Button>
                <Button
                  href="/solutions/conlog-training-academy"
                  variant="ghost"
                  size="sm"
                >
                  View academy details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Recognition" title="Awards">
        <ul className="grid gap-3 sm:grid-cols-2">
          {AWARDS.map((a) => (
            <li
              key={a}
              className="flex items-start gap-4 rounded-2xl border border-slate-800/80 bg-slate-900/50 p-5 shadow-card backdrop-blur"
            >
              <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-accent/15 text-accent ring-1 ring-accent/30">
                <Trophy className="h-5 w-5" />
              </span>
              <p className="text-sm leading-relaxed text-slate-200">{a}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="pb-28">
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-brand/15 via-slate-900 to-slate-950 p-10">
          <h2 className="font-display text-3xl font-semibold leading-tight">
            Partner with our R&amp;D team
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Co-develop next-generation smart metering for your network,
            protocol or channel context. We work with utilities, regulators and
            channel partners across three continents.
          </p>
          <div className="mt-6">
            <Button href="/contact">Start a conversation</Button>
          </div>
        </div>
      </Section>
        </main>
  );
}

function CloudCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-card backdrop-blur">
      <h3 className="font-display text-base font-semibold text-slate-50">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">{body}</p>
    </div>
  );
}
