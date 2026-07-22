const DEFAULT_SETTINGS = {
  siteName: "Weberzio",
  tagline: "Web & Mobile App Development Company in Kerala",
  homeTitle: "Weberzio - Web & Mobile App Development Company in Kerala",
  homeDescription:
    "Weberzio is a premium web and mobile application development team based in Kerala, India. We build custom software solutions, SaaS platforms, APIs, and cloud infrastructure.",
  keywords:
    "web development, mobile app development, Flutter, Next.js, React, Node.js, SaaS, cloud infrastructure, API, software engineering, Kerala, India, web hosting, MERN stack",
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

