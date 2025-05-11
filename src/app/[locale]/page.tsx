import BorderOverlay from '@/components/layout/containers/BorderOverlay'
import Container from '@/components/layout/containers/Container'
import PageWrap from '@/components/layout/containers/PageWrap'
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import About from '@/components/main-page/About'
import Experience from '@/components/main-page/Experience'
import Hero from '@/components/main-page/Hero'
import Services from '@/components/main-page/Services'
import Testimonials from '@/components/main-page/Testimonials'
import Work from '@/components/main-page/Work'

export default function Home() {
  return (
    <PageWrap>
      <Header />
      <Container>
        <Hero />
        <Experience />
        <Work />
        <Services />
        <About />
        <Testimonials />
        {/* <BigWrap id="work">
          <Projects />
        </BigWrap> */}
      </Container>
      <Footer />
      <BorderOverlay />
    </PageWrap>
  )
}
