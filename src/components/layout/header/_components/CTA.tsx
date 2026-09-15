import { GITHUB_URL, RESUME_URL } from '@/utils/consts'
import { IconArrowDown, IconBrandGithub } from '@tabler/icons-react'
import { useTranslations } from 'next-intl'

function CTA() {
  const t = useTranslations('nav')

  return (
    <div className="flex shrink-0 items-center gap-1">
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hidden min-h-11 min-w-11 items-center justify-center rounded-lg text-gray54 transition-colors hover:bg-[#f2f2f2] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black sm:inline-flex"
      >
        <IconBrandGithub aria-hidden="true" size={20} stroke={1.6} />
      </a>
      <a
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-black px-3 text-sm font-medium text-white shadow-darkbutton transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 motion-reduce:transform-none sm:px-4"
      >
        <span className="hidden sm:inline">{t('downloadCv')}</span>
        <span className="sm:hidden">{t('cv')}</span>
        <IconArrowDown
          aria-hidden="true"
          size={16}
          stroke={1.8}
          className="hidden sm:block"
        />
      </a>
    </div>
  )
}

export default CTA
