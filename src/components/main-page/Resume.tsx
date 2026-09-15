import { EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from '@/utils/consts'
import {
  IconArrowDown,
  IconArrowRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail
} from '@tabler/icons-react'
import { useTranslations } from 'next-intl'
import SmallWrap from '../layout/containers/SmallWrap'

function Resume() {
  const t = useTranslations('resume')

  return (
    <div className="w-full border-b border-gray-200 py-14 sm:py-24">
      <SmallWrap id="contact">
        <div className="overflow-hidden rounded-2xl border border-[#2f2f2f] bg-[#111] p-1.5 shadow-hero">
          <div className="grid overflow-hidden rounded-xl bg-[#151515] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-6 text-white sm:p-10 lg:p-12">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-[#a7a7a7]">
                <span className="h-2 w-2 rounded-full bg-[#2ca56b]" aria-hidden="true" />
                {t('availability')}
              </div>
              <h2 className="mt-6 max-w-[12ch] text-4xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                {t('heading')}
              </h2>
              <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-[#b8b8b8]">
                {t('description')}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${EMAIL}?subject=Engineering opportunity`}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-medium text-black transition-colors hover:bg-[#ececec] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <IconMail aria-hidden="true" size={17} stroke={1.8} />
                  {t('contact')}
                </a>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/20 px-4 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {t('downloadCv')}
                  <IconArrowDown aria-hidden="true" size={17} stroke={1.8} />
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 bg-[#1b1b1b] p-5 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <div className="relative h-full min-h-[18rem] overflow-hidden rounded-xl bg-[#f4f4f4] p-6 text-black shadow-work2 sm:p-8">
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-20 h-52 w-52 rounded-full bg-[#e2e2e2] opacity-60 blur-3xl"
                />
                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-gray7B">
                      {t('documentLabel')}
                    </p>
                    <h3 className="mt-5 text-2xl font-semibold tracking-[-0.025em]">
                      Krzysztof Zaleski
                    </h3>
                    <p className="mt-1 text-sm text-gray54">{t('role')}</p>
                    <dl className="mt-7 space-y-3 border-t border-[#d7d7d7] pt-5 text-sm">
                      <div className="flex justify-between gap-5">
                        <dt className="text-gray7B">{t('locationLabel')}</dt>
                        <dd className="text-right font-medium">{t('location')}</dd>
                      </div>
                      <div className="flex justify-between gap-5">
                        <dt className="text-gray7B">{t('focusLabel')}</dt>
                        <dd className="text-right font-medium">{t('focus')}</dd>
                      </div>
                      <div className="flex justify-between gap-5">
                        <dt className="text-gray7B">{t('formatLabel')}</dt>
                        <dd className="text-right font-medium">{t('format')}</dd>
                      </div>
                    </dl>
                  </div>
                  <div className="mt-8 flex items-center justify-between gap-4">
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-gray7B">
                      {t('updated')}
                    </span>
                    <div className="flex gap-1">
                      <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
                      >
                        <IconBrandGithub aria-hidden="true" size={19} stroke={1.6} />
                      </a>
                      <a
                        href={LINKEDIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
                      >
                        <IconBrandLinkedin aria-hidden="true" size={19} stroke={1.6} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 rounded-xl border border-[#e3e3e3] bg-[#fafafa] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-[#202020]">{t('freelanceHeading')}</p>
            <p className="mt-1 text-sm text-gray54">{t('freelanceDescription')}</p>
          </div>
          <a
            href={`mailto:${EMAIL}?subject=Freelance enquiry`}
            className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-medium text-[#171717] focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            {t('freelanceCta')}
            <IconArrowRight aria-hidden="true" size={17} stroke={1.7} />
          </a>
        </div>
      </SmallWrap>
    </div>
  )
}

export default Resume
