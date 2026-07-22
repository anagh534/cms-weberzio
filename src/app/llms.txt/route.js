export const dynamic = "force-static";

const origin = process.env.NEXT_PUBLIC_SITE_URL || "https://weberzio.in";

const LLMS_CONTENT = `# Weberzio

> Weberzio is a web and mobile application development team / freelancer based in Kerala, India. We provide custom software solutions, DevOps, and web hosting services.

## Services & Technologies

- **Web Development:** Node.js, MERN stack, React, Next.js, Astro
- **Mobile Development:** Flutter
- **Core Services:** 
  - Web Application Development
  - SaaS & Product Engineering
  - API & Backend Systems
  - Cloud Infrastructure & DevOps
  - E-commerce Solutions
  - Technical Consulting
- **Additional Services:** Custom Solutions, Web Hosting

## Contact Information

- **Location:** Kerala, India
- **Phone:** 8281571805
- **Email:** support@weberzio.in

## Pages

- [Home](\${origin}/): weberzio builds reliable web applications, SaaS platforms, APIs, and cloud infrastructure for startups and enterprises.
`;

export async function GET() {
  return new Response(LLMS_CONTENT, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
