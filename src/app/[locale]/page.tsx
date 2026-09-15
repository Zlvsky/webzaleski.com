import BorderOverlay from '@/components/layout/containers/BorderOverlay'
import Container from '@/components/layout/containers/Container'
import PageWrap from '@/components/layout/containers/PageWrap'
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import About from '@/components/main-page/About'
import Experience from '@/components/main-page/Experience'
import Hero from '@/components/main-page/Hero'
import Resume from '@/components/main-page/Resume'
import Services from '@/components/main-page/Services'
import Work from '@/components/main-page/Work'
import { EMAIL, GITHUB_URL, HOST, LINKEDIN_URL } from '@/utils/consts'

export default function Home() {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Krzysztof Zaleski',
    url: HOST,
    jobTitle: 'React Native & Full-stack Developer',
    email: `mailto:${EMAIL}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Białystok',
      addressCountry: 'PL'
    },
    sameAs: [GITHUB_URL, LINKEDIN_URL]
  }

  return (
    <PageWrap>
      <Header />
      <Container>
        <Hero />
        <Work />
        <Experience />
        <Services />
        <About />
        <Resume />
      </Container>
      <Footer />
      <BorderOverlay />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c')
        }}
      />
    </PageWrap>
  )
}
