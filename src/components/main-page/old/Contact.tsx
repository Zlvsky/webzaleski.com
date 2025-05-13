'use client'

import { Button } from '@/components/ui/button/Button'
import { useCopyString } from '@/hooks/useCopy'
import { EMAIL } from '@/utils/consts'
import { IconCopy, IconCopyCheckFilled, IconMailFilled } from '@tabler/icons-react'
import { useTranslations } from 'next-intl' // Import useTranslations
import { useEffect, useRef, useState } from 'react'
import { LocalTime } from './_components/LocalTime'

function Contact() {
  const t = useTranslations('contactSection') // Initialize translations for 'contactSection'
  const [type, setType] = useState<null | 'email' | 'copy'>(null)
  const timeout = useRef<any>(null)
  const { isCopied, copy } = useCopyString(EMAIL)

  const handleSetType = (type: 'email' | 'copy') => {
    clearTimeout(timeout.current)
    setType(type)
  }

  const handleClearType = () => {
    timeout.current = setTimeout(() => {
      setType(null)
    }, 100)
  }

  useEffect(() => {
    // Initialize timeout to clear type after a delay if no interaction
    timeout.current = setTimeout(() => {
      setType(null)
    }, 2000) // Increased delay for initial state or if mouse leaves quickly

    return () => clearTimeout(timeout.current)
  }, []) // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <div className="mt-5 flex flex-col gap-2">
      <div className="flex flex-row items-center gap-3">
        <a
          href={`mailto:${EMAIL}`} // Use EMAIL const
          className=" cursor-pointer rounded-xl border-[1.5px]  border-white/5 bg-black p-[1.5px] shadow-darkbutton transition-transform ease-out hover:scale-105 active:scale-95"
          onMouseEnter={() => handleSetType('email')}
          onMouseLeave={handleClearType}
        >
          <div className="rounded-xl bg-black p-2.5 shadow-glossyinside">
            <IconMailFilled className="h-6 w-6 text-white" />
          </div>
        </a>
        <Button
          size={'icon'}
          variant={'default'}
          onMouseEnter={() => handleSetType('copy')}
          onMouseLeave={handleClearType}
          onClick={copy}
        >
          {isCopied ? (
            <IconCopyCheckFilled className="h-6 w-6 text-white" />
          ) : (
            <IconCopy className="h-6 w-6 text-white" />
          )}
        </Button>
        <div className="flex flex-col text-sm text-gray54">
          <span>{t('reachOut')}</span>
          {type === null ? (
            <span>{t('prompt.emailDefault')}</span>
          ) : type === 'email' ? (
            <span className="font-semibold">{t('prompt.emailHover')}</span>
          ) : (
            <span className="font-semibold">{t('prompt.copyHover')}</span>
          )}
        </div>
      </div>
      <LocalTime />
    </div>
  )
}

export default Contact
