import fs from 'fs';
import path from 'path';

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(file));
    } else if (file.endsWith('page.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = getFiles('app').filter(f => !f.endsWith('app\\page.tsx'));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  if (content.includes('PageHeader')) continue;

  const newPagesRegex = /import \{ Container \} from "@\/components\/ui\/Container";([\s\S]*?)<main className="relative bg-white min-h-screen pt-32 pb-24">\s*<div\s*className="absolute inset-0 z-0 opacity-80"\s*style=\{\{\s*backgroundImage: "url\('\/light-bg\.jpeg'\)",\s*backgroundSize: "cover",\s*backgroundPosition: "top center",\s*backgroundRepeat: "repeat-y",\s*\}\}\s*\/>\s*<Container className="relative z-10">\s*(?:<p className="mb-3 text-xs font-medium uppercase tracking-\[0\.2em\] text-\[#004B87\]\/80">(.*?)<\/p>\s*)?<h1 className="text-4xl md:text-5xl font-bold text-\[#011A27\] mb-8">(.*?)<\/h1>/;

  const match = content.match(newPagesRegex);

  if (match) {
    const fullMatch = match[0];
    const otherImports = match[1] || '';
    const eyebrow = match[2] || '';
    const title = match[3];

    let newImports = `import { Container } from "@/components/ui/Container";\nimport { PageHeader } from "@/components/layout/PageHeader";`;

    let replacement = `${newImports}${otherImports}<main className="relative bg-white min-h-screen">
      <PageHeader eyebrow="${eyebrow}" title="${title}" />
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
        <Container className="relative z-10">`;

    content = content.replace(fullMatch, replacement);
    content = content.replace(/<\/Container>\s*<\/main>/, '        </Container>\n      </div>\n    </main>');

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
