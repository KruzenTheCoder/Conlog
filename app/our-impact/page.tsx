import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContentSection } from "@/components/layout/ContentLayout";

export default function OurImpactPage() {
  return (
    <main className="relative bg-white min-h-screen">
      <PageHeader eyebrow="Sustainability & Impact" title="Our Impact" />
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
            <p className="text-xl leading-relaxed text-[#0F172A] font-medium text-center mb-8">
              Discover how Conlog is driving sustainability, environmental stewardship, and community empowerment through our smart metering technology and ESG initiatives.
            </p>
            <div className="p-12 border border-dashed border-cyan-500/30 rounded-[2rem] bg-gradient-to-b from-slate-50 to-[#E6F0F7] flex flex-col items-center justify-center min-h-[300px]">
              <div className="w-16 h-16 bg-[#004B87]/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <p className="text-[#004B87] text-lg font-medium text-center">Impact reports and sustainability initiatives will be published here.</p>
              <p className="text-slate-500 text-sm text-center mt-2">Check back soon for more information.</p>
            </div>
          </ContentSection>
        </Container>
      </div>
    </main>
  );
}