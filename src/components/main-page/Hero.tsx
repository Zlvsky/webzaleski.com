'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

import { cn } from '@/utils'
import {
  IconBrandFigma,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandTypescript,
  IconBrandWordpress
} from '@tabler/icons-react'
import SmallWrap from '../layout/containers/SmallWrap'
import Contact from './old/Contact'
import { PingDot } from './old/_components/PingDot'

interface HeroCardProps {
  theme: 'light' | 'dark'
  title: string
  items: string[]
  showViewAll?: boolean
  className?: string
}

const HeroCard: React.FC<HeroCardProps> = ({
  theme,
  title,
  items,
  showViewAll = false,
  className = ''
}) => {
  const isLight = theme === 'light'

  const cardClasses = isLight
    ? 'bg-[#f5f5f5]' // Adjusted light theme background
    : 'bg-[#121212] text-white' // Adjusted dark theme

  const titleClasses = 'text-xs font-semibold uppercase tracking-wider mb-4'
  const titleColorClass = isLight ? 'text-gray-500' : 'text-gray-400'

  const tagClasses = isLight
    ? 'text-[#07111d]/60 border-[#222222]/30 bg-white hover:bg-[#f0f0f0]'
    : 'bg-[#262626] hover:bg-[#111111] text-white border-[#8a8a8a]/40'

  const viewAllButtonClasses = 'bg-black text-white hover:bg-gray-800 focus:ring-gray-500'

  return (
    <div className={cn(cardClasses, className, 'rounded-xl p-5')}>
      <h3 className={`${titleClasses} ${titleColorClass}`}>{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span
            key={index}
            className={cn(
              'cursor-default rounded-[4px] border  border-dashed px-3 py-1 text-sm transition-colors',
              tagClasses
            )}
          >
            {item}
          </span>
        ))}
        {showViewAll && isLight && (
          <button
            className={`rounded-md px-3 py-1.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${viewAllButtonClasses}`}
          >
            View all
          </button>
        )}
      </div>
    </div>
  )
}

export default function Hero() {
  const t = useTranslations('hero')
  const tc = useTranslations('heroCards') // Assuming you have translations for cards

  const techIWorkWith = [
    'React Apps',
    'React Native Mobile Apps',
    'Full Stack Applications',
    'WordPress & WooCommerce',
    'Gatsby Websites',
    'Next.js Websites',
    'Node.js APIs',
    'UI/UX Design Systems',
    'Figma Prototyping'
  ]

  const whatIDo = [
    'Web Applications',
    'Mobile Applications',
    'Websites',
    'MVPs',
    'Frontend Development',
    'UI/UX Design',
    'Performance Optimization',
    'SEO Optimization',
    'Maintenance & Support',
    'WooCommerce Shops'
  ]

  return (
    <SmallWrap id="main">
      <div className="relative pb-16 ">
        <div className="grid grid-cols-1 items-center gap-12 pt-20 lg:grid-cols-2">
          <div className="flex flex-col">
            <motion.div className="mb-8 flex w-max items-center gap-2 rounded-full border border-[#f0f0f0] bg-white py-2 pl-3 pr-4 text-xs font-semibold leading-3 shadow-glossyinside">
              <PingDot /> Available for April
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                {t('heading')}
              </h1>
              <p className="mx-auto mt-8 max-w-2xl text-base text-gray54 lg:mx-0">
                {t('subheading')}
              </p>
              <ul className="mt-3 flex list-inside list-disc flex-col gap-2 text-sm text-gray54">
                <li>{t('sublist1')}</li>
                <li>{t('sublist2')}</li>
                <li>{t('sublist3')}</li>
              </ul>
              <Contact />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative "
          >
            <div className="relative flex flex-col overflow-hidden rounded-2xl border border-[#e8e8e8] px-5  pb-6 pt-5 shadow-hero2">
              <div className="flex flex-col gap-8">
                <HeroCard
                  theme="light"
                  title={tc('whoWeWorkWith.title')}
                  items={techIWorkWith}
                />
              </div>
              <div className="mt-4 flex flex-col gap-8">
                <HeroCard theme="dark" title={tc('whatWeDo.title')} items={whatIDo} />
              </div>
              <div className="mt-6 flex w-full flex-col items-center  justify-center">
                <span className="w-full text-center text-xs uppercase text-[#71717a]">
                  Tech Stack I Work With
                </span>
                <div className="mt-1 flex flex-row items-center justify-center gap-3">
                  <IconBrandTypescript className="h-7 w-7 text-[#71717a]" stroke={1} />
                  <IconBrandReact className="h-7 w-7 text-[#71717a]" stroke={1} />
                  <IconBrandReactNative className="h-7 w-7 text-[#71717a]" stroke={1} />
                  <IconBrandNextjs className="h-7 w-7 text-[#71717a]" stroke={1} />
                  <IconBrandNodejs className="h-7 w-7 text-[#71717a]" stroke={1} />
                  <IconBrandWordpress className="h-7 w-7 text-[#71717a]" stroke={1} />
                  <IconBrandFigma className="h-7 w-7 text-[#71717a]" stroke={1} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SmallWrap>
  )
}
