import BorderOverlay from '@/components/layout/containers/BorderOverlay'
import Container from '@/components/layout/containers/Container'
import PageWrap from '@/components/layout/containers/PageWrap'
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import Experience from '@/components/main-page/Experience'
import Hero from '@/components/main-page/Hero'

export default function Home() {
  return (
    <PageWrap>
      <Header />
      <Container>
        <Hero />
        <Experience />

        {/* <BigWrap id="work">
          <Projects />
        </BigWrap> */}
      </Container>
      <Footer />
      <BorderOverlay />
    </PageWrap>
  )
}
