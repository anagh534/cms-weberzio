"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const FAQS = [
  {
    q: "What kind of projects do you take on?",
    a: "We build custom web applications, mobile apps (Flutter), SaaS platforms, marketing sites, internal tools, and APIs. As a full-stack development team, we work with startups and enterprises to build software that scales.",
  },
  {
    q: "Which technologies do you specialise in?",
    a: "Our core stack includes Next.js, React, Astro, Node.js (MERN stack) for web, and Flutter for cross-platform mobile apps. We also handle cloud infrastructure and DevOps on AWS and Google Cloud.",
  },
  {
    q: "Where is your team based?",
    a: "We are a premium web and mobile app development team based in Kerala, India. We partner with local and global clients, providing top-tier custom software solutions and technical consulting.",
  },
  {
    q: "How do you price a project?",
    a: "Most work is scoped as a fixed-price milestone (for well-defined features like a React website or Flutter app) or a monthly retainer (for ongoing product engineering). We share a clear proposal before we begin.",
  },
  {
    q: "Do you offer web hosting and DevOps services?",
    a: "Absolutely. Beyond custom software engineering, we manage cloud infrastructure, continuous deployment (DevOps), and ongoing web hosting to ensure your web applications run reliably and securely.",
  },
  {
    q: "Do you work with existing codebases?",
    a: "Yes — we frequently audit legacy applications, take over stalled projects, or help existing teams scale. We map the code, identify risks, and quickly ship the first milestone.",
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
