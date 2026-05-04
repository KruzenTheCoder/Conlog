import type { SectionRecord } from "@/lib/types";
import { TrustedBy } from "./TrustedBy";
import { SolutionsGrid } from "./SolutionsGrid";
import { WhyChooseUs } from "./WhyChooseUs";
import { Innovation } from "./Innovation";
import { GlobalPresence } from "./GlobalPresence";
import { CaseStudiesSummary } from "./CaseStudiesSummary";
import { CTABanner } from "./CTABanner";
import { BrandPillars } from "./BrandPillars";
import { MarketSegments } from "./MarketSegments";
import { Awards } from "./Awards";
import { Metrics } from "./Metrics";
import { Milestone } from "./Milestone";

export function DynamicSection({ section }: { section: SectionRecord }) {
  switch (section.type) {
    case "trusted-by":
      return <TrustedBy section={section} />;
    case "solutions-grid":
      return <SolutionsGrid section={section} />;
    case "why-choose-us":
      return <WhyChooseUs section={section} />;
    case "innovation":
      return <Innovation section={section} />;
    case "global-presence":
      return <GlobalPresence section={section} />;
    case "case-studies-summary":
      return <CaseStudiesSummary section={section} />;
    case "cta-banner":
      return <CTABanner section={section} />;
    case "brand-pillars":
      return <BrandPillars section={section} />;
    case "market-segments":
      return <MarketSegments section={section} />;
    case "awards":
      return <Awards section={section} />;
    case "metrics":
      return <Metrics section={section} />;
    case "milestone":
      return <Milestone section={section} />;
    case "pillars":
      // Re-use BrandPillars but map data structure if needed
      return <BrandPillars section={section} />;
    default:
      return null;
  }
}
