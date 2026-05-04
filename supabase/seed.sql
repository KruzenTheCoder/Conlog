-- Conlog marketing site — seed data (Conlog real-brand version)
-- Idempotent: safe to re-run.

-- =========================================================================
-- HOME page + sections
-- =========================================================================
insert into public.pages (slug, title, seo_title, seo_description,
  hero_heading, hero_subheading,
  hero_cta_primary_label, hero_cta_primary_url,
  hero_cta_secondary_label, hero_cta_secondary_url)
values (
  'home',
  'Conlog – World leaders in smart metering solutions',
  'Conlog – World leaders in smart metering solutions',
  'World leaders in smart metering solutions with 17+ million meters across 58 countries, serving 50+ million households with smart metering, prepayment, and energy management technology.',
  'World leaders in smart metering solutions',
  'Backed by decades of experience, innovation and expertise, Conlog delivers smart metering solutions that support utility management, revenue enhancement, and smart grid evolution across 58+ countries.',
  'Explore our product range',
  '/solutions',
  'View our company profile',
  '/about'
)
on conflict (slug) do update set
  title = excluded.title,
  seo_title = excluded.seo_title,
  seo_description = excluded.seo_description,
  hero_heading = excluded.hero_heading,
  hero_subheading = excluded.hero_subheading,
  hero_cta_primary_label = excluded.hero_cta_primary_label,
  hero_cta_primary_url = excluded.hero_cta_primary_url,
  hero_cta_secondary_label = excluded.hero_cta_secondary_label,
  hero_cta_secondary_url = excluded.hero_cta_secondary_url,
  updated_at = now();

-- Wipe + re-insert home sections
delete from public.sections
where page_id = (select id from public.pages where slug = 'home');

with home as (select id from public.pages where slug = 'home')
insert into public.sections (page_id, type, position, title, subtitle, data) values
((select id from home), 'milestone', 1,
 'Celebrating 60 Years of Innovation',
 'Since 1965, Conlog has been a trusted leader in smart metering and energy management solutions, serving communities in over 58 countries and powering millions of homes and businesses.',
 jsonb_build_object(
   'body', 'As we mark six decades of progress, we remain committed to shaping a smarter, more connected energy future.',
   'cta_label', 'Learn more about our 60-year journey',
   'cta_url', '/about#60-years'
 )),

((select id from home), 'pillars', 2,
 'Driving innovation, sustainability and growth',
 null,
 jsonb_build_object('pillars', jsonb_build_array(
   jsonb_build_object('name','Innovation','body','With a constantly-expanding open hub with dedicated resources, Conlog drives, develops & incubates ideas from all corners of our business, empowering us to stay ahead of industry trends & disrupt the markets through innovation.'),
   jsonb_build_object('name','Sustainability','body','Our sustainability strategy is aligned with the UN Sustainable Development Goals, focusing on people, planet & prosperity, while ensuring inclusive strategic goal-setting & instilling an internal culture of accountability.'),
   jsonb_build_object('name','Growth','body','We are committed to growth & improvement, elevating & growing our product range while pursuing global expansion, developing enhanced understandings of our customers’ needs, & developing our capacity to execute our goals.')
 ))),

((select id from home), 'metrics', 3,
 'A global footprint with local impact',
 null,
 jsonb_build_object('metrics', jsonb_build_array(
   jsonb_build_object('label','Patents & trademarks','value','200+'),
   jsonb_build_object('label','Countries','value','58+'),
   jsonb_build_object('label','Smart meters deployed','value','17M+'),
   jsonb_build_object('label','Households served','value','50M+')
 ))),

((select id from home), 'cta-banner', 4,
 'Explore our product range',
 'Smart meters & accessories for electricity & water',
 jsonb_build_object(
   'primary_label', 'Explore our product range',
   'primary_url', '/solutions',
   'variant', 'primary'
 )),

((select id from home), 'cta-banner', 5,
 'View our company profile',
 'Find out more about Conlog',
 jsonb_build_object(
   'primary_label', 'View our company profile',
   'primary_url', '/about',
   'variant', 'secondary'
 ));

-- =========================================================================
-- Solutions (real Conlog products)
-- =========================================================================

-- Clear previous fixtures for a clean re-seed (idempotent)
delete from public.solutions where slug in (
  'single-phase-smart-meter','three-phase-smart-meter','prepayment-vending',
  'head-end-mdm','deploy-operate-services',
  'idm-apex','idm-hydra','conlog-cloud-platform','managed-services',
  'conlog-training-academy','service-desk'
);

insert into public.solutions (category, name, slug, positioning, features, benefits_utilities, benefits_consumers, icon) values
('smart-meters', 'iDM APEX · smart electricity meter', 'idm-apex',
 'Conlog''s flagship smart electricity meter — built for demand management, revenue protection and decades of reliable service.',
 jsonb_build_array(
   'STS-compliant prepayment and post-paid modes',
   'Advanced tamper detection and event logging',
   'Modular comms: cellular, PLC, RF',
   'Signed firmware OTA updates',
   '98% locally manufactured in South Africa'
 ),
 jsonb_build_array('Reduce non-technical losses','Protect and grow revenue','Accelerate rollouts with standards-led hardware'),
 jsonb_build_array('Transparent energy usage','Buy electricity anywhere, any time','Reliable, accurate supply'),
 'Cpu'),
('smart-meters', 'iDM Hydra · smart water meter', 'idm-hydra',
 'Smart prepayment water meter for demand management and conservation — engineered for harsh environments across three continents.',
 jsonb_build_array(
   'Smart prepayment with consumer self-service',
   'Robust mechanical design for harsh conditions',
   '85% locally manufactured in South Africa',
   'Integrates with Conlog CoDi vending and MDM',
   'Multi-language consumer interfaces'
 ),
 jsonb_build_array('Reduce non-revenue water','Enable demand management programs','Simplify customer onboarding'),
 jsonb_build_array('Visibility of consumption','Fair, transparent billing','Convenient prepaid top-up'),
 'Droplets'),
('prepayment', 'Prepayment & vending', 'prepayment-vending',
 'End-to-end STS token vending, revenue management and customer channels — the commercial engine behind every Conlog rollout.',
 jsonb_build_array(
   'STS-compliant token generation',
   'CoDi revenue management platform',
   'POS systems for retailers and agents',
   'Channel APIs: USSD, mobile money, retailer, web',
   'Conlog Direct consumer self-service'
 ),
 jsonb_build_array('Higher collection rates','Lower channel cost','Stronger revenue protection controls'),
 jsonb_build_array('Recharge in seconds, from anywhere','Instant credit','Multiple supported languages'),
 'CreditCard'),
('software', 'Conlog Cloud Platform', 'conlog-cloud-platform',
 'Resilient, secure cloud foundation for utility operations — hosted on AWS or Microsoft Azure with high availability, fault tolerance and disaster recovery.',
 jsonb_build_array(
   'CoDi platform hosting',
   'POS system hosting',
   'Secure data storage',
   'High availability and disaster recovery',
   'Choice of AWS or Microsoft Azure'
 ),
 jsonb_build_array('Uninterrupted service','Robust data protection','Operational efficiency at scale'),
 jsonb_build_array('Always-on recharge channels','Accurate billing'),
 'Cloud'),
('services', 'Managed & professional services', 'managed-services',
 'Infrastructure design, project management, application engineering, business intelligence and 24/7 service — the human expertise behind every rollout.',
 jsonb_build_array(
   'Infrastructure design',
   'Project management',
   'Application engineering and systems integration',
   'Business intelligence and custom reporting',
   'Service level agreements, customised to you',
   'Project engineering — deployment and commissioning worldwide'
 ),
 jsonb_build_array('Predictable rollouts','Optimally running systems','Guaranteed service through tailored SLAs'),
 jsonb_build_array('Reliable supply','Fast issue resolution via 24/7 support'),
 'Wrench'),
('services', 'Conlog Training Academy', 'conlog-training-academy',
 'MERSETA-accredited training academy preparing the smart prepayment innovators of tomorrow — covering product application, installation and commissioning.',
 jsonb_build_array(
   'MERSETA accredited curriculum',
   'Product application training',
   'Installation and commissioning modules',
   'Customer and partner enablement',
   'On-site and facility-based delivery'
 ),
 jsonb_build_array('Certified installer base','Faster, safer rollouts','Long-term operational capability'),
 jsonb_build_array('Skilled technicians in the field','Better service experience'),
 'GraduationCap'),
('services', '24/7 Service Desk', 'service-desk',
 'Award-winning customer support — seven days a week, 365 days a year, by phone, email and web.',
 jsonb_build_array(
   'First-line technical support',
   'Multiple access channels',
   'Critical support hub',
   'Proven award-winning performance'
 ),
 jsonb_build_array('Rapid incident resolution','Lower operational risk','Confidence at scale'),
 jsonb_build_array('Faster resolution','Reliable service'),
 'Headphones');

-- =========================================================================
-- Case studies
-- =========================================================================
delete from public.case_studies where slug in (
  'national-utility-prepaid-rollout','ci-dlms-modernisation','vending-channel-modernisation',
  'national-prepaid-rollout','water-demand-management','cloud-migration','channel-modernisation'
);

insert into public.case_studies (slug, title, region, utility_name, problem, solution, results, metrics, featured) values
('national-prepaid-rollout',
 'National utility cuts losses by 18% with STS prepayment rollout',
 'Sub-Saharan Africa','National Utility',
 'Persistent non-technical losses and weak collections in dense urban feeders across a national network.',
 'Deployed 1.2M Conlog single-phase STS prepayment meters integrated with CoDi vending, mobile money and retailer channels.',
 '18% reduction in non-technical losses within 18 months; collection rates above 96%; customer self-service adoption above 70%.',
 jsonb_build_object('loss_reduction',18,'revenue_uplift',22,'households',1200000),
 true),
('water-demand-management',
 'Smart water prepayment unlocks demand management at scale',
 'Southern Africa','Regional Water Authority',
 'High non-revenue water and limited visibility on household consumption across a rapidly-urbanising service area.',
 'iDM Hydra smart water meter rollout with consumer prepayment, CoDi integration and a multilingual consumer portal.',
 '21% reduction in non-revenue water, 3x faster leak detection, and meaningful improvement in customer satisfaction.',
 jsonb_build_object('loss_reduction',21,'revenue_uplift',16,'households',420000),
 true),
('cloud-migration',
 'Cloud migration delivers always-on vending and resilience',
 'East Africa','Regional Distributor',
 'On-premise CoDi infrastructure struggled with peak-hour load and had limited disaster recovery capability.',
 'Migrated CoDi, POS and data storage to the Conlog Cloud Platform on AWS with HA architecture and DR runbooks.',
 '99.99% platform availability, 4x faster recovery from regional outages, and a clean path to future-ready services.',
 jsonb_build_object('loss_reduction',6,'revenue_uplift',12,'households',680000),
 true),
('channel-modernisation',
 'Vending modernisation shifts 70% of recharges to digital channels',
 'Southern Africa','Municipal Utility',
 'Long queues and limited recharge channels for residents.',
 'Integrated mobile money and USSD with CoDi vending; deployed Conlog Direct self-service for consumers.',
 '70% of recharges shifted to digital channels; customer satisfaction up 24 NPS points.',
 jsonb_build_object('loss_reduction',5,'revenue_uplift',11,'households',380000),
 false);
