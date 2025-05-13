'use client'

import LinkSvg from '@/assets/icons/common/link.svg'
import GithubSvg from '@/assets/icons/social/github.svg'
import { projects } from '@/data/projects'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../../ui/button/Button'

interface SingleProjectProps {
  name: string
  shortDescription: string
  year: string
  image: string
  slug: string
  live?: string
  github?: string
}

const SingleProject = ({
  name,
  shortDescription,
  year,
  image,
  slug,
  live,
  github
}: SingleProjectProps) => {
  return (
    <motion.div layoutId={name} className="flex flex-col gap-8">
      {image && (
        <Link
          href={`/work/${slug}`}
          className="group relative min-h-40 w-full cursor-pointer overflow-hidden rounded-xl p-1 shadow-project dark:border dark:border-dark48"
        >
          <Button className="absolute left-1/2 z-10 -translate-x-1/2 -translate-y-10 border bg-black text-white transition-transform group-hover:-translate-y-2 dark:bg-white dark:text-black">
            Read more
          </Button>

          <Image
            src={image}
            width={672}
            height={380}
            alt=""
            className="scale h-full rounded-md transition-transform group-hover:translate-y-10"
          />
        </Link>
      )}
      <div className="flex flex-col justify-between pr-4 sm:flex-row">
        <p className="text-grayText1 sm:w-3/5 dark:text-grayText2">{shortDescription}</p>
        <div className="items-end text-right sm:w-2/5">
          <div className="flex flex-col justify-end">
            <span className="text-sm text-[#777] dark:text-grayText2">{year}</span>
            <h4 className="text-lg font-semibold tracking-tighter">{name}</h4>
            <div className="flex flex-row items-center justify-end gap-1">
              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1"
                >
                  <LinkSvg className="h-4 w-4" />
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1"
                >
                  <GithubSvg className="h-4 w-4 dark:[&>path]:fill-white" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function Projects() {
  return (
    <>
      <div className="mt-8">
        <div className="flex flex-col gap-16">
          {projects.map((el, index) => (
            <SingleProject {...el} key={'project_' + index} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects
