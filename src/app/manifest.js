import { site } from "@/data/site";

export const dynamic = "force-static";

export default function manifest() {
  return {
    name: `${site.name} — ${site.tagline}`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#e23a2e",
    icons: [
      {
        src: "/star.png",
        sizes: "256x256",
        type: "image/png",
      },
    ],
  };
}
