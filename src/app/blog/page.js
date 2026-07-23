import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { POSTS } from "@/lib/blog-data";
import styles from "./page.module.css";

const siteName = "Weberzio";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://weberzio.in";

const title = `Blog — ${siteName}`;
const description = `Notes, guides, and case studies from the ${siteName} team on web development, product design, and shipping software that actually works.`;

export const metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: "/blog",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function BlogPage() {
  const posts = POSTS;
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
    ],
  };

  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${siteName} Blog`,
    url: `${siteUrl}/blog`,
    description,
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.excerpt,
      author: { "@type": "Person", name: p.author },
      datePublished: p.date,
      url: `${siteUrl}/blog/${p.slug}`,
    })),
  };

  const [featured, ...rest] = posts;

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Journal"
          eyebrowIndex="01"
          title="Notes from"
          titleAlt="the workshop."
          description={`Writing on how we build, design, and ship software at ${siteName}.`}
        />

        <section className={styles.section}>
          <div className={styles.meta}>
            <span className={styles.metaLabel}>Latest</span>
            <span className={styles.metaValue}>{posts.length} posts</span>
          </div>

          <Link href={`/blog/${featured.slug}`} className={styles.featured}>
            <div className={styles.featuredMedia}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featured.cover}
                alt={featured.coverAlt || featured.title}
                className={styles.featuredImg}
                loading="eager"
              />
              <span className={styles.featuredBadge}>Featured</span>
            </div>
            <div className={styles.featuredBody}>
              <div className={styles.featuredMeta}>
                <span className={styles.category}>{featured.category}</span>
                <span className={styles.dot} aria-hidden="true" />
                <span>{featured.date}</span>
                <span className={styles.dot} aria-hidden="true" />
                <span>{featured.readingTime}</span>
              </div>
              <h2 className={styles.featuredTitle}>{featured.title}</h2>
              <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
              <span className={styles.readMore}>
                Read article
                <span aria-hidden="true" className={styles.arrow}>&rarr;</span>
              </span>
            </div>
          </Link>

          <div className={styles.grid}>
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={styles.card}
              >
                <div className={styles.cardMedia}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.cover}
                    alt={post.coverAlt || post.title}
                    className={styles.cardImg}
                    loading="lazy"
                  />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span className={styles.category}>{post.category}</span>
                    <span className={styles.dot} aria-hidden="true" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{post.title}</h3>
                  <p className={styles.cardExcerpt}>{post.excerpt}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.author}>{post.author}</span>
                    <span>{post.readingTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={blogLd} />
    </>
  );
}
