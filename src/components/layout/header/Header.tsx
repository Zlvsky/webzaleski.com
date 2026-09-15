import { useTranslations } from 'next-intl'
import CTA from './_components/CTA'
import Logo from './_components/Logo'
import NavLinks from './_components/NavLinks'

function Header() {
  const t = useTranslations('nav')

  return (
    <header className="fixed inset-x-0 top-3 z-20 px-3 sm:top-4">
      <a
        href="#main"
        className="sr-only rounded-lg bg-black px-4 py-3 text-sm font-medium text-white focus:not-sr-only focus:absolute focus:left-3 focus:top-0 focus:z-30 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
      >
        {t('skipToContent')}
      </a>
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex w-full max-w-screen-lg items-center justify-between rounded-2xl border border-grayE8 bg-white/90 px-2.5 py-2 shadow-work2 backdrop-blur-md sm:px-4"
      >
        <div className="flex min-w-0 items-center gap-1 sm:gap-3 lg:gap-6">
          <Logo />
          <NavLinks />
        </div>
        <CTA />
      </nav>
    </header>
  )
}

export default Header
