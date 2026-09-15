import { useTranslations } from 'next-intl'
import CTA from './_components/CTA'
import GlassNav from './_components/GlassNav'
import Logo from './_components/Logo'
import NavLinks from './_components/NavLinks'

function Header() {
  const t = useTranslations('nav')

  return (
    <header className="pointer-events-none fixed inset-x-0 top-3 z-20 sm:top-4">
      <a
        href="#main"
        className="sr-only pointer-events-auto rounded-lg bg-black px-4 py-3 text-sm font-medium text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-0 focus:z-30 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
      >
        {t('skipToContent')}
      </a>
      <div className="header-shell mx-auto w-full max-w-screen-lg px-4">
        <GlassNav>
          <div className="header-identity flex min-w-0 items-center gap-1 sm:gap-3 lg:gap-6">
            <Logo />
            <NavLinks />
          </div>
          <CTA />
        </GlassNav>
      </div>
    </header>
  )
}

export default Header
