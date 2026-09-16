import HomePage from '@/components/main-page/HomePage'
import { setRequestLocale } from 'next-intl/server'

export default async function LocalizedHome({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return <HomePage />
}
