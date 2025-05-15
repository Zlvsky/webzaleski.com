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
import { BlurFade } from '../ui/BlurFade'
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

  const titleClasses = 'text-xs uppercase tracking-wider mb-4'
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
          <motion.span
            initial={{ opacity: 0, y: 5, scale: 1.05 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.2, delay: 0.2 + index * 0.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            key={index}
            className={cn(
              'flex-grow cursor-default rounded-[4px] border border-dashed  px-3 py-1 text-center text-sm transition-colors',
              tagClasses
            )}
          >
            {item}
          </motion.span>
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
            <motion.div
              initial={{ opacity: 0, y: 5, transformOrigin: 'left bottom' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0 }}
              className="mx-auto mb-2 flex w-max items-center gap-1 rounded-full  border border-[#f0f0f0] bg-white py-2 pl-3 pr-4 text-xs leading-3 shadow-glossyinside sm:mx-0"
            >
              <PingDot />
              {t('availableFor')}
              <span className="capitalize">
                {format(new Date(), "LLLL ''yy", { locale: dateLocale })}
              </span>
            </motion.div>
            <h1 className="flex flex-row flex-wrap gap-1.5 text-3xl font-medium leading-tight tracking-tight md:text-4xl">
              {t('mainHeading')
                .split('.')
                .map((sentence, index) =>
                  sentence.split(' ').map((word, i) => (
                    <BlurFade
                      delay={index * 0.25 + i * 0.05}
                      inView
                      key={index + i + 'heroH1'}
                    >
                      {word}
                    </BlurFade>
                  ))
                )}
            </h1>

            <BlurFade inView delay={0.5}>
              <p className="mx-auto mt-8 max-w-2xl text-base text-[#828282] sm:mx-0">
                {t.rich('subheading', {
                  span: (chunks) => <span className="text-black">{chunks}</span>,
                  br: () => <br />
                })}
              </p>
            </BlurFade>
            <ul className="mt-3 flex list-inside list-disc flex-col gap-2 text-sm text-gray54">
              <BlurFade inView delay={0.75}>
                <li>{t('sublist1')}</li>
              </BlurFade>
              <BlurFade inView delay={0.8}>
                <li>{t('sublist2')}</li>
              </BlurFade>
              <BlurFade inView delay={0.85}>
                <li>{t('sublist3')}</li>
              </BlurFade>
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 5, transformOrigin: 'left bottom' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 1 }}
              className="relative "
            >
              <Contact />
            </motion.div>
          </div>

          <div className="relative flex flex-col overflow-hidden rounded-2xl border border-[#e8e8e8] px-5  pb-6 pt-5 shadow-hero2">
            <div className="flex flex-col gap-8">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 1.05,
                  y: 5,
                  transformOrigin: 'center'
                }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0 }}
                className="relative "
              >
                <HeroCard
                  theme="light"
                  title={tc('whoIWorkWith.title')}
                  items={whoIWorkWithItems}
                  // showViewAll // Decide if you still need this logic or if it's part of a specific card
                  // viewAllText={tc('viewAll')} // Pass translated "View all" text
                />
              </motion.div>
            </div>
            <div className="mt-4 flex flex-col gap-8">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 1.05,
                  y: 5,
                  transformOrigin: 'center'
                }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.25 }}
                className="relative "
              >
                <HeroCard theme="dark" title={tc('whatIDo.title')} items={whatIDoItems} />
              </motion.div>
            </div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 1.05,
                y: 5,
                transformOrigin: 'center'
              }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.35 }}
              className="mt-6 flex w-full flex-col items-center  justify-center"
            >
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
            </motion.div>
          </div>
        </div>
      </div>
    </SmallWrap>
  )
}
