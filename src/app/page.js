import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SERVICES } from "@/lib/services-data";

const siteName = "weberzio";

export default async function Home() {
  const servicesLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Services offered by ${siteName}`,
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      description: s.description,
      url: `/services/${s.slug}`,
    })),
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About tagIndex="01" />
        <Highlights tagIndex="02" />
        <Work tagIndex="03" />
        <Testimonials tagIndex="04" />
        <FAQ tagIndex="05" />
      </main>
      <Footer />
      <JsonLd data={servicesLd} />
    </>
  );
}
