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
  IconBrandPrisma,
  IconBrandRadixUi,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandWordpress
} from '@tabler/icons-react'

export const servicesList: { nameKey: string; Icon: any }[] = [
  { nameKey: 'mvpApplications', Icon: MvpIcon },
  { nameKey: 'expertReactFrontend', Icon: FrontendIcon },
  { nameKey: 'fullstackDevelopment', Icon: FullstackIcon },
  { nameKey: 'reactNativeDevelopment', Icon: MobileIcon },
  { nameKey: 'landingPages', Icon: LandingIcon },
  { nameKey: 'wordpressWebsites', Icon: WordpressIcon },
  { nameKey: 'woocommerceSolutions', Icon: WoocommerceIcon },
  { nameKey: 'modernJamstack', Icon: NextIcon },
  { nameKey: 'ongoingSupport', Icon: FixesIcon }
]

export const frontendStack = [
  { Icon: IconBrandTypescript, labelKey: 'typescript' },
  { Icon: IconBrandReact, labelKey: 'react' },
  { Icon: IconBrandReactNative, labelKey: 'reactNative' },
  { Icon: IconBrandNextjs, labelKey: 'nextjs' },
  { Icon: IconBrandTailwind, labelKey: 'tailwindCss' },
  { Icon: IconBrandFramerMotion, labelKey: 'framerMotion' },
  { Icon: IconBrandRadixUi, labelKey: 'radixUi' }
]

export const backendStack = [
  { Icon: IconBrandNodejs, labelKey: 'nodejs' },
  { Icon: IconBrandPrisma, labelKey: 'prisma' },
  { Icon: PostgresIcon, labelKey: 'postgresql' },
  { Icon: IconBrandMongodb, labelKey: 'mongodb' }
]

export const websitesStack = [
  { Icon: IconBrandGatsby, labelKey: 'gatsby' },
  { Icon: IconBrandWordpress, labelKey: 'wordpress' },
  { Icon: IconBrandHtml5, labelKey: 'html5' }
]

export const otherStack = [
  { Icon: IconBrandGit, labelKey: 'git' },
  { Icon: IconBrandDocker, labelKey: 'docker' },
  { Icon: IconBrandCypress, labelKey: 'cypress' },
  { Icon: IconBrandFigma, labelKey: 'figma' },
  { Icon: IconBrandFirebase, labelKey: 'firebase' }
]
