export const SERVICES = [
  {
    slug: "web-application-development",
    title: "Web Application Development",
    tagline: "High-performance, scalable web platforms built with Next.js, React, and the MERN stack.",
    description:
      "As Kerala's premier web and mobile app development team, Weberzio designs production-grade web applications. We utilize modern frameworks like Next.js, React, and Astro alongside robust MERN stack foundations to deliver clean architecture, seamless UX, and exceptional Core Web Vitals.",
    tags: ["Next.js", "React", "MERN Stack", "Astro", "TypeScript"],
    highlights: [
      "Server-rendered Next.js and Astro applications optimized for technical SEO and measurable performance",
      "Scalable frontend architectures utilizing React component systems and end-to-end type safety",
      "Robust MERN (MongoDB, Express, React, Node.js) stack implementations for enterprise scalability",
      "Automated testing, continuous integration, and seamless CI/CD-driven deployment pipelines",
    ],
  },
  {
    slug: "saas-product-engineering",
    title: "SaaS & Digital Product Engineering",
    tagline: "Transforming concepts into resilient web and mobile platforms.",
    description:
      "We partner with startups and enterprises to architect complete SaaS ecosystems. From web-based admin dashboards in React to cross-platform mobile experiences using Flutter, our engineering studio builds secure, scalable, and multi-tenant software platforms.",
    tags: ["SaaS Development", "Flutter", "Node.js", "React", "Product Engineering"],
    highlights: [
      "Architecturally sound multi-tenant systems with fine-grained role-based access control",
      "Cross-platform mobile applications engineered with Flutter for seamless iOS and Android delivery",
      "Complex subscription billing, tiered metering, and frictionless payment gateway integrations",
      "Data-rich product analytics dashboards, feature flagging, and internal administrative tooling",
    ],
  },
  {
    slug: "api-backend-systems",
    title: "API & Backend Systems",
    tagline: "Secure, observable, and highly available architectures powered by Node.js.",
    description:
      "We engineer the backbone of your digital infrastructure. Specializing in Node.js and scalable database technologies, our team builds secure REST and GraphQL APIs, event-driven microservices, and reliable background processing systems designed for high-throughput environments.",
    tags: ["Node.js", "REST APIs", "GraphQL", "Microservices", "Backend Architecture"],
    highlights: [
      "Strictly typed, comprehensively documented REST and GraphQL API contracts",
      "Fault-tolerant background workers, message queues, and resilient event-driven pipelines",
      "Seamless third-party system integrations ensuring idempotency and automated retry mechanisms",
      "Production-ready observability with structured logging, distributed tracing, and real-time metrics",
    ],
  },
  {
    slug: "cloud-infrastructure-devops",
    title: "Cloud Infrastructure & DevOps",
    tagline: "Reliable deployments, automated pipelines, and optimized cloud orchestration.",
    description:
      "Weberzio ensures your applications are highly available and effortlessly scalable. We design robust DevOps workflows, containerized environments, and Infrastructure as Code (IaC) solutions on AWS and Vercel, enabling engineering teams to ship confidently without downtime.",
    tags: ["DevOps", "AWS", "Vercel", "CI/CD", "Infrastructure as Code"],
    highlights: [
      "Immutable Infrastructure as Code (IaC) provisioning via Terraform and modern cloud SDKs",
      "Advanced CI/CD pipelines featuring automated testing and ephemeral preview environments",
      "Comprehensive observability stacks encompassing alerts, metric dashboards, and log aggregation",
      "Strategic cloud cost optimization, architecture reviews, and capacity rightsizing recommendations",
    ],
  },
  {
    slug: "ecommerce-solutions",
    title: "High-Conversion E-commerce Solutions",
    tagline: "Headless storefronts and custom commerce platforms built for speed and scale.",
    description:
      "We engineer sophisticated digital storefronts that drive revenue. By leveraging Next.js, React, and modern headless commerce architectures, our team crafts blazing-fast, SEO-optimized e-commerce experiences with seamless checkout flows and complex inventory integrations.",
    tags: ["Headless Commerce", "Next.js", "React", "E-commerce", "Stripe"],
    highlights: [
      "Performant headless storefronts integrated with modern platforms like Shopify and custom backends",
      "Frictionless, conversion-optimized checkout experiences and secure payment gateway integrations",
      "Real-time synchronization for complex product catalogs, inventory systems, and order management",
      "Content-driven merchandizing capabilities utilizing modern CMS and static site generation",
    ],
  },
  {
    slug: "technical-consulting",
    title: "Technical Consulting & Strategy",
    tagline: "Senior engineering perspectives for architecture, scaling, and technology strategy.",
    description:
      "As an expert engineering studio based in India, Weberzio provides high-level technical oversight. We offer in-depth architecture audits, tech-stack evaluations (across Flutter, React, Node.js, and more), and strategic guidance to help you navigate technical debt and scale your engineering capabilities.",
    tags: ["Architecture Review", "Tech Strategy", "Code Audit", "Fractional CTO"],
    highlights: [
      "Comprehensive codebase audits, security reviews, and actionable architectural modernization reports",
      "Strategic technology selection, risk assessment, and detailed legacy migration planning",
      "Cross-platform mobile strategy evaluating Flutter and progressive web app (PWA) architectures",
      "Fractional CTO advisory for early-stage ventures and scalable engineering team structures",
    ],
  },
];

export function getServiceBySlug(slug) {
  return SERVICES.find((s) => s.slug === slug) || null;
}
