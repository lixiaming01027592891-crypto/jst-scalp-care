import { readdirSync, writeFileSync } from 'fs';
import { join, relative, dirname } from 'path';

const SITE = 'https://jstscalpcare.com';
const DIST = './dist';

function findHtmlDirs(dir, result = []) {
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      findHtmlDirs(fullPath, result);
    } else if (entry.name === 'index.html') {
      const rel = relative(DIST, dirname(fullPath));
      if (!rel || rel === '.') {
        result.push('/');
      } else {
        result.push('/' + rel.replace(/\\/g, '/') + '/');
      }
    }
  }
  return result;
}

const pages = findHtmlDirs(DIST).sort();

const urlEntries = pages.map(path => {
  const loc = SITE + path;
  const priority = path === '/' ? '1.0' :
    path === '/blog/' ? '0.8' :
    path.startsWith('/blog/') ? '0.7' :
    path === '/contact/' ? '0.9' :
    '0.8';
  const changefreq = path.startsWith('/blog/') ? 'weekly' : 'monthly';
  return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}).join('\n');

const sitemap0 = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>`;
writeFileSync(join(DIST, 'sitemap-0.xml'), sitemap0);

const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap>\n    <loc>${SITE}/sitemap-0.xml</loc>\n  </sitemap>\n</sitemapindex>`;
writeFileSync(join(DIST, 'sitemap-index.xml'), sitemapIndex);

console.log('Generated sitemap with ' + pages.length + ' URLs');
pages.forEach(p => console.log('  ' + p));
