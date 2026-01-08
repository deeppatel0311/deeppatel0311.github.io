import Link from 'next/link'
import { Calendar, ArrowRight, Tag, BookOpen, Zap, TrendingUp } from 'lucide-react'
import { getBlogPosts } from '@/data/blog'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'

export const metadata = {
  title: 'Blog - Deep Patel Portfolio',
  description: 'Read my latest thoughts on cloud development, serverless architecture, and AWS best practices.',
}

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <PageTransition>
      <Header />
      <main className="pt-20">
        <section className="section-padding morphing-bg relative overflow-hidden">
          {/* Enhanced background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container-max text-center relative z-10">
            <div className="flex justify-center mb-8">
              <div className="glass-strong p-6 rounded-full">
                <BookOpen className="w-10 h-10 text-cyan-400" />
              </div>
            </div>
            <h1 className="text-6xl font-black mb-8">
              My <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
              Insights, tutorials, and thoughts on{' '}
              <span className="text-cyan-400 font-bold">cloud development</span>,{' '}
              <span className="text-purple-400 font-bold">serverless architecture</span>,
              and AWS best practices.
            </p>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-gray-900 to-black">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-10">
              {posts.map((post, index) => (
                <article
                  key={post.slug}
                  className={`${
                    index === 0 ? 'lg:col-span-2' : ''
                  } glass-strong p-10 card-hover group relative overflow-hidden`}
                >
                  <div className="flex items-center text-sm text-white/60 mb-6 space-x-4">
                    <Calendar size={16} className="text-cyan-400" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className={`font-black text-white mb-6 group-hover:text-cyan-300 transition-colors duration-500 ${
                    index === 0 ? 'text-4xl' : 'text-3xl'
                  }`}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:underline"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className={`text-white/80 mb-8 leading-relaxed group-hover:text-white/95 transition-colors duration-500 ${
                    index === 0 ? 'text-lg' : ''
                  }`}>
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center px-4 py-2 bg-cyan-500/10 text-cyan-300 text-sm rounded-full border border-cyan-500/20"
                      >
                        <Zap size={12} className="mr-2" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-bold text-lg group-hover:translate-x-3 transition-all duration-500"
                  >
                    Read Full Article
                    <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform duration-500" />
                  </Link>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"></div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  )
}