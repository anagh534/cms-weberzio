import { site } from "@/data/site";

const DEFAULT_OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: site.name,
};

/**
 * Builds consistent page metadata with canonical URL, OpenGraph, and Twitter
 * cards so child routes never drop the default OG image when overriding
 * title or description.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  openGraph = {},
}) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: site.name,
      title,
      description,
      url: `${site.url}${path}`,
      images: [DEFAULT_OG_IMAGE],
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}
