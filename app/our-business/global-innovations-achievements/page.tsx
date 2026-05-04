import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContentSection, ContentGrid, ContentCard } from "@/components/layout/ContentLayout";
import { Award, Globe, Star, Trophy, Target, Shield } from "lucide-react";

export default function GlobalInnovationsPage() {
  return (
    <main className="relative bg-white min-h-screen">
      <PageHeader eyebrow="Our Business" title="Global Innovations & Achievements" />
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
              Over the years, Conlog has emerged as an industry leader in smart metering solutions, with hundreds of patents and world-firsts to our name.
            </p>
          </ContentSection>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ContentSection title="Experience & Innovation" delay={0.2}>
              <p>Conlog has been a pioneering leader in the prepayment industry since the late 1980s. Over the decades, we have honed our expertise and focused on innovation in order to deliver solutions that are at the cutting edge of the global prepayment sector.</p>
              <p>Today, we hold more than 200 patents and trademarks, and our meters are used in more than 58 countries worldwide.</p>
            </ContentSection>
            
            <ContentSection title="Our Global Footprint" delay={0.3}>
              <p>As a proudly South African black industrialist company, our footprint extends to over 58 countries across Africa, South America and the Middle East.</p>
              <p>With a base of over 17 million meters and prepaid solutions, our products service over 90 utilities, providing access to power for more than 58 countries. With systems that are available in English, Arabic, French, Spanish and Portuguese, our products have been able to reach millions.</p>
            </ContentSection>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold text-[#011A27] text-center mb-10">Notable Awards</h2>
            <ContentGrid>
              <ContentCard icon={<Trophy />} delay={0.1}>
                The inaugural Innovation Award for the prepayment industry
              </ContentCard>
              <ContentCard icon={<Award />} delay={0.2}>
                Best Metering Company Award six times out of eight
              </ContentCard>
              <ContentCard icon={<Globe />} delay={0.3}>
                Exporter of the Year Award
              </ContentCard>
              <ContentCard icon={<Star />} delay={0.4}>
                2010 Metering Excellence Award for our Service Desk
              </ContentCard>
              <ContentCard icon={<Shield />} delay={0.5}>
                Silver Award from the Electricity Supply Industry for Best Service Provider
              </ContentCard>
              <ContentCard icon={<Target />} delay={0.6}>
                Awarded the 5-Star Gold Award for 'Cleaner Production' at the 2024 KZN Waste Management Awards
              </ContentCard>
            </ContentGrid>
          </div>
        </Container>
      </div>
    </main>
  );
}