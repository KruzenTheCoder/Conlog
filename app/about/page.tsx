import { PageHeader } from "@/components/layout/PageHeader";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Metric } from "@/components/ui/Metric";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Business",
  description:
    "Conlog designs, manufactures and delivers smart metering for electricity and water. Proudly South African, B-BBEE Level 1, with over 200 patents and deployments in 58+ countries.",
};

const DIFFERENTIATORS = [
  {
    title: "We understand your business",
    body: "We gain an understanding of each customer's business so we can assist them in meeting their objectives.",
  },
  {
    title: "Market-led innovation",
    body: "Our offer is developed based on market-led innovation so you have access to the best smart solutions on the market today.",
  },
  {
    title: "Bespoke solutions",
    body: "We provide bespoke solutions according to your exact specifications — not a one-size-fits-all product range.",
  },
  {
    title: "Exceptional customer service",
    body: "We are 100% committed to providing exceptional customer service, delivered by a highly motivated, experienced team.",
  },
  {
    title: "Superior technical support",
    body: "Qualified engineers and technicians provide superior technical support both locally and internationally.",
  },
  {
    title: "End-to-end manufacturer",
    body: "The only end-to-end metering manufacturer in sub-Saharan Africa, backed by nearly six decades of experience.",
  },
];

const TIMELINE: { year: string; label: string; body: string }[] = [
  {
    year: "Late 1980s",
    label: "Founded in Durban",
    body: "Conlog is established in Durban, South Africa as an electronics design company focused on industrial monitoring and control.",
  },
  {
    year: "1990s",
    label: "Into prepayment",
    body: "Conlog diversifies into electricity prepayment, lighting, automotive and automation — eventually specialising in smart prepayment metering.",
  },
  {
    year: "2000s",
    label: "Schneider Electric era",
    body: "Conlog joins the Schneider Electric group as prepayment technology reaches global scale.",
  },
  {
    year: "2014",
    label: "CIG chapter",
    body: "Conlog becomes part of the Consolidated Infrastructure Group (CIG).",
  },
  {
    year: "2017",
    label: "Dube TradePort",
    body: "After almost 30 years in Overport, Conlog moves to a state-of-the-art facility at Dube TradePort, La Mercy.",
  },
  {
    year: "Later",
    label: "Lagos plant + Conlog Group",
    body: "Manufacturing plant opens in Lagos, Nigeria. Conlog Group is formed. Conlog Direct B2C and the Platform Business launch.",
  },
  {
    year: "Recent",
    label: "iDM APEX & iDM Hydra",
    body: "Launch of the new smart electricity meter iDM APEX and smart water meter iDM Hydra — the current flagship product family.",
  },
  {
    year: "Today",
    label: "CIH / NIMBLE Group",
    body: "Conlog becomes part of the CIH / NIMBLE Group — a new chapter of growth, innovation and sustainability.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative bg-white min-h-screen">
      
      <PageHeader eyebrow="Our Business" title="We enrich lives by connecting people and resources." />
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
            Conlog is a manufacturer of innovative, reliable and convenient
            smart metering solutions for demand management, revenue enhancement
            and managed services. With decades of experience and more than 200
            patents and trademarks, our meters are used in more than 58 countries
            worldwide.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge>Proudly South African</Badge>
            <Badge>Black industrialist · B-BBEE Level 1</Badge>
            <Badge>End-to-end metering manufacturer</Badge>
          </div>
        
        </Container>
      </div>
    

      <Section id="company-profile" title="By the numbers" eyebrow="Our reach" align="left">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Metric value={200} suffix="+" label="Patents & trademarks" format="plain" />
          <Metric value={17_000_000} suffix="+" label="Smart meters in the field" />
          <Metric value={58} suffix="+" label="Countries" format="plain" />
          <Metric value={50_000_000} suffix="+" label="Households with power" />
        </div>
      </Section>

      <Section
        eyebrow="The Conlog difference"
        title="Why utilities choose us"
        subtitle="Hundreds of years of collective experience in smart prepayment — focused on your outcomes."
      >
        <div className="grid gap-px overflow-hidden rounded-3xl border border-slate-800 bg-slate-800 md:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIATORS.map((d) => (
            <div key={d.title} className="bg-slate-950/80 p-6">
              <h3 className="font-display text-base font-semibold text-slate-50">
                {d.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {d.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="history"
        eyebrow="Our history"
        title="Four decades of metering excellence."
        subtitle="From an electronics design house in Durban to the only end-to-end metering manufacturer in sub-Saharan Africa."
      >
        <ol className="relative space-y-8 border-l border-slate-800/80 pl-6">
          {TIMELINE.map((t, i) => (
            <li key={t.year} className="relative">
              <span
                className="absolute -left-[30px] top-1.5 grid h-4 w-4 place-items-center rounded-full bg-brand text-slate-950 ring-4 ring-slate-950"
                aria-hidden
              >
                <span className="text-[8px] font-bold">{i + 1}</span>
              </span>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-brand-light/80">
                {t.year}
              </p>
              <h3 className="mt-1 font-display text-lg font-semibold text-slate-50">
                {t.label}
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-slate-300">{t.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="quality" className="pb-28">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-brand/15 via-slate-900 to-slate-950 p-8">
            <h2 className="font-display text-2xl font-semibold">
              Quality, safety & the environment
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Our SHEQ (Safety, Health, Environment and Quality) policy helps
              us manage risk, maintain compliance and drive continuous
              improvement — from accident reduction to environmental
              sustainability.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8">
            <h2 className="font-display text-2xl font-semibold">
              Commitment to inclusion
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              As a proudly South African black industrialist company with local
              shareholders and 98% locally manufactured electrical meters,
              Conlog holds B-BBEE Level 1 certification.
            </p>
            <div className="mt-5">
              <Button href="/contact" variant="ghost" size="sm">
                Request our latest certification
              </Button>
            </div>
          </div>
        </div>
      </Section>
        </main>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-light">
      {children}
    </span>
  );
}
