import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContentSection, ContentGrid, ContentCard } from "@/components/layout/ContentLayout";
import { Zap, Home, Droplets } from "lucide-react";

export default function MarketSegmentsPage() {
  return (
    <main className="relative bg-white min-h-screen">
      <PageHeader eyebrow="Our Offer" title="Market Segments" />
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
        <Container className="relative z-10 max-w-5xl">
          <ContentSection delay={0.1}>
            <p className="text-xl leading-relaxed text-[#0F172A] font-medium text-center">
              Our innovative smart metering solutions are utilised in diverse markets and sectors, from public energy services and utilities, to residential properties and commercial businesses, to various water demand management applications.
            </p>
          </ContentSection>

          <ContentGrid>
            <ContentCard title="Public Energy" icon={<Zap />} delay={0.2}>
              <ul className="space-y-3">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" /> Smart Metering and Demand Response</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" /> Prepaid and Post-Paid Metering Solutions</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" /> Revenue Enhancement Solutions</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" /> Managed Services</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" /> B2B & Business to Government</li>
              </ul>
            </ContentCard>

            <ContentCard title="Private Residential & Commercial" icon={<Home />} delay={0.3}>
              <ul className="space-y-3">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" /> Business to Commerce E-Commerce</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" /> Smart Metering and Demand Response</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" /> Prepaid and Post-Paid Metering Solutions</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" /> Revenue Enhancement Solutions</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" /> Managed Services</li>
              </ul>
            </ContentCard>

            <ContentCard title="Public Water" icon={<Droplets />} delay={0.4}>
              <ul className="space-y-3">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" /> Smart Metering and Demand Response</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" /> Prepaid and Post-Paid Metering Solutions</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" /> Revenue Enhancement Solutions</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" /> Managed Services</li>
              </ul>
            </ContentCard>
          </ContentGrid>
        </Container>
      </div>
    </main>
  );
}