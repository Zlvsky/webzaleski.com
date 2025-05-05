import hand from '@/assets/images/hand.png'
import profile from '@/assets/images/profile.png'
import Image from 'next/image'
import SectionHeader from '../ui/SectionHeader'

function Hero() {
  return (
    <div className="flex flex-col  md:flex-row">
      <div className="">
        <SectionHeader>
          <div className="flex flex-row flex-wrap items-center gap-2">
            <Image
              width={150}
              height={150}
              className="h-12 w-12  rounded-xl border  bg-gradient-to-b from-[#D7D7D7] to-[#FEFEFE] drop-shadow-xl "
              src={profile.src}
              alt=""
            />
            <span className="flex flex-row items-center gap-1 text-xl font-normal tracking-tight">
              {' '}
              Hey <Image src={hand} height={24} width={24} alt="👋" />{' '}
            </span>
            <span className="flex flex-row items-center gap-1 text-xl font-normal tracking-tight">
              I&apos;m Krzysztof, but you can call me Chris
            </span>
          </div>
        </SectionHeader>
        <h1 className="mb-4 text-3xl font-normal tracking-tight">
          Web & frontend developer, proficient in React ecosystem.
        </h1>
        <p className="mb-4 text-grayText1 dark:text-grayText2">
          Seamlessly transitioning from crafting websites to developing web applications.
        </p>
        <p className="mb-4 text-grayText1 dark:text-grayText2">
          Passionate about creative solutions and building apps from scratch, perfecting
          both backend and frontend.
        </p>
        <p className="text-grayText1 dark:text-grayText2">
          Currently working as a sole frontend developer,{' '}
          <a
            className="border-b border-grayText1 transition-colors hover:border-textHover hover:text-textHover  dark:border-grayText2 dark:hover:border-white dark:hover:text-white"
            href="https://hireme.czaleski.com"
            target="_blank"
          >
            {' '}
            freelancing
          </a>{' '}
          from time-to-time and building my own products.
        </p>
      </div>
    </div>
  )
}

export default Hero
