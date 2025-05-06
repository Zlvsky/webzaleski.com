'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

import Contact from './old/Contact'
import { PingDot } from './old/_components/PingDot'

export default function Hero() {
  const t = useTranslations('hero')

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
          className="relative"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl shadow-primary/10">
            <img
              src="https://images.pexels.com/photos/3182775/pexels-photo-3182775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Hero"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -right-10 -top-10 -z-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="bg-secondary/5 absolute -bottom-10 -left-10 -z-10 h-64 w-64 rounded-full blur-3xl"></div>
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
