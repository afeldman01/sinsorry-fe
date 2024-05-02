import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages: MetadataRoute.Sitemap = [
    {
      changeFrequency: `weekly`,
      lastModified: new Date(),
      priority: 1,
      url: `https://www.sinsorry.com`,
    },
  ];

  return pages;
}
