'use client'

import profilePicture from '@/assets/images/profile.png' // Replace with your actual profile picture path
import { Button } from '@/components/ui/button/Button'
import { cn } from '@/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useTranslations } from 'next-intl' // Import useTranslations
import Image from 'next/image'
import * as React from 'react'
import SmallWrap from '../layout/containers/SmallWrap' // Assuming you have this
import Contact from './old/Contact'

const faqItemIds = ['faq1', 'faq2', 'faq3', 'faq4']

const FaqSection = () => {
  const t = useTranslations('faq.items')

  const faqData = faqItemIds.map((id) => ({
    id,
    question: t(`${id}.question`),
    answer: t.rich(`${id}.answer`, {
      figmaAdobe: (chunks) => <span className="text-black">{chunks}</span>,
      codeAccuratelyReflects: (chunks) => <span className="text-black">{chunks}</span>,
      communicationCollaborationQuality: (chunks) => (
        <span className="text-black">{chunks}</span>
      ),
      cleanMaintainableCode: (chunks) => <span className="text-black">{chunks}</span>,
      robustScalableProduct: (chunks) => <span className="text-black">{chunks}</span>,
      supportMaintenancePackages: (chunks) => (
        <span className="text-black">{chunks}</span>
      ),
      tailoredPlan: (chunks) => <span className="text-black">{chunks}</span>
    }) as React.ReactNode
  }))

  return (
    <div className="mx-auto max-w-2xl space-y-2">
      {faqData.map((item, index) => (
        <FaqItem
          key={item.id}
          question={item.question}
          answer={item.answer}
          index={index}
        />
      ))}
    </div>
  )
}
FaqSection.displayName = 'FaqSection'

const FaqItem = React.forwardRef<
  HTMLDivElement,
  {
    question: string
    answer: string | React.ReactNode
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
  const t = useTranslations('faq')

  return (
    <div className="w-full border-b border-gray-200 py-16 md:py-24">
      <SmallWrap>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <div className="mb-10 text-left">
              <h2 className="text-4xl font-medium leading-tight text-[#050505] sm:text-5xl">
                <span className="text-[#828282]">{t('headingPart1')}</span>
                <br />
                {t('headingPart2')}
              </h2>
            </div>
            <FaqSection />
          </div>

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
                  alt={t('cta.profileAlt')}
                />
                <div className="absolute -right-1.5 bottom-0 aspect-square h-4 w-4 rounded-full bg-[#16bf5e]"></div>
              </div>
              <h3 className="mb-1 text-2xl font-normal leading-7 text-[#828282]">
                {t('cta.stillNotSure')} <br />
                <span className="text-black">{t('cta.sendEmail')}</span>
              </h3>
              <p className="mb-3 text-2xl font-semibold text-black"></p>
              <p className="mb-6 text-sm text-gray-600">{t('cta.description')}</p>
              <Contact />
            </div>
          </div>
        </div>
      </SmallWrap>
    </div>
  )
}

export default Faq
