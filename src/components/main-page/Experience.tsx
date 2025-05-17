'use client'

import freelance from '@/assets/images/companies/freelance.png'
import goodsoft from '@/assets/images/companies/goodsoft.png'
import jokuh from '@/assets/images/companies/jokuh.png'
import seomi from '@/assets/images/companies/seomi.png'
import useIsMobile from '@/hooks/useIsMobile'
import { cn } from '@/utils'
import { motion, useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useRef } from 'react'
import SmallWrap from '../layout/containers/SmallWrap'
import { BlurFade } from '../ui/BlurFade'
interface ExperienceEntry {
  id: string
  iconUrl?: string
  iconPlaceholder: string
  companyName: string
  companyUrl?: string
  dateRange: string
  isActive?: boolean
  isPresent?: boolean
}

const experiencesData: ExperienceEntry[] = [
  {
    id: 'goodsoft',
    iconUrl: goodsoft.src,
    iconPlaceholder: 'G',
    companyName: 'GoodSoft',
    companyUrl: 'https://goodsoft.pl',
    dateRange: '2022',
    isPresent: true,
    isActive: true
  },
  {
    id: 'freelance',
    iconUrl: freelance.src,
    iconPlaceholder: 'F',
    companyName: 'Part-time freelance',
    companyUrl: '#',
    dateRange: '2022',
    isPresent: true,
    isActive: true
  },
  {
    id: 'jokuh',
    iconUrl: jokuh.src,
    iconPlaceholder: 'M',
    companyName: 'Jokuh',
    companyUrl: 'https://jokuh.com',
    dateRange: '2024'
  },
  {
    id: 'Seomi',
    iconUrl: seomi.src,
    iconPlaceholder: 'R',
    companyName: 'Seomi',
    companyUrl: 'https://seomi.pl',
    dateRange: '2021'
  }
]

function Experience() {
  const t = useTranslations('experience')
  const ref = useRef(null)
  const inViewResult = useInView(ref, { once: true, margin: '-150px' })
  const isMobileView = useIsMobile()

  const accentColor = 'teal-500' // Color for active elements

  return (
    <div className="w-full border-b border-t border-gray-200 py-10" ref={ref}>
      <SmallWrap id="experience">
        <div className="relative flex w-full flex-col gap-6 md:flex-row md:gap-20">
          {/* Header Section*/}
          <div className="flex items-center justify-between">
            {/* Adjusted mb and added px for alignment with timeline start */}
            <BlurFade
              delay={isMobileView ? 0 : 1}
              inView={!isMobileView}
              className="text-2xl font-medium text-[#050505] md:text-xl"
            >
              {t('myexperience')}
            </BlurFade>
          </div>

          <div className="relative flex-1">
            {/* Experience Items Flex Container */}
            <div className="grid grid-cols-4 gap-x-4">
              {experiencesData.map((exp, index) => (
                <motion.div
                  initial="hidden"
                  variants={{
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1
                    },
                    hidden: {
                      opacity: 0,
                      y: 5,
                      scale: 1.05
                    }
                  }}
                  animate={inViewResult ? 'visible' : 'hidden'}
                  transition={{
                    duration: 0.2,
                    delay: isMobileView ? 0.25 + index * 0.1 : 1.1 + index * 0.1
                  }}
                  className="relative flex flex-col items-start text-center"
                  key={exp.id + '_experience'}
                >
                  {/* Dot and Line Interaction Point */}
                  <div className={`flex w-full flex-row items-center gap-1 `}>
                    <div
                      className={cn(
                        'relative z-10 mr-3 h-3 w-3 transform rounded-full  ring-1 ring-inset',
                        exp.isActive
                          ? 'bg-black shadow-darkbutton ring-black'
                          : 'ring-[#dedede]'
                      )}
                    ></div>
                    <div
                      className={` h-px flex-1 rounded-full bg-gradient-to-r from-white via-[#121212]/30 to-white `}
                    />
                  </div>

                  <div className="mt-3 flex flex-col items-start gap-1.5">
                    <div className="flex items-center gap-x-2">
                      <a
                        href={exp.companyUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`aspect-square h-8 w-8 cursor-pointer rounded-md border-[1.5px]  border-white/5 bg-black p-[1.5px] shadow-darkbutton transition-transform ease-out hover:scale-105 active:scale-95`}
                      >
                        <Image
                          src={exp.iconUrl || ''}
                          width={64}
                          height={64}
                          alt={`${exp.companyName} logo`}
                          className="h-full w-full object-cover"
                        />
                      </a>
                      <a
                        href={exp.companyUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-xs font-medium text-gray-700 outline-none transition-all hover:text-${accentColor} focus-visible:text-${accentColor} active:scale-95 sm:text-sm`}
                      >
                        {exp.companyName}
                      </a>
                    </div>
                    <p className="whitespace-nowrap text-left font-mono text-xs text-gray-400 sm:text-sm">
                      {exp.dateRange} {exp.isPresent ? '- ' + t('now') : ''}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SmallWrap>
    </div>
  )
}

export default Experience
