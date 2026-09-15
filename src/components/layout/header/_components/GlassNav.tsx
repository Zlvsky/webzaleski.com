'use client'

import { useEffect, useRef, type ReactNode } from 'react'

export default function GlassNav({ children }: { children: ReactNode }) {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    const enabled = window.matchMedia(
      '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'
    )
    let frame = 0
    let pointerX = 0

    const updateReflection = () => {
      frame = 0
      const bounds = nav.getBoundingClientRect()
      const x = Math.max(0, Math.min(pointerX - bounds.left, bounds.width))
      nav.style.setProperty('--reflection-x', `${x}px`)
      nav.dataset.reflecting = 'true'
    }

    const onPointerMove = (event: PointerEvent) => {
      if (!enabled.matches || event.pointerType !== 'mouse') return
      pointerX = event.clientX
      if (!frame) frame = requestAnimationFrame(updateReflection)
    }

    const resetReflection = () => {
      cancelAnimationFrame(frame)
      frame = 0
      nav.style.removeProperty('--reflection-x')
      delete nav.dataset.reflecting
    }

    nav.addEventListener('pointermove', onPointerMove)
    nav.addEventListener('pointerleave', resetReflection)
    nav.addEventListener('pointercancel', resetReflection)
    enabled.addEventListener('change', resetReflection)

    return () => {
      resetReflection()
      nav.removeEventListener('pointermove', onPointerMove)
      nav.removeEventListener('pointerleave', resetReflection)
      nav.removeEventListener('pointercancel', resetReflection)
      enabled.removeEventListener('change', resetReflection)
    }
  }, [])

  return (
    <nav
      ref={navRef}
      aria-label="Primary navigation"
      className="liquid-glass-nav pointer-events-auto relative flex w-full items-center justify-between gap-1 rounded-2xl px-2 py-2 sm:gap-2 sm:px-4"
    >
      <span className="nav-reflection" aria-hidden="true" />
      {children}
    </nav>
  )
}
