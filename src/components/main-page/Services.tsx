import {
  backendStack,
  frontendStack,
  otherStack,
  servicesList,
  websitesStack
} from '@/data/services'
import React from 'react'
import SmallWrap from '../layout/containers/SmallWrap' // Assuming you have this
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/Tooltip'

interface ServiceItemProps {
  name: string
  Icon: any
}

interface TechIconProps {
  Icon: any
  label: string
}

const ServiceListItem: React.FC<ServiceItemProps> = ({ name, Icon }) => {
  return (
    <div className="relative flex items-center gap-4">
      {/* <div className="mr-4 h-7 w-7 flex-shrink-0 rounded-full bg-black shadow-md"></div> */}
      <Icon width={40} height={40} />
      <span className="text-xl font-medium text-black">{name}</span>
    </div>
  )
}

const TechStackIcon: React.FC<TechIconProps> = ({ Icon, label }) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger>
          <div
            aria-label={label}
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#dedede] bg-white p-3 shadow-service transition-shadow hover:shadow-md"
          >
            <Icon stroke={1} height={24} width={24} />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

const Services: React.FC = () => {
  return (
    <div className="w-full border-b border-gray-200 py-24">
      <SmallWrap>
        <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2 md:gap-24">
          {/* Left Column */}
          <div className="flex flex-col">
            <h1 className="text-lg font-medium leading-tight text-[#828282] md:text-5xl">
              Services that
              <br />
              <span className="font-semibold text-[#050505]">
                supercharge your business.
              </span>
            </h1>
            <div className="mt-10 space-y-4">
              <h2 className="mb-4 font-mono text-base font-medium text-[#555]">
                Front-End
              </h2>
              <div className="flex flex-wrap gap-3">
                {frontendStack.map((tech) => (
                  <TechStackIcon key={tech.label} Icon={tech.Icon} label={tech.label} />
                ))}
              </div>
              <h2 className="mb-4 font-mono text-base font-medium text-[#555]">
                Back-End
              </h2>
              <div className="flex flex-wrap gap-3">
                {backendStack.map((tech) => (
                  <TechStackIcon key={tech.label} Icon={tech.Icon} label={tech.label} />
                ))}
              </div>
              <h2 className="mb-4 font-mono text-base font-medium text-[#555]">
                Websites
              </h2>
              <div className="flex flex-wrap gap-3">
                {websitesStack.map((tech) => (
                  <TechStackIcon key={tech.label} Icon={tech.Icon} label={tech.label} />
                ))}
              </div>
              <h2 className="mb-4 font-mono text-base font-medium text-[#555]">Other</h2>
              <div className="flex flex-wrap gap-3">
                {otherStack.map((tech) => (
                  <TechStackIcon key={tech.label} Icon={tech.Icon} label={tech.label} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-10 pt-2">
            {servicesList.map((service) => (
              <ServiceListItem
                key={service.name}
                name={service.name}
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
