import HomePage from '@/components/main-page/HomePage'
import { setRequestLocale } from 'next-intl/server'

export default function EnglishHome() {
  setRequestLocale('en')

  return <HomePage />
}
