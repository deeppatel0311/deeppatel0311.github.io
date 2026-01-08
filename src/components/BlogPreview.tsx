import Link from 'next/link'
import { Calendar, ArrowRight, Clock, BookOpen, TrendingUp } from 'lucide-react'
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/Animations'

export default function BlogPreview() {
  const posts = [
    {
      title: 'Building Scalable React Applications',
      excerpt: 'Learn the best practices for structuring and scaling React applications for production environments.',
      date: '2024-01-15',
      slug: 'building-scalable-react-applications',
      readTime: '5 min read',
      category: 'React',
      trending: true,
    },
    {
      title: 'Modern CSS Techniques with Tailwind',
      excerpt: 'Explore advanced CSS techniques and how Tailwind CSS can streamline your development workflow.',
      date: '2024-01-10',
      slug: 'modern-css-techniques-tailwind',
      readTime: '7 min read',
      category: 'CSS',
      trending: false,
    },
    {
      title: 'Next.js 14: What\'s New and Exciting',
      excerpt: 'A comprehensive overview of the latest features and improvements in Next.js 14.',
      date: '2024-01-05',
      slug: 'nextjs-14-whats-new',
      readTime: '6 min read',
      category: 'Next.js',
      trending: true,
    },
  ]

  return (
    <section className="section-padding bg-gray-900 relative overflow-hidden">
      {/* Subtle pattern for Blog */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.08),transparent_50%)]"></div>
      </div>
      
      <div className="container-max relative z-10">
        <FadeInUp className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="glass-strong p-4 rounded-2xl">
              <BookOpen className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <h2 className="text-5xl font-bold mb-6">
            Latest <span className="gradient-text">Blog Posts</span>
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            I share my thoughts on cloud development, serverless architecture, and the latest
            technologies in backend development.
          </p>
        </FadeInUp>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-16">
          {posts.map((post, index) => (
            <StaggerItem
              key={index}
              className="glass-strong p-8 card-hover group relative overflow-hidden"
            >
              {/* Trending badge */}
              {post.trending && (
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-3 py-1 rounded-full">
                  <TrendingUp size={12} />
                  <span>Trending</span>
                </div>
              )}
              
              {/* Category badge */}
              <div className="inline-block bg-blue-500/10 text-blue-300 text-xs px-3 py-1 rounded-full mb-4 border border-blue-500/20">
                {post.category}
              </div>
              
              <div className="flex items-center text-sm text-white/60 mb-4 space-x-4">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-2" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={14} className="mr-2" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:underline"
                >
                  {post.title}
                </Link>
              </h3>
              
              <p className="text-white/70 mb-6 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                {post.excerpt}
              </p>
              
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold text-sm group-hover:translate-x-2 transition-all duration-300"
              >
                Read More
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="flex justify-center">
          <Link href="/blog" className="btn-primary group">
            <span className="flex items-center">
              View All Posts
              <BookOpen className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}