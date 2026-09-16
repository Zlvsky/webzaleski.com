import { HOST } from '@/utils/consts'
import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { locale: 'en', url: HOST },
    { locale: 'pl', url: `${HOST}/pl` }
  ].map(({ locale, url }) => ({
    url,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: locale === 'en' ? 1 : 0.9,
    alternates: {
      languages: {
        en: HOST,
        pl: `${HOST}/pl`
      }
    }
  }))
}
