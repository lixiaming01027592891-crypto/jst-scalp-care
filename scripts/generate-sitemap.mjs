import { readdirSync, writeFileSync } from 'fs';
import { join, relative, dirname } from 'path';

const SITE = 'https://jstscalpcare.com';
const DIST = './dist';
const LASTMOD = new Date().toISOString().slice(0, 10);

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

// 排除不需要被索引的頁面（例如 404）
const pages = findHtmlDirs(DIST)
  .filter(p => p !== '/404/' && p !== '/404.html')
  .sort();

const urlEntries = pages.map(path => {
  const loc = SITE + path;
  const priority = path === '/' ? '1.0' :
    path === '/blog/' ? '0.8' :
    path.startsWith('/blog/') ? '0.7' :
    path === '/contact/' ? '0.9' :
    '0.8';
  const changefreq = path.startsWith('/blog/') ? 'weekly' : 'monthly';
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${LASTMOD}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;

// 直接覆寫 dist/sitemap.xml，與 robots.txt 及 Layout 的 /sitemap.xml 引用一致，且包含全部 blog 文章
writeFileSync(join(DIST, 'sitemap.xml'), sitemap);

console.log('Generated sitemap.xml with ' + pages.length + ' URLs');
pages.forEach(p => console.log('  ' + p));
