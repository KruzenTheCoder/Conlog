import type {
  CaseStudyRecord,
  PageRecord,
  SectionRecord,
  SolutionRecord,
} from "./types";

/**
 * Local fallback content, grounded in the real Conlog brand:
 *   - World leaders in smart metering solutions
 *   - 200+ patents and trademarks
 *   - Presence in 58+ countries
 *   - 17M+ smart meters deployed
 *   - 90+ utility customers
 *   - 50M+ households with access to power
 *   - HQ: Dube TradePort, Durban, South Africa
 *   - Proudly South African black industrialist company, B-BBEE Level 1
 *
 * Once Supabase is provisioned and seeded (see supabase/seed.sql),
 * database content takes precedence.
 */

export const fallbackHomePage: PageRecord = {
  id: "home",
  slug: "home",
  title: "Home",
  seo_title: "Conlog — World leaders in smart metering solutions",
  seo_description:
    "Conlog designs, manufactures and delivers smart metering solutions for electricity and water — with 200+ patents, presence in 58+ countries and over 17 million meters deployed.",
  hero_heading: "World leaders in smart metering solutions.",
  hero_subheading:
    "For nearly four decades, Conlog has engineered smart electricity and water metering that empowers utilities to manage demand, protect revenue and connect communities to the resources they depend on.",
  hero_cta_primary_label: "Explore our product range",
  hero_cta_primary_url: "/solutions",
  hero_cta_secondary_label: "View our company profile",
  hero_cta_secondary_url: "/about",
};

export const fallbackHomeSections: SectionRecord[] = [
  {
    id: "s-milestone",
    page_id: "home",
    type: "milestone",
    position: 1,
    title: "Celebrating 60 Years of Innovation",
    subtitle: "Since 1965, Conlog has been a trusted leader in smart metering and energy management solutions, serving communities in over 58 countries and powering millions of homes and businesses.",
    data: {
      body: "As we mark six decades of progress, we remain committed to shaping a smarter, more connected energy future.",
      cta_label: "Learn more about our 60-year journey",
      cta_url: "/about#60-years"
    },
  },
  {
    id: "s-pillars",
    page_id: "home",
    type: "pillars",
    position: 2,
    title: "Driving innovation, sustainability and growth",
    subtitle: null,
    data: {
      pillars: [
        {
          name: "Innovation",
          body: "With a constantly-expanding open hub with dedicated resources, Conlog drives, develops & incubates ideas from all corners of our business, empowering us to stay ahead of industry trends & disrupt the markets through innovation."
        },
        {
          name: "Sustainability",
          body: "Our sustainability strategy is aligned with the UN Sustainable Development Goals, focusing on people, planet & prosperity, while ensuring inclusive strategic goal-setting & instilling an internal culture of accountability."
        },
        {
          name: "Growth",
          body: "We are committed to growth & improvement, elevating & growing our product range while pursuing global expansion, developing enhanced understandings of our customers’ needs, & developing our capacity to execute our goals."
        }
      ]
    },
  },
  {
    id: "s-metrics",
    page_id: "home",
    type: "metrics",
    position: 3,
    title: "A global footprint with local impact",
    subtitle: null,
    data: {
      metrics: [
        { label: "Patents & trademarks", value: "200+" },
        { label: "Countries", value: "58+" },
        { label: "Smart meters deployed", value: "17M+" },
        { label: "Households served", value: "50M+" }
      ]
    },
  },
  {
    id: "s-cta-1",
    page_id: "home",
    type: "cta-banner",
    position: 4,
    title: "Explore our product range",
    subtitle: "Smart meters & accessories for electricity & water",
    data: {
      primary_label: "Explore our product range",
      primary_url: "/solutions",
      variant: "primary"
    },
  },
  {
    id: "s-cta-2",
    page_id: "home",
    type: "cta-banner",
    position: 5,
    title: "View our company profile",
    subtitle: "Find out more about Conlog",
    data: {
      primary_label: "View our company profile",
      primary_url: "/about",
      variant: "secondary"
    },
  }
];

export const fallbackSolutions: SolutionRecord[] = [
  {
    id: "sol-apex",
    category: "smart-meters",
    name: "iDM APEX · smart electricity meter",
    slug: "idm-apex",
    positioning:
      "Conlog's flagship smart electricity meter — built for demand management, revenue protection and decades of reliable service.",
    features: [
      "STS-compliant prepayment and post-paid modes",
      "Advanced tamper detection and event logging",
      "Modular comms: cellular, PLC, RF",
      "Signed firmware OTA updates",
      "98% locally manufactured in South Africa",
    ],
    benefits_utilities: [
      "Reduce non-technical losses",
      "Protect and grow revenue",
      "Accelerate rollouts with standards-led hardware",
    ],
    benefits_consumers: [
      "Transparent energy usage",
      "Buy electricity anywhere, any time",
      "Reliable, accurate supply",
    ],
    icon: "Cpu",
  },
  {
    id: "sol-hydra",
    category: "smart-meters",
    name: "iDM Hydra · smart water meter",
    slug: "idm-hydra",
    positioning:
      "Smart prepayment water meter for demand management and conservation — engineered for harsh environments across three continents.",
    features: [
      "Smart prepayment with consumer self-service",
      "Robust mechanical design for harsh conditions",
      "85% locally manufactured in South Africa",
      "Integrates with Conlog CoDi vending and MDM",
      "Multi-language consumer interfaces",
    ],
    benefits_utilities: [
      "Reduce non-revenue water",
      "Enable demand management programs",
      "Simplify customer onboarding",
    ],
    benefits_consumers: [
      "Visibility of consumption",
      "Fair, transparent billing",
      "Convenient prepaid top-up",
    ],
    icon: "Droplets",
  },
  {
    id: "sol-vending",
    category: "prepayment",
    name: "Prepayment & vending",
    slug: "prepayment-vending",
    positioning:
      "End-to-end STS token vending, revenue management and customer channels — the commercial engine behind every Conlog rollout.",
    features: [
      "STS-compliant token generation",
      "CoDi revenue management platform",
      "POS systems for retailers and agents",
      "Channel APIs: USSD, mobile money, retailer, web",
      "Conlog Direct consumer self-service",
    ],
    benefits_utilities: [
      "Higher collection rates",
      "Lower channel cost",
      "Stronger revenue protection controls",
    ],
    benefits_consumers: [
      "Recharge in seconds, from anywhere",
      "Instant credit",
      "Multiple supported languages",
    ],
    icon: "CreditCard",
  },
  {
    id: "sol-cloud",
    category: "software",
    name: "Conlog Cloud Platform",
    slug: "conlog-cloud-platform",
    positioning:
      "Resilient, secure cloud foundation for utility operations — hosted on AWS or Microsoft Azure with high availability, fault tolerance and disaster recovery.",
    features: [
      "CoDi platform hosting",
      "POS system hosting",
      "Secure data storage",
      "High availability and disaster recovery",
      "Choice of AWS or Microsoft Azure",
    ],
    benefits_utilities: [
      "Uninterrupted service",
      "Robust data protection",
      "Operational efficiency at scale",
    ],
    benefits_consumers: ["Always-on recharge channels", "Accurate billing"],
    icon: "Cloud",
  },
  {
    id: "sol-managed",
    category: "services",
    name: "Managed & professional services",
    slug: "managed-services",
    positioning:
      "Infrastructure design, project management, application engineering, business intelligence and 24/7 service — the human expertise behind every rollout.",
    features: [
      "Infrastructure design",
      "Project management",
      "Application engineering and systems integration",
      "Business intelligence and custom reporting",
      "Service level agreements, customised to you",
      "Project engineering — deployment and commissioning worldwide",
    ],
    benefits_utilities: [
      "Predictable rollouts",
      "Optimally running systems",
      "Guaranteed service through tailored SLAs",
    ],
    benefits_consumers: [
      "Reliable supply",
      "Fast issue resolution via 24/7 support",
    ],
    icon: "Wrench",
  },
  {
    id: "sol-training",
    category: "services",
    name: "Conlog Training Academy",
    slug: "conlog-training-academy",
    positioning:
      "MERSETA-accredited training academy preparing the smart prepayment innovators of tomorrow — covering product application, installation and commissioning.",
    features: [
      "MERSETA accredited curriculum",
      "Product application training",
      "Installation and commissioning modules",
      "Customer and partner enablement",
      "On-site and facility-based delivery",
    ],
    benefits_utilities: [
      "Certified installer base",
      "Faster, safer rollouts",
      "Long-term operational capability",
    ],
    benefits_consumers: [
      "Skilled technicians in the field",
      "Better service experience",
    ],
    icon: "GraduationCap",
  },
  {
    id: "sol-service-desk",
    category: "services",
    name: "24/7 Service Desk",
    slug: "service-desk",
    positioning:
      "Award-winning customer support — seven days a week, 365 days a year, by phone, email and web.",
    features: [
      "First-line technical support",
      "Multiple access channels",
      "Critical support hub",
      "Proven award-winning performance",
    ],
    benefits_utilities: [
      "Rapid incident resolution",
      "Lower operational risk",
      "Confidence at scale",
    ],
    benefits_consumers: ["Faster resolution", "Reliable service"],
    icon: "Headphones",
  },
];

export const fallbackCaseStudies: CaseStudyRecord[] = [
  {
    id: "cs-1",
    slug: "national-prepaid-rollout",
    title: "National utility cuts losses by 18% with STS prepayment rollout",
    region: "Sub-Saharan Africa",
    utility_name: "National Utility",
    problem:
      "Persistent non-technical losses and weak collections in dense urban feeders across a national network.",
    solution:
      "Deployed 1.2M Conlog single-phase STS prepayment meters integrated with CoDi vending, mobile money and retailer channels.",
    results:
      "18% reduction in non-technical losses within 18 months; collection rates above 96%; customer self-service adoption above 70%.",
    metrics: {
      loss_reduction: 18,
      revenue_uplift: 22,
      households: 1_200_000,
    },
    featured: true,
  },
  {
    id: "cs-2",
    slug: "water-demand-management",
    title: "Smart water prepayment unlocks demand management at scale",
    region: "Southern Africa",
    utility_name: "Regional Water Authority",
    problem:
      "High non-revenue water and limited visibility on household consumption across a rapidly-urbanising service area.",
    solution:
      "iDM Hydra smart water meter rollout with consumer prepayment, CoDi integration and a multilingual consumer portal.",
    results:
      "21% reduction in non-revenue water, 3x faster leak detection, and meaningful improvement in customer satisfaction.",
    metrics: { loss_reduction: 21, revenue_uplift: 16, households: 420_000 },
    featured: true,
  },
  {
    id: "cs-3",
    slug: "cloud-migration",
    title: "Cloud migration delivers always-on vending and resilience",
    region: "East Africa",
    utility_name: "Regional Distributor",
    problem:
      "On-premise CoDi infrastructure struggled with peak-hour load and had limited disaster recovery capability.",
    solution:
      "Migrated CoDi, POS and data storage to the Conlog Cloud Platform on AWS with HA architecture and DR runbooks.",
    results:
      "99.99% platform availability, 4x faster recovery from regional outages, and a clean path to future-ready services.",
    metrics: { loss_reduction: 6, revenue_uplift: 12, households: 680_000 },
    featured: true,
  },
  {
    id: "cs-4",
    slug: "channel-modernisation",
    title: "Vending modernisation shifts 70% of recharges to digital channels",
    region: "Southern Africa",
    utility_name: "Municipal Utility",
    problem: "Long queues and limited recharge channels for residents.",
    solution:
      "Integrated mobile money and USSD with CoDi vending; deployed Conlog Direct self-service for consumers.",
    results:
      "70% of recharges shifted to digital channels; customer satisfaction up 24 NPS points.",
    metrics: { loss_reduction: 5, revenue_uplift: 11, households: 380_000 },
    featured: false,
  },
];
