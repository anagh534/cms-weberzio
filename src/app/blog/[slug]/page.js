import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { POSTS, getPostBySlug } from "@/lib/blog-data";
import styles from "./page.module.css";

const siteName = "Weberzio";
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://weberzio.in").replace(/\/+$/, '');

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: `Post not found — ${siteName}` };

  const title = { absolute: `${post.title} | Weberzio` };
  const description = post.excerpt;

  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title,
      description,
      url: `/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: post.author },
    datePublished: post.date,
    url: `${siteUrl}/blog/${slug}`,
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: { "@id": `${siteUrl}/`, "@type": "WebPage" } },
      { "@type": "ListItem", position: 2, name: "Blog", item: { "@id": `${siteUrl}/blog`, "@type": "WebPage" } },
      { "@type": "ListItem", position: 3, name: post.title, item: { "@id": `${siteUrl}/blog/${slug}`, "@type": "WebPage" } },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow={post.category}
          eyebrowIndex="—"
          title={post.title}
          description={post.excerpt}
        />

        <div className={styles.coverWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.cover}
            alt={post.coverAlt || post.title}
            className={styles.coverImg}
            loading="eager"
          />
        </div>

        <article className={styles.section}>
          <div className={styles.meta}>
            <span className={styles.metaItem}>
              <span className={styles.metaLabel}>By</span>
              <span className={styles.metaValue}>{post.author}</span>
            </span>
            <span className={styles.dot} aria-hidden="true" />
            <span className={styles.metaItem}>
              <span className={styles.metaValue}>{post.date}</span>
            </span>
            <span className={styles.dot} aria-hidden="true" />
            <span className={styles.metaItem}>
              <span className={styles.metaValue}>{post.readingTime}</span>
            </span>
          </div>

          <div className={styles.body}>
            {post.content.map((block, i) => (
              <section key={i} className={styles.block}>
                <h2 className={styles.blockTitle}>{block.heading}</h2>
                {block.body.map((p, j) => (
                  <p key={j} className={styles.blockBody}>
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <div className={styles.footerBar}>
            <Link href="/blog" className={styles.back}>
              <span aria-hidden="true" className={styles.arrow}>&larr;</span>
              All posts
            </Link>
            <span className={styles.share}>Share this article</span>
          </div>

          {related.length > 0 && (
            <div className={styles.related}>
              <span className={styles.relatedLabel}>Keep reading</span>
              <div className={styles.relatedGrid}>
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className={styles.relatedCard}
                  >
                    <div className={styles.relatedMedia}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.cover}
                        alt={p.coverAlt || p.title}
                        className={styles.relatedImg}
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.relatedBody}>
                      <div className={styles.relatedMeta}>
                        <span className={styles.relatedCategory}>{p.category}</span>
                        <span className={styles.dot} aria-hidden="true" />
                        <span>{p.date}</span>
                      </div>
                      <h3 className={styles.relatedTitle}>{p.title}</h3>
                      <p className={styles.relatedExcerpt}>{p.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
      <JsonLd data={articleLd} />
      <JsonLd data={breadcrumbLd} />
    </>
  );
}
