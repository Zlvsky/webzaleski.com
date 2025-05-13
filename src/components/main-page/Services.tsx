'use client' // Add 'use client' directive

import {
  backendStack,
  frontendStack,
  otherStack,
  servicesList,
  websitesStack
} from '@/data/services'
import { useTranslations } from 'next-intl' // Import useTranslations
import React from 'react'
import SmallWrap from '../layout/containers/SmallWrap'
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
      <span className="text-xl font-medium text-black">{t(nameKey)}</span>
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
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#dedede] bg-white p-3 shadow-service transition-shadow hover:shadow-md"
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

const Services: React.FC = () => {
  const t = useTranslations('services') // General services namespace
  const tc = useTranslations('services.techStackCategories') // For category titles

  return (
    <div className="w-full border-b border-gray-200 py-24">
      <SmallWrap>
        <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2 md:gap-24">
          {/* Left Column */}
          <div className="flex flex-col">
            <h1 className="text-lg font-medium leading-tight text-[#828282] md:text-5xl">
              {t.rich('mainHeading', {
                br: () => <br />,
                span: (chunks) => (
                  <span className="font-semibold text-[#050505]">{chunks}</span>
                )
              })}
            </h1>
            <div className="mt-10 space-y-4">
              <h2 className="mb-4 font-mono text-base font-medium text-[#555]">
                {tc('frontend')}
              </h2>
              <div className="flex flex-wrap gap-3">
                {frontendStack.map((tech) => (
                  <TechStackIcon
                    key={tech.labelKey}
                    Icon={tech.Icon}
                    labelKey={tech.labelKey}
                  />
                ))}
              </div>
              <h2 className="mb-4 font-mono text-base font-medium text-[#555]">
                {tc('backend')}
              </h2>
              <div className="flex flex-wrap gap-3">
                {backendStack.map((tech) => (
                  <TechStackIcon
                    key={tech.labelKey}
                    Icon={tech.Icon}
                    labelKey={tech.labelKey}
                  />
                ))}
              </div>
              <h2 className="mb-4 font-mono text-base font-medium text-[#555]">
                {tc('websites')}
              </h2>
              <div className="flex flex-wrap gap-3">
                {websitesStack.map((tech) => (
                  <TechStackIcon
                    key={tech.labelKey}
                    Icon={tech.Icon}
                    labelKey={tech.labelKey}
                  />
                ))}
              </div>
              <h2 className="mb-4 font-mono text-base font-medium text-[#555]">
                {tc('other')}
              </h2>
              <div className="flex flex-wrap gap-3">
                {otherStack.map((tech) => (
                  <TechStackIcon
                    key={tech.labelKey}
                    Icon={tech.Icon}
                    labelKey={tech.labelKey}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-10 pt-2">
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
