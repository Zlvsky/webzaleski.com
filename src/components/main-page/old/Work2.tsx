'use client'

import { projects } from '@/data/projects'
import { cn } from '@/utils'
import { useState } from 'react'
import SmallWrap from '../layout/containers/SmallWrap'
import { BorderTrail } from '../ui/BorderTrail'

const WorkButton = ({
  project,
  isActive
}: {
  project: (typeof projects)[number]
  isActive: boolean
}) => {
  return (
    <button className="relative h-min w-full rounded-2xl border border-[#dedede] bg-white p-3 shadow-work">
      <BorderTrail
        style={{
          boxShadow:
            '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)'
        }}
        className={cn(isActive ? 'opacity-100' : 'opacity-0')}
        size={100}
      />
      <div className="flex h-full w-full flex-row justify-between">
        <div className="flex flex-col items-start gap-1 text-start">
          <h4 className="font-mediun text-base tracking-tighter">{project.name}</h4>
          <p className="text-xs text-grayText1 dark:text-grayText2">
            {project.shortDescription}
          </p>
        </div>
      </div>
    </button>
  )
}

function Work() {
  const [active, setActive] = useState<string>('Realm of Dungeons')

  return (
    <div className="w-full border-b border-gray-200 py-24">
      <SmallWrap>
        <h3 className="text-lg font-medium text-[#050505] md:text-5xl">Featured work</h3>
        <div className="mt-10 flex flex-row items-start justify-between gap-10">
          <div className="grid flex-1 grid-cols-3 flex-col gap-6">
            {projects.map((project) => (
              <WorkButton
                project={project}
                isActive={active === project.name}
                key={project.name + '_button'}
              />
            ))}
          </div>
          {/* <div className="flex-1"></div> */}
        </div>
      </SmallWrap>
    </div>
  )
}

export default Work
