import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContentSection } from "@/components/layout/ContentLayout";

export default function OurHistoryPage() {
  return (
    <main className="relative bg-white min-h-screen">
      <PageHeader eyebrow="Our Business" title="Our History" />
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
              Conlog is a global leader in smart metering solutions. Our broad product offering encompasses prepayment meters, vending, revenue management, maintenance, support, consultation and training.
            </p>
          </ContentSection>

          <div className="grid md:grid-cols-2 gap-8">
            <ContentSection title="Milestones & World Firsts" delay={0.2}>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><span className="text-[#00E5FF] mt-1">✦</span> Conlog develops the world's first prepaid electricity meter.</li>
                <li className="flex items-start gap-3"><span className="text-[#00E5FF] mt-1">✦</span> Conlog becomes the official contract supplier of prepayment electricity meters to Eskom.</li>
                <li className="flex items-start gap-3"><span className="text-[#00E5FF] mt-1">✦</span> Conlog patents a technique for analogue power measurement.</li>
                <li className="flex items-start gap-3"><span className="text-[#00E5FF] mt-1">✦</span> Conlog's STS is accepted as a National Standard.</li>
                <li className="flex items-start gap-3"><span className="text-[#00E5FF] mt-1">✦</span> Conlog develops split metering for enhanced security.</li>
                <li className="flex items-start gap-3"><span className="text-[#00E5FF] mt-1">✦</span> The STS Association is founded (IEC standard).</li>
                <li className="flex items-start gap-3"><span className="text-[#00E5FF] mt-1">✦</span> Conlog launches the world's first prepayment solar home system.</li>
                <li className="flex items-start gap-3"><span className="text-[#00E5FF] mt-1">✦</span> Conlog ships its 2,000,000th meter.</li>
                <li className="flex items-start gap-3"><span className="text-[#00E5FF] mt-1">✦</span> Conlog enters the Water Market.</li>
              </ul>
            </ContentSection>

            <ContentSection title="Corporate Timeline" delay={0.3}>
              <ul className="space-y-4 relative before:absolute before:inset-y-0 before:left-2 before:w-0.5 before:bg-slate-200">
                <li className="relative pl-8"><span className="absolute left-0.5 top-2 w-3 h-3 rounded-full bg-[#004B87] ring-4 ring-white" /> Established in Durban, South Africa as an electronics design company.</li>
                <li className="relative pl-8"><span className="absolute left-0.5 top-2 w-3 h-3 rounded-full bg-[#004B87] ring-4 ring-white" /> Conlog begins diversifying into electricity prepayment.</li>
                <li className="relative pl-8"><span className="absolute left-0.5 top-2 w-3 h-3 rounded-full bg-[#004B87] ring-4 ring-white" /> Conlog becomes a part of the Schneider Electric group.</li>
                <li className="relative pl-8"><span className="absolute left-0.5 top-2 w-3 h-3 rounded-full bg-[#004B87] ring-4 ring-white" /> Conlog becomes a part of Consolidated Infrastructure Group Limited (CIG).</li>
                <li className="relative pl-8"><span className="absolute left-0.5 top-2 w-3 h-3 rounded-full bg-[#004B87] ring-4 ring-white" /> Conlog moves to a new, state-of-the-art facility at Dube TradePort, La Mercy.</li>
                <li className="relative pl-8"><span className="absolute left-0.5 top-2 w-3 h-3 rounded-full bg-[#004B87] ring-4 ring-white" /> Opening of Manufacturing plant in Lagos, Nigeria.</li>
                <li className="relative pl-8"><span className="absolute left-0.5 top-2 w-3 h-3 rounded-full bg-[#004B87] ring-4 ring-white" /> Launch of new smart electricity meter offer: iDM APEX and water meter: iDM Hydra.</li>
                <li className="relative pl-8"><span className="absolute left-0.5 top-2 w-3 h-3 rounded-full bg-[#00E5FF] ring-4 ring-white shadow-[0_0_10px_#00E5FF]" /> Conlog becomes part of the CIH/NIMBLE Group.</li>
              </ul>
            </ContentSection>
          </div>
        </Container>
      </div>
    </main>
  );
}