import { NextResponse } from "next/server";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://amac.ie";

const ROUTES: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/about-us", priority: 0.8 },
  { path: "/our-story", priority: 0.6 },
  { path: "/meet-the-team", priority: 0.6 },
  { path: "/areas-we-serve", priority: 0.8 },
  { path: "/products", priority: 0.9 },
  { path: "/fertiliser-soil-nutrition", priority: 0.7 },
  { path: "/agronomy-technical-advice", priority: 0.7 },
  { path: "/animal-feed", priority: 0.7 },
  { path: "/silage-bale-plastic-netting", priority: 0.7 },
  { path: "/solid-fuel-depot", priority: 0.7 },
  { path: "/suppliers", priority: 0.6 },
  { path: "/blogs", priority: 0.6 },
  { path: "/contact", priority: 0.6 },
  { path: "/privacy-policy", priority: 0.3 },
  { path: "/terms-conditions", priority: 0.3 },
];

export function GET() {
  const lastmod = new Date().toISOString();

  const urls = ROUTES.map(
    ({ path, priority }) => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>`
  ).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
