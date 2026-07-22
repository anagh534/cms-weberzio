import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SERVICES } from "@/lib/services-data";
import styles from "./page.module.css";

const siteName = "weberzio";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://weberzio.com";

const title = `About ${siteName} — Engineering Studio for Web & SaaS Products`;
const description =
  `${siteName} is a distributed engineering studio building fast, resilient web platforms and SaaS products. Learn how our senior team designs, ships, and scales software with founders and enterprise teams worldwide.`;
const keywords =
  "about weberzio, web development studio, saas engineering team, product engineering, custom software development, nextjs agency, react development team, technical partner";

export const metadata = {
  title,
  description,
  keywords,
  alternates: { canonical: "/about" },
  openGraph: {
    title,
    description,
    url: "/about",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

const stats = [
  { value: "60+", label: "Products shipped" },
  { value: "8yr", label: "In the field" },
  { value: "12", label: "Countries served" },
  { value: "98%", label: "Client retention" },
];

const principles = [
  {
    title: "Own the outcome, not just the ticket",
    body: "We think in terms of the product a customer touches, not the task in a tracker. That means naming trade-offs early, pushing back when scope drifts, and staying on the hook until it ships.",
  },
  {
    title: "Small teams, senior hands",
    body: "Every engagement runs with a compact team of senior engineers and designers. No layered account management, no offshored delivery — the people who plan the work also write the code.",
  },
  {
    title: "Boring where it matters",
    body: "We reach for proven architecture, typed languages, and well-understood infrastructure by default. New tools earn their place by solving a real problem, not by looking good on a slide.",
  },
  {
    title: "Performance is a feature",
    body: "Load time, interaction latency, and time-to-first-value shape whether a product survives. We measure these on real devices and treat regressions the same way we treat broken tests.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discover",
    body: "Kickoff calls, product audits, and a written brief. We surface constraints, users, and success metrics before proposing a line of code.",
  },
  {
    step: "02",
    title: "Design",
    body: "Wireframes, technical architecture, and a shipping plan you can push back on. You approve the shape of the build before we start.",
  },
  {
    step: "03",
    title: "Build",
    body: "Weekly demos, a shared board, and code you can inspect at any time. Short feedback loops keep the product close to what you actually need.",
  },
  {
    step: "04",
    title: "Ship & support",
    body: "Production launch, observability, and an agreed support window. We stay available for the questions that only surface after real users arrive.",
  },
];

const stack = [
  { group: "Frontend", items: "Next.js, React, TypeScript, Tailwind, Framer Motion" },
  { group: "Backend", items: "Node.js, Python, Go, PostgreSQL, Redis" },
  { group: "Infra", items: "Vercel, AWS, Cloudflare, Docker, Terraform" },
  { group: "Data & AI", items: "OpenAI, Anthropic, LangChain, vector search, RAG pipelines" },
];

export default function AboutPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "About", item: `${siteUrl}/about` },
    ],
  };

  const aboutLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${siteName}`,
    url: `${siteUrl}/about`,
    description,
    mainEntity: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
      description,
      foundingDate: "2018",
      areaServed: "Worldwide",
      knowsAbout: [
        "Web development",
        "SaaS engineering",
        "Product design",
        "Technical consulting",
        "Cloud infrastructure",
      ],
    },
  };

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="About"
          eyebrowIndex="01"
          title="We build software"
          titleAlt="teams actually keep using."
          description="weberzio is a distributed engineering studio for founders, product teams, and enterprises. We design, build, and scale web platforms and SaaS products with a small bench of senior engineers."
        />

        <section className={styles.intro}>
          <span className={styles.tag}>
            <span className={styles.tagIndex}>02</span>
            Who we are
          </span>
          <div className={styles.introGrid}>
            <div className={styles.introCopy}>
              <p>
                We started weberzio in 2018 after years of watching well-funded
                products stall on the last mile of engineering — the part
                between a working prototype and a platform that thousands of
                customers rely on every day. Our answer was a smaller kind of
                studio: senior engineers who own the outcome, work directly
                with founders and product leads, and stay close to the code
                long after launch.
              </p>
              <p>
                Today we partner with early-stage teams shipping their first
                paying product, growth-stage companies rebuilding for scale,
                and established businesses modernising the systems their
                operations already depend on. The tools change, the problems
                are the same: ship something durable, keep it fast, and make
                it clear enough that the next engineer can pick it up without
                a call.
              </p>
            </div>
            <ul className={styles.stats}>
              {stats.map((s) => (
                <li key={s.label} className={styles.stat}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.principles}>
          <header className={styles.sectionHeader}>
            <span className={styles.tag}>
              <span className={styles.tagIndex}>03</span>
              Principles
            </span>
            <h2 className={styles.sectionTitle}>
              How we think about <span className={styles.alt}>the work.</span>
            </h2>
          </header>
          <ul className={styles.principleList}>
            {principles.map((p, i) => (
              <li key={p.title} className={styles.principle}>
                <span className={styles.principleIndex}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.principleTitle}>{p.title}</h3>
                <p className={styles.principleBody}>{p.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.process}>
          <header className={styles.sectionHeader}>
            <span className={styles.tag}>
              <span className={styles.tagIndex}>04</span>
              Process
            </span>
            <h2 className={styles.sectionTitle}>
              From first call to <span className={styles.alt}>production.</span>
            </h2>
          </header>
          <ol className={styles.processList}>
            {processSteps.map((p) => (
              <li key={p.step} className={styles.processItem}>
                <span className={styles.processStep}>{p.step}</span>
                <div>
                  <h3 className={styles.processTitle}>{p.title}</h3>
                  <p className={styles.processBody}>{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.stack}>
          <header className={styles.sectionHeader}>
            <span className={styles.tag}>
              <span className={styles.tagIndex}>05</span>
              Stack
            </span>
            <h2 className={styles.sectionTitle}>
              The tools we reach for <span className={styles.alt}>by default.</span>
            </h2>
          </header>
          <ul className={styles.stackList}>
            {stack.map((s) => (
              <li key={s.group} className={styles.stackItem}>
                <span className={styles.stackGroup}>{s.group}</span>
                <span className={styles.stackItems}>{s.items}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.services}>
          <header className={styles.sectionHeader}>
            <span className={styles.tag}>
              <span className={styles.tagIndex}>06</span>
              What we do
            </span>
            <h2 className={styles.sectionTitle}>
              Services we deliver <span className={styles.alt}>end to end.</span>
            </h2>
          </header>
          <ul className={styles.serviceList}>
            {SERVICES.map((s) => (
              <li key={s.slug} className={styles.serviceItem}>
                <Link href={`/services/${s.slug}`} className={styles.serviceLink}>
                  <span className={styles.serviceTitle}>{s.title}</span>
                  <span className={styles.serviceDesc}>{s.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.cta}>
          <h2 className={styles.ctaTitle}>
            Have a product on the way? <span className={styles.alt}>Let&apos;s talk.</span>
          </h2>
          <p className={styles.ctaBody}>
            Tell us what you&apos;re building. We reply within one business day
            with next steps and an honest read on fit.
          </p>
          <Link href="/contact" className={styles.ctaLink}>
            Start a project →
          </Link>
        </section>
      </main>
      <Footer />
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={aboutLd} />
    </>
  );
}
