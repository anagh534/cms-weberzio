const DEFAULT_SETTINGS = {
  siteName: "weberzio",
  tagline: "UX/UI Designer",
  homeTitle: "weberzio",
  homeDescription:
    "weberzio builds reliable web applications, SaaS platforms, APIs, and cloud infrastructure for startups and enterprises.",
  keywords:
    "web development, SaaS, Next.js, React, Node.js, cloud infrastructure, API, software engineering",
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
