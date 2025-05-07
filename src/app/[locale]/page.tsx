import BigWrap from '@/components/layout/containers/BigWrap'
import BorderOverlay from '@/components/layout/containers/BorderOverlay'
import Container from '@/components/layout/containers/Container'
import PageWrap from '@/components/layout/containers/PageWrap'
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import Experience from '@/components/main-page/Experience'
import Hero from '@/components/main-page/Hero'
import Projects from '@/components/main-page/old/Projects'
import Skills from '@/components/main-page/old/Skills'

export default function Home() {
  return (
    <PageWrap>
      <Header />
      <Container>
        <Hero />
        <Experience />
        <Skills />
        <BigWrap id="work">
          <Projects />
        </BigWrap>
      </Container>
      <Footer />
      <BorderOverlay />
    </PageWrap>
  )
}
