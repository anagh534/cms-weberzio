import { DEFAULT_ROBOTS, fillTemplate } from "@/lib/seo-defaults";

export const dynamic = "force-static";

const origin = process.env.NEXT_PUBLIC_SITE_URL || "https://weberzio.com";

export async function GET() {
  const body = fillTemplate(DEFAULT_ROBOTS, { origin });

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
