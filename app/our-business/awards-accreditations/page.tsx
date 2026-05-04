import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContentSection } from "@/components/layout/ContentLayout";

export default function AwardsAccreditationsPage() {
  return (
    <main className="relative bg-white min-h-screen">
      <PageHeader eyebrow="Our Business" title="Awards & Accreditations" />
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
        <Container className="relative z-10 max-w-4xl">
          <ContentSection delay={0.1}>
            <p className="text-xl leading-relaxed text-[#0F172A] font-medium">
              At Conlog, renowned quality is our foremost priority.
            </p>
            <p className="mt-4">
              To ensure that our products and services meet the highest quality standards, we comply with all relevant regulatory requirements, and we boast numerous industry awards innovation and excellence.
            </p>
          </ContentSection>

          <ContentSection title="Quality Standards" delay={0.2}>
            <p>Quality is at the forefront of everything we do.</p>
            <p>Our manufacturing facilities are independently accredited for quality (ISO 9001), environmental sustainability (ISO 14001) and health and safety standards (OHAS 18001).</p>
            <p>We also operate a wide range of internationally endorsed quality improvement programmes, such as Six Sigma, Kaizen and Lean.</p>
            <p>To further ensure that our products meet the highest standards, we have a firmly established Quality Management System that conforms to the ISO 9001 Quality System Standard, which was first awarded in July 1990. We also conduct extensive internal audits on our QMS throughout the year.</p>
          </ContentSection>
          
          <ContentSection title="Standardisation" delay={0.3}>
            <p>All our products meet and exceed the highest international standards, including the International Electrotechnical Commission (IEC) and the Standard Transfer Specification (STS).</p>
            <p>The STS in particular is a globally recognised and accepted standard for prepayment systems, and Conlog is a founding member.</p>
          </ContentSection>
        </Container>
      </div>
    </main>
  );
}