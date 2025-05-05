'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button/Button'

export default function Hero() {
  const t = useTranslations('hero')

  return (
    <section className="relative pb-16 pt-20 md:pb-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="font-jakarta text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              {t('heading')}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600 lg:mx-0">
              {t('subheading')}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button size="lg" className="gap-2 text-base">
                {t('ctaPrimary')}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                {t('ctaSecondary')}
              </Button>
            </div>
          </motion.div>

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
            {['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5'].map(
              (brand, index) => (
                <div key={index} className="text-lg font-medium text-gray-400">
                  {brand}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
