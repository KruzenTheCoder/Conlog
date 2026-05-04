import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContentSection, ContentGrid, ContentCard } from "@/components/layout/ContentLayout";
import { Target, Lightbulb, Users, ShieldCheck, Cog, Award } from "lucide-react";

export default function CompanyProfilePage() {
  return (
    <main className="relative bg-white min-h-screen">
      <PageHeader eyebrow="Our Business" title="Company Profile" />
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
              With decades of experience, Conlog is a manufacturer of innovative, reliable and convenient smart metering solutions for demand management, revenue enhancement and managed services.
            </p>
          </ContentSection>
          
          <ContentSection title="Our Purpose" delay={0.2}>
            <p className="text-lg">
              Conlog’s purpose is to enrich lives by connecting people and resources. We believe that resources have the power to transform futures and unlock vast human potential, and this drives us to achieve excellence so we can make the biggest positive impact possible in the lives of all we touch.
            </p>
          </ContentSection>

          <ContentSection title="Cutting-edge, Future-focused Solutions" delay={0.3}>
            <p>Our speciality lies in innovating, manufacturing and delivering holistic smart prepayment solutions for the management of water and electricity services.</p>
            <p>Our extensive portfolio includes smart prepayment electricity and water meters, revenue enhancement solutions, revenue collection, revenue protection, demand management, maintenance, support and advisory services.</p>
            <p>We also have a dedicated MERSETA accredited training facility covering all aspects of smart prepayment solutions, focusing on product application, installation and commission, preparing the future innovators of tomorrow.</p>
          </ContentSection>
          
          <div className="mt-16 mb-8">
            <h2 className="text-3xl font-bold text-[#011A27] text-center mb-10">The Conlog Difference</h2>
            <ContentGrid>
              <ContentCard title="Business Understanding" icon={<Target />} delay={0.1}>
                We gain an understanding of each customer’s business so we can assist them in meeting their objectives.
              </ContentCard>
              <ContentCard title="Market-led Innovation" icon={<Lightbulb />} delay={0.2}>
                Our offer is developed based on market-led innovation, to ensure that you have access to the best smart solutions on the market today.
              </ContentCard>
              <ContentCard title="Bespoke Solutions" icon={<Cog />} delay={0.3}>
                We are able to provide bespoke solutions according to your exact specifications.
              </ContentCard>
              <ContentCard title="Exceptional Service" icon={<Users />} delay={0.4}>
                We are 100% committed to providing exceptional customer service, delivered by a highly motivated and experienced team.
              </ContentCard>
              <ContentCard title="Superior Support" icon={<ShieldCheck />} delay={0.5}>
                Our team of qualified engineers and technicians are able to provide superior technical support both locally and internationally.
              </ContentCard>
              <ContentCard title="End-to-End Manufacturer" icon={<Award />} delay={0.6}>
                We are the only end-to-end metering manufacturer in sub-Saharan Africa, backed by nearly 6 decades of experience.
              </ContentCard>
            </ContentGrid>
          </div>
        </Container>
      </div>
    </main>
  );
}