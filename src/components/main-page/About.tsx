'use client'

import profilePicture from '@/assets/images/profile.png'
import { useCopyString } from '@/hooks/useCopy'
import { EMAIL, GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from '@/utils/consts'
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail
} from '@tabler/icons-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useEffect } from 'react'
import SmallWrap from '../layout/containers/SmallWrap'

const socialLinks = [
  {
    icon: IconMail,
    labelKey: 'email',
    href: `mailto:${EMAIL}`,
    displayText: EMAIL,
    external: false
  },
  {
    icon: IconBrandX,
    labelKey: 'x',
    href: TWITTER_URL,
    displayText: '@czaleskii',
    external: true
  },
  {
    icon: IconBrandGithub,
    labelKey: 'github',
    href: GITHUB_URL,
    displayText: '@Zlvsky',
    external: true
  },
  {
    icon: IconBrandLinkedin,
    labelKey: 'linkedin',
    href: LINKEDIN_URL,
    displayText: '/in/krzysztof-zaleski02',
    external: true
  }
] as const

function About() {
  const t = useTranslations('about')
  const paragraphs = t.raw('paragraphs') as string[]
  const { copy: copyEmail, isCopied } = useCopyString(EMAIL)

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        event.key.toLowerCase() === 'c' &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey
      ) {
        copyEmail()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [copyEmail])

  return (
    <div className="w-full border-b border-gray-200 py-14 sm:py-24">
      <SmallWrap id="about">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-3 md:gap-16">
          <div className="flex flex-col items-start md:col-span-1">
            <div className="relative mb-4">
              <Image
                style={{
                  mask: 'url(/mask.svg) alpha no-repeat center / cover add',
                  WebkitMask: 'url(/mask.svg) alpha no-repeat center / cover add'
                }}
                width={150}
                height={150}
                className="avatarMask h-20 w-20 rounded-xl border bg-gradient-to-b from-[#d7d7d7] to-[#fefefe]"
                src={profilePicture}
                alt={t('profileAlt')}
              />
              <span
                aria-hidden="true"
                className="absolute -right-1.5 bottom-0 h-4 w-4 rounded-full bg-[#16bf5e]"
              />
            </div>

            <h2 className="text-2xl font-semibold text-black">
              {t('name')}{' '}
              <span role="img" aria-label="Poland flag">
                🇵🇱
              </span>
            </h2>
            <p className="text-md mb-2 font-mono text-gray-600 sm:mb-6">
              React Native &amp; fullstack developer
            </p>

            <div className="sm:mb-4">
              <button
                type="button"
                onClick={copyEmail}
                aria-live="polite"
                className="hidden text-sm text-gray-500 transition-colors hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black sm:flex"
              >
                {isCopied
                  ? t('emailCopiedToast')
                  : t.rich('copyEmailPrompt', {
                      kbd: (chunks) => (
                        <kbd className="mx-0.5 h-[22px] w-[22px] rounded-md border border-gray-300 bg-gray-100 p-1.5 py-0.5 font-sans text-xs shadow-glossybutton">
                          {chunks}
                        </kbd>
                      )
                    })}
              </button>
            </div>

            <div className="w-full space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.labelKey}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="group flex min-h-11 items-center justify-between rounded-md py-2 pr-2 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
                >
                  <span className="flex items-center gap-3">
                    <link.icon
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-500 group-hover:text-black"
                      stroke={1.5}
                    />
                    <span className="text-sm text-gray-700 group-hover:text-black">
                      {t(`socials.${link.labelKey}`)}
                    </span>
                  </span>
                  <span className="flex min-w-0 items-center gap-1">
                    <span className="truncate text-sm text-gray-500 group-hover:text-black">
                      {link.displayText}
                    </span>
                    <IconArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-gray-400 group-hover:text-gray-600"
                      stroke={1.5}
                    />
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
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
