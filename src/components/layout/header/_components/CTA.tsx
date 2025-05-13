import kickstarter from '@/assets/images/kickstarter.png'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

function CTA() {
  const t = useTranslations('nav')
  const textContainerVariants = {
    rest: {
      width: 0,
      opacity: 0,
      marginLeft: 0
    },
    hover: {
      width: 'auto', // Animate to the content's width
      opacity: 1,
      marginLeft: '0.25rem' // Creates a small gap (like Tailwind's ml-1)
    }
  }

  return (
    <motion.a
      href="https://www.kickstarter.com/projects/czaleski/arca-idle-multiplatform-idle-rpg-in-dark-fantasy-pixel-art?ref=webzaleski.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex cursor-pointer flex-row items-center overflow-hidden rounded-lg border border-[#dedede] bg-white px-2 py-1 shadow-work2 transition-colors duration-150 ease-in-out"
      initial="rest"
      whileHover="hover"
      animate="rest" // Ensures animation returns to 'rest' state when not hovered
    >
      <Image src={kickstarter} alt="Kickstarter" width={24} height={24} />
      <motion.div
        className="overflow-hidden" // Crucial for the width animation to look like a reveal
        variants={textContainerVariants}
        transition={{ duration: 0.2, ease: 'easeInOut' }} // Defines animation properties
      >
        <span className="whitespace-nowrap text-sm text-black">{t('launching')}</span>
      </motion.div>
    </motion.a>
  )
}

export default CTA
