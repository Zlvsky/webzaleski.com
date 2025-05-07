'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

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
    ? 'bg-gray-50 rounded-xl p-6 shadow-lg' // Adjusted light theme background
    : 'bg-black text-white rounded-xl p-6 shadow-lg' // Adjusted dark theme

  const titleClasses = 'text-xs font-semibold uppercase tracking-wider mb-4'
  const titleColorClass = isLight ? 'text-gray-500' : 'text-gray-400'

  const tagClasses = isLight
    ? 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
    : 'bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700'

  const viewAllButtonClasses = 'bg-black text-white hover:bg-gray-800 focus:ring-gray-500'

  return (
    <div className={`${cardClasses} ${className}`}>
      <h3 className={`${titleClasses} ${titleColorClass}`}>{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span
            key={index}
            className={`rounded-md border px-3 py-1.5 text-sm ${tagClasses}`}
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

  const whoWeWorkWithItems = [
    'AI',
    'AR/VR',
    'Fintech',
    'SaaS',
    'Emerging tech',
    'web3',
    'e-com',
    'BI',
    'Real estate'
  ]
  const ourClientsIncludeItems = [
    'SeamlessAI',
    'Datawizz',
    'Lightdash',
    'Spatialinc',
    'GanAI',
    'DroxyAI',
    'Zave.it',
    'Intro.co',
    'ColdIQ',
    'RecruitU',
    'GetQuotient',
    'GymCrush',
    'TravelWith',
    'Sincera.io',
    'Blockview.ai',
    'Servicebell'
  ]
  const whatWeDoItems = [
    'UX Research',
    'Web/mobile app design',
    'No-code',
    'Visual design',
    'Branding',
    'MVPs',
    'Motion',
    'Design systems',
    'Pitch decks',
    'UX copywriting'
  ]
  const howFastWeDoItItems = [
    'Brand sprints: 1-2 weeks',
    'MVPs: 1-3 months',
    'Websites: 2-10 weeks',
    'Design systems: 2-6 weeks',
    'UX audits: 1-4 weeks',
    'Rive animations: 1-4 weeks'
  ]

  return (
    <section className="relative pb-16 md:pb-24">
      <div className="grid grid-cols-1 items-center gap-12 pt-20 lg:grid-cols-2">
        <div className="flex flex-col">
          <motion.div className="mb-8 flex w-max items-center gap-2 rounded-full border border-[#f0f0f0] bg-white py-2 pl-3 pr-4 text-xs font-semibold leading-3 shadow-badge">
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
          <div className="relative flex flex-col gap-8 overflow-hidden rounded-2xl border border-[#e8e8e8] px-5  pb-6 pt-5 shadow-hero">
            <div className="flex flex-col gap-8">
              <HeroCard
                theme="light"
                title={tc('whoWeWorkWith.title')}
                items={whoWeWorkWithItems}
              />
            </div>
            <div className="flex flex-col gap-8">
              <HeroCard theme="dark" title={tc('whatWeDo.title')} items={whatWeDoItems} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Trust badges / Clients */}
      <div className="mt-16 border-t border-gray-100 pt-8">
        <p className="mb-6 text-center text-sm text-gray-500">
          Trusted by innovative companies
        </p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          {['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5'].map((brand, index) => (
            <div key={index} className="text-lg font-medium text-gray-400">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
