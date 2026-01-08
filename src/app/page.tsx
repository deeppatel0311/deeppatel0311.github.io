import PageTransition from '@/components/PageTransition'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import BlogPreview from '@/components/BlogPreview'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <PageTransition>
      <main>
        <Header />
        <Hero />
        <About />
        <Projects />
        <BlogPreview />
        <Contact />
        <Footer />
      </main>
    </PageTransition>
  )
}