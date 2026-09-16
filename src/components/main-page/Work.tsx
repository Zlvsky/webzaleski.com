import rodDesktopImage from '@/assets/images/RoDScreen.png'
import { projects } from '@/data/projects'
import { IconArrowUpRight, IconBrandGithub } from '@tabler/icons-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import SmallWrap from '../layout/containers/SmallWrap'

const selectedProjectSlugs = [
  'expbike',
  'feedback-widget',
  'konva-moodboard',
  'one-place'
] as const

function Work() {
  const t = useTranslations('work')
  const featuredProject = projects[0]
  const selectedProjects = projects.filter((project) =>
    selectedProjectSlugs.includes(project.slug as (typeof selectedProjectSlugs)[number])
  )
  return (
    <div className="w-full border-y border-gray-200 py-14 sm:py-24">
      <SmallWrap id="work">
        <h2 className="max-w-[12ch] text-3xl font-medium leading-tight tracking-[-0.03em] text-[#050505] sm:text-5xl">
          {t('featuredWork')}
        </h2>

        <article className="mt-10 overflow-hidden rounded-2xl border border-[#dedede] bg-[#f1f1f1] p-1.5 shadow-work">
          <div className="grid overflow-hidden rounded-xl bg-white lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative min-h-[18rem] overflow-hidden bg-[#151515] sm:min-h-[25rem]">
              <Image
                src={featuredProject.image}
                fill
                sizes="(max-width: 1023px) 100vw, 1px"
                alt={t('featuredImageAlt')}
                className="object-cover object-center lg:hidden"
              />
              <Image
                src={rodDesktopImage}
                fill
                sizes="(min-width: 1024px) 55vw, 1px"
                alt={t('featuredImageAlt')}
                className="hidden object-cover object-center lg:block"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg bg-black/80 px-3 py-2 text-xs text-white backdrop-blur-sm">
                <Image
                  src={featuredProject.logo}
                  width={28}
                  height={28}
                  alt=""
                  className="rounded-md"
                />
                <span className="font-medium">
                  {t('projects.realm-of-dungeons.name')}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.1em] text-gray7B">
                  {t('featuredRole')}
                </p>
                <h3 className="mt-3 text-3xl font-medium tracking-[-0.03em] text-[#111] sm:text-4xl">
                  {t('projects.realm-of-dungeons.name')}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-gray54">
                  {t('featuredDescription')}
                </p>

                <dl className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[#e5e5e5] bg-[#e5e5e5]">
                  {(
                    t.raw('featuredFacts') as Array<{ value: string; label: string }>
                  ).map((fact) => (
                    <div
                      key={fact.label}
                      className="flex min-w-0 flex-col bg-[#f8f8f8] p-4"
                    >
                      <dt className="order-last mt-1.5 text-xs leading-relaxed text-gray54">
                        {fact.label}
                      </dt>
                      <dd className="break-words text-xl font-semibold tabular-nums leading-tight tracking-tight text-[#171717] sm:text-2xl lg:text-xl">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <ul className="mt-6 flex flex-wrap gap-2" aria-label={t('stackLabel')}>
                  {featuredProject.stack.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-md bg-[#f3f3f3] px-2.5 py-1 text-xs text-gray54"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={featuredProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-xl bg-black px-4 text-sm font-medium text-white shadow-darkbutton transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 motion-reduce:transform-none"
              >
                {t('viewCaseStudy')}
                <IconArrowUpRight aria-hidden="true" size={17} stroke={1.8} />
              </a>
            </div>
          </div>
        </article>

        <div className="mt-16 flex items-end justify-between gap-4">
          <h3 className="text-2xl font-medium tracking-[-0.025em] text-[#111]">
            {t('selectedWork')}
          </h3>
          <span className="font-mono text-xs text-gray7B">{t('selectedCount')}</span>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {selectedProjects.map((project) => {
            const projectName = t(`projects.${project.slug}.name`)

            return (
              <article
                key={project.slug}
                className="group flex min-h-[17rem] flex-col justify-between rounded-2xl border border-[#dedede] bg-white p-5 shadow-work transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transform-none sm:p-6"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="h-11 w-11 shrink-0 overflow-hidden rounded-lg bg-black p-0.5 shadow-darkbutton">
                        <Image
                          src={project.logo}
                          width={44}
                          height={44}
                          alt=""
                          className="h-full w-full rounded-md object-cover"
                        />
                      </span>
                      <div className="min-w-0">
                        <h4 className="truncate text-lg font-medium text-[#171717]">
                          {projectName}
                        </h4>
                        <p className="mt-0.5 font-mono text-xs text-gray7B">
                          {t(`projects.${project.slug}.role`)}
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 font-mono text-xs text-gray7B">
                      {project.year}
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-gray54">
                    {t(`projects.${project.slug}.shortDescription`)}
                  </p>
                </div>

                <div className="mt-7">
                  <ul className="flex flex-wrap gap-2" aria-label={t('stackLabel')}>
                    {project.stack.map((technology) => (
                      <li
                        key={technology}
                        className="rounded-md bg-[#f3f3f3] px-2.5 py-1 font-mono text-[0.68rem] text-gray54"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#ececec] pt-4">
                    <span className="text-xs text-gray7B">
                      {t(`projects.${project.slug}.state`)}
                    </span>
                    {'github' in project && project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t('viewSource', { projectName })}
                        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-gray54 transition-colors hover:bg-[#f2f2f2] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
                      >
                        <IconBrandGithub aria-hidden="true" size={20} stroke={1.6} />
                      </a>
                    ) : 'live' in project && project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t('visitProject', { projectName })}
                        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-gray54 transition-colors hover:bg-[#f2f2f2] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
                      >
                        <IconArrowUpRight aria-hidden="true" size={20} stroke={1.6} />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </SmallWrap>
    </div>
  )
}

export default Work
