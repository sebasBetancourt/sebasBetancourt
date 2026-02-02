import type { MetadataRoute } from 'next'

const siteUrl = process.env.SITE_URL!

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/education`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/experience`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/uses`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
    },
  ]
}
