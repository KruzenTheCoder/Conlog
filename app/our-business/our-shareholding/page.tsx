import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContentSection } from "@/components/layout/ContentLayout";

export default function OurShareholdingPage() {
  return (
    <main className="relative bg-white min-h-screen">
      <PageHeader eyebrow="Our Business" title="Our Shareholding" />
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
            <p className="text-xl leading-relaxed text-[#0F172A] font-medium text-center">
              At Conlog, we believe in the power of partnership and shared aspirations for growth. Our major shareholders, Community Investment Holdings (Pty) Ltd and Nimble Group (Pty) Ltd, have invested in Conlog's future with a focus on innovation, sustainability and growth.
            </p>
          </ContentSection>

          <ContentSection title="About Community Investment Holdings (CIH)" delay={0.2}>
            <p>
              Community Investment Holdings (CIH) is a 100% black-owned, women-led conglomerate operating across vital sectors of the economy including Healthcare, ICT, Logistics, Mining, Infrastructure, and Power & Energy.
            </p>
            <p>
              Founded in 1995 by Chancellor Anna Mokgokong and Joe Madungandaba, CIH has evolved into a leading empowerment concern with operations in South Africa, sub-Saharan Africa, and globally. The active involvement of its founders has propelled CIH's growth, making it one of the eminent B-BBEE companies in the country.
            </p>
          </ContentSection>

          <ContentSection title="About the Nimble Group" delay={0.3}>
            <p>
              The Nimble Group is a strategic investment firm that raised R2.1 billion to invest in carefully identified opportunities, offering structured capital solutions from debt to equity.
            </p>
            <p>
              With successful funds like NCF1 and NCF2, sourced from Nimble Group, IFC, and local financial institutions, Nimble Special Opportunities (NSO) was established to capitalise on appealing corporate opportunities. The NSO, a part of the Nimble Group, has a strong track record in asset management and corporate restructuring, focusing on Sub-Saharan Africa with a team boasting over 100 years of combined relevant experience.
            </p>
          </ContentSection>
        </Container>
      </div>
    </main>
  );
}