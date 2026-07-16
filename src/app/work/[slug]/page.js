import { notFound } from "next/navigation";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import CaseStudyDetail from "@/components/CaseStudyDetail";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { CASE_STUDIES, getCaseStudyBySlug } from "@/lib/work-data";

const siteName = "weberzio";

export async function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getCaseStudyBySlug(slug);
  if (!item) return { title: `Case study not found — ${siteName}` };
  const title = `${item.title} — ${siteName}`;
  const description = item.summary || item.meta || undefined;
  const image = item.imageUrl || undefined;
  return {
    title,
    description,
    keywords: Array.isArray(item.tags) ? item.tags.join(", ") : undefined,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      title,
      description,
      url: `/work/${slug}`,
      type: "article",
      images: image ? [image] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const item = getCaseStudyBySlug(slug);
  if (!item) notFound();

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Work", item: "/#work" },
      { "@type": "ListItem", position: 3, name: item.title, item: `/work/${slug}` },
    ],
  };

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: item.title,
    ...(item.summary && { description: item.summary }),
    ...(item.imageUrl && { image: item.imageUrl }),
    author: { "@type": "Organization", name: siteName },
    publisher: { "@type": "Organization", name: siteName },
    ...(item.tags && { keywords: item.tags.join(", ") }),
  };

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Case Study"
          title={item.title}
          titleAlt=""
          description={item.meta}
        />
        <CaseStudyDetail item={item} />
      </main>
      <Footer />
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={articleLd} />
    </>
  );
}
