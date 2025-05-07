import Image from 'next/image'
import SmallWrap from '../layout/containers/SmallWrap'

interface ExperienceEntry {
  id: string
  iconUrl?: string
  iconPlaceholder: string
  companyName: string
  companyUrl?: string // Optional: URL for the company
  dateRange: string
  isActive?: boolean
}

const experiencesData: ExperienceEntry[] = [
  {
    id: 'goodsoft',
    iconUrl: '/logos/goodsoft.jpg', // Replace with actual path or remove if using placeholder
    iconPlaceholder: 'G',
    companyName: 'GoodSoft',
    companyUrl: 'https://goodsoft.pl',
    dateRange: '2022 - NOW',
    isActive: true
  },
  {
    id: 'jokuh',
    iconUrl: '/logos/moneykit.png', // Replace with actual path
    iconPlaceholder: 'M',
    companyName: 'Jokuh',
    companyUrl: 'https://moneykit.com',
    dateRange: '2024'
  },
  {
    id: 'freelance',
    iconUrl: '/logos/rainbow.png', // Replace with actual path
    iconPlaceholder: 'R',
    companyName: 'Freelance',
    companyUrl: 'https://seomi.pl',
    dateRange: '2021 - NOW'
  },
  {
    id: 'Seomi',
    iconUrl: '/logos/rainbow.png', // Replace with actual path
    iconPlaceholder: 'R',
    companyName: 'Seomi',
    companyUrl: 'https://seomi.pl',
    dateRange: '2020 - 2021'
  }
]

// Adjusted constants based on new styling
const LINE_TOP_OFFSET = 'top-[6px]' // Corresponds to top-1.5 in Tailwind (6px)
const DOT_CONTAINER_HEIGHT = 'h-3' // 12px
const DOT_SIZE = 'h-[8px] w-[8px]' // 8px

function Experience() {
  const activeIndex = experiencesData.findIndex((exp) => exp.isActive)
  const itemCount = experiencesData.length

  // Calculate width for the active part of the line.
  // This logic assumes items are roughly equally spaced or this is a visual approximation.
  const activeLineWidth =
    activeIndex >= 0 && itemCount > 0
      ? `${((activeIndex + 0.5) / itemCount) * 100}%`
      : '0%'

  // Define colors for easy customization
  const accentColor = 'teal-500' // Color for active elements
  const lineColor = 'gray-300' // Color for the inactive line
  const dotRingColor = 'gray-400' // Color for inactive dot ring

  return (
    <div className="w-full border-b border-t border-gray-200 bg-white py-14">
      <SmallWrap>
        <div className="relative flex w-full flex-row gap-10">
          {/* Header Section - Kept from original, can be adjusted */}
          <div className="mb-10 flex items-center justify-between px-1">
            {/* Adjusted mb and added px for alignment with timeline start */}
            <h3 className="text-lg font-medium text-gray-700 md:text-xl">
              My <span className="font-semibold text-gray-900">Experience</span>
            </h3>
          </div>

          {/* Timeline Container */}
          {/* Adjusted mt to mt-14 from example, relative to this component's padding */}
          <div className="relative mt-4 flex-1">
            {/* Base connecting line (gray) - Adjusted width to account for "ALL" link space */}
            <div
              className={`absolute left-0 ${LINE_TOP_OFFSET} h-px w-[calc(100%-45px)] bg-${lineColor} opacity-75`}
            ></div>
            {/* Active/Highlighted connecting line (accent) */}
            {activeIndex >= 0 && (
              <div
                className={`absolute left-0 ${LINE_TOP_OFFSET} h-px bg-${accentColor}`}
                style={{ width: activeLineWidth }}
              ></div>
            )}

            {/* Experience Items Flex Container */}
            <div className="flex flex-row gap-x-8 pt-2 sm:gap-x-10 md:gap-x-12">
              {experiencesData.map((exp) => (
                <div
                  key={exp.id}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Dot and Line Interaction Point */}
                  <div className={`relative ${DOT_CONTAINER_HEIGHT} w-3`}>
                    {' '}
                    {/* w-3 to center the dot */}
                    {/* This div creates the "line passing through" effect for light theme */}
                    <div
                      className={`absolute left-1/2 top-0 ${DOT_CONTAINER_HEIGHT} w-5 -translate-x-1/2 bg-white`}
                    ></div>
                    {/* Actual Dot */}
                    <div
                      className={`absolute left-1/2 top-1/2 z-[1] ${DOT_SIZE} -translate-x-1/2 -translate-y-1/2 transform rounded-full
                        ${
                          exp.isActive
                            ? `bg-${accentColor}`
                            : `bg-white ring-1 ring-${dotRingColor} ring-inset`
                        }
                      `}
                    >
                      {/* Ping animation for active dot */}
                      {exp.isActive && (
                        <div
                          className={`absolute inset-0 ${DOT_SIZE} animate-ping rounded-full bg-${accentColor} opacity-50`}
                          style={{ animationDuration: '2.5s' }}
                        ></div>
                      )}
                    </div>
                  </div>

                  {/* Icon, Company Name, and Date Range */}
                  <div className="mt-3 flex flex-col items-center gap-1.5">
                    {' '}
                    {/* Reduced gap from 2 to 1.5 */}
                    <div className="flex items-center gap-x-2">
                      <a
                        href={exp.companyUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-md outline-none transition-all focus-visible:ring-1 focus-visible:ring-${accentColor} active:scale-95 md:h-8 md:w-8`}
                      >
                        {exp.iconUrl ? (
                          <Image
                            src={exp.iconUrl}
                            alt={`${exp.companyName} logo`}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div
                            className="flex h-full w-full items-center justify-center
                                       border border-gray-200 bg-gray-100
                                       text-sm font-semibold text-gray-500 md:text-base"
                          >
                            {exp.iconPlaceholder}
                          </div>
                        )}
                        <span className="absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-black/[.08]"></span>
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
                    <p className="whitespace-nowrap text-[11px] text-gray-500 sm:text-xs">
                      {exp.dateRange}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SmallWrap>
    </div>
  )
}

export default Experience
