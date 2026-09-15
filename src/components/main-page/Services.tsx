import { IconCheck } from '@tabler/icons-react'
import { useTranslations } from 'next-intl'
import SmallWrap from '../layout/containers/SmallWrap'

interface CapabilityGroup {
  area: string
  technologies: string[]
}

interface TeamStrength {
  title: string
  description: string
}

function Services() {
  const t = useTranslations('services')
  const capabilityGroups = t.raw('capabilities') as CapabilityGroup[]
  const strengths = t.raw('strengths') as TeamStrength[]

  return (
    <div className="w-full border-b border-gray-200 py-14 sm:py-24">
      <SmallWrap id="stack">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <h2 className="max-w-[13ch] text-3xl font-medium leading-tight tracking-[-0.03em] text-[#050505] sm:text-5xl">
              {t('heading')}
            </h2>
            <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-gray54">
              {t('intro')}
            </p>

            <dl className="mt-9 divide-y divide-[#e7e7e7] border-y border-[#e7e7e7]">
              {capabilityGroups.map((group) => (
                <div key={group.area} className="grid gap-3 py-4 sm:grid-cols-[8rem_1fr]">
                  <dt className="text-sm font-medium text-[#202020]">{group.area}</dt>
                  <dd>
                    <ul className="flex flex-wrap gap-x-2 gap-y-1 text-sm leading-relaxed text-gray54">
                      {group.technologies.map((technology, index) => (
                        <li key={technology} className="inline-flex items-center gap-2">
                          {technology}
                          {index < group.technologies.length - 1 && (
                            <span aria-hidden="true" className="text-[#c3c3c3]">
                              ·
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-2xl border border-[#dedede] bg-[#f3f3f3] p-1.5 shadow-work">
            <div className="h-full rounded-xl bg-white p-6 sm:p-8">
              <h3 className="text-2xl font-medium tracking-[-0.025em] text-[#111]">
                {t('teamHeading')}
              </h3>
              <div className="mt-7 divide-y divide-[#e9e9e9]">
                {strengths.map((strength) => (
                  <div
                    key={strength.title}
                    className="flex gap-4 py-5 first:pt-0 last:pb-0"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-white">
                      <IconCheck aria-hidden="true" size={14} stroke={2} />
                    </span>
                    <div>
                      <h4 className="text-base font-medium text-[#191919]">
                        {strength.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-gray54">
                        {strength.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SmallWrap>
    </div>
  )
}

export default Services
