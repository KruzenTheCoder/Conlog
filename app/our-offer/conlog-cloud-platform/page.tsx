import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContentSection, ContentGrid, ContentCard } from "@/components/layout/ContentLayout";
import { Cloud, Server, Database, Shield, Zap, Globe } from "lucide-react";

export default function ConlogCloudPlatformPage() {
  return (
    <main className="relative bg-white min-h-screen">
      <PageHeader eyebrow="Our Offer" title="Conlog Cloud Platform" />
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
            <p className="text-2xl leading-relaxed text-[#004B87] font-bold text-center">
              Resilient, secure cloud foundation for utility operations — hosted on AWS or Microsoft Azure with high availability, fault tolerance and disaster recovery.
            </p>
          </ContentSection>

          <div className="mt-12">
            <h2 className="text-3xl font-bold text-[#011A27] text-center mb-10">Key Capabilities</h2>
            <ContentGrid>
              <ContentCard title="CoDi Platform Hosting" icon={<Cloud />} delay={0.2}>
                Robust revenue management hosted in a secure, scalable cloud environment.
              </ContentCard>
              
              <ContentCard title="POS System Hosting" icon={<Server />} delay={0.3}>
                Point of Sale system hosting for retailer and agent channels.
              </ContentCard>
              
              <ContentCard title="Secure Data Storage" icon={<Database />} delay={0.4}>
                Secure, compliant data storage for sensitive utility and customer information.
              </ContentCard>
              
              <ContentCard title="High Availability" icon={<Zap />} delay={0.5}>
                High availability architecture designed to ensure uninterrupted vending and operations.
              </ContentCard>
              
              <ContentCard title="Disaster Recovery" icon={<Shield />} delay={0.6}>
                Built-in disaster recovery and fault tolerance to protect against data loss and downtime.
              </ContentCard>
              
              <ContentCard title="Multi-language Support" icon={<Globe />} delay={0.7}>
                Multi-language support configured for diverse operational regions across the globe.
              </ContentCard>
            </ContentGrid>
          </div>
        </Container>
      </div>
    </main>
  );
}