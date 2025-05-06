'use client'

import CheckSvg from '@/assets/icons/common/check.svg'
import CopySvg from '@/assets/icons/common/copy.svg'
import MailSvg from '@/assets/icons/common/email.svg'
import { Button } from '@/components/ui/button/Button'
import { useCopyString } from '@/hooks/useCopy'
import { EMAIL } from '@/utils/consts'
import { useEffect, useRef, useState } from 'react'
import { LocalTime } from './_components/LocalTime'

function Contact() {
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
    timeout.current = setTimeout(() => {
      setType(null)
    }, 100)
    return () => clearTimeout(timeout.current)
  }, [])

  return (
    <div className="mt-8 flex flex-col gap-2">
      <div className="flex flex-row items-center gap-3">
        <a
          href="mailto:zlvsky@icloud.com"
          className=" cursor-pointer rounded-xl border-[1.5px]  border-white/5 bg-black p-[1.5px] shadow-darkbutton transition-transform ease-out hover:scale-105 active:scale-95"
          onMouseEnter={() => handleSetType('email')}
          onMouseLeave={handleClearType}
        >
          <div className="rounded-xl bg-black p-2.5 shadow-glossyinside">
            <MailSvg className="h-6 w-6 text-white" />
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
            <CheckSvg className="h-6 w-6 text-white" />
          ) : (
            <CopySvg className="h-6 w-6 text-white" />
          )}
        </Button>
        <div className="flex flex-col text-sm text-gray54">
          <span>Feel free to reach me out</span>
          {type === null ? (
            <span>Send me an email</span>
          ) : type === 'email' ? (
            <span className="font-semibold">Open in your mail app</span>
          ) : (
            <span className="font-semibold">Copy to clipboard</span>
          )}
        </div>
      </div>
      <LocalTime />
    </div>
  )
}

export default Contact
