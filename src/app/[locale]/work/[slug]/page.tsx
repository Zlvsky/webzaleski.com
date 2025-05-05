import BigWrap from '@/components/layout/containers/BigWrap'
import Container from '@/components/layout/containers/Container'
import PageWrap from '@/components/layout/containers/PageWrap'
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import { Mdx } from '@/components/mdx/Mdx'
import Content from '@/components/mdx/content/Content'
import { getMetadata } from '@/lib/metadata'
import { getWorkBySlug } from '@/lib/posts'
import { IParamsSlug } from '@/types/generalTypes'

export async function generateMetadata(props: IParamsSlug) {
  const params = await props.params
  const slug = params!.slug as string
  const { frontmatter } = await getWorkBySlug(slug)

  return getMetadata({
    title: frontmatter.title,
    description: frontmatter.excerpt,
    type: 'article',
    image: frontmatter.image
  })
}

async function WorkPage(props: IParamsSlug) {
  const params = await props.params

  const { slug } = params

  const { transformedMdx, frontmatter } = await getWorkBySlug(slug)
  return (
    <PageWrap>
      <Header />
      <Container>
        <BigWrap>
          <Mdx type="WORK" frontmatter={frontmatter} slug={slug}>
            <Content content={transformedMdx} />
          </Mdx>
        </BigWrap>
      </Container>
      <Footer />
    </PageWrap>
  )
}

export default WorkPage
