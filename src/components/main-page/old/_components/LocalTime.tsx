'use client'

import { useEffect, useState } from 'react'

export const LocalTime = () => {
  const [localTime, setLocalTime] = useState<string>('')

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const options = {
        hour: 'numeric' as const,
        minute: 'numeric' as const,
        hour12: true,
        timeZone: 'Europe/Warsaw'
      }
      const formatter = new Intl.DateTimeFormat('en-US', options)
      const formattedTime = formatter.format(now)
      setLocalTime(formattedTime)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <span className="font-mono text-xs text-grayText1 dark:text-grayText2">
      Poland, local time: {localTime}
    </span>
  )
}
