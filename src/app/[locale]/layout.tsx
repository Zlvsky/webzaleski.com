import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { routing } from '@/i18n/routing'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import localFont from 'next/font/local'
import { Toaster } from 'sonner'

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
const geistmono = localFont({
  src: '../../assets/fonts/GeistMono.ttf',
  variable: '--font-geistmono'
})

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
      <body className={`${switzer.className} ${jetbrainsmono.variable}`}>
        <NextIntlClientProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
        <Analytics />
        <Toaster position="bottom-center" offset={{ bottom: '40px' }} />
      </body>
    </html>
  )
}
