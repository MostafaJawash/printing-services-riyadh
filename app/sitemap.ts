import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{
    url: "https://printing-services-riyadh.vercel.app/",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
    images: ["https://printing-services-riyadh.vercel.app/printing-hero.png"],
  }];
}
