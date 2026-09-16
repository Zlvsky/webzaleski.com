import { HOST } from '@/utils/consts'

export const dynamic = 'force-static'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*'
      }
    ],
    sitemap: `${HOST}/sitemap.xml`,
    host: HOST
  }
}
