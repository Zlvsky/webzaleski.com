'use client'

import { RESUME_URL } from '@/utils/consts'
import { IconArrowDown, IconX } from '@tabler/icons-react'
import { useEffect, useRef, useState, type CSSProperties } from 'react'

const CV_HINT_KEY = 'portfolio-cv-hint-shown'
const SCROLL_COMPLETION_THRESHOLD = 0.9

interface CVButtonProps {
  label: string
  hintText: string
  dismissLabel: string
}

export default function CVButton({ label, hintText, dismissLabel }: CVButtonProps) {
  const progressRef = useRef<SVGPathElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const hintRef = useRef<HTMLDivElement>(null)
  const [complete, setComplete] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    let frame = 0
    let hintShown = false
    let hasCompleted = false

    try {
      hintShown = sessionStorage.getItem(CV_HINT_KEY) === 'true'
    } catch {
      // The in-memory flag still limits the hint when storage is unavailable.
    }

    const updateProgress = () => {
      frame = 0
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const scroll = Math.max(0, window.scrollY)
      const completionScroll = maxScroll * SCROLL_COMPLETION_THRESHOLD
      const progress = completionScroll > 0 ? Math.min(1, scroll / completionScroll) : 0

      // Completion stays latched when scrolling back up or resizing the page.
      hasCompleted = hasCompleted || progress >= 1

      progressRef.current?.style.setProperty(
        'stroke-dashoffset',
        String(1 - (hasCompleted ? 1 : progress))
      )
      setComplete(hasCompleted)

      if (hasCompleted && !document.hidden && !hintShown) {
        hintShown = true
        setShowHint(true)
        try {
          sessionStorage.setItem(CV_HINT_KEY, 'true')
        } catch {
          // Keep the hint usable in private or restricted contexts.
        }
      }
    }

    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(updateProgress)
    }

    const observer = new ResizeObserver(scheduleUpdate)
    observer.observe(document.body)
    const button = buttonRef.current
    const resizeButton = () => {
      if (button) setSize({ width: button.offsetWidth, height: button.offsetHeight })
      scheduleUpdate()
    }
    const buttonObserver = new ResizeObserver(resizeButton)
    if (button) buttonObserver.observe(button)
    resizeButton()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    window.addEventListener('pageshow', scheduleUpdate)
    document.addEventListener('visibilitychange', scheduleUpdate)
    scheduleUpdate()

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      buttonObserver.disconnect()
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      window.removeEventListener('pageshow', scheduleUpdate)
      document.removeEventListener('visibilitychange', scheduleUpdate)
    }
  }, [])

  useEffect(() => {
    if (!showHint) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      if (hintRef.current?.contains(document.activeElement)) buttonRef.current?.focus()
      setShowHint(false)
    }
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !hintRef.current?.contains(event.target)) {
        setShowHint(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [showHint])

  // Trace the button clockwise from its top center, with a small gap outside it.
  const width = size.width + 6
  const height = size.height + 6
  const edge = 1.5
  const radius = 14
  const right = width - edge
  const bottom = height - edge
  const outline = `M${width / 2} ${edge}H${right - radius}A${radius} ${radius} 0 0 1 ${right} ${edge + radius}V${bottom - radius}A${radius} ${radius} 0 0 1 ${right - radius} ${bottom}H${edge + radius}A${radius} ${radius} 0 0 1 ${edge} ${bottom - radius}V${edge + radius}A${radius} ${radius} 0 0 1 ${edge + radius} ${edge}H${width / 2}Z`

  return (
    <div
      className="relative order-4 sm:order-none"
      style={{ '--cta-width': `${size.width}px` } as CSSProperties}
    >
      <a
        ref={buttonRef}
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="relative inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-black px-3 text-sm font-medium text-white shadow-darkbutton transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 motion-reduce:transform-none sm:px-4"
      >
        <span>{label}</span>
        <IconArrowDown aria-hidden="true" size={16} stroke={1.8} />
        {size.width > 0 && (
          <svg
            className="cv-progress pointer-events-none absolute -inset-[3px] h-[calc(100%+6px)] w-[calc(100%+6px)] overflow-visible"
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            aria-hidden="true"
            data-complete={complete}
          >
            <path d={outline} stroke="#d4d4d4" strokeWidth="1" />
            <path
              ref={progressRef}
              className="cv-progress-fill"
              d={outline}
              pathLength="1"
              strokeWidth="1.5"
              strokeDasharray="1 1"
              strokeDashoffset="1"
            />
          </svg>
        )}
      </a>
      {showHint && (
        <div ref={hintRef} className="cv-hint">
          <p role="status" className="min-w-0 text-xs font-medium text-[#282828]">
            {hintText}
          </p>
          <button
            type="button"
            aria-label={dismissLabel}
            onClick={() => {
              buttonRef.current?.focus({ preventScroll: true })
              setShowHint(false)
            }}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-gray54 transition-colors hover:bg-[#f5f5f5] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black motion-reduce:transition-none"
          >
            <IconX size={15} stroke={1.6} aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  )
}
