'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

export const LocalTime = () => {
  const t = useTranslations('contactSection')
  const locale = useLocale()
  const [localTime, setLocalTime] = useState<string>('')

  useEffect(() => {
    const isPolish = locale === 'pl'
    const formatter = new Intl.DateTimeFormat(isPolish ? 'pl-PL' : 'en-US', {
      hour: isPolish ? '2-digit' : 'numeric',
      minute: '2-digit',
      hour12: !isPolish,
      timeZone: 'Europe/Warsaw'
    })
    const updateTime = () => setLocalTime(formatter.format(new Date()))

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [locale])

  return (
    <span className="font-mono text-xs text-grayText1 dark:text-grayText2">
      {t('poland')} {localTime}
    </span>
  )
}
