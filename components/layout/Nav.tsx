"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

const NAV = [
  {
    label: "Our Business",
    href: "/our-business",
    items: [
      { href: "/our-business/what-we-do", label: "What we do" },
      { href: "/our-business/company-profile", label: "Company profile" },
      { href: "/our-business/awards-accreditations", label: "Awards & Accreditations" },
      { href: "/our-business/global-innovations-achievements", label: "Global Innovations & Achievements" },
      { href: "/our-business/our-history", label: "Our history" },
      { href: "/our-business/our-shareholding", label: "Our shareholding" },
    ],
  },
  {
    label: "Our Offer",
    href: "/our-offer",
    items: [
      { href: "/our-offer/market-segments", label: "Market segments" },
      { href: "/our-offer/our-products", label: "Our products" },
      { href: "/our-offer/geographic-footprint", label: "Geographic footprint" },
      { href: "/our-offer/conlog-training-academy", label: "Conlog Training Academy" },
      { href: "/our-offer/conlog-cloud-platform", label: "Conlog Cloud Platform" },
    ],
  },
  { href: "/innovation", label: "Innovation" },
  {
    label: "Our People",
    href: "/our-people",
    items: [
      { href: "/our-people/executive-team", label: "Executive Team" },
      { href: "/our-people/conlog-culture", label: "Conlog Culture" },
      { href: "/our-people/careers", label: "Careers / Job Opportunities" },
    ],
  },
  { href: "/our-impact", label: "Our Impact" },
  { href: "/news-media", label: "News & Media" },
  { href: "/rt29", label: "RT29" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="absolute top-0 z-50 w-full px-6 py-6 md:px-10 flex items-center justify-between pointer-events-none">
      {/* Logo Pill */}
      <Link 
        href="/" 
        className="pointer-events-auto flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-full px-5 py-2.5 backdrop-blur-md hover:bg-white/[0.06] transition-colors"
      >
        <img src="/logo.svg" alt="Conlog Logo" className="h-6 w-auto object-contain" />
      </Link>

      {/* Links */}
      <nav className="pointer-events-auto hidden lg:flex items-center gap-8 text-[13px] text-white/80 font-medium tracking-wide">
        {NAV.map((item) => {
          const hasDropdown = !!item.items;
          const active = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => hasDropdown && setActiveDropdown(item.label)}
              onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
            >
              <Link
                href={item.href || "#"}
                className={cn(
                  "flex items-center gap-1.5 transition-colors py-2",
                  active || activeDropdown === item.label ? "text-white" : "hover:text-white"
                )}
              >
                {item.label}
                {hasDropdown && <ChevronDown className="h-3 w-3 opacity-60" />}
              </Link>

              {hasDropdown && (
                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full pt-2"
                    >
                      <div className="w-64 rounded-xl border border-white/10 bg-slate-900/90 p-2 shadow-2xl backdrop-blur-xl">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={cn(
                              "block rounded-md px-4 py-2.5 text-[13px] transition-colors",
                              pathname === subItem.href
                                ? "bg-cyan-500/20 text-cyan-300"
                                : "text-slate-300 hover:bg-white/5 hover:text-white"
                            )}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          );
        })}
      </nav>

      {/* Contact Pill */}
      <Link 
        href="/contact-us" 
        className="pointer-events-auto hidden md:block bg-white/[0.05] border border-white/10 hover:bg-white/[0.1] rounded-full px-6 py-2.5 text-[13px] text-white font-medium backdrop-blur-md transition-colors"
      >
        Contact us
      </Link>
    </header>
  );
}
