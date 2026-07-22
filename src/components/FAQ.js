"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const FAQS = [
  {
    q: "What kind of projects do you take on?",
    a: "We build custom web applications, mobile apps (Flutter), SaaS platforms, marketing sites, internal tools, and APIs. As a full-stack development team, we work with startups and enterprises to build software that scales.",
  },
  {
    q: "How to choose a web development company in Kerala?",
    a: "When choosing a web development company in Kerala, look for a team with a strong portfolio, transparent pricing, and deep technical expertise. At Weberzio, we pride ourselves on being one of the best companies for website development in Kerala, focusing on scalable architecture, clear communication, and delivering reliable software.",
  },
  {
    q: "What are the popular website development packages offered in Kerala?",
    a: "Popular website development packages typically range from basic corporate landing pages to full-scale e-commerce solutions and custom SaaS platforms. We offer affordable website development services near me in Kerala tailored to your business needs, whether you're a small business or an enterprise.",
  },
  {
    q: "How much does custom web application development cost in Trivandrum or Kochi?",
    a: "The website development cost in Kerala varies based on complexity. A simple corporate site might be highly affordable, while the cost of custom web application development in Trivandrum or affordable e-commerce website solutions in Kochi depends on the features, integrations, and scale. We share a clear, fixed-price proposal before we begin.",
  },
  {
    q: "Where is your team based?",
    a: "We are a premium team of freelance website developers and engineers based in Kerala, India. We partner with local and global clients, providing top-tier custom software solutions and technical consulting.",
  },
  {
    q: "Do you work with existing codebases?",
    a: "Yes — we frequently audit legacy applications, take over stalled projects, or help existing teams scale. Whether you need top-rated agencies for responsive web design in Calicut to revamp your UI or backend experts to fix performance issues, we map the code and quickly ship the first milestone.",
  },
];

export default function FAQ({ tagIndex = "05" }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-heading">
      <header className={styles.header}>
        <span className={styles.tag}>
          <span className={styles.tagIndex}>{tagIndex}</span>
          FAQ
        </span>
        <h2 id="faq-heading" className={styles.title}>
          Answers before you <span className={styles.titleAlt}>ask.</span>
        </h2>
      </header>

      <ul className={styles.list}>
        {FAQS.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <li key={item.q} className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}>
              <button
                type="button"
                className={styles.question}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-trigger-${i}`}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
              >
                <span className={styles.qText}>{item.q}</span>
                <span className={styles.icon} aria-hidden="true">
                  <span />
                  <span />
                </span>
              </button>
              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-trigger-${i}`}
                className={styles.panel}
                hidden={!isOpen}
              >
                <p className={styles.answer}>{item.a}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </section>
  );
}
