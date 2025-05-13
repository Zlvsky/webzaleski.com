'use client'
import IwonaImage from '@/assets/images/clients/iwona.png'
import PawelImage from '@/assets/images/clients/pawel.png'
import SkrzynkaImage from '@/assets/images/clients/skrzynk.png'
import TomaszImage from '@/assets/images/clients/tomaszmichno.png'
import WbhaleImage from '@/assets/images/clients/wbhale.png'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl' // Import useTranslations
import Image from 'next/image'
import React from 'react'
import SmallWrap from '../layout/containers/SmallWrap'

// Update testimonials data to include an 'id' for translation lookup
const testimonialsData = [
  {
    id: 'testimonial1',
    image: SkrzynkaImage
  },
  {
    id: 'testimonial2',
    image: IwonaImage
  },
  {
    id: 'testimonial3'
    // No image for Michał W.
  },
  {
    id: 'testimonial4',
    image: PawelImage
  },
  {
    id: 'testimonial5',
    image: WbhaleImage
  },
  {
    id: 'testimonial6',
    image: TomaszImage
  }
]

// Define the type for a single testimonial item after fetching translations
interface TranslatedTestimonial {
  name: string
  company: string
  text: string
  image?: typeof SkrzynkaImage // Or a more generic image type if needed
}

export const TestimonialsColumn = (props: {
  className?: string
  testimonials: TranslatedTestimonial[] // Expecting translated testimonials
  duration?: number
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: '-50%'
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop'
        }}
        className="bg-background flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, company }, i) => (
                <div
                  className="w-full max-w-xs rounded-xl border border-[#dedede] p-14 shadow-badge"
                  key={`${name}-${i}`} // Use a more unique key if names can repeat
                >
                  <div>{text}</div>
                  <div className="mt-5 flex items-center gap-2">
                    {image ? (
                      <Image
                        width={40}
                        height={40}
                        src={image?.src}
                        alt={name} // Alt text can remain the name
                        className="h-10 w-10 rounded-full"
                      />
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                        {name[0]}
                      </div>
                    )}

                    <div className="flex flex-col">
                      <div className="font-medium leading-5 ">{name}</div>
                      <div className="text-sm leading-5 opacity-60">{company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))
        ]}
      </motion.div>
    </div>
  )
}

const Testimonials = () => {
  const t = useTranslations('testimonials') // Initialize translations

  // Map over testimonialsData to get translated content
  const translatedTestimonials = testimonialsData.map((item) => ({
    name: t(`${item.id}.name`),
    company: t(`${item.id}.company`),
    text: t(`${item.id}.text`),
    image: item.image
  }))

  const firstColumn = translatedTestimonials.slice(0, 2)
  const secondColumn = translatedTestimonials.slice(2, 4)
  const thirdColumn = translatedTestimonials.slice(4, 6)

  return (
    <div className="w-full border-b border-gray-200 pt-10 sm:pt-20">
      <SmallWrap>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <h2 className="text-3xl font-medium leading-tight text-[#050505] sm:text-5xl">
            <span className="text-[#828282]">{t('headingPart1')}</span>
            <br />
            {t('headingPart2')}
          </h2>
        </motion.div>

        <div className="mt-4 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] sm:mt-10">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </SmallWrap>
    </div>
  )
}

export default Testimonials
