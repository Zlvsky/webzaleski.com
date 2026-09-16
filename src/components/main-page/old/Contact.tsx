'use client'

import { Button } from '@/components/ui/button/Button'
import { useCopyString } from '@/hooks/useCopy'
import { EMAIL, RESUME_URL } from '@/utils/consts'
import { IconCopy, IconCopyCheckFilled, IconMailFilled } from '@tabler/icons-react'
import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'
import { LocalTime } from './_components/LocalTime'

type ContactAction = 'email' | 'copy' | 'cv'
const HOVER_RESET_DELAY = 220

function Contact({ showCV = false }: { showCV?: boolean }) {
  const t = useTranslations('contactSection')
  const [hovered, setHovered] = useState<ContactAction | null>(null)
  const [focused, setFocused] = useState<ContactAction | null>(null)
  const [copyFailed, setCopyFailed] = useState(false)
  const hoverResetTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { isCopied, copy } = useCopyString(EMAIL)

  const handleHoverStart = (nextAction: ContactAction) => {
    if (hoverResetTimer.current) clearTimeout(hoverResetTimer.current)
    hoverResetTimer.current = null
    setHovered(nextAction)
  }

  const handleHoverEnd = () => {
    if (hoverResetTimer.current) clearTimeout(hoverResetTimer.current)
    hoverResetTimer.current = setTimeout(() => {
      setHovered(null)
      hoverResetTimer.current = null
    }, HOVER_RESET_DELAY)
  }

  useEffect(
    () => () => {
      if (hoverResetTimer.current) clearTimeout(hoverResetTimer.current)
    },
    []
  )

  const action = hovered ?? focused
  const prompt =
    action === 'cv'
      ? t('prompt.cvHover')
      : action === 'copy'
        ? t(
            copyFailed
              ? 'prompt.copyError'
              : isCopied
                ? 'prompt.copySuccess'
                : 'prompt.copyHover'
          )
        : action === 'email'
          ? t('prompt.emailHover')
          : t(
              copyFailed
                ? 'prompt.copyError'
                : isCopied
                  ? 'prompt.copySuccess'
                  : 'prompt.emailDefault'
            )
  const motionClass =
    'shrink-0 duration-150 motion-reduce:transform-none motion-reduce:transition-none'
  const linkClass =
    'inline-flex h-[3.125rem] w-[3.125rem] shrink-0 cursor-pointer items-center justify-center rounded-xl border-[1.5px] border-white/5 bg-black p-[1.5px] shadow-darkbutton transition-transform duration-150 ease-out hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none'

  return (
    <div className="mt-7 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="flex shrink-0 items-center gap-3">
          <a
            href={`mailto:${EMAIL}`}
            aria-label={t('prompt.emailDefault')}
            className={linkClass}
            onMouseEnter={() => handleHoverStart('email')}
            onMouseLeave={handleHoverEnd}
            onFocus={() => setFocused('email')}
            onBlur={() => setFocused(null)}
          >
            <div className="rounded-xl bg-black p-2.5 shadow-glossyinside">
              <IconMailFilled className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
          </a>
          <Button
            type="button"
            size="icon"
            variant="default"
            className={motionClass}
            aria-label={t('prompt.copyHover')}
            onMouseEnter={() => handleHoverStart('copy')}
            onMouseLeave={handleHoverEnd}
            onFocus={() => setFocused('copy')}
            onBlur={() => setFocused(null)}
            onClick={() => {
              setCopyFailed(!copy())
            }}
          >
            {isCopied ? (
              <IconCopyCheckFilled className="h-6 w-6 text-white" aria-hidden="true" />
            ) : (
              <IconCopy className="h-6 w-6 text-white" aria-hidden="true" />
            )}
          </Button>
          {showCV && (
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('prompt.cvHover')}
              className={linkClass}
              onMouseEnter={() => handleHoverStart('cv')}
              onMouseLeave={handleHoverEnd}
              onFocus={() => setFocused('cv')}
              onBlur={() => setFocused(null)}
            >
              <div className="rounded-xl bg-black p-2.5 shadow-glossyinside">
                <span className="flex h-6 w-6 items-center justify-center text-sm font-semibold text-white">
                  CV
                </span>
              </div>
            </a>
          )}
        </div>
        <div className="flex min-w-0 flex-1 flex-col text-xs leading-relaxed text-gray54 sm:text-sm">
          <span>{t('reachOut')}</span>
          <span className={action ? 'font-semibold' : undefined}>{prompt}</span>
          <span className="sr-only" role="status">
            {copyFailed ? t('prompt.copyError') : isCopied ? t('prompt.copySuccess') : ''}
          </span>
        </div>
      </div>
      <LocalTime />
    </div>
  )
}

export default Contact
