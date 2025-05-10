import FixesIcon from '@/assets/icons/services/fixes.svg'
import FrontendIcon from '@/assets/icons/services/frontend.svg'
import FullstackIcon from '@/assets/icons/services/fullstack.svg'
import LandingIcon from '@/assets/icons/services/landing.svg'
import MobileIcon from '@/assets/icons/services/mobile.svg'
import MvpIcon from '@/assets/icons/services/mvp.svg'
import NextIcon from '@/assets/icons/services/nextgatsby.svg'
import PostgresIcon from '@/assets/icons/services/postgresql.svg'
import WoocommerceIcon from '@/assets/icons/services/woocommerce.svg'
import WordpressIcon from '@/assets/icons/services/wordpress.svg'
import {
  IconBrandCypress,
  IconBrandDocker,
  IconBrandFigma,
  IconBrandFirebase,
  IconBrandFramerMotion,
  IconBrandGatsby,
  IconBrandGit,
  IconBrandHtml5,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandRadixUi,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandWordpress
} from '@tabler/icons-react' // Or your preferred Icon library

export const servicesList: { name: string; Icon: any }[] = [
  { name: 'MVP Applications', Icon: MvpIcon },
  { name: 'Front-end Development', Icon: FrontendIcon },
  { name: 'Full-stack Development', Icon: FullstackIcon },
  { name: 'React Native Development', Icon: MobileIcon },
  { name: 'Landing Pages', Icon: LandingIcon },
  { name: 'WordPress Websites', Icon: WordpressIcon },
  { name: 'WooCommerce Solutions', Icon: WoocommerceIcon },
  { name: 'Next.js / Gatsby Websites', Icon: NextIcon },
  { name: 'Maintenance & Support', Icon: FixesIcon }
]

export const frontendStack = [
  { Icon: IconBrandTypescript, label: 'TypeScript' },
  { Icon: IconBrandReact, label: 'React' },
  { Icon: IconBrandReactNative, label: 'React Native' },
  { Icon: IconBrandNextjs, label: 'Next.js' },
  { Icon: IconBrandTailwind, label: 'Tailwind CSS' },
  { Icon: IconBrandFramerMotion, label: 'Framer Motion' },
  { Icon: IconBrandRadixUi, label: 'Radix UI' }
]

export const backendStack = [
  { Icon: IconBrandNodejs, label: 'Node.js' },
  { Icon: PostgresIcon, label: 'PostgreSQL' },
  { Icon: IconBrandMongodb, label: 'MongoDB' }
]

export const websitesStack = [
  { Icon: IconBrandGatsby, label: 'Gatsby' },
  { Icon: IconBrandWordpress, label: 'WordPress' },
  { Icon: IconBrandHtml5, label: 'HTML5' }
]

export const otherStack = [
  { Icon: IconBrandGit, label: 'git' },
  { Icon: IconBrandDocker, label: 'Docker' },
  { Icon: IconBrandCypress, label: 'Cypress' },
  { Icon: IconBrandFigma, label: 'Figma' },
  { Icon: IconBrandFirebase, label: 'Firebase' }
]
