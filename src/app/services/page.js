import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServicesGrid from "@/components/ServicesGrid";
import Process from "@/components/Process";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SERVICES } from "@/lib/services-data";

const siteName = "Weberzio";
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://weberzio.in").replace(/\/+$/, '');

export const metadata = {
  title: `Web & Mobile App Development Services in Kerala, India | ${siteName}`,
  description:
    "Weberzio provides expert Web & Mobile App Development, SaaS engineering, and cloud infrastructure. We leverage technologies like Flutter and the MERN Stack from Kerala, India, to empower startups and enterprises globally.",
  keywords:
    "Web & Mobile App Development, SaaS, Flutter, MERN Stack, Kerala, India, Next.js, React, Node.js, cloud infrastructure, API",
  alternates: { canonical: "/services" },
  openGraph: {
    title: `Web & Mobile App Development Services in Kerala, India | ${siteName}`,
    description:
      "Weberzio provides expert Web & Mobile App Development, SaaS engineering, and cloud infrastructure. We leverage technologies like Flutter and the MERN Stack from Kerala, India, to empower startups and enterprises globally.",
    url: "/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Web & Mobile App Development Services | ${siteName}`,
    description: "Weberzio provides expert Web & Mobile App Development, SaaS engineering, and cloud infrastructure using Flutter and MERN Stack from Kerala, India."
  },
};

export default async function ServicesPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
    ],
  };

  const servicesLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Services offered by ${siteName}`,
    itemListElement: SERVICES.map((svc, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: svc.title,
      description: svc.description,
      url: `${siteUrl}/services/${svc.slug}`,
    })),
  };

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Services"
          eyebrowIndex="01"
          title="Services"
          titleAlt="we offer."
          description="Web applications, SaaS platforms, APIs, cloud infrastructure, and the technical guidance to keep it all moving forward."
        />
        <ServicesGrid tagIndex="02" />
        <Process tagIndex="03" />
      </main>
      <Footer />
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={servicesLd} />
    </>
  );
}
