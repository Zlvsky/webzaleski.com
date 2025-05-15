'use client'

import { projects as projectsData } from '@/data/projects' // Renamed to avoid conflict
import { cn } from '@/utils'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useRef, useState } from 'react'
import SmallWrap from '../layout/containers/SmallWrap'
import { BlurFade } from '../ui/BlurFade'
import { BorderTrail } from '../ui/BorderTrail'

const WorkButton = ({
  project,
  isActive,
  onClick,
  translatedName,
  translatedState
}: {
  project: (typeof projectsData)[number]
  isActive: boolean
  onClick: () => void
  translatedName: string
  translatedState: string
}) => {
  const t = useTranslations('work') // For alt text

  return (
    <motion.button
      transition={{ duration: 0.2 }}
      variants={{
        active: { height: 'auto', opacity: 1 },
        inactive: { height: 'auto', opacity: 0.5 }
      }}
      animate={isActive ? 'active' : 'inactive'}
      className={cn(
        'relative flex-1 rounded-2xl border border-[#dedede] p-3 shadow-work transition-all',
        isActive ? 'bg-white' : 'bg-zinc-100 hover:bg-white hover:opacity-100'
      )}
      onClick={onClick}
    >
      <BorderTrail
        style={{
          boxShadow:
            '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)'
        }}
        className={cn(isActive ? 'opacity-100' : 'opacity-0')}
        size={100}
      />
      <div className="flex h-full w-full flex-row justify-between">
        <div className="flex w-full flex-col items-start gap-3 text-start">
          <div className="flex w-full flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-2">
              <div
                className={`h-8 w-8 cursor-pointer rounded-md border-[1.5px]  border-white/5 bg-black  shadow-darkbutton transition-transform ease-out hover:scale-105 active:scale-95`}
              >
                <Image
                  src={project.logo || ''}
                  width={64}
                  height={64}
                  alt={t('projectLogoAlt', { projectName: translatedName })}
                  className="h-8 w-8 object-contain" // Removed rounded-md as parent has it
                />
              </div>
              <h4 className="hidden text-base font-medium tracking-tighter sm:block">
                {translatedName}
              </h4>
            </div>
            <span className="hidden font-mono text-xs text-gray-500 sm:block">
              {project.year}
            </span>
          </div>
          <motion.p
            variants={{
              active: { opacity: 1 },
              inactive: { opacity: 0 }
            }}
            animate={isActive ? 'active' : 'inactive'}
            transition={{ duration: 0.2 }}
            className={cn(
              'hidden max-w-[18rem] truncate font-mono text-xs text-grayText1 ',
              isActive ? 'sm:block' : 'hidden'
            )}
          >
            {translatedState}
          </motion.p>
        </div>
      </div>
    </motion.button>
  )
}

function Work() {
  const t = useTranslations('work')
  // Use the slug for the active state, as it's a stable identifier
  const [activeSlug, setActiveSlug] = useState<string>(projectsData[0].slug)
  const ref = useRef(null)
  const inViewResult = useInView(ref, { once: true, margin: '-150px' })

  const activeProject = projectsData.find((project) => project.slug === activeSlug)

  const getTranslatedProjectField = (
    slug: string,
    field: 'name' | 'shortDescription' | 'state'
  ) => {
    return t(`projects.${slug}.${field}`)
  }

  return (
    <div className="w-full border-b border-gray-200 py-12 sm:py-24">
      <SmallWrap>
        <BlurFade delay={0.2}>
          <h3 className="text-3xl font-medium text-[#050505] md:text-5xl">
            {t('featuredWork')}
          </h3>
        </BlurFade>
        <div
          className="mt-10 flex flex-col items-start justify-between gap-10 md:flex-row"
          ref={ref}
        >
          <div className="flex w-full flex-1 gap-2 overflow-hidden sm:max-w-xs sm:flex-col">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.slug + '_border'}
                ref={ref}
                className="flex w-full flex-1"
                initial="inactive"
                variants={{
                  inactive: { opacity: 0, y: 5, scale: 1.02 },
                  active: { opacity: 1, y: 0, scale: 1 }
                }}
                animate={inViewResult ? 'active' : 'inactive'}
                transition={{ duration: 0.2, delay: 0.3 + index * 0.05 }}
              >
                <WorkButton
                  project={project}
                  isActive={activeSlug === project.slug}
                  onClick={() => setActiveSlug(project.slug)}
                  key={project.slug + '_button'}
                  translatedName={getTranslatedProjectField(project.slug, 'name')}
                  translatedState={getTranslatedProjectField(project.slug, 'state')}
                />
              </motion.div>
            ))}
          </div>
          <div className="flex flex-1 flex-col items-start justify-center">
            {activeProject && (
              <div className="space-y-2 rounded-2xl bg-[#f0f0f0] p-1.5">
                <div className="rounded-xl bg-white p-1 shadow-work2">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProject.slug} // Key based on slug to detect changes
                      initial={{ opacity: 0, y: 5, scale: 1.02 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -5, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Image
                        src={activeProject.image || ''}
                        width={1200}
                        height={672}
                        alt={t('projectLogoAlt', {
                          projectName: getTranslatedProjectField(
                            activeProject.slug,
                            'name'
                          )
                        })}
                        className="rounded-t-xl object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="dark-gradient col-span-2 rounded-xl p-6 shadow-work2">
                  <h3 className="text-xl font-medium text-white">
                    {getTranslatedProjectField(activeProject.slug, 'name')}
                  </h3>
                  <p className="text-sm text-[#B8B8B8]">
                    {getTranslatedProjectField(activeProject.slug, 'shortDescription')}
                  </p>
                  <div className="mt-4 flex w-full flex-row justify-between">
                    <span className="font-mono text-xs text-[#B8B8B8]">
                      {getTranslatedProjectField(activeProject.slug, 'state')}
                    </span>
                    <span className="font-mono text-xs text-[#B8B8B8]">
                      {activeProject.year}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </SmallWrap>
    </div>
  )
}

export default Work
