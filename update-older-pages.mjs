import fs from 'fs';

const files = [
  'app/about/page.tsx',
  'app/case-studies/page.tsx',
  'app/innovation/page.tsx',
  'app/solutions/page.tsx'
];

for (const file of files) {
  if (!fs.existsSync(file)) continue;

  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('PageHeader')) continue;

  // Add import
  content = `import { PageHeader } from "@/components/layout/PageHeader";\n` + content;

  // We'll replace the `<section className="relative pt-20 pb-12 md:pt-28">` containing the heading with our PageHeader
  const sectionRegex = /<section className="relative pt-20 pb-12 md:pt-28">[\s\S]*?<Container>[\s\S]*?<p className="mb-3 text-xs font-medium uppercase tracking-\[0\.22em\] text-brand-light\/80">\s*(.*?)\s*<\/p>\s*<h1 className="font-display text-4xl md:text-5xl font-semibold leading-tight">\s*([\s\S]*?)\s*<\/h1>([\s\S]*?)<\/Container>\s*<\/section>/;
  
  const match = content.match(sectionRegex);

  if (match) {
    const eyebrow = match[1].trim();
    let titleHTML = match[2].trim();
    // Clean up title HTML (e.g. remove <span className="gradient-text"> and line breaks)
    let plainTitle = titleHTML.replace(/<[^>]*>?/gm, '').replace(/\s+/g, ' ');
    let remainingContentInsideHero = match[3];

    let newSection = `
      <PageHeader eyebrow="${eyebrow}" title="${plainTitle}" />
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
        <Container className="relative z-10">
          ${remainingContentInsideHero}
        </Container>
      </div>
    `;

    content = content.replace(sectionRegex, newSection);

    // Ensure main background wrapper
    content = content.replace(/return \(\s*<>/, 'return (\n    <main className="relative bg-white min-h-screen">');
    content = content.replace(/<\/>\s*\);\s*}/, '    </main>\n  );\n}');
    
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}