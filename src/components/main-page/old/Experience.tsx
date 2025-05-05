import { experience } from '@/data/experience'
import SectionHeader from '../ui/SectionHeader'

interface SingleExperienceProps {
  role: string
  company: string
  date: string
}

const SingleExperience = ({ role, company, date }: SingleExperienceProps) => {
  return (
    <div className="flex flex-row items-center py-2 text-sm text-grayText1 dark:text-grayText2">
      <span className="w-1/4 text-left">{date}</span>
      <span className="font-medium">{role} </span>
      <span className="ml-1">@ {company}</span>
    </div>
  )
}

function Experience() {
  return (
    <div className="mt-8">
      <SectionHeader>Experience</SectionHeader>
      <div className="flex flex-col ">
        {experience.map((el, index) => (
          <SingleExperience {...el} key={'exp_' + index} />
        ))}
      </div>
    </div>
  )
}

export default Experience
