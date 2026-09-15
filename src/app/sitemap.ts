import { HOST } from '@/utils/consts'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return ['en', 'pl'].map((locale) => ({
    url: `${HOST}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: locale === 'en' ? 1 : 0.9,
    alternates: {
      languages: {
        en: `${HOST}/en`,
        pl: `${HOST}/pl`
      }
    }
  }))
}
