import rodIcon from '@/assets/images/RoDIcon.png'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

function CTA() {
  const t = useTranslations('nav')

  return (
    <a
      href="https://www.kickstarter.com/projects/czaleski/arca-idle-multiplatform-idle-rpg-in-dark-fantasy-pixel-art?ref=webzaleski.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('tryBeta')}
      className="rod-cta flex min-h-11 min-w-11 cursor-pointer flex-row items-center justify-center overflow-hidden rounded-lg border border-[#dedede] bg-white px-2 py-1 shadow-work2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark26 focus-visible:ring-offset-2"
    >
      <Image src={rodIcon} alt="" width={24} height={24} />
      <span className="rod-cta-label overflow-hidden whitespace-nowrap text-sm text-black">
        {t('tryBeta')}
      </span>
    </a>
  )
}

export default CTA
