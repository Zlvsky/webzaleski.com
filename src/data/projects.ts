import botlogo from '@/assets/images/work/logos/bot.png'
import feedbacklogo from '@/assets/images/work/logos/feedback.png'
import konvalogo from '@/assets/images/work/logos/konva.png'
import oneplacelogo from '@/assets/images/work/logos/oneplace.png'
import rodlogo from '@/assets/images/work/logos/rod.png'
import visitylogo from '@/assets/images/work/logos/visity.png'
import rod from '@/assets/images/work/rod.png'

export const projects = [
  {
    name: 'Realm of Dungeons',
    shortDescription:
      'Dark fantasy pixel art mobile idle RPG. UI-based retro progression inspired by classics like Gladiatus & S&F. Made in React Native with Expo.',
    year: '2025',
    image: rod.src,
    logo: rodlogo.src,
    slug: 'realm-of-dungeons',
    state: 'Launching soon on App Store and Google Play',
    github: 'https://github.com/Zlvsky/realm-of-dungeons'
  },
  {
    name: 'Visity',
    shortDescription:
      'SaaS application for creating simple landing pages in minutes targeted to small businesses.',
    year: '2024',
    image: '/img/works/work2.png',
    logo: visitylogo.src,
    state: 'Failed',
    slug: 'visity',
    live: 'https://visity.pl'
  },
  {
    name: 'Feedback Widget',
    shortDescription:
      'Feedback widget that can be embedded on websites to collect feedback and send console logs with page screenshots.',
    year: '2024',
    slug: 'feedback-widget',
    image: '/img/works/work3.png',
    logo: feedbacklogo.src,
    state: 'Used in 10+ projects'
  },
  {
    name: 'Konva Moodboard',
    shortDescription: `Web app to create and export canvas moodboards with custom images.`,
    year: '2022',
    image: '/img/works/work5.png',
    logo: konvalogo.src,
    slug: 'konva-moodboard',
    state: '28+ stars on GitHub',
    github: 'https://github.com/Zlvsky/React-Konva-moodboard'
  },
  {
    name: 'One-place',
    shortDescription: `CRUD admin panel to manage business based on orders, that don't need online shop.`,
    year: '2021',
    image: '/img/works/work6.png',
    logo: oneplacelogo.src,
    slug: 'one-place',
    state: '44+ stars on GitHub',
    github: 'https://github.com/Zlvsky/one-place'
  },
  {
    name: 'Oferia.pl Automation bot',
    shortDescription:
      'Custom-made bot that automates the insertion of offers on a IT freelancing portal',
    year: '2021',
    slug: 'automation-bot',
    logo: botlogo.src,
    state: 'Was active 24/7 between 2021-2023',
    image: '/img/works/work7.png'
  }
  // {
  //   name: 'ZSEClicker',
  //   shortDescription: 'Game based on idle mechanics, inspired by Cookie Clicker.',
  //   year: '2018'
  // }
] as const
