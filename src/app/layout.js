import { Sora } from "next/font/google";
import Script from "next/script";
import CursorDot from "@/components/CursorDot";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import JsonLd from "@/components/JsonLd";
import { getSiteSettings } from "@/lib/site-data";
import "./globals.css";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://weberzio.in").replace(/\/+$/, '');

export async function generateViewport() {
  const s = await getSiteSettings();
  return {
    width: "device-width",
    initialScale: 1,
    themeColor: s.themeColor,
  };
}

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export async function generateMetadata() {
  const s = await getSiteSettings();
  const homePage = s.pages?.home || {};

  const origin = siteUrl;
  const title = homePage.title || s.homeTitle || s.siteName;
  const description =
    homePage.description || s.homeDescription;
  const keywords = homePage.keywords || s.keywords;
  const ogImage = homePage.ogImage || s.ogImageUrl;

  return {
    metadataBase: new URL(origin),
    title: {
      default: title,
      template: `%s — ${s.siteName}`,
    },
    description,
    keywords: keywords || undefined,
    applicationName: s.siteName,
    authors: [{ name: s.siteName }],
    creator: s.siteName,
    publisher: s.siteName,
    alternates: {
      canonical: origin,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: origin,
      siteName: s.siteName,
      images: ogImage ? [ogImage] : undefined,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
      creator: s.twitterHandle ? `@${s.twitterHandle}` : undefined,
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}

export default async function RootLayout({ children }) {
  const s = await getSiteSettings();
  const origin = siteUrl;

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: s.siteName,
    url: origin,
    description: s.homeDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kerala",
      addressCountry: "IN"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8281571805",
      contactType: "customer support",
      email: "support@weberzio.in"
    }
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: s.siteName,
    url: origin,
    description: s.homeDescription,
  };

  return (
    <html lang="en" className={`${sora.variable}`}>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QJB16WRWKF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-QJB16WRWKF');
          `}
        </Script>
        <CursorDot />
        {children}
        <WhatsAppFloat />
        <JsonLd data={organizationLd} />
        <JsonLd data={websiteLd} />
      </body>
    </html>
  );
}
