import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContentSection } from "@/components/layout/ContentLayout";

export default function WhatWeDoPage() {
  return (
    <main className="relative bg-white min-h-screen">
      <PageHeader eyebrow="Our Business" title="What We Do" />
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
            <p className="text-xl leading-relaxed text-[#0F172A] font-medium">
              Since the late 1980s, when the South African prepayment industry was implemented, Conlog has been at the forefront of pioneering solutions that meet and exceed the needs of utilities nationwide.
            </p>
          </ContentSection>

          <ContentSection title="Our Speciality" delay={0.2}>
            <p>
              Conlog specialises in the design, development, manufacturing and delivery of smart metering solutions for both electricity and water, enabling efficient and effective demand management, revenue enhancement and managed services.
            </p>
            <p>
              Our superior product range, coupled with our passion for surpassing expectations, has seen Conlog establish itself as a leading smart metering solutions provider.
            </p>
          </ContentSection>

          <ContentSection title="Global Reach & Innovation" delay={0.3}>
            <p>
              Conlog is renowned in our industry for design and innovation, holding more than 200 patents and trademarks. As a proudly South African black industrialist company using majority local materials, we have headquarters at the Dube TradePort in Durban and a presence in over 58 countries across Africa, the Middle East and South America.
            </p>
            <p>
              Our global footprint sees a base of over 17 million smart meters and prepaid solutions, servicing over 90 utilities and providing access to power for more than 50 million households.
            </p>
          </ContentSection>
        </Container>
      </div>
    </main>
  );
}