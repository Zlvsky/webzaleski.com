'use client'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import CTA from './_components/CTA'
import Logo from './_components/Logo'
import NavLinks from './_components/NavLinks'

function Header() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previousScroll = scrollY.getPrevious()
    if (latest > previousScroll! && latest > 100) setHidden(true)
    else setHidden(false)
  })

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' }
      }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      animate={hidden ? 'hidden' : 'visible'}
      className="fixed left-0 right-0 top-4  z-20 mx-auto flex w-[96%] max-w-2xl items-center justify-between rounded-2xl border border-grayE8 bg-white/40 px-2 py-3 shadow-sm backdrop-blur-md sm:px-5 sm:py-4 md:w-full"
    >
      <div className="flex flex-row items-center justify-between gap-4">
        <Logo />
        <NavLinks />
      </div>

      <div className="flex flex-row items-center gap-1 sm:gap-3">
        <CTA />
      </div>
    </motion.nav>
  )
}

export default Header
