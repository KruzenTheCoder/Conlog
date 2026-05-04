import { HomeHero } from "@/components/sections/HomeHero";
import { Milestone } from "@/components/sections/Milestone";
import { BrandPillars } from "@/components/sections/BrandPillars";
import { Metrics } from "@/components/sections/Metrics";
import { CTABanner } from "@/components/sections/CTABanner";
import { getPageWithSections } from "@/lib/queries";

export const revalidate = 60;

export default async function HomePage() {
  const { page, sections } = await getPageWithSections("home");

  const milestoneSection = sections.find(s => s.type === "milestone");
  const pillarsSection = sections.find(s => s.type === "pillars");
  const metricsSection = sections.find(s => s.type === "metrics");
  const ctaSections = sections.filter(s => s.type === "cta-banner");

  return (
    <main className="relative bg-white overflow-hidden">
      {/* Light background pattern for the whole page below hero */}
      <div
        className="absolute inset-0 z-0 top-[900px]"
        style={{
          backgroundImage: "url('/light-bg.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "repeat-y",
          opacity: 0.8
        }}
      />
      
      <div className="relative z-10">
        <HomeHero page={page} />
        
        {/* Milestone Section */}
        {milestoneSection && (
          <div className="relative py-20">
            <Milestone section={milestoneSection} />
          </div>
        )}

        {/* Split Section for Pillars and Metrics/CTAs */}
        <div className="mx-auto max-w-[1600px] px-0 lg:px-6 pb-24">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column: Pillars */}
            <div className="w-full lg:w-1/2 flex-shrink-0">
              {pillarsSection && <BrandPillars section={pillarsSection} />}
            </div>
            
            {/* Right Column: Metrics & CTAs */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              {metricsSection && <Metrics section={metricsSection} />}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
                {ctaSections.map((cta) => (
                  <CTABanner key={cta.id} section={cta} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
