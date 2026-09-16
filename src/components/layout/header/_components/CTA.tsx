import { GITHUB_URL } from '@/utils/consts'
import { IconBrandGithub } from '@tabler/icons-react'
import { useTranslations } from 'next-intl'
import CVButton from './CVButton'
import LocaleSwitch from './LocaleSwitch'

function CTA() {
  const t = useTranslations('nav')

  return (
    <div className="contents shrink-0 items-center gap-1 sm:flex">
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="order-3 inline-flex h-11 w-11 items-center justify-center rounded-xl text-gray54 transition-colors hover:bg-[#f2f2f2] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black sm:order-none"
      >
        <IconBrandGithub aria-hidden="true" size={20} stroke={1.6} />
      </a>
      <LocaleSwitch />
      <CVButton
        label={t('downloadCv')}
        hintText={t('cvHint')}
        dismissLabel={t('dismissCvHint')}
      />
    </div>
  )
}

export default CTA
