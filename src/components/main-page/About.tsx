import profilePicture from '@/assets/images/profile.png'
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '@/utils/consts'
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail
} from '@tabler/icons-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import SmallWrap from '../layout/containers/SmallWrap'

const socialLinks = [
  { icon: IconMail, label: 'Email', href: `mailto:${EMAIL}`, external: false },
  { icon: IconBrandGithub, label: 'GitHub', href: GITHUB_URL, external: true },
  { icon: IconBrandLinkedin, label: 'LinkedIn', href: LINKEDIN_URL, external: true }
] as const

function About() {
  const t = useTranslations('about')
  const paragraphs = t.raw('paragraphs') as string[]

  return (
    <div className="w-full border-b border-gray-200 py-14 sm:py-24">
      <SmallWrap id="about">
        <div className="grid gap-10 md:grid-cols-[15rem_minmax(0,1fr)] md:gap-16">
          <div>
            <div className="relative w-fit">
              <Image
                style={{
                  mask: 'url(/mask.svg) alpha no-repeat center / cover add',
                  WebkitMask: 'url(/mask.svg) alpha no-repeat center / cover add'
                }}
                width={112}
                height={112}
                className="avatarMask h-24 w-24 rounded-xl border bg-gradient-to-b from-[#d7d7d7] to-[#fefefe]"
                src={profilePicture}
                alt={t('profileAlt')}
              />
              <span
                aria-hidden="true"
                className="absolute -right-1.5 bottom-1 h-4 w-4 rounded-full border-2 border-white bg-[#16bf5e]"
              />
            </div>
            <h2 className="mt-5 text-2xl font-semibold tracking-[-0.025em] text-black">
              {t('name')}
            </h2>
            <p className="mt-1 font-mono text-xs text-gray7B">{t('role')}</p>
            <p className="mt-4 text-sm leading-relaxed text-gray54">{t('location')}</p>

            <div className="mt-6 flex items-center gap-1">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  aria-label={link.label}
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-gray54 transition-colors hover:bg-[#f2f2f2] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
                >
                  <link.icon aria-hidden="true" size={20} stroke={1.6} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="max-w-[24ch] text-3xl font-medium leading-tight tracking-tight text-[#050505] md:text-4xl">
              {t('heading')}
            </h2>
            <div className="mt-7 max-w-[68ch] space-y-5">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-gray54 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-medium text-[#171717] underline decoration-[#bdbdbd] underline-offset-4 transition-colors hover:decoration-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              {t('linkedinCta')}
              <IconArrowUpRight aria-hidden="true" size={17} stroke={1.7} />
            </a>
          </div>
        </div>
      </SmallWrap>
    </div>
  )
}

export default About
