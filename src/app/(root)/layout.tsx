import { HOST } from '@/utils/consts'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import localFont from 'next/font/local'
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

const title = 'Krzysztof Zaleski — React Native & Full-stack Developer'
const description =
  'React Native and full-stack developer from Poland building production mobile and web applications with React, TypeScript, Node.js and PostgreSQL.'

export const metadata: Metadata = {
  metadataBase: new URL(HOST),
  title,
  description,
  alternates: {
    canonical: HOST,
    languages: {
      en: HOST,
      pl: `${HOST}/pl`,
      'x-default': HOST
    }
  },
  openGraph: {
    title,
    description,
    type: 'website',
    url: HOST,
    locale: 'en_US',
    images: ['/opengraph-image.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/opengraph-image.jpg']
  }
}

export default async function EnglishRootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = 'en'
  setRequestLocale(locale)
  const messages = await getMessages({ locale })

  return (
    <html lang={locale} suppressHydrationWarning>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" href="/favicon-16x16.png" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <body className={`${switzer.className} ${jetbrainsmono.variable}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
