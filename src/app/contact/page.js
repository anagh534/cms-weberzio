import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const siteName = "Weberzio";
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://weberzio.in").replace(/\/+$/, '');

export const metadata = {
  title: `Contact — ${siteName}`,
  description:
    `Start a project with ${siteName}. Web development, SaaS engineering, and technical consulting inquiries — we reply within one business day.`,
  keywords: "contact, hire developer, project inquiry, web development",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact — ${siteName}`,
    description:
      `Start a project with ${siteName}. Web development, SaaS engineering, and technical consulting inquiries — we reply within one business day.`,
    url: "/contact",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `Contact — ${siteName}`, description: `Start a project with ${siteName}. Web development, SaaS engineering, and technical consulting inquiries — we reply within one business day.` },
};

export default async function ContactPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${siteUrl}/contact` },
    ],
  };

  const contactLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${siteName}`,
    url: `${siteUrl}/contact`,
  };

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Contact"
          eyebrowIndex="01"
          title="Let's talk"
          titleAlt="about your project."
          description="Tell us what you're building and we'll get back to you within one business day with next steps."
        />
        <ContactForm tagIndex="02" />
      </main>
      <Footer />
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={contactLd} />
    </>
  );
}
