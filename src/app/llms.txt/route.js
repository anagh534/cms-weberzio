import { DEFAULT_LLMS, fillTemplate } from "@/lib/seo-defaults";

export const dynamic = "force-static";

const origin = process.env.NEXT_PUBLIC_SITE_URL || "https://weberzio.com";

export async function GET() {
  const body = fillTemplate(DEFAULT_LLMS, {
    origin,
    siteName: "weberzio",
    tagline: "UX/UI Designer",
    homeDescription:
      "weberzio builds reliable web applications, SaaS platforms, APIs, and cloud infrastructure for startups and enterprises.",
  });

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
