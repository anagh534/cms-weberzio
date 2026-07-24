import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import styles from "./page.module.css";

const siteName = "Weberzio";
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://weberzio.in").replace(/\/+$/, '');
const supportEmail = "support@weberzio.in";
const lastUpdated = "July 2026";

const title = `Terms and Conditions — ${siteName}`;
const description =
  `Read the terms and conditions that govern your use of ${siteName}'s website and services, including post-launch support, source code, server handover, intellectual property, and liability.`;

export const metadata = {
  title,
  description,
  alternates: { canonical: "/terms" },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: "/terms",
    type: "article",
  },
  twitter: { card: "summary", title, description },
};

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    body: [
      `By accessing or using the ${siteName} website, engaging our services, or entering into a written agreement with us, you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree with any part of these Terms, you should not use our website or services.`,
      `These Terms apply to all visitors, clients, and users. Where a signed statement of work or master services agreement exists, its terms take precedence over any conflict with this document.`,
    ],
  },
  {
    id: "services",
    title: "2. Services",
    body: [
      `${siteName} provides web development, mobile application development, SaaS engineering, DevOps, product design, and technical consulting services. The specific scope, deliverables, timeline, and fees for each engagement are documented in a separate proposal or statement of work agreed to by both parties.`,
      `We reserve the right to modify, suspend, or discontinue any part of our website or non-contracted services at any time without prior notice.`,
    ],
  },
  {
    id: "client-responsibilities",
    title: "3. Client Responsibilities",
    body: [
      `Clients agree to provide timely feedback, required assets, access credentials, and any information reasonably necessary for us to perform the agreed services. Delays caused by missing input from the client may extend project timelines and are not the responsibility of ${siteName}.`,
      `Clients warrant that all materials supplied to us — including text, images, code, and third-party assets — are either owned by them or properly licensed for the intended use.`,
    ],
  },
  {
    id: "payment",
    title: "4. Fees and Payment",
    body: [
      `Fees are set out in the applicable proposal or statement of work. Unless otherwise agreed in writing, invoices are payable within 14 days of issue. Late payments may incur interest at the maximum rate permitted by applicable law.`,
      `Deposits and milestone payments are non-refundable once the corresponding work has commenced. Applicable taxes are additional to quoted fees and are the responsibility of the client.`,
    ],
  },
  {
    id: "post-launch-support",
    title: "5. Post-Launch Support & Warranty",
    body: [
      `Normal project deliveries include one (1) month (30 days) of free support starting from the date of final delivery or deployment to the production server. This support covers bug fixes for the original scope of work.`,
      `After the 1-month support period has concluded, any requests for updates, bug fixes, features, or modifications will be considered additional work and will be billed as payable updates based on our standard hourly rate or a newly agreed-upon fixed price.`,
    ],
  },
  {
    id: "source-code-modifications",
    title: "6. Client Modifications to Source Code",
    body: [
      `We provide warranties only on the code exactly as it was delivered by our team. If the client, in-house developers, or any third-party developers make any modifications, additions, or changes to the source code after delivery, all support obligations from ${siteName} are immediately voided.`,
      `We do not provide support for code modified by others. Continued support after such modifications may be arranged only under a new agreement.`,
    ],
  },
  {
    id: "server-handover",
    title: "7. Server Handover & Responsibility",
    body: [
      `Upon completion of the project, we may hand over access to production servers, hosting accounts, or cloud infrastructure to the client.`,
      `Once server credentials have been handed over, ${siteName} holds no responsibility for any server downtime, data loss, security breaches, or system failures caused by actions taken by the client or any third parties. It is the client's responsibility to secure and maintain their infrastructure unless an ongoing DevOps or maintenance contract is signed with us.`,
    ],
  },
  {
    id: "ip",
    title: "8. Intellectual Property",
    body: [
      `Upon full payment of all applicable fees, the client receives ownership of the custom deliverables produced specifically for their project, excluding any pre-existing tools, libraries, frameworks, or open-source components owned by ${siteName} or third parties, which remain under their respective licences.`,
      `${siteName} retains ownership of its underlying methodologies, general know-how, and reusable code. We grant the client a perpetual, non-exclusive licence to use such items solely as embedded in the delivered work.`,
      `Unless otherwise agreed, ${siteName} may reference the completed project in its portfolio, case studies, and marketing materials.`,
    ],
  },
  {
    id: "confidentiality",
    title: "9. Confidentiality",
    body: [
      `Each party agrees to treat as confidential any non-public information disclosed by the other party in connection with an engagement, and to use such information only for the purpose of performing or receiving the services.`,
      `Confidentiality obligations survive termination of the engagement for a period of three (3) years, except where longer protection is required by law.`,
    ],
  },
  {
    id: "warranties",
    title: "10. Warranties and Disclaimers",
    body: [
      `We warrant that services will be performed with reasonable skill and care consistent with industry standards. Except as expressly stated, all services and website content are provided "as is" and "as available" without warranties of any kind, either express or implied.`,
      `We do not warrant that our website will be uninterrupted or error-free, that defects will be corrected, or that the website is free of viruses or other harmful components.`,
    ],
  },
  {
    id: "liability",
    title: "11. Limitation of Liability",
    body: [
      `To the maximum extent permitted by law, ${siteName} shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or business, arising out of or in connection with these Terms or the use of our services.`,
      `Our total aggregate liability arising from or related to any engagement shall not exceed the total fees paid by the client to us during the three (3) months preceding the event giving rise to the claim.`,
    ],
  },
  {
    id: "third-party",
    title: "12. Third-Party Services",
    body: [
      `Our deliverables may integrate or depend on third-party platforms, libraries, and APIs (for example, cloud providers, authentication services, or payment processors). We are not responsible for the availability, performance, pricing, or terms of any third-party service, and use of those services is subject to their own terms.`,
    ],
  },
  {
    id: "termination",
    title: "13. Termination",
    body: [
      `Either party may terminate an engagement with written notice for material breach that is not cured within fourteen (14) days of notice. Upon termination, the client will pay for all services performed and expenses incurred up to the effective date of termination.`,
      `We may suspend or restrict access to our website at any time for users who violate these Terms or engage in unlawful activity.`,
    ],
  },
  {
    id: "indemnity",
    title: "14. Indemnification",
    body: [
      `The client agrees to indemnify and hold harmless ${siteName}, its team, and its contractors from any claims, damages, liabilities, and expenses (including reasonable legal fees) arising from client-supplied materials, misuse of deliverables, or breach of these Terms.`,
    ],
  },
  {
    id: "governing-law",
    title: "15. Governing Law and Disputes",
    body: [
      `These Terms are governed by and construed in accordance with the laws of India. Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts in Kerala, India.`,
      `The parties will attempt to resolve any dispute through good-faith negotiation before commencing formal proceedings.`,
    ],
  },
  {
    id: "changes",
    title: "16. Changes to These Terms",
    body: [
      `We may update these Terms from time to time to reflect changes to our services, legal requirements, or business practices. The updated version will be posted on this page with a revised "Last updated" date. Continued use of our website or services after changes take effect constitutes acceptance of the revised Terms.`,
    ],
  },
  {
    id: "contact",
    title: "17. Contact",
    body: [
      `Questions about these Terms can be sent to ${supportEmail}. We aim to respond within one business day.`,
    ],
  },
];

export default function TermsPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: { "@id": `${siteUrl}/`, "@type": "WebPage" } },
      { "@type": "ListItem", position: 2, name: "Terms and Conditions", item: { "@id": `${siteUrl}/terms`, "@type": "WebPage" } },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Legal"
          eyebrowIndex="01"
          title="Terms and"
          titleAlt="conditions."
          description={`The rules and legal terms that govern your use of the ${siteName} website and services.`}
        />

        <section className={styles.section}>
          <div className={styles.meta}>
            <span className={styles.metaLabel}>Last updated</span>
            <span className={styles.metaValue}>{lastUpdated}</span>
          </div>

          <div className={styles.layout}>
            <aside className={styles.toc} aria-label="Table of contents">
              <span className={styles.tocLabel}>Contents</span>
              <ol className={styles.tocList}>
                {sections.map((s) => (
                  <li key={s.id} className={styles.tocItem}>
                    <a href={`#${s.id}`} className={styles.tocLink}>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </aside>

            <article className={styles.content}>
              {sections.map((s) => (
                <section key={s.id} id={s.id} className={styles.block}>
                  <h2 className={styles.blockTitle}>{s.title}</h2>
                  {s.body.map((p, i) => (
                    <p key={i} className={styles.blockBody}>
                      {p}
                    </p>
                  ))}
                </section>
              ))}
            </article>
          </div>
        </section>
      </main>
      <Footer />
      <JsonLd data={breadcrumbLd} />
    </>
  );
}
