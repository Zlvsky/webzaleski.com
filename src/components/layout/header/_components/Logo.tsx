import profilePicture from '@/assets/images/profile.png'
import { NAME, POSITION } from '@/utils/consts'
import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link
      href="#main"
      aria-label={NAME}
      className="flex min-h-11 min-w-11 shrink-0 items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
    >
      <div className="relative m-1 inline-block h-9 w-9 sm:m-0 sm:h-11 sm:w-11">
        <Image
          style={{
            mask: 'url(/mask.svg) alpha no-repeat center / cover add',
            WebkitMask: 'url(/mask.svg) alpha no-repeat center / cover add'
          }}
          width={150}
          height={150}
          className="avatarMask h-full w-full rounded-xl border bg-gradient-to-b from-[#D7D7D7] to-[#FEFEFE] shadow-glossybutton"
          src={profilePicture.src}
          alt=""
        />
        <div className="absolute -right-1 bottom-0.5 aspect-square h-2 w-2 rounded-full bg-[#16bf5e]" />
      </div>
      <div className="hidden flex-col whitespace-nowrap text-sm leading-none lg:flex">
        <span className="text-base font-normal">{NAME}</span>
        <span className="font-mono text-[0.68rem] text-gray54">{POSITION}</span>
      </div>
    </Link>
  )
}
