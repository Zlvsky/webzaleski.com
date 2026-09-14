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
    isExternal: false
  },
  {
    id: 'goodsoft',
    companyName: 'GoodSoft',
    companyUrl: 'https://goodsoft.pl',
    icon: goodsoft,
    startYear: 2022,
    endYear: null,
    isPresent: true,
    isExternal: true
  },
  {
    id: 'jokuh',
    companyName: 'Jokuh',
    companyUrl: 'https://jokuh.com',
    icon: jokuh,
    startYear: 2024,
    endYear: null,
    isPresent: false,
    isExternal: true
  },
  {
    id: 'freelance',
    companyName: 'Part-time freelance',
    companyUrl: null,
    icon: freelance,
    startYear: 2022,
    endYear: 2024,
    isPresent: false,
    isExternal: false
  },
  {
    id: 'seomi',
    companyName: 'Seomi',
    companyUrl: 'https://seomi.pl',
    icon: seomi,
    startYear: 2021,
    endYear: null,
    isPresent: false,
    isExternal: true
  }
] as const
