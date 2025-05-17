'use client'

import profilePicture from '@/assets/images/profile.png'
import { EMAIL, GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from '@/utils/consts'
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail
} from '@tabler/icons-react'
import { useInView } from 'framer-motion'
import { useTranslations } from 'next-intl' // Import useTranslations
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { toast } from 'sonner'
import SmallWrap from '../layout/containers/SmallWrap'
import { BlurFade } from '../ui/BlurFade'

// Social links data now uses keys for labels
const socialLinksData = [
  {
    icon: IconMail,
    labelKey: 'email', // Key for translation
    href: `mailto:${EMAIL}`,
    displayText: `${EMAIL}`
  },
  {
    icon: IconBrandX,
    labelKey: 'x',
    href: TWITTER_URL,
    displayText: '@czaleskii'
  },
  {
    icon: IconBrandGithub,
    labelKey: 'github',
    href: GITHUB_URL,
    displayText: '@Zlvsky'
  },
  {
    icon: IconBrandLinkedin,
    labelKey: 'linkedin',
    href: LINKEDIN_URL,
    displayText: '/in/krzysztof-zaleski02'
  }
]

const About: React.FC = () => {
  const t = useTranslations('about')
  const ref = useRef(null)
  const inViewResult = useInView(ref, { once: true, margin: '-150px' })

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      toast.success(t('emailCopiedToast'), {
        // Translated toast message
        className:
          '!bg-black !text-white !w-fit !shadow-darkbutton !border-none !px-3 !py-1.5 !text-xs'
      })
    })
  }

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'c') {
        copyEmailToClipboard()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Added t to dependency array if copyEmailToClipboard uses it directly, or ensure it's stable

  const translatedParagraphs = [
    t.rich('paragraphs.0', {
      technicalExpertise: (chunks) => <span className="text-black">{chunks}</span>
    }),
    t.rich('paragraphs.1', {
      powerfulAndEfficient: (chunks) => <span className="text-black">{chunks}</span>,
      scalableArchitecture: (chunks) => <span className="text-black">{chunks}</span>
    }),
    t.rich('paragraphs.2', {
      robustMaintainable: (chunks) => <span className="text-black">{chunks}</span>,
      realWorldValue: (chunks) => <span className="text-black">{chunks}</span>
    })
  ]

  return (
    <div className="w-full border-b border-gray-200 py-12 sm:py-24">
      <SmallWrap id="about">
        {/* Header Section */}
        <div className="mb-12 text-left md:mb-16">
          <h2 className="text-2xl font-medium  text-[#050505] sm:text-5xl" ref={ref}>
            <span className="flex flex-row gap-2 text-[#828282]">
              {t('headingPart1')
                .split(' ')
                .map((word, index) => {
                  return (
                    <BlurFade
                      delay={index * 0.05}
                      inView={inViewResult}
                      key={'abouth1' + index + word}
                    >
                      {word}
                    </BlurFade>
                  )
                })}
            </span>
            <span className="flex flex-row gap-2 text-xl sm:text-4xl">
              {t('headingPart2')
                .split(' ')
                .map((word, index) => (
                  <BlurFade
                    delay={0.15 + index * 0.05}
                    inView={inViewResult}
                    key={'abouth2' + index + word}
                  >
                    {word}
                  </BlurFade>
                ))}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-3 md:gap-16">
          {/* Left Column: Image, Name, Title, Copy Email, Signature */}
          <div className="flex flex-col items-start md:col-span-1">
            <div className="relative mb-4">
              <Image
                style={{
                  mask: `url(/mask.svg) alpha no-repeat center / cover add`,
                  WebkitMask: `url(/mask.svg) alpha no-repeat center / cover add`
                }}
                width={150}
                height={150}
                className="avatarMask h-20 w-20 rounded-xl border  bg-gradient-to-b from-[#D7D7D7] to-[#FEFEFE]  "
                src={profilePicture.src}
                alt={t('name')} // Translated alt text
              />
              <div className="absolute -right-1.5 bottom-0 aspect-square h-4 w-4 rounded-full bg-[#16bf5e]"></div>
            </div>
            <h2 className="text-2xl font-semibold text-black">
              {t('name')}{' '}
              <span role="img" aria-label="Poland flag">
                🇵🇱
              </span>
            </h2>
            <p className="text-md mb-2 font-mono text-gray-600 sm:mb-6">
              fullstack developer
            </p>

            <div className="sm:mb-4">
              <button
                onClick={copyEmailToClipboard}
                className="hidden text-sm text-gray-500 transition-colors hover:text-black sm:flex"
              >
                {t.rich('copyEmailPrompt', {
                  kbd: (chunks) => (
                    <kbd className="aspect-square h-[22px] w-[22px] rounded-md border border-gray-300 bg-gray-100 p-1.5 py-0.5 font-sans text-xs shadow-glossybutton sm:mx-0.5">
                      {chunks}
                    </kbd>
                  )
                })}
              </button>
            </div>

            <div className="w-full space-y-3">
              {socialLinksData.map((link) => (
                <a
                  key={link.labelKey}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-md py-2 pr-2 transition-colors hover:bg-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <link.icon
                      className="h-5 w-5 text-gray-500 group-hover:text-black"
                      stroke={1.5}
                    />
                    <span className="text-sm text-gray-700 group-hover:text-black">
                      {t(`socials.${link.labelKey}`)} {/* Translated label */}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-gray-500 group-hover:text-black">
                      {link.displayText}
                    </span>
                    <IconArrowUpRight
                      className="h-4 w-4 text-gray-400 group-hover:text-gray-600"
                      stroke={1.5}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: About Text */}
          <div className="space-y-4 md:col-span-2">
            {translatedParagraphs.map((paragraph, index) => (
              <BlurFade key={'aboutParagraph' + index} delay={0.3 + index * 0.2}>
                <p className="text-lg leading-relaxed text-[#828282]">{paragraph}</p>
              </BlurFade>
            ))}
          </div>
        </div>
      </SmallWrap>
    </div>
  )
}

export default About
