'use client'

import { routes } from '@/data/routes'
import { cn } from '@/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface ISingleLink {
  href: string
  text: string
  active: boolean
}

const SingleLink: React.FC<ISingleLink> = ({ href, active, text }) => {
  const isExternal = href.startsWith('http')

  return (
    <li
      className={cn(
        'relative cursor-pointer rounded-md bg-transparent text-sm transition-colors ease-in dark:text-white/90 ',
        !active && ' hover:text-dark26 dark:hover:text-white'
      )}
    >
      <Link
        href={href}
        target={isExternal ? '_blank' : undefined}
        referrerPolicy={isExternal ? 'no-referrer' : undefined}
        className="relative z-10 px-2 py-1"
      >
        <motion.span
          initial={{ color: active ? 'white' : 'gray2' }}
          animate={{ color: active ? 'white' : 'gray2' }}
          transition={{ type: 'spring', stiffness: 290, damping: 35, duration: 3 }}
        >
          {text}
        </motion.span>
      </Link>
      {active ? (
        <motion.div
          className={
            'absolute left-0 right-0 top-0 z-0 -mt-0.5 h-[25px] rounded-md bg-dark26'
          }
          layoutId="active"
          // BUG FIX - PREVENT JUMPING WHEN PAGE IS SCROLLED
          style={{ originY: '0px' }}
          transition={{ type: 'spring', stiffness: 290, damping: 35, mass: 1 }}
        />
      ) : null}
    </li>
  )
}

const NavLinks = () => {
  const pathname = usePathname()

  return (
    <ul className="flex flex-row items-center gap-1 sm:gap-2">
      {routes.map((link, index) => (
        <SingleLink
          key={index}
          active={pathname === link.href || pathname.startsWith(link.href)}
          {...link}
        />
      ))}
    </ul>
  )
}

export default NavLinks
