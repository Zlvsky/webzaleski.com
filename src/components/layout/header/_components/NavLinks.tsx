import { routes } from '@/data/routes'
import { useTranslations } from 'next-intl'

function NavLinks() {
  const t = useTranslations('nav.links')

  return (
    <ul className="flex items-center gap-0.5 sm:gap-1">
      {routes.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="inline-flex min-h-11 items-center rounded-lg px-1.5 text-[0.68rem] text-gray54 transition-colors hover:bg-[#f2f2f2] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black sm:px-3 sm:text-sm"
          >
            {t(link.textKey)}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default NavLinks
