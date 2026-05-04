import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { LeadForm } from "@/components/forms/LeadForm";
import { ContentSection } from "@/components/layout/ContentLayout";
import { MapPin, Mail } from "lucide-react";

export default function ContactUsPage() {
  return (
    <main className="relative bg-white min-h-screen">
      <PageHeader eyebrow="Get in Touch" title="Contact Us" />
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
              <p className="text-lg leading-relaxed text-[#0F172A] mb-8 font-medium">
                We'd love to hear from you. Please fill out the form and a member of our team will get back to you shortly.
              </p>
              
              <div className="bg-[#004B87]/5 p-8 rounded-2xl border border-[#004B87]/10 mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-white p-3 rounded-xl shadow-sm text-[#00E5FF]"><MapPin /></div>
                  <div>
                    <h3 className="font-bold text-[#011A27] text-lg mb-1">Head Office</h3>
                    <p className="text-slate-600">Dube TradePort, La Mercy</p>
                    <p className="text-slate-600">Durban, South Africa</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm text-[#00E5FF]"><Mail /></div>
                  <div>
                    <h3 className="font-bold text-[#011A27] text-lg mb-1">General Enquiries</h3>
                    <a href="mailto:info@conlog.com" className="text-[#004B87] hover:underline font-medium">info@conlog.com</a>
                  </div>
                </div>
              </div>
            </ContentSection>

            <ContentSection delay={0.2}>
              <h2 className="text-2xl font-bold text-[#011A27] mb-6">Send a Message</h2>
              <LeadForm sourcePage="Contact Us Page" />
            </ContentSection>
          </div>
        </Container>
      </div>
    </main>
  );
}