import freelance from '@/assets/images/companies/freelance.png'
import goodsoft from '@/assets/images/companies/goodsoft.png'
import jokuh from '@/assets/images/companies/jokuh.png'
import seomi from '@/assets/images/companies/seomi.png'
import realmOfDungeons from '@/assets/images/RoDIcon.png'

export const experiences = [
  {
    id: 'realmOfDungeons',
    companyName: 'Realm of Dungeons',
    companyUrl: '#work',
    icon: realmOfDungeons,
    startYear: 2025,
    endYear: null,
    isPresent: true,
    isExternal: false,
    skills: ['React Native', 'Expo', 'Node.js', 'PostgreSQL', 'Prisma']
  },
  {
    id: 'goodsoft',
    companyName: 'GoodSoft',
    companyUrl: 'https://goodsoft.pl',
    icon: goodsoft,
    startYear: 2022,
    endYear: null,
    isPresent: true,
    isExternal: true,
    skills: ['React', 'TypeScript', 'Next.js', 'REST APIs', 'Frontend architecture']
  },
  {
    id: 'jokuh',
    companyName: 'Jokuh',
    companyUrl: 'https://jokuh.com',
    icon: jokuh,
    startYear: 2024,
    endYear: null,
    isPresent: false,
    isExternal: true,
    skills: ['React', 'NextJs', 'TypeScript', 'FullStack', 'Motion']
  },
  {
    id: 'freelance',
    companyName: 'Part-time freelance',
    companyUrl: null,
    icon: freelance,
    startYear: 2022,
    endYear: 2024,
    isPresent: false,
    isExternal: false,
    skills: ['WordPress', 'WooCommerce', 'TypeScript', 'Node.js', 'SEO', 'Analytics']
  },
  {
    id: 'seomi',
    companyName: 'Seomi',
    companyUrl: 'https://seomi.pl',
    icon: seomi,
    startYear: 2021,
    endYear: null,
    isPresent: false,
    isExternal: true,
    skills: ['Web development', 'Responsive UI', 'Team collaboration']
  }
] as const
