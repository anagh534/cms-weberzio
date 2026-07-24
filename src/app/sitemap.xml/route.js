import { buildSitemap } from "@/lib/seo-defaults";
import { SERVICES } from "@/lib/services-data";
import { CASE_STUDIES } from "@/lib/work-data";
import { POSTS } from "@/lib/blog-data";

export const dynamic = "force-static";

const origin = process.env.NEXT_PUBLIC_SITE_URL || "https://weberzio.in";

export async function GET() {
  const staticRoutes = [
    { path: "/", changefreq: "weekly", priority: "1.0" },
    { path: "/services", changefreq: "monthly", priority: "0.9" },
    { path: "/about", changefreq: "monthly", priority: "0.8" },
    { path: "/blog", changefreq: "weekly", priority: "0.8" },
    { path: "/contact", changefreq: "yearly", priority: "0.7" },
    { path: "/terms", changefreq: "yearly", priority: "0.3" },
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

  const blogRoutes = POSTS.map((p) => ({
    path: `/blog/${p.slug}`,
    changefreq: "monthly",
    priority: "0.7",
  }));

  const body = buildSitemap(origin, [
    ...staticRoutes,
    ...serviceRoutes,
    ...caseStudyRoutes,
    ...blogRoutes,
  ]);

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
