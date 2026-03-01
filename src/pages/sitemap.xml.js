import projects from '@/data/projects';

const SITE_URL = 'https://williamhfagan.com';

function generateSitemap() {
  const staticPages = ['', '/projects'];
  const projectPages = projects.map(p => `/projects/${p.slug}`);
  const allPages = [...staticPages, ...projectPages];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    path => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <changefreq>${path === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${path === '' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSitemap();
  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(sitemap);
  res.end();
  return { props: {} };
}

export default function Sitemap() {
  return null;
}
