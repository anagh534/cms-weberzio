import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServicesGrid from "@/components/ServicesGrid";
import Process from "@/components/Process";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SERVICES } from "@/lib/services-data";

const siteName = "weberzio";

export const metadata = {
  title: `Services — ${siteName}`,
  description:
    "Web development, SaaS engineering, APIs, cloud infrastructure, and technical consulting for startups and enterprise teams.",
  keywords:
    "web development, SaaS, Next.js, React, Node.js, cloud infrastructure, API",
  alternates: { canonical: "/services" },
  openGraph: {
    title: `Services — ${siteName}`,
    description:
      "Web development, SaaS engineering, APIs, cloud infrastructure, and technical consulting for startups and enterprise teams.",
    url: "/services",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `Services — ${siteName}`, description: "Web development, SaaS engineering, APIs, cloud infrastructure, and technical consulting for startups and enterprise teams." },
};

export default async function ServicesPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
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
      url: `/services/${svc.slug}`,
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
