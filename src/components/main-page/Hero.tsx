import { projects } from '@/data/projects'
import { cn } from '@/utils'
import { GITHUB_URL, LINKEDIN_URL } from '@/utils/consts'
import {
  IconArrowUpRight,
  IconBrandFigma,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandTypescript,
  IconBrandWordpress
} from '@tabler/icons-react'
import { useTranslations } from 'next-intl'
import SmallWrap from '../layout/containers/SmallWrap'
import Contact from './old/Contact'
import { PingDot } from './old/_components/PingDot'

interface HeroCardProps {
  theme: 'light' | 'dark'
  title: string
  items: readonly string[]
}

function HeroCard({ theme, title, items }: HeroCardProps) {
  const isLight = theme === 'light'

  return (
    <section
      className={cn(
        'rounded-xl p-5',
        isLight ? 'bg-[#f5f5f5]' : 'bg-[#121212] text-white'
      )}
    >
      <h2
        className={cn(
          'mb-4 font-mono text-xs uppercase tracking-wider',
          isLight ? 'text-gray-500' : 'text-gray-400'
        )}
      >
        {title}
      </h2>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className={cn(
              'flex-grow cursor-default rounded-[4px] border border-dashed px-3 py-1 text-center text-sm transition-colors duration-200',
              isLight
                ? 'border-[#222222]/30 bg-white text-[#07111d]/60 hover:bg-[#f0f0f0]'
                : 'border-[#8a8a8a]/40 bg-[#262626] text-white hover:bg-[#111111]'
            )}
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function Hero() {
  const t = useTranslations('hero')
  const resume = useTranslations('resume')
  const tc = useTranslations('heroCards')
  const stackItems = tc.raw('stackIWorkWith.items') as readonly string[]
  const whatIDoItems = tc.raw('whatIDo.items') as readonly string[]
  const featuredProject = projects[0]

  return (
    <SmallWrap id="main">
      <div className="grid min-w-0 grid-cols-1 items-start gap-10 pb-16 pt-8 sm:pb-20 sm:pt-12 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div className="flex min-w-0 flex-col">
          <div className="mb-6 flex w-fit items-center gap-2 rounded-full border border-[#e5e5e5] bg-white px-3 py-2 text-xs text-gray54 shadow-work2">
            <PingDot />
            <span className="font-medium text-[#282828]">{resume('availability')}</span>
          </div>

          <h1 className="text-3xl font-medium leading-tight tracking-tight text-[#050505] md:text-4xl">
            {t('mainHeading')}
          </h1>

          <p className="mt-6 max-w-[63ch] text-base leading-relaxed text-gray54">
            {t('subheading')}
          </p>
          <p className="mt-3 max-w-[63ch] text-sm leading-relaxed text-gray7B">
            {t('proof')}
          </p>

          <Contact showCV />

          {/* <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-gray7B">
            <span className="inline-flex items-center gap-1.5">
              <IconMapPin aria-hidden="true" size={14} stroke={1.6} />
              {t('location')}
            </span>
            <span>{t('workMode')}</span>
          </div> */}

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href={featuredProject.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[#dedede] bg-white px-4 text-sm font-medium text-[#161616] shadow-work2 transition-colors hover:bg-[#f6f6f6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              {t('viewRealm')}
              <IconArrowUpRight aria-hidden="true" size={17} stroke={1.8} />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl text-gray54 transition-colors hover:bg-[#f3f3f3] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              <IconBrandGithub aria-hidden="true" size={21} stroke={1.6} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl text-gray54 transition-colors hover:bg-[#f3f3f3] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              <IconBrandLinkedin aria-hidden="true" size={21} stroke={1.6} />
            </a>
          </div>
        </div>

        <aside className="relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#e8e8e8] px-5 pb-6 pt-5 shadow-hero2">
          <HeroCard theme="light" title={tc('stackIWorkWith.title')} items={stackItems} />

          <div className="mt-4">
            <HeroCard theme="dark" title={tc('whatIDo.title')} items={whatIDoItems} />
          </div>

          <div className="mt-6 flex w-full flex-col items-center justify-center">
            <span className="w-full text-center font-mono text-xs uppercase text-[#71717a]">
              {tc('techStackTitle')}
            </span>
            <div className="mt-1 flex flex-row items-center justify-center gap-3">
              <IconBrandTypescript
                aria-hidden="true"
                className="h-7 w-7 text-[#71717a]"
                stroke={1}
              />
              <IconBrandReact
                aria-hidden="true"
                className="h-7 w-7 text-[#71717a]"
                stroke={1}
              />
              <IconBrandReactNative
                aria-hidden="true"
                className="h-7 w-7 text-[#71717a]"
                stroke={1}
              />
              <IconBrandNextjs
                aria-hidden="true"
                className="h-7 w-7 text-[#71717a]"
                stroke={1}
              />
              <IconBrandNodejs
                aria-hidden="true"
                className="h-7 w-7 text-[#71717a]"
                stroke={1}
              />
              <IconBrandWordpress
                aria-hidden="true"
                className="h-7 w-7 text-[#71717a]"
                stroke={1}
              />
              <IconBrandFigma
                aria-hidden="true"
                className="h-7 w-7 text-[#71717a]"
                stroke={1}
              />
            </div>
          </div>
        </aside>
      </div>
    </SmallWrap>
  )
}
