'use client'

import { useLayoutEffect, useState } from 'react'

const useIsMobile = (size = 1080): boolean => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < size : false
  )

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth < size)
    }
    window.addEventListener('resize', updateSize)
    // updateSize();
    return (): void => window.removeEventListener('resize', updateSize)
  }, [size])

  return isMobile
}

export default useIsMobile
