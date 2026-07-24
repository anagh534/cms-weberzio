const DEFAULT_SETTINGS = {
  siteName: "Weberzio",
  tagline: "Web & Mobile App Development Company in Kerala",
  homeTitle: "Weberzio - Best Website & Mobile App Development Company in Kerala",
  homeDescription:
    "Weberzio is a top-rated web and mobile app development company in Kerala offering affordable e-commerce website solutions in Kochi, custom web application development in Trivandrum, and responsive web design in Calicut. We build custom software solutions, SaaS platforms, Flutter mobile apps, and APIs.",
  keywords:
    "Weberzio, Weberzio web agency, Weberzio technologies, weberzio vs webzio, mobile app development company, Flutter, Next.js, React, Node.js, SaaS, cloud infrastructure, API, best website development company in kerala, best ecommerce website development company in kerala, Best companies for website development in Kerala, Affordable website development services near me in Kerala, Affordable e-commerce website solutions in Kochi, How to find top-rated website developers in Kerala, Cost of custom web application development in Trivandrum, Top-rated agencies for responsive web design in Calicut, ecommerce website development company in kerala, ecommerce website development in kerala, website development cost in kerala, website development in kerala, freelance website developer in kerala",
  ogImageUrl: "",
  twitterHandle: "",
  themeColor: "#04050f",
  logoUrl: "",
  faviconUrl: "",
  pages: {},
};

export async function getSiteSettings() {
  return { ...DEFAULT_SETTINGS };
}

