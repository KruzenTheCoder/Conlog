"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Activity,
  Droplets,
  Globe,
  ShieldCheck,
  Zap,
  Gauge,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { PageRecord } from "@/lib/types";

/**
 * Home hero — heavily branded around the Conlog identity:
 *   - "Think Smarter" tagline
 *   - Lime-green / gold palette
 *   - Live "grid signal" bars animation
 *   - Electricity + water focus (dual-utility)
 */
export function HomeHero({ page }: { page: PageRecord }) {
  return (
    <section className="relative min-h-[900px] w-full overflow-hidden bg-[#01141A] font-sans flex flex-col justify-between">
      {/* Exact Background Image -> Now a Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#01141A]/40" />
      </div>

      {/* Floating text around the globe (approximate positions relative to the background image) */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block">
        <span className="absolute top-[38%] right-[32%] text-cyan-200/90 text-[11px] md:text-[13px] tracking-[0.2em] font-medium drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]">RENEWABLES</span>
        <span className="absolute top-[46%] right-[25%] text-cyan-200/90 text-[11px] md:text-[13px] tracking-[0.2em] font-medium drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]">EFFICIENCY</span>
        <span className="absolute top-[35%] right-[12%] text-cyan-200/90 text-[11px] md:text-[13px] tracking-[0.2em] font-medium drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]">RENEWABLITY</span>
        <span className="absolute top-[55%] right-[38%] text-cyan-200/90 text-[11px] md:text-[13px] tracking-[0.2em] font-medium drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]">EFFICIENCY</span>
        <span className="absolute top-[58%] right-[16%] text-cyan-200/90 text-[11px] md:text-[13px] tracking-[0.2em] font-medium drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]">SUSTAINABILITY</span>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 pt-36 pb-12 flex-1 flex flex-col">
        {/* Top Text Content */}
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-slate-300 backdrop-blur-md mb-6">
            <span className="text-cyan-400">#</span> THINK SMARTER · SMART METERING SINCE 1987
          </div>

          <h1 className="text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight text-white mb-6">
            World leaders in smart<br />
            <span className="bg-gradient-to-r from-cyan-400 to-[#8DC63F] bg-clip-text text-transparent">metering solutions</span>
          </h1>

          <p className="text-[15px] text-slate-300 mb-8 max-w-xl leading-relaxed">
            Backed by decades of experience, innovation and expertise, Conlog delivers smart metering solutions that support utility management, revenue enhancement, and smart grid evolution across 58+ countries.
          </p>

          <div className="flex items-center gap-6 mb-12">
            <a 
              href="/solutions" 
              className="inline-flex items-center rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-white backdrop-blur-md transition-all px-6 py-3 text-sm font-medium"
            >
              Explore our product range <ArrowRight className="ml-2 h-4 w-4 opacity-70" />
            </a>
            <a 
              href="/about" 
              className="text-sm font-medium text-white hover:text-cyan-400 transition-colors"
            >
              View our company profile
            </a>
          </div>

          {/* Innovation Card */}
          <motion.div 
            className="rounded-[1.25rem] border border-white/10 bg-white/[0.02] p-5 shadow-2xl backdrop-blur-md max-w-lg relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none" />
            <div className="relative flex justify-between items-start gap-4">
              <div>
                <h3 className="text-lg font-medium text-cyan-300 mb-2">Innovation</h3>
                <p className="text-[12px] leading-relaxed text-slate-300">
                  With a constantly-expanding open hub with dedicated resources, Conlog drives, develops & incubates ideas from all corners of our business, empowering us to stay ahead of industry trends & disrupt the markets through innovation
                </p>
              </div>
              <div className="w-32 h-16 shrink-0 flex items-center justify-end gap-1 opacity-70">
                {/* Simulated Audio/Wave Spectrum */}
                {[40, 70, 45, 90, 60, 30, 80, 50, 100, 60, 40].map((h, i) => (
                  <motion.div
                    key={i}
                    className="w-1 rounded-full bg-gradient-to-t from-cyan-600 to-cyan-300"
                    initial={{ height: "20%" }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section: Badges & Dashboard */}
        <motion.div 
          className="mt-auto pt-16 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-6 mb-6">
            <TrustBadge icon={<Globe className="h-4 w-4" />} label="DEPLOYED IN 58+ COUNTRIES" />
            <TrustBadge icon={<Gauge className="h-4 w-4" />} label="17M+ SMART METERS IN FIELD" />
            <TrustBadge icon={<Award className="h-4 w-4" />} label="200+ PATENTS & TRADEMARKS" />
          </div>

          {/* 3 Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <DashboardCardLiveGrid />
            <DashboardCardApex />
            <DashboardCardHydra />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 backdrop-blur-md">
        {icon}
      </div>
      <span className="text-[11px] font-semibold tracking-[0.08em] text-white/90">
        {label}
      </span>
    </div>
  );
}

function DashboardCardLiveGrid() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#061820]/60 p-5 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
      <div className="flex items-center justify-between mb-4">
        <p className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-slate-300 font-medium">
          <Zap className="h-3.5 w-3.5 text-cyan-400" />
          LIVE GRID SIGNAL
        </p>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-medium text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Stable
        </span>
      </div>
      
      {/* SVG Wave Chart matching the image */}
      <div className="h-16 w-full relative">
        <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full drop-shadow-[0_0_6px_rgba(0,229,255,0.4)]">
          <path d="M0,25 Q15,5 30,20 T60,25 T80,10 T100,20" fill="none" stroke="url(#cyanGrad)" strokeWidth="1.5" />
          <path d="M0,25 Q15,5 30,20 T60,25 T80,10 T100,20 L100,40 L0,40 Z" fill="url(#cyanFill)" opacity="0.3" />
          <defs>
            <linearGradient id="cyanGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="100%" stopColor="#8DC63F" />
            </linearGradient>
            <linearGradient id="cyanFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="mt-2 flex items-center justify-between text-[9px] text-slate-400 border-b border-white/10 pb-3">
        <span>Last 14 minutes</span>
        <span className="text-emerald-400">+0.0% vs baseline</span>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-4">
        <div>
          <p className="text-[10px] text-slate-500 mb-0.5">Meters</p>
          <p className="text-xl font-semibold text-white">17M+</p>
        </div>
        <div>
          <p className="text-[10px] text-slate-500 mb-0.5">Patents</p>
          <p className="text-xl font-semibold text-white">200+</p>
        </div>
      </div>
    </div>
  );
}

function DashboardCardApex() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#061820]/60 p-5 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
      <div className="flex items-center justify-between mb-1">
        <p className="flex items-center gap-2 text-[11px] text-slate-300 tracking-wider uppercase">
          <Zap className="h-3.5 w-3.5 text-cyan-400" />
          Electricity
        </p>
        <span className="text-[9px] text-emerald-400 flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Electricity</span>
      </div>
      <p className="font-display text-2xl font-bold text-white mb-5">
        iDM APEX
      </p>

      <div className="grid grid-cols-2 gap-4 h-[70px]">
        {/* Performance Circle */}
        <div className="relative h-full aspect-square rounded-full border-4 border-white/5 flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full -rotate-90 drop-shadow-[0_0_4px_rgba(0,229,255,0.5)]">
            <circle cx="50%" cy="50%" r="42%" fill="none" stroke="#00E5FF" strokeWidth="8%" strokeDasharray="264" strokeDashoffset="5" />
          </svg>
          <div className="text-center">
            <span className="block text-[8px] text-slate-400">Performance</span>
            <span className="block text-sm font-bold text-white leading-tight">99.5%</span>
          </div>
        </div>
        
        {/* Efficiency Arc */}
        <div className="flex flex-col justify-end pb-1 relative">
          <div className="absolute top-2 left-0 right-0 h-10">
            <svg viewBox="0 0 100 50" className="w-full h-full drop-shadow-[0_0_4px_rgba(0,229,255,0.5)]">
              <path d="M10,45 A40,40 0 0,1 90,45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" strokeLinecap="round" />
              <path d="M10,45 A40,40 0 0,1 70,15" fill="none" stroke="#00E5FF" strokeWidth="8" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-[9px] text-center text-slate-400 z-10 mt-auto">Operational efficiency</span>
        </div>
      </div>
    </div>
  );
}

function DashboardCardHydra() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#061820]/60 p-5 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
      <div className="flex items-center justify-between mb-1">
        <p className="flex items-center gap-2 text-[11px] text-slate-300 tracking-wider uppercase">
          <Droplets className="h-3.5 w-3.5 text-cyan-400" />
          Water
        </p>
        <span className="text-[9px] text-cyan-400 flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Water</span>
      </div>
      <p className="font-display text-2xl font-bold text-white mb-3">
        iDM Hydra
      </p>

      {/* Internal Pipe Graphic to replace the background dependency */}
      <div className="h-10 w-full relative mb-3">
        <div className="absolute top-1/2 -translate-y-1/2 w-full h-3 bg-gradient-to-b from-[#1E293B] to-[#0F172A] border-y border-[#334155] rounded-sm flex items-center">
          <div className="absolute left-2 h-5 w-2 bg-cyan-900/80 border border-cyan-500/50 rounded-sm" />
          <div className="absolute right-10 h-5 w-2 bg-cyan-900/80 border border-cyan-500/50 rounded-sm" />
          <div className="h-1.5 w-full mx-6 bg-cyan-500/30 rounded-full shadow-[0_0_8px_rgba(0,229,255,0.6)]" />
        </div>
      </div>

      <div className="flex justify-between items-end">
        <div>
          <p className="text-[9px] text-slate-400 mb-0.5">Resource Conservation</p>
          <p className="text-xl font-semibold text-white">13.2%</p>
        </div>
        {/* Water Tank */}
        <div className="h-10 w-8 rounded-b-lg rounded-t-sm border border-cyan-500/30 bg-[#0F172A] relative overflow-hidden shadow-[0_0_10px_rgba(0,229,255,0.15)]">
          <div className="absolute bottom-0 inset-x-0 h-[45%] bg-cyan-400/80 shadow-[0_-2px_10px_rgba(0,229,255,0.8)]" />
          <div className="absolute bottom-[20%] left-1 h-1 w-1 rounded-full bg-white/80 animate-bounce" />
          <div className="absolute bottom-[10%] right-1.5 h-0.5 w-0.5 rounded-full bg-white/80 animate-bounce delay-150" />
        </div>
      </div>
    </div>
  );
}
