'use client'

import { format } from 'date-fns'
import { enUS, pl } from 'date-fns/locale' // Import locales for date-fns
import { motion } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'

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
import Contact from './old/Contact' // Assuming Contact is also updated or will be
import { PingDot } from './old/_components/PingDot'

interface HeroCardProps {
  theme: 'light' | 'dark'
  title: string
  items: readonly string[] // Use readonly string[] if items come from t() which returns this type
  showViewAll?: boolean
  className?: string
  viewAllText?: string
}

const HeroCard: React.FC<HeroCardProps> = ({
  theme,
  title,
  items,
  showViewAll = false,
  className = '',
  viewAllText
}) => {
  const isLight = theme === 'light'

  const cardClasses = isLight ? 'bg-[#f5f5f5]' : 'bg-[#121212] text-white'

  const titleClasses = 'text-xs font-semibold uppercase tracking-wider mb-4'
  const titleColorClass = isLight ? 'text-gray-500' : 'text-gray-400'

  const tagClasses = isLight
    ? 'text-[#07111d]/60 border-[#222222]/30 bg-white hover:bg-[#f0f0f0]'
    : 'bg-[#262626] hover:bg-[#111111] text-white border-[#8a8a8a]/40'

  const viewAllButtonClasses = 'bg-black text-white hover:bg-gray-800 focus:ring-gray-500'

  return (
    <div className={cn(cardClasses, className, 'rounded-xl p-5')}>
      <h3 className={`font-mono ${titleClasses} ${titleColorClass}`}>{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span
            key={index}
            className={cn(
              'flex-grow cursor-default rounded-[4px] border border-dashed  px-3 py-1 text-center text-sm transition-colors',
              tagClasses
            )}
          >
            {item}
          </span>
        ))}
        {showViewAll && isLight && viewAllText && (
          <button
            className={`rounded-md px-3 py-1.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${viewAllButtonClasses}`}
          >
            {viewAllText}
          </button>
        )}
      </div>
    </div>
  )
}

export default function Hero() {
  const t = useTranslations('hero')
  const tc = useTranslations('heroCards')
  const currentLocale = useLocale()

  const dateLocale = currentLocale === 'pl' ? pl : enUS

  // Get arrays of strings from translations
  const whoIWorkWithItems = tc.raw('whoIWorkWith.items') as readonly string[]
  const whatIDoItems = tc.raw('whatIDo.items') as readonly string[]

  return (
    <SmallWrap id="main">
      <div className="relative pb-16 ">
        <div className="grid grid-cols-1 items-center gap-12 pt-10 lg:grid-cols-2">
          <div className="flex flex-col">
            <motion.div className="mb-2 flex w-max items-center gap-1  rounded-full border border-[#f0f0f0] bg-white py-2 pl-3 pr-4 text-xs font-semibold leading-3 shadow-glossyinside">
              <PingDot />
              {t('availableFor')}
              <span className="capitalize">
                {format(new Date(), "LLLL ''yy", { locale: dateLocale })}
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-3xl font-medium leading-tight tracking-tight md:text-4xl">
                {t('mainHeading')}
              </h1>
              <p className="mx-auto mt-8 max-w-2xl text-sm text-[#828282] lg:mx-0">
                {t.rich('subheading', {
                  span: (chunks) => <span className="text-black">{chunks}</span>,
                  br: () => <br />
                })}
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
                  title={tc('whoIWorkWith.title')}
                  items={whoIWorkWithItems}
                  // showViewAll // Decide if you still need this logic or if it's part of a specific card
                  // viewAllText={tc('viewAll')} // Pass translated "View all" text
                />
              </div>
              <div className="mt-4 flex flex-col gap-8">
                <HeroCard theme="dark" title={tc('whatIDo.title')} items={whatIDoItems} />
              </div>
              <div className="mt-6 flex w-full flex-col items-center  justify-center">
                <span className="w-full text-center font-mono text-xs uppercase text-[#71717a]">
                  {tc('techStackTitle')}
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
