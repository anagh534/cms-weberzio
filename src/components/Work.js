"use client";

import styles from "./Work.module.css";

const ITEMS = [
  {
    slug: "Theliv - Investment Platform",
    title: "Theliv — Investment Platform",
    meta: "A platform for investors to manage their portfolios and track performance. founders can also manage their investors and track their investments.",
    year: "2026",
    tags: ["Node.js", "MongoDB", "Next.js", "TypeScript", "Postgres"],
    imageUrl: "/theliv.png",
    url: "http://www.theliv.co.uk/", // optional
  }
];

export default function Work({ tagIndex = "02" }) {
  // Show only the first 3 — the 4th slot is the CTA tile
  const visible = ITEMS.slice(0, 3);

  return (
    <section id="work" className={styles.section}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.tag}>
            <span className={styles.tagIndex}>{tagIndex}</span>
            Case Study
          </span>
          <h2 className={styles.title}>
            Our work: <span className={styles.titleAlt}>from</span>
            <br />
            discovery to launch
          </h2>
        </div>
        <a href="/work" className={styles.viewAll}>
          View All Projects
          <span className={styles.viewAllArrow} aria-hidden="true" />
        </a>
      </header>

      <div className={styles.grid}>
        {visible.map((item, i) => (
          <a
            key={item.slug}
            href={item.url ? item.url : (item.slug ? `/work/${item.slug}` : "#")}
            target={item.url ? "_blank" : undefined}
            rel={item.url ? "noopener noreferrer" : undefined}
            className={styles.card}
            style={{ "--i": i }}
          >
            <div className={styles.cardMedia}>
              {item.imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={item.imageUrl} alt={item.title} className={styles.cardImg} />
              ) : (
                <div className={styles.cardShape} data-variant={i % 3} />
              )}
              {item.year && (
                <span className={styles.cardYear}>© {item.year}</span>
              )}
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              {item.meta && (
                <div className={styles.cardMeta}>{item.meta}</div>
              )}
              {Array.isArray(item.tags) && item.tags.length > 0 && (
                <ul className={styles.cardTags}>
                  {item.tags.slice(0, 4).map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              )}
            </div>
          </a>
        ))}

        <a href="#contact" className={styles.tail} style={{ "--i": visible.length }}>
          <div className={styles.tailInner}>
            <h3 className={styles.tailTitle}>
              Have a project <span className={styles.tailAlt}>in mind?</span>
            </h3>
            <span className={styles.tailCta}>
              Start a Conversation
              <span className={styles.tailArrow} aria-hidden="true" />
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
