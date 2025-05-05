import copyToClipboard from 'copy-to-clipboard'
import { RefObject, useEffect, useState } from 'react'

export const useCopyString = (text: string) => {
  const [isCopied, setCopied] = useState(false)

  useEffect(() => {
    if (!isCopied) return

    const timeout = setTimeout(() => {
      setCopied(false)
    }, 6000)

    return () => clearTimeout(timeout)
  }, [isCopied])

  const copy = () => {
    if (isCopied) return

    if (!text) throw new Error('String is null')
    copyToClipboard(text || '')

    setCopied(true)
  }

  return { isCopied, setCopied, copy }
}

export const useCopyRef = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>
) => {
  const [isCopied, setCopied] = useState(false)

  useEffect(() => {
    if (!isCopied) return

    const timeout = setTimeout(() => {
      setCopied(false)
    }, 6000)

    return () => clearTimeout(timeout)
  }, [isCopied])

  const copy = () => {
    if (isCopied) return

    if (!ref.current) throw new Error('Reference is null.')
    copyToClipboard(ref.current.textContent || '')

    setCopied(true)
  }

  return { ref, isCopied, copy }
}
