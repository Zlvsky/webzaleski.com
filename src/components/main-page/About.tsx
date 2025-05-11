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
import Image from 'next/image'
import React, { useEffect } from 'react'
import { toast } from 'sonner'
import SmallWrap from '../layout/containers/SmallWrap' // Assuming you have this

const socialLinks = [
  {
    icon: IconMail,
    label: 'Email',
    href: `mailto:${EMAIL}`,
    displayText: `${EMAIL}`
  },
  {
    icon: IconBrandX,
    label: 'X.com',
    href: TWITTER_URL,
    displayText: '@czaleskii'
  },
  {
    icon: IconBrandGithub,
    label: 'GitHub',
    href: GITHUB_URL,
    displayText: '@Zlvsky'
  },
  {
    icon: IconBrandLinkedin,
    label: 'LinkedIn',
    href: LINKEDIN_URL,
    displayText: '/in/krzysztof-zaleski02'
  }
]

const About: React.FC = () => {
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      toast.success('Email copied to clipboard', {
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
  }, [])

  const aboutParagraphs = [
    'I love turning ideas into something real through design. What started as a hobby turned into a career when I discovered how design can make things both look great and work better.',
    'I focus on creating user interfaces that serve a real purpose – making sure they’re not just pretty, but actually solve problems. Whether I’m working on a mobile app or a website, my goal is to make something that feels natural and easy to use.',
    'I’m a bit of a perfectionist when it comes to the small stuff, but I think that’s what makes good design great. This attention to detail helps me build strong relationships with clients, as they know I’ll put the same care into their project that they would.'
  ]

  return (
    <div className="w-full border-b border-gray-200 py-24">
      <SmallWrap>
        {/* Header Section */}
        <div className="mb-12 text-left md:mb-16">
          <h2 className="text-4xl font-medium leading-tight text-[#050505] sm:text-5xl">
            <span className="text-[#828282]">Designing experiences</span>
            <br />
            that solve real problems.
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
                alt=""
              />
              <div className="absolute -right-1.5 bottom-0 aspect-square h-4 w-4 rounded-full bg-[#16bf5e]"></div>
            </div>
            <h2 className="text-2xl font-semibold text-black">
              Krzysztof Zaleski{' '}
              <span role="img" aria-label="Poland flag">
                🇵🇱
              </span>
            </h2>
            <p className="text-md mb-6 font-mono text-gray-600">Software Engineer</p>

            <div className="mb-4">
              <button
                onClick={copyEmailToClipboard}
                className="text-sm text-gray-500 transition-colors hover:text-black"
              >
                Press{' '}
                <kbd className="rounded-md border border-gray-300 bg-gray-100 p-1.5 py-0.5 font-sans text-xs shadow-glossybutton">
                  C
                </kbd>{' '}
                to copy my email
              </button>
            </div>

            <div className="w-full space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
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
                      {link.label}
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

            {/* Signature - uncomment and replace with your signature image if you have one */}
            {/* <div className="mt-auto">
              <Image
                src={signatureImage}
                alt="Signature"
                width={150}
                height={75}
                className="object-contain"
              />
            </div> */}
          </div>

          {/* Right Column: About Text */}
          <div className="space-y-4 md:col-span-2">
            {aboutParagraphs.map((text, index) => (
              <p key={index} className="text-lg leading-relaxed text-gray-700">
                {text}
              </p>
            ))}
          </div>
        </div>
      </SmallWrap>
    </div>
  )
}

export default About
