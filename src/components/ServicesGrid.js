import Link from "next/link";
import { SERVICES } from "@/lib/services-data";
import styles from "./ServicesGrid.module.css";

const ITEMS = SERVICES.map((s) => ({
  slug: s.slug,
  title: s.title,
  description: s.description,
  tags: s.tags,
}));

export default function ServicesGrid({ tagIndex = "01" }) {
  return (
    <section id="services" className={styles.section}>
      <header className={styles.header}>
        <div>
          <span className={styles.tag}>
            <span className={styles.tagIndex}>{tagIndex}</span>
            What we do
          </span>
          <h2 className={styles.title}>
            End-to-end engineering, <span className={styles.titleAlt}>done well.</span>
          </h2>
        </div>
        <p className={styles.desc}>
          We work with founders, product teams, and enterprises across the
          web stack. Every engagement is scoped to the outcome, not the hours.
        </p>
      </header>

      <div className={styles.grid}>
        {ITEMS.map((item, i) => {
          const inner = (
            <>
              <div className={styles.cardIndex}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
              {item.tags && item.tags.length > 0 && (
                <ul className={styles.cardTags}>
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              )}
            </>
          );

          return (
            <Link
              key={item.slug}
              href={`/services/${item.slug}`}
              className={styles.card}
              style={{ "--i": i }}
            >
              {inner}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
