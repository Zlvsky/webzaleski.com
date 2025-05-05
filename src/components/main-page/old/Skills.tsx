import { skills } from '@/data/skills'
import SectionHeader from '../ui/SectionHeader'
import SingleTech from '../ui/SingleTech'

function Skills() {
  return (
    <div className="mt-8">
      <SectionHeader>Skills</SectionHeader>
      <div className="mb-2 flex flex-row ">
        <div className="flex flex-row flex-wrap items-center gap-2">
          {skills.frontend.map((tech, index) => (
            <SingleTech key={index} {...tech} />
          ))}
        </div>
      </div>
      <div className="mb-2 flex flex-row ">
        <div className="flex  flex-row flex-wrap items-center gap-2">
          {skills.backend.map((tech, index) => (
            <SingleTech key={index} {...tech} />
          ))}
        </div>
      </div>
      <div className="mb-2 flex flex-row ">
        <div className="flex flex-row flex-wrap items-center gap-2">
          {skills.tools.map((tech, index) => (
            <SingleTech key={index} {...tech} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
