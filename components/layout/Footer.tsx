import Link from "next/link";
import { MapPin, Mail, Globe2 } from "lucide-react";
import { Container } from "@/components/ui/Container";

const FOOTER_NAV: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Our Business",
    links: [
      { href: "/about", label: "What we do" },
      { href: "/about#company-profile", label: "Company profile" },
      { href: "/about#history", label: "Our history" },
      { href: "/about#quality", label: "Quality & accreditations" },
    ],
  },
  {
    title: "Our Offer",
    links: [
      { href: "/solutions", label: "Our products" },
      { href: "/solutions#market-segments", label: "Market segments" },
      { href: "/solutions/conlog-cloud-platform", label: "Conlog Cloud Platform" },
      { href: "/solutions/conlog-training-academy", label: "Training Academy" },
    ],
  },
  {
    title: "Engagement",
    links: [
      { href: "/case-studies", label: "Impact & case studies" },
      { href: "/innovation", label: "Innovation" },
      { href: "/contact", label: "Contact us" },
      { href: "/contact#rt29", label: "RT29 enquiries" },
    ],
  },
  {
    title: "Affiliations",
    links: [
      { href: "/about#media", label: "Media Affiliations" },
      { href: "/about#industry", label: "Industry Affiliations" },
      { href: "/about#technology", label: "Technology Affiliations" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t-4 border-cyan-500/20 bg-[#011A27]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent"
      />
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link
              href="/"
              aria-label="Conlog — home"
              className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-full px-5 py-2.5 backdrop-blur-md hover:bg-white/[0.06] transition-colors w-fit"
            >
              <img src="/logo.svg" alt="Conlog Logo" className="h-6 w-auto object-contain" />
              <span className="text-white font-medium text-sm flex items-center gap-2">
                Conlog <span className="text-[10px] text-cyan-400/80 tracking-[0.2em] uppercase mt-0.5">Think Smarter</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-300">
              World leaders in smart metering solutions. 200+ patents,
              17&nbsp;million+ meters deployed, and a presence in 58+ countries
              across Africa, the Middle East and South America.
            </p>

            <ul className="mt-6 space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-cyan-400" />
                Dube TradePort, La Mercy, Durban, South Africa
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-cyan-400" />
                <a href="mailto:info@conlog.com" className="hover:text-slate-200">
                  info@conlog.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Globe2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-cyan-400" />
                Available in EN · AR · FR · ES · PT
              </li>
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 md:col-span-8">
            {FOOTER_NAV.map((col) => (
              <div key={col.title}>
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-cyan-400/80">
                  {col.title}
                </p>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-slate-300 transition-colors hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p>© {new Date().getFullYear()} Conlog. All rights reserved.</p>
            <span className="hidden md:inline">·</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.18em] text-cyan-400">
              B-BBEE Level 1
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.18em] text-slate-300">
              Proudly South African
            </span>
          </div>
          <p className="text-slate-400">
            Enriching lives by connecting people and resources.
          </p>
        </div>
      </Container>
    </footer>
  );
}
