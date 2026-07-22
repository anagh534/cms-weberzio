import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

const siteName = "Weberzio";

export const metadata = {
  title: `Terms & Conditions — ${siteName}`,
  description: "Terms and conditions for our web and mobile application development services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Legal"
          eyebrowIndex="01"
          title="Terms &"
          titleAlt="Conditions."
          description="Please read these terms carefully before engaging with our development and software engineering services."
        />

        <section className={styles.content}>
          <div className={styles.prose}>
            <h2>1. Introduction</h2>
            <p>
              These Terms and Conditions govern the provision of web development, mobile application development, DevOps, and related software engineering services by {siteName} ("we," "us," or "our"). By engaging with us, you agree to these terms.
            </p>

            <h2>2. Post-Launch Support & Warranty</h2>
            <p>
              Normal project deliveries include <strong>1 month (30 days) of free support</strong> starting from the date of final delivery or deployment to the production server. This support covers bug fixes for the original scope of work. 
            </p>
            <p>
              After the 1-month support period has concluded, any requests for updates, bug fixes, features, or modifications will be considered <strong>additional work</strong> and will be billed as payable updates based on our standard hourly rate or a newly agreed-upon fixed price.
            </p>

            <h2>3. Client Modifications to Source Code</h2>
            <p>
              We provide warranties only on the code exactly as it was delivered by our team. If you (the client), your in-house developers, or any third-party developers make <strong>any modifications, additions, or changes to the source code</strong> after delivery, all support obligations from {siteName} are immediately voided. We do not provide support for code modified by others.
            </p>

            <h2>4. Server Handover & Responsibility</h2>
            <p>
              Upon completion of the project, we may hand over access to the production servers, hosting accounts, or cloud infrastructure. 
            </p>
            <p>
              <strong>Once the server credentials have been handed over</strong>, {siteName} holds no responsibility for any server downtime, data loss, security breaches, or system failures caused by actions taken by you or any third parties. It is the client's responsibility to secure and maintain their infrastructure unless an ongoing DevOps or maintenance contract is signed with us.
            </p>

            <h2>5. Intellectual Property</h2>
            <p>
              Upon full payment of all invoices, the intellectual property rights of the custom-developed software will be transferred to you, excluding any open-source libraries or pre-existing proprietary tools used during development which remain under their respective licenses.
            </p>

            <h2>6. Liability</h2>
            <p>
              In no event shall {siteName} be liable for any indirect, incidental, or consequential damages, including loss of profits, data, or business opportunities, arising out of the use or inability to use our software or services.
            </p>

            <p className={styles.lastUpdated}>Last updated: July 2026</p>
          </div>
        </section>

        <section className={styles.cta}>
          <h2 className={styles.ctaTitle}>
            Still have questions? <span className={styles.alt}>Let&apos;s talk.</span>
          </h2>
          <p className={styles.ctaBody}>
            If you need clarification on any of our terms or want to discuss a custom maintenance contract, reach out to our team.
          </p>
          <Link href="/contact" className={styles.ctaLink}>
            Contact us →
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
