import { routes } from '@/data/routes'
import { useTranslations } from 'next-intl'

function NavLinks() {
  const t = useTranslations('nav.links')

  return (
    <ul className="header-links hidden items-center gap-1 sm:flex">
      {routes.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="inline-flex min-h-11 items-center whitespace-nowrap rounded-lg px-0.5 text-[0.625rem] text-gray54 transition-colors hover:bg-white/60 hover:text-black focus-visible:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black active:bg-white/80 motion-reduce:transition-none sm:px-3 sm:text-sm"
          >
            {t(link.textKey)}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default NavLinks
