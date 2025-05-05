import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { routing } from '@/i18n/routing'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { Inter } from 'next/font/google'

import { notFound } from 'next/navigation'
import '../globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Web & Frontend Developer | Krzysztof Zaleski',
  description:
    'Web & Frontend developer. Specialising in development of web applications, MVPs and websites. JavaScript, React.js, Next.js.'
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
    <html lang="en" suppressHydrationWarning>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" href="/favicon-16x16.png" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <body className={inter.className}>
        <NextIntlClientProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  )
}
