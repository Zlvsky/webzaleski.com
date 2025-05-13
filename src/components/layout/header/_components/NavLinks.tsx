'use client'

import { routes } from '@/data/routes'
import { cn } from '@/utils'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl' // Import useTranslations
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface ISingleLink {
  href: string
  textKey: string // Changed from text to textKey
  active: boolean
}

const SingleLink: React.FC<ISingleLink> = ({ href, active, textKey }) => {
  const t = useTranslations('nav.links') // Initialize translations for nav.links
  const translatedText = t(textKey) // Get translated text
  const isExternal = href.startsWith('http')

  return (
    <li
      className={cn(
        'relative cursor-pointer rounded-md bg-transparent text-sm transition-colors ease-in',
        !active && ' hover:text-dark26 '
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
          {translatedText} {/* Use translated text */}
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
      {routes.map(
        (
          link // Removed index as key, using link.href or link.textKey is better if unique
        ) => (
          <SingleLink
            key={link.href} // Using href as key, ensure it's unique
            active={pathname === link.href || pathname.startsWith(link.href)}
            href={link.href}
            textKey={link.textKey}
          />
        )
      )}
    </ul>
  )
}

export default NavLinks
