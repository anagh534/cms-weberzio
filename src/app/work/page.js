import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Work from "@/components/Work";
import Footer from "@/components/Footer";

const siteName = "Weberzio";

export const metadata = {
  title: `Our Work | ${siteName}`,
  description: "A collection of web and mobile applications, SaaS platforms, and digital experiences we've crafted.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Work"
          eyebrowIndex="01"
          title="Our Work"
          titleAlt="portfolio."
          description="A collection of web and mobile applications, SaaS platforms, and digital experiences we've crafted."
        />
        <Work tagIndex="02" showAll={true} />
      </main>
      <Footer />
    </>
  );
}
