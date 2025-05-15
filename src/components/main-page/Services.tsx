'use client' // Add 'use client' directive

import {
  backendStack,
  frontendStack,
  otherStack,
  servicesList,
  websitesStack
} from '@/data/services'
import { motion, useInView } from 'framer-motion'
import { useTranslations } from 'next-intl' // Import useTranslations
import React, { useRef } from 'react'
import SmallWrap from '../layout/containers/SmallWrap'
import { BlurFade } from '../ui/BlurFade'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/Tooltip'

interface ServiceItemProps {
  nameKey: string // Changed from name to nameKey
  Icon: any
}

interface TechIconProps {
  Icon: any
  labelKey: string // Changed from label to labelKey
}

const ServiceListItem: React.FC<ServiceItemProps> = ({ nameKey, Icon }) => {
  const t = useTranslations('services.serviceItems') // Scope to serviceItems
  return (
    <div className="relative flex items-center gap-4">
      <Icon width={40} height={40} />
      <span className="text-base font-medium text-black sm:text-xl">{t(nameKey)}</span>
    </div>
  )
}

const TechStackIcon: React.FC<TechIconProps> = ({ Icon, labelKey }) => {
  const t = useTranslations('services.techLabels') // Scope to techLabels
  const translatedLabel = t(labelKey)
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger>
          <div
            aria-label={translatedLabel}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#dedede] bg-white p-3 shadow-service transition-shadow hover:shadow-md sm:h-12 sm:w-12"
          >
            <Icon stroke={1} height={24} width={24} />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{translatedLabel}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

const ServiceListWrap = ({
  title,
  items,
  inViewResult
}: {
  title: string
  items: {
    Icon: any
    labelKey: string
  }[]
  inViewResult: boolean
}) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-mono text-base font-medium text-[#555]">{title}</h4>
      <div className="flex flex-wrap gap-3">
        {items.map((tech, index) => (
          <motion.div
            key={tech.labelKey}
            initial="inactive"
            variants={{
              inactive: { opacity: 0, scale: 0.8, origin: 'center' },
              active: { opacity: 1, scale: 1 }
            }}
            animate={inViewResult ? 'active' : 'inactive'}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
          >
            <TechStackIcon
              key={tech.labelKey}
              Icon={tech.Icon}
              labelKey={tech.labelKey}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const Services: React.FC = () => {
  const t = useTranslations('services') // General services namespace
  const tc = useTranslations('services.techStackCategories') // For category titles
  const ref = useRef(null)
  const inViewResult = useInView(ref, { once: true, margin: '-150px' })

  return (
    <div className="w-full border-b border-gray-200 py-12 sm:py-24">
      <SmallWrap>
        <div
          className="grid grid-cols-1 items-start gap-16 md:grid-cols-2 md:gap-24"
          ref={ref}
        >
          {/* Left Column */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-medium leading-tight text-[#828282] md:text-5xl">
              <span className="flex flex-row gap-2">
                {t('mainHeading1')
                  .split(' ')
                  .map((word, index) => (
                    <BlurFade
                      delay={index * 0.05}
                      inView={false}
                      key={index + 'servicesH1'}
                    >
                      {word}
                    </BlurFade>
                  ))}
              </span>
              <span className="flex flex-row gap-2">
                {t('mainHeading2')
                  .split(' ')
                  .map((word, index) => (
                    <BlurFade
                      className="text-[#050505]"
                      delay={0.15 + index * 0.05}
                      inView={false}
                      key={index + 'servicesH2'}
                    >
                      {word}
                    </BlurFade>
                  ))}
              </span>
            </h2>
            <div className="mt-10 space-y-4">
              <ServiceListWrap
                title={tc('frontend')}
                items={frontendStack}
                inViewResult={inViewResult}
              />
              <ServiceListWrap
                title={tc('backend')}
                items={backendStack}
                inViewResult={inViewResult}
              />
              <ServiceListWrap
                title={tc('websites')}
                items={websitesStack}
                inViewResult={inViewResult}
              />
              <ServiceListWrap
                title={tc('other')}
                items={otherStack}
                inViewResult={inViewResult}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-6 pt-2 sm:space-y-10">
            {servicesList.map((service) => (
              <ServiceListItem
                key={service.nameKey}
                nameKey={service.nameKey}
                Icon={service.Icon}
              />
            ))}
          </div>
        </div>
      </SmallWrap>
    </div>
  )
}

export default Services
