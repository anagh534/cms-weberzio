import { buildSitemap } from "@/lib/seo-defaults";
import { SERVICES } from "@/lib/services-data";
import { CASE_STUDIES } from "@/lib/work-data";

const origin = process.env.NEXT_PUBLIC_SITE_URL || "https://weberzio.com";

export async function GET() {
  const staticRoutes = [
    { path: "/", changefreq: "weekly", priority: "1.0" },
    { path: "/services", changefreq: "monthly", priority: "0.9" },
    { path: "/contact", changefreq: "yearly", priority: "0.7" },
  ];

  const serviceRoutes = SERVICES.map((s) => ({
    path: `/services/${s.slug}`,
    changefreq: "monthly",
    priority: "0.8",
  }));

  const caseStudyRoutes = CASE_STUDIES.map((c) => ({
    path: `/work/${c.slug}`,
    changefreq: "monthly",
    priority: "0.7",
  }));

  const body = buildSitemap(origin, [
    ...staticRoutes,
    ...serviceRoutes,
    ...caseStudyRoutes,
  ]);

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
