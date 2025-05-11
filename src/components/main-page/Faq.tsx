'use client'

import profilePicture from '@/assets/images/profile.png' // Replace with your actual profile picture path
import { Button } from '@/components/ui/button/Button'
import { cn } from '@/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import * as React from 'react'
import SmallWrap from '../layout/containers/SmallWrap' // Assuming you have this
import Contact from './old/Contact'

const faqData = [
  {
    id: 'faq1',
    question: 'How long does a typical project take to complete?',
    answer:
      'Project timelines vary based on complexity. A simple project might take 2-3 weeks, while more comprehensive designs can take 1-2 months. I will provide a specific estimate after our initial consultation.'
  },
  {
    id: 'faq2',
    question: 'Can you work with my existing brand and designs?',
    answer:
      "Absolutely! I can adapt to your existing brand guidelines and design systems. If you don't have one, I can also help you create or refine it."
  },
  {
    id: 'faq3',
    question: 'What makes your design process unique?',
    answer:
      'My process is highly collaborative and user-centric. I focus on understanding your business goals and user needs deeply to create solutions that are not only beautiful but also effective and intuitive.'
  },
  {
    id: 'faq4',
    question: 'Do you offer ongoing support after the project is completed?',
    answer:
      'Yes, I offer various ongoing support and maintenance packages to ensure your project remains up-to-date and continues to perform optimally. We can discuss these options based on your needs.'
  },
  {
    id: 'faq5',
    question: 'How do you handle confidentiality and intellectual property rights?',
    answer:
      "I take confidentiality and IP rights very seriously. I'm happy to sign Non-Disclosure Agreements (NDAs) and ensure that all intellectual property created for your project is rightfully yours upon completion and full payment."
  }
]

const FaqSection = () => {
  return (
    <div className="mx-auto max-w-2xl space-y-2">
      {faqData.map((item, index) => (
        <FaqItem
          key={item.id + item.question}
          question={item.question}
          answer={item.answer}
          index={index}
        />
      ))}
    </div>
  )
}
FaqSection.displayName = 'FaqSection'

// Internal FaqItem component
const FaqItem = React.forwardRef<
  HTMLDivElement,
  {
    question: string
    answer: string
    index: number
  }
>((props, ref) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const { question, answer, index } = props

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      className={cn(
        'group rounded-xl shadow-work',
        'transition-all duration-200 ease-in-out',
        'border border-[#dedede]',
        isOpen
          ? 'from-background to-background bg-gradient-to-br via-muted/50'
          : 'hover:bg-muted/50'
      )}
    >
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="h-auto w-full justify-between px-6 py-4 hover:bg-transparent"
      >
        <h3
          className={cn(
            'text-left text-base font-normal transition-colors duration-200',
            'text-foreground/70',
            isOpen && 'text-foreground'
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            'flex-shrink-0 rounded-full p-0.5',
            'transition-colors duration-200',
            isOpen ? 'text-primary' : 'text-muted-foreground'
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </Button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: { duration: 0.2, ease: 'easeOut' }
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.2, ease: 'easeIn' }
            }}
          >
            <div className="px-6 pb-4 pt-2">
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="text-sm leading-relaxed text-muted-foreground"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
})
FaqItem.displayName = 'FaqItem'

const Faq: React.FC = () => {
  return (
    <div className="w-full border-b border-gray-200 py-16 md:py-24">
      <SmallWrap>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left Column: Title and FAQs */}
          <div className="lg:col-span-3">
            <div className="mb-10 text-left">
              <h2 className="text-4xl font-medium leading-tight text-[#050505] sm:text-5xl">
                <span className="text-[#828282]">Your questions</span>
                <br />
                answered.
              </h2>
            </div>
            <FaqSection />
          </div>

          {/* Right Column: CTA Card */}
          <div className="lg:col-span-2">
            <div className="top-24 rounded-xl border border-[#dedede] bg-white p-8 shadow-work2">
              <div className="relative inline-block">
                <Image
                  style={{
                    mask: `url(/mask.svg) alpha no-repeat center / cover add`,
                    WebkitMask: `url(/mask.svg) alpha no-repeat center / cover add`
                  }}
                  width={150}
                  height={150}
                  className="avatarMask h-20 w-20 rounded-xl border  bg-gradient-to-b from-[#D7D7D7] to-[#FEFEFE]  "
                  src={profilePicture.src}
                  alt=""
                />
                <div className="absolute -right-1.5 bottom-0 aspect-square h-4 w-4 rounded-full bg-[#16bf5e]"></div>
              </div>
              <h3 className="mb-1 text-3xl font-normal leading-7 text-[#828282]">
                Still not sure? <br />{' '}
                <span className="text-black">Send me an email.</span>
              </h3>
              <p className="mb-3 text-2xl font-semibold text-black"></p>
              <p className="mb-6 text-sm text-gray-600">
                Learn more about how I work and how I can help you and your business take
                the next step.
              </p>
              <Contact />
            </div>
          </div>
        </div>
      </SmallWrap>
    </div>
  )
}

export default Faq
