import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContentSection, ContentGrid, ContentCard } from "@/components/layout/ContentLayout";
import { BookOpen, Wrench, Shield, Zap, Hammer, Settings } from "lucide-react";

export default function TrainingAcademyPage() {
  return (
    <main className="relative bg-white min-h-screen">
      <PageHeader eyebrow="Our Offer" title="Conlog Training Academy" />
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
              The transference of skills and knowledge is critical to Conlog's success. We're the only prepayment company, globally, with a specialised training academy providing customisable, accredited courses in all aspects of prepayment solutions.
            </p>
          </ContentSection>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ContentSection title="Training Delivery" delay={0.2}>
              <p>Our training academy offers several modules and the utilisation of Outcomes Based Education and Training. Delegates can work at their own pace through a hybrid combination of practical aspects and lectures.</p>
              <p>We offer training courses at your premises or at our fully equipped training centre in Durban, South Africa.</p>
            </ContentSection>

            <ContentCard title="Courses are aimed at:" icon={<BookOpen />} delay={0.3}>
              <ul className="space-y-3 mt-4">
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#00E5FF]" /> Training directors</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#00E5FF]" /> Accountants and auditors</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#00E5FF]" /> Meter installers</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#00E5FF]" /> Management system operators</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#00E5FF]" /> Vending unit operators</li>
              </ul>
            </ContentCard>
          </div>

          <h2 className="text-3xl font-bold text-[#011A27] text-center mb-10 mt-16">Topics Covered</h2>
          <ContentGrid>
            <ContentCard title="Key Metering Concepts & Standards" icon={<Zap />} delay={0.1}>
              Line load reversal, Protection features, Smart metering, RF, PLC, SANS 1524, STS, ICASA.
            </ContentCard>
            <ContentCard title="Product Installation & Commissioning" icon={<Hammer />} delay={0.2}>
              Safety requirements, practical installation procedures, and how to commission/decommission meters.
            </ContentCard>
            <ContentCard title="Product Overview" icon={<BookOpen />} delay={0.3}>
              Comprehensive overview of Conlog's hardware and specifications.
            </ContentCard>
            <ContentCard title="Maintenance & Fault-Finding" icon={<Wrench />} delay={0.4}>
              Learn how to fault-find and correct faults on Conlog meters in the field.
            </ContentCard>
          </ContentGrid>

          <ContentSection title="Benefits of Training" delay={0.5}>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 mt-6">
              <div className="flex gap-4">
                <div className="mt-1 bg-[#004B87]/10 p-2 rounded-lg text-[#004B87] shrink-0"><Shield className="w-5 h-5" /></div>
                <div>
                  <strong className="block text-[#011A27] mb-1">Improved Accuracy and Efficiency</strong>
                  <span className="text-slate-600 text-sm">Well-trained personnel can accurately handle prepayment systems, reducing errors.</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 bg-[#004B87]/10 p-2 rounded-lg text-[#004B87] shrink-0"><Settings className="w-5 h-5" /></div>
                <div>
                  <strong className="block text-[#011A27] mb-1">Improved Customer Service</strong>
                  <span className="text-slate-600 text-sm">Staff can better assist customers and address queries confidently.</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 bg-[#004B87]/10 p-2 rounded-lg text-[#004B87] shrink-0"><Shield className="w-5 h-5" /></div>
                <div>
                  <strong className="block text-[#011A27] mb-1">Compliance & Regulations</strong>
                  <span className="text-slate-600 text-sm">Ensures personnel understand compliance with regulations and industry standards.</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 bg-[#004B87]/10 p-2 rounded-lg text-[#004B87] shrink-0"><Zap className="w-5 h-5" /></div>
                <div>
                  <strong className="block text-[#011A27] mb-1">Higher Adoption Rates</strong>
                  <span className="text-slate-600 text-sm">Knowledgeable staff can promote options to customers, increasing revenue.</span>
                </div>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
    </main>
  );
}