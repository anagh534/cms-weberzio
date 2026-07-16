import { notFound } from "next/navigation";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetail from "@/components/ServiceDetail";
import Process from "@/components/Process";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SERVICES, getServiceBySlug } from "@/lib/services-data";

const siteName = "weberzio";

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: `Service not found — ${siteName}` };
  const title = `${service.title} — ${siteName}`;
  return {
    title,
    description: service.description,
    keywords: service.tags?.join(", "),
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title,
      description: service.description,
      url: `/services/${slug}`,
      type: "article",
    },
    twitter: { card: "summary_large_image", title, description: service.description },
  };
}

export default async function ServiceSlugPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
      { "@type": "ListItem", position: 3, name: service.title, item: `/services/${slug}` },
    ],
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@type": "Organization", name: siteName },
    ...(service.tags && { serviceType: service.tags.join(", ") }),
  };

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Services"
          title={service.title}
          titleAlt=""
          description={service.tagline}
        />
        <ServiceDetail service={service} />
        <Process />
      </main>
      <Footer />
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={serviceLd} />
    </>
  );
}
