import { routing } from '@/i18n/routing'
import { HOST } from '@/utils/consts'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { hasLocale } from 'next-intl'
import localFont from 'next/font/local'

import { notFound } from 'next/navigation'
import '../globals.css'

const switzer = localFont({
  src: '../../assets/fonts/Switzer.ttf',
  variable: '--font-switzer',
  display: 'swap'
})
const jetbrainsmono = localFont({
  src: '../../assets/fonts/JetBrainsMono.ttf',
  variable: '--font-jetbrainsmono'
})
const metadataCopy = {
  en: {
    title: 'Krzysztof Zaleski — React Native & Full-stack Developer',
    description:
      'React Native and full-stack developer from Poland building production mobile and web applications with React, TypeScript, Node.js and PostgreSQL.'
  },
  pl: {
    title: 'Krzysztof Zaleski — React Native & Full-stack Developer',
    description:
      'React Native i full-stack developer z Polski tworzący produkcyjne aplikacje mobilne i webowe w React, TypeScript, Node.js i PostgreSQL.'
  }
} as const

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const safeLocale = hasLocale(routing.locales, locale) ? locale : routing.defaultLocale
  const copy = metadataCopy[safeLocale]
  const canonical = `${HOST}/${safeLocale}`

  return {
    metadataBase: new URL(HOST),
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical,
      languages: {
        en: `${HOST}/en`,
        pl: `${HOST}/pl`,
        'x-default': `${HOST}/en`
      }
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      type: 'website',
      url: canonical,
      locale: safeLocale === 'pl' ? 'pl_PL' : 'en_US',
      images: ['/opengraph-image.jpg']
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.title,
      description: copy.description,
      images: ['/opengraph-image.jpg']
    }
  }
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  return (
    <html lang={locale} suppressHydrationWarning>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" href="/favicon-16x16.png" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <body className={`${switzer.className} ${jetbrainsmono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
