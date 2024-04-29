import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    var pages : MetadataRoute.Sitemap = [
        {
            url: `https://www.sinsorry.com`,
            lastModified: new Date(),
            changeFrequency: `weekly`,
            priority: 1,
        },
     
    ];

    return pages;
}