'use client'

import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { MouseEvent } from 'react'

function PolishFlag() {
  return (
    <svg viewBox="0 0 24 16" className="h-3.5 w-5" aria-hidden="true">
      <path fill="#fff" d="M0 0h24v8H0z" />
      <path fill="#dc143c" d="M0 8h24v8H0z" />
    </svg>
  )
}

function EnglishFlag() {
  return (
    <svg viewBox="0 0 24 16" className="h-3.5 w-5" aria-hidden="true">
      <path fill="#21468b" d="M0 0h24v16H0z" />
      <path stroke="#fff" strokeWidth="3.2" d="m0 0 24 16M24 0 0 16" />
      <path stroke="#c8102e" strokeWidth="1.4" d="m0 0 24 16M24 0 0 16" />
      <path fill="#fff" d="M0 6h24v4H0zM10 0h4v16h-4z" />
      <path fill="#c8102e" d="M0 7h24v2H0zM11 0h2v16h-2z" />
    </svg>
  )
}

export default function LocaleSwitch() {
  const locale = useLocale()
  const t = useTranslations('nav')
  const router = useRouter()
  const nextLocale = locale === 'en' ? 'pl' : 'en'
  const nextPath = nextLocale === 'pl' ? '/pl' : '/'
  const label = nextLocale === 'pl' ? t('switchToPolish') : t('switchToEnglish')

  const preserveSection = (event: MouseEvent<HTMLAnchorElement>) => {
    const hash = window.location.hash
    if (!hash) return

    event.preventDefault()
    router.replace(`${nextPath}${hash}`)
  }

  return (
    <Link
      href={nextPath}
      lang={nextLocale}
      aria-label={label}
      title={label}
      onClick={preserveSection}
      className="order-2 inline-flex h-11 w-11 items-center justify-center rounded-xl text-gray54 transition-colors hover:bg-[#f2f2f2] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black motion-reduce:transition-none sm:order-none"
    >
      <span className="overflow-hidden rounded-[3px] shadow-[0_0_0_1px_rgba(17,17,17,0.16)]">
        {nextLocale === 'pl' ? <PolishFlag /> : <EnglishFlag />}
      </span>
    </Link>
  )
}
