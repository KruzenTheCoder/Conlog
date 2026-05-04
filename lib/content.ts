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
    id: "s-stats",
    page_id: "home",
    type: "global-presence",
    position: 1,
    title: "A global footprint, built over decades.",
    subtitle:
      "Designed and manufactured at Dube TradePort, Durban — deployed across Africa, the Middle East and South America.",
    data: {
      stats: [
        { label: "Smart meters deployed", value: 17_000_000, suffix: "+" },
        { label: "Countries", value: 58, suffix: "+" },
        { label: "Utility customers", value: 90, suffix: "+" },
        { label: "Households with power", value: 50_000_000, suffix: "+" },
      ],
    },
  },
  {
    id: "s-pillars",
    page_id: "home",
    type: "brand-pillars",
    position: 2,
    title: "Innovation. Sustainability. Growth.",
    subtitle:
      "The three forces that drive Conlog's next decade of smart metering.",
    data: {
      pillars: [
        {
          icon: "Lightbulb",
          title: "Innovation",
          body: "A constantly-expanding open hub with dedicated resources — driving, developing and incubating ideas from every corner of the business so Conlog stays ahead of industry trends.",
        },
        {
          icon: "Leaf",
          title: "Sustainability",
          body: "Aligned with the UN Sustainable Development Goals — focused on people, planet and prosperity, with inclusive goal-setting and a culture of accountability.",
        },
        {
          icon: "TrendingUp",
          title: "Growth",
          body: "Elevating and growing our product range, pursuing global expansion, and deepening our understanding of customer needs to execute on our goals.",
        },
      ],
    },
  },
  {
    id: "s-solutions",
    page_id: "home",
    type: "solutions-grid",
    position: 3,
    title: "Smart meters & accessories for electricity and water.",
    subtitle:
      "A proudly South African product range — our electrical meters are manufactured using 98% local materials, and water meters 85%.",
    data: {
      cards: [
        {
          icon: "Cpu",
          title: "iDM APEX · smart electricity meter",
          description:
            "Our flagship smart electricity meter — engineered for demand management, revenue protection and long service life.",
          href: "/solutions/idm-apex",
        },
        {
          icon: "Droplets",
          title: "iDM Hydra · smart water meter",
          description:
            "Smart prepayment water meter for demand management and water conservation — built for harsh environments.",
          href: "/solutions/idm-hydra",
        },
        {
          icon: "CreditCard",
          title: "Prepayment & vending",
          description:
            "STS token vending, CoDi revenue management, POS systems and customer self-service — channels, integrations and experience.",
          href: "/solutions/prepayment-vending",
        },
        {
          icon: "Cloud",
          title: "Conlog Cloud Platform",
          description:
            "Resilient, secure cloud — on AWS or Microsoft Azure — for CoDi, POS and data storage, with high availability and disaster recovery.",
          href: "/solutions/conlog-cloud-platform",
        },
      ],
    },
  },
  {
    id: "s-segments",
    page_id: "home",
    type: "market-segments",
    position: 4,
    title: "One platform, three market segments.",
    subtitle:
      "Conlog serves public energy utilities, private residential and commercial customers, and public water authorities.",
    data: {
      segments: [
        {
          icon: "Zap",
          title: "Public Energy",
          items: [
            "Smart metering and demand response",
            "Prepaid and post-paid metering solutions",
            "Revenue enhancement solutions",
            "Managed services",
            "B2B and B2G engagements",
          ],
        },
        {
          icon: "Building2",
          title: "Private residential & commercial",
          items: [
            "B2C and e-commerce (Conlog Direct)",
            "Smart metering and demand response",
            "Prepaid and post-paid metering solutions",
            "Revenue enhancement solutions",
            "Managed services",
          ],
        },
        {
          icon: "Droplets",
          title: "Public Water",
          items: [
            "Smart metering and demand response",
            "Prepaid and post-paid metering solutions",
            "Revenue enhancement solutions",
            "Managed services",
          ],
        },
      ],
    },
  },
  {
    id: "s-why",
    page_id: "home",
    type: "why-choose-us",
    position: 5,
    title: "The Conlog difference",
    subtitle:
      "The only end-to-end metering manufacturer in sub-Saharan Africa — backed by nearly six decades of world-class manufacturing experience.",
    data: {
      reasons: [
        {
          title: "200+ patents & trademarks",
          body: "A pioneering leader in prepayment since the late 1980s, with hundreds of world-firsts to our name.",
        },
        {
          title: "Bespoke to your specification",
          body: "We understand each customer's business and deliver market-led innovation to exact specifications.",
        },
        {
          title: "B-BBEE Level 1",
          body: "Proudly South African black industrialist company — with local shareholders and local manufacturing.",
        },
        {
          title: "Multilingual systems",
          body: "Platforms available in English, Arabic, French, Spanish and Portuguese — reaching millions across three continents.",
        },
      ],
    },
  },
  {
    id: "s-cases",
    page_id: "home",
    type: "case-studies-summary",
    position: 6,
    title: "Outcomes, not just installations.",
    subtitle:
      "Measured impact for the utilities and communities we serve — from dense urban feeders to national rollouts.",
    data: null,
  },
  {
    id: "s-innovation",
    page_id: "home",
    type: "innovation",
    position: 7,
    title: "Driving innovation through cloud-based technology.",
    subtitle:
      "Conlog's cloud service offering delivers a resilient and secure foundation for utilities — hosted on AWS or Microsoft Azure with high availability, fault tolerance and disaster recovery.",
    data: {
      pillars: [
        { label: "Cloud infrastructure", value: "AWS · Azure" },
        { label: "Availability", value: "HA & DR built-in" },
        { label: "Platforms", value: "CoDi · POS · Data" },
        { label: "Languages", value: "EN · AR · FR · ES · PT" },
      ],
    },
  },
  {
    id: "s-awards",
    page_id: "home",
    type: "awards",
    position: 8,
    title: "Recognised for excellence",
    subtitle:
      "Decades of awards across metering, service, export excellence and sustainability.",
    data: {
      awards: [
        "Inaugural Innovation Award for the prepayment industry",
        "Best Metering Company Award — 6 of 8 times",
        "Exporter of the Year Award",
        "Metering Excellence Award — Service Desk (2010)",
        "ESI Silver Award — Best Service Provider",
        "Impumelelo Top 300 Black Empowered Companies",
        "Technology Top 100 — ICT category, top three",
        "5-Star Gold Cleaner Production — 2024 KZN Waste Management Awards",
      ],
    },
  },
  {
    id: "s-cta",
    page_id: "home",
    type: "cta-banner",
    position: 9,
    title: "Think smarter. Meter smarter.",
    subtitle:
      "Talk to a Conlog specialist about smart metering, prepayment, revenue enhancement and managed services.",
    data: {
      ctaLabel: "Contact our team",
      ctaHref: "/contact",
    },
  },
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
