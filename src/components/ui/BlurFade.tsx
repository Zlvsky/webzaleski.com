'use client'

import {
  AnimatePresence,
  motion,
  useInView,
  UseInViewOptions,
  Variants
} from 'framer-motion'
import { useRef } from 'react'

type MarginType = UseInViewOptions['margin']

interface BlurFadeProps {
  children: React.ReactNode
  className?: string
  variant?: Variants // Changed to use Framer Motion's Variants type for more flexibility
  duration?: number
  delay?: number
  yOffset?: number
  inView?: boolean
  inViewMargin?: MarginType
  blur?: string
  enableReveal?: boolean // New prop to enable the reveal animation
}

export function BlurFade({
  children,
  className,
  variant,
  duration = 0.18,
  delay = 0,
  yOffset = 6,
  inView = false,
  inViewMargin = '-150px',
  blur = '6px',
  enableReveal = false // Default to false
}: BlurFadeProps) {
  const ref = useRef(null)
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin })
  const isInView = inView || inViewResult
  // Base states for hidden and visible
  const hiddenState: Variants['hidden'] = {
    y: yOffset,
    opacity: 0,
    filter: `blur(${blur})`
  }
  const visibleState: Variants['visible'] = {
    y: -yOffset, // Current behavior: animates to -yOffset
    opacity: 1,
    filter: `blur(0px)`
  }

  const defaultVariants: Variants = {
    hidden: hiddenState,
    visible: visibleState
  }

  const combinedVariants = variant || defaultVariants

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        exit="hidden" // Animates to 'hidden' state on exit if component is unmounted
        variants={combinedVariants}
        transition={{
          delay: 0.04 + delay, // Existing base delay + custom delay
          duration,
          ease: 'easeOut'
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
