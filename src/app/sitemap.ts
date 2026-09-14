import type { MetadataRoute } from "next";

const siteUrl = "https://julestranchier.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/cv`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/mentions-legales`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
