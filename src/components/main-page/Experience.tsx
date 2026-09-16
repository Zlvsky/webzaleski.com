import { experiences } from '@/data/experience'
import { cn } from '@/utils'
import { useTranslations } from 'next-intl'
import Image, { StaticImageData } from 'next/image'
import SmallWrap from '../layout/containers/SmallWrap'

interface ExperienceIdentityProps {
  companyName: string
  companyUrl: string | null
  icon: StaticImageData
  isExternal: boolean
  role: string
}

function ExperienceIdentity({
  companyName,
  companyUrl,
  icon,
  isExternal,
  role
}: ExperienceIdentityProps) {
  const content = (
    <>
      <span className="h-11 w-11 shrink-0 overflow-hidden rounded-lg bg-black p-0.5 shadow-darkbutton">
        <Image
          src={icon}
          width={88}
          height={88}
          alt=""
          className="h-full w-full rounded-md object-cover"
        />
      </span>
      <span className="min-w-0 pt-0.5">
        <span className="block break-words text-base font-medium leading-tight text-gray-800">
          {companyName}
        </span>
        <span className="mt-1 block text-sm leading-snug text-gray54">{role}</span>
      </span>
    </>
  )

  if (!companyUrl) {
    return <div className="flex min-h-11 min-w-0 items-start gap-3">{content}</div>
  }

  return (
    <a
      href={companyUrl}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="group flex min-h-11 min-w-0 items-start gap-3 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-dark26 focus-visible:ring-offset-4"
    >
      {content}
    </a>
  )
}

export default function Experience() {
  const t = useTranslations('experience')

  return (
    <div className="w-full border-b border-t border-gray-200 py-14 sm:py-20">
      <SmallWrap id="experience">
        <div className="grid gap-8 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-12 lg:grid-cols-[12rem_minmax(0,1fr)]">
          <div>
            <h2 className="text-2xl font-medium tracking-[-0.025em] text-[#050505]">
              {t('myexperience')}
            </h2>
            <dl className="mt-7 grid gap-6 sm:grid-cols-2 md:grid-cols-1">
              <div className="flex flex-col">
                <dt className="order-last mt-1 text-xs leading-relaxed text-gray54">
                  {t('summary.commercialDevelopment')}
                </dt>
                <dd className="text-2xl font-semibold tabular-nums leading-tight tracking-tight text-[#171717]">
                  {t('summary.years')}
                </dd>
              </div>
              <div>
                <dt className="text-xs leading-relaxed text-gray54">
                  {t('summary.currentFocus')}
                </dt>
                <dd className="mt-1 text-sm font-medium leading-relaxed text-[#171717]">
                  {t('summary.focus')}
                </dd>
              </div>
              <div>
                <dt className="text-xs leading-relaxed text-gray54">
                  {t('summary.mainAreas')}
                </dt>
                <dd className="mt-1 text-sm font-medium leading-relaxed text-[#171717]">
                  {t('summary.areas')}
                </dd>
              </div>
              <div>
                <dt className="text-xs leading-relaxed text-gray54">
                  {t('summary.workSetup')}
                </dt>
                <dd className="mt-1 text-sm font-medium leading-relaxed text-[#171717]">
                  {t('summary.setup')}
                </dd>
              </div>
            </dl>
          </div>

          <ol className="relative border-l border-gray-200">
            {experiences.map((experience) => {
              const companyName = t(`items.${experience.id}.companyName`)
              const role = t(`items.${experience.id}.role`)
              const description = t(`items.${experience.id}.description`)
              const date = experience.isPresent
                ? `${experience.startYear} — ${t('present')}`
                : experience.endYear
                  ? `${experience.startYear} — ${experience.endYear}`
                  : `${experience.startYear}`

              return (
                <li className="relative pb-8 pl-7 last:pb-0 sm:pl-9" key={experience.id}>
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute -left-[5px] top-4 h-2.5 w-2.5 rounded-full ring-1 ring-inset',
                      experience.isPresent
                        ? 'bg-black shadow-darkbutton ring-black'
                        : 'bg-white ring-[#cfcfcf]'
                    )}
                  />

                  <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
                    <ExperienceIdentity
                      companyName={companyName}
                      companyUrl={experience.companyUrl}
                      icon={experience.icon}
                      isExternal={experience.isExternal}
                      role={role}
                    />
                    <p className="ml-14 whitespace-nowrap font-mono text-xs text-gray7B sm:ml-0 sm:pt-1">
                      {date}
                    </p>
                  </div>

                  <p className="ml-14 mt-3 max-w-[65ch] text-sm leading-relaxed text-gray54">
                    {description}
                  </p>
                  <ul
                    className="ml-14 mt-3 flex flex-wrap gap-2"
                    aria-label={t('technologies', { company: companyName })}
                  >
                    {experience.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-md bg-[#f3f3f3] px-2.5 py-1 font-mono text-[0.68rem] text-gray54"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>
      </SmallWrap>
    </div>
  )
}
