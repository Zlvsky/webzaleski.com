import profilePicture from '@/assets/images/profile.png' // Replace with your actual profile picture path
import { NAME, POSITION } from '@/utils/consts'
import Image from 'next/image'
import Link from 'next/link'

function Logo() {
  return (
    <Link href={'/'} className="hidden items-center space-x-2 sm:flex">
      <div className="relative inline-block">
        <Image
          style={{
            mask: `url(/mask.svg) alpha no-repeat center / cover add`,
            WebkitMask: `url(/mask.svg) alpha no-repeat center / cover add`
          }}
          width={150}
          height={150}
          className="avatarMask h-11 w-11 rounded-xl border bg-gradient-to-b from-[#D7D7D7] to-[#FEFEFE] shadow-glossybutton  "
          src={profilePicture.src}
          alt=""
        />
        <div className="absolute -right-1 bottom-0.5 aspect-square h-2 w-2 rounded-full bg-[#16bf5e]"></div>
      </div>
      <div className="flex flex-col text-sm leading-none">
        <span className="text-base font-normal dark:text-white">{NAME}</span>
        <span className="font-mono text-xs text-[#828282]">{POSITION}</span>
      </div>
    </Link>
  )
}

export default Logo
