import { GITHUB_URL } from '@/utils/consts'
import { IconBrandGithub } from '@tabler/icons-react'
import { useTranslations } from 'next-intl'
import CVButton from './CVButton'

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
      <CVButton
        label={t('downloadCv')}
        compactLabel={t('cv')}
        hintText={t('cvHint')}
        dismissLabel={t('dismissCvHint')}
      />
    </div>
  )
}

export default CTA
