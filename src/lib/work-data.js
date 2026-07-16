export const CASE_STUDIES = [
  {
    title: "Nova — SaaS Platform",
    slug: "nova-saas-platform",
    meta: "web app / product engineering",
    year: "2025",
    tags: ["Next.js", "TypeScript", "Postgres"],
    imageUrl: "",
    summary:
      "Architected and built a multi-tenant SaaS platform from scratch. The platform serves hundreds of businesses with role-based access, real-time collaboration, and subscription billing.\n\nThe engagement covered: product discovery, system design, full-stack development, CI/CD pipeline setup, and AWS infrastructure with auto-scaling.",
    client: "Nova Technologies",
    role: "Lead Engineer & Architect",
    liveUrl: "",
    results: [
      "Launched MVP in 10 weeks from kickoff",
      "Handles 500k+ API requests daily within budget",
      "99.9% uptime since launch with zero P1 incidents",
      "10-person engineering team onboarded onto the codebase in under 2 weeks",
    ],
    gallery: [],
  },
  {
    title: "Halcyon — FinTech API",
    slug: "halcyon-fintech-api",
    meta: "backend / integrations",
    year: "2025",
    tags: ["Node.js", "Stripe", "GraphQL"],
    imageUrl: "",
    summary:
      "Designed and built a financial data aggregation API that connects with multiple banking providers, Stripe, and accounting platforms. The API serves as the backbone for a fintech startup's dashboard and reporting features.\n\nBuilt with GraphQL for flexible querying, queued workers for reliable data sync, and comprehensive monitoring from day one.",
    client: "Halcyon Financial",
    role: "Backend Engineer",
    liveUrl: "",
    results: [
      "Aggregates data from 15+ financial providers within seconds",
      "Sub-200ms p95 response times on complex GraphQL queries",
      "Zero data-loss incidents across 2M+ transactions processed",
      "Automated reconciliation runs nightly with alerting",
    ],
    gallery: [],
  },
  {
    title: "Prism — E-commerce Suite",
    slug: "prism-ecommerce-suite",
    meta: "full stack / commerce",
    year: "2024",
    tags: ["Shopify", "Headless", "React"],
    imageUrl: "",
    summary:
      "Built a headless e-commerce storefront on top of Shopify's Storefront API with a custom checkout experience optimized for conversion. The project included a product CMS, search with Algolia integration, and a loyalty rewards system.\n\nThe migration from a legacy Shopify theme to the headless architecture was executed with zero downtime.",
    client: "Prism Retail",
    role: "Full-Stack Developer",
    liveUrl: "",
    results: [
      "40% improvement in Lighthouse performance score",
      "22% increase in conversion rate post-launch",
      "Seamless migration with zero downtime over a holiday weekend",
      "Reduced page load time from 4.2s to 0.9s",
    ],
    gallery: [],
  },
];

export function getCaseStudyBySlug(slug) {
  return CASE_STUDIES.find((c) => c.slug === slug) || null;
}
