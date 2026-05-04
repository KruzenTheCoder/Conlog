import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContentSection, ContentGrid, ContentCard } from "@/components/layout/ContentLayout";
import { MapPin, Globe2, Building2 } from "lucide-react";

export default function GeographicFootprintPage() {
  return (
    <main className="relative bg-white min-h-screen">
      <PageHeader eyebrow="Our Offer" title="Geographic Footprint" />
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
            <p className="text-2xl leading-relaxed text-[#004B87] font-bold text-center mb-6">
              Global footprint of over 17 million meters serving 90+ utilities across the world
            </p>
            <p className="text-lg text-slate-700 text-center">
              As leaders in STS innovation, the foundational standard for pre-paid technology, the Conlog Group boasts years of R&D and is dedicated to building an exceptional Pan-African experience. Conlog has experience serving clients across 5 continents and 58+ countries globally.
            </p>
          </ContentSection>

          <div className="mt-12">
            <h2 className="text-3xl font-bold text-[#011A27] text-center mb-10">Where we operate</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <ContentCard title="Head Office" icon={<Building2 />} delay={0.2}>
                <p className="text-lg font-semibold text-[#004B87]">South Africa</p>
              </ContentCard>

              <ContentCard title="Middle East & Asia" icon={<Globe2 />} delay={0.3}>
                <div className="flex flex-wrap gap-2">
                  {['Darussalam (Brunei)', 'State of Palestine'].map(country => (
                    <span key={country} className="bg-white border border-slate-200 px-3 py-1 rounded-full text-xs font-medium text-slate-600">{country}</span>
                  ))}
                </div>
              </ContentCard>

              <ContentCard title="Africa" icon={<MapPin />} delay={0.4}>
                <div className="flex flex-wrap gap-2">
                  {['Angola', 'Lesotho', 'Liberia', 'Mali', 'Mozambique', 'Namibia', 'Nigeria', 'Republic of South Sudan', 'Republic of the Congo', 'South Africa', 'Tanzania', 'Uganda', 'Eswatini', 'Madagascar', 'Zambia', 'Democratic Republic of the Congo', 'Zimbabwe', 'Botswana', 'Sierra Leone', 'Burundi', 'Benin', 'Guinea', 'Seychelles'].map(country => (
                    <span key={country} className="bg-white border border-slate-200 px-3 py-1 rounded-full text-xs font-medium text-slate-600">{country}</span>
                  ))}
                </div>
              </ContentCard>

              <div className="space-y-6">
                <ContentCard title="Europe" icon={<Globe2 />} delay={0.5}>
                  <div className="flex flex-wrap gap-2">
                    {['United Kingdom', 'France'].map(country => (
                      <span key={country} className="bg-white border border-slate-200 px-3 py-1 rounded-full text-xs font-medium text-slate-600">{country}</span>
                    ))}
                  </div>
                </ContentCard>

                <ContentCard title="Americas & Caribbean" icon={<Globe2 />} delay={0.6}>
                  <div className="flex flex-wrap gap-2">
                    {['Chile', 'Uruguay', 'El Salvador', 'Guyana', 'Curaçao', 'Haiti', 'Aruba', 'Bonaire', 'Sint Eustatius', 'Saba'].map(country => (
                      <span key={country} className="bg-white border border-slate-200 px-3 py-1 rounded-full text-xs font-medium text-slate-600">{country}</span>
                    ))}
                  </div>
                </ContentCard>

                <ContentCard title="Pacific" icon={<Globe2 />} delay={0.7}>
                  <div className="flex flex-wrap gap-2">
                    {['Papua New Guinea', 'New Caledonia', 'French Polynesia'].map(country => (
                      <span key={country} className="bg-white border border-slate-200 px-3 py-1 rounded-full text-xs font-medium text-slate-600">{country}</span>
                    ))}
                  </div>
                </ContentCard>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}