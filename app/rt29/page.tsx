import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { LeadForm } from "@/components/forms/LeadForm";
import { ContentSection } from "@/components/layout/ContentLayout";
import { Info } from "lucide-react";

export default function RT29Page() {
  return (
    <main className="relative bg-white min-h-screen">
      <PageHeader eyebrow="Specialised Procurement" title="RT29 Enquiries" />
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
        <Container className="relative z-10 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <ContentSection delay={0.1}>
              <p className="text-lg leading-relaxed text-[#0F172A] mb-6 font-medium">
                Conlog is an approved supplier under the National Treasury Transversal Contract (RT29) for the supply and delivery of smart meters and related systems.
              </p>
              <p className="text-base text-slate-700 mb-8">
                If you represent a municipality or government entity participating in the RT29 contract, please use this dedicated channel to reach our specialised government sales team.
              </p>
              
              <div className="bg-[#00E5FF]/10 p-6 rounded-2xl border border-[#00E5FF]/20 flex gap-4 items-start">
                <Info className="text-[#00B4D8] shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#011A27] mb-2">Direct RT29 Support</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">Our dedicated team is ready to assist with procurement guidelines, product specifications, and pricing schedules under the RT29 framework.</p>
                </div>
              </div>
            </ContentSection>

            <ContentSection delay={0.2}>
              <h2 className="text-2xl font-bold text-[#011A27] mb-6">RT29 Enquiry Form</h2>
              <LeadForm sourcePage="RT29 Enquiries Page" />
            </ContentSection>
          </div>
        </Container>
      </div>
    </main>
  );
}