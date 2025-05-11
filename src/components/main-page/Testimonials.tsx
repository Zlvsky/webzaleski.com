'use client'
import IwonaImage from '@/assets/images/clients/iwona.png'
import PawelImage from '@/assets/images/clients/pawel.png'
import SkrzynkaImage from '@/assets/images/clients/skrzynk.png'
import TomaszImage from '@/assets/images/clients/tomaszmichno.png'
import WbhaleImage from '@/assets/images/clients/wbhale.png'
import { motion } from 'framer-motion'
import React from 'react'
import SmallWrap from '../layout/containers/SmallWrap'

const testimonials = [
  {
    name: 'Aleksanda Łukaszenia',
    company: 'Skrzynka Synka',
    text: `I recommend Christopher services. Full professionalism and commitment! Quick implementation!`,
    image: SkrzynkaImage
  },
  {
    name: 'Iwona Troc',
    company: 'Mental Coach',
    text: `I recommend working with Christopher. I commissioned a website and I am very satisfied. Full professionalism, reliability, quick execution. Big plus for flexibility and communicativeness.`,
    image: IwonaImage
  },
  {
    name: 'Michał W.',
    company: 'EuroOil',
    text: `I recommend working with Chris. Very good contact. Quick implementation. The best offer I got when looking for a contractor, recommend!`
  },
  {
    name: 'Paweł Oliwa',
    company: 'PMI Geodezja',
    text: `I recommend Christopher's services. Very good contact. Quick implementation. Affordable prices. The best offer I found.`,
    image: PawelImage
  },
  {
    name: 'Wojciech B.',
    company: 'WB Hale',
    text: `I highly recommend working with Chris. Everything went through smoothly, even after the work was done there was no problem with further contact and performing further services.`,
    image: WbhaleImage
  },
  {
    name: 'Tomasz M.',
    company: 'Nagrobki Michno',
    text: `Christopher's execution of the commissioned work went smoothly. I highly recommend his services.`,
    image: TomaszImage
  }
]

export const TestimonialsColumn = (props: {
  className?: string
  testimonials: typeof testimonials
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
                  key={i}
                >
                  <div>{text}</div>
                  <div className="mt-5 flex items-center gap-2">
                    {image ? (
                      <img
                        width={40}
                        height={40}
                        src={image?.src}
                        alt={name}
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

const firstColumn = testimonials.slice(0, 2)
const secondColumn = testimonials.slice(2, 4)
const thirdColumn = testimonials.slice(4, 6)

const Testimonials = () => {
  return (
    <div className="w-full border-b border-gray-200 pt-20">
      <SmallWrap>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <h2 className="text-4xl font-medium leading-tight text-[#050505] sm:text-5xl">
            <span className="text-[#828282]">What clients say</span>
            <br />
            about my work.
          </h2>
        </motion.div>

        <div className="mt-10 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
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
