import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Tag,
  User,
  Zap,
  BookOpen,
} from "lucide-react";
import { getBlogPost, getRelatedPosts, getBlogPosts } from "@/data/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - Deep Patel Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(params.slug);

  return (
    <PageTransition>
      <Header />
      <main className="pt-20">
        <article>
          <header className="section-padding morphing-bg relative overflow-hidden">
            {/* Enhanced background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
              <div
                className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"
              ></div>
            </div>

            <div className="container-max relative z-10">
              <Link
                href="/blog"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-12 font-semibold text-lg transition-all duration-300 transform hover:translate-x-2"
              >
                <ArrowLeft size={20} className="mr-3" />
                Back to Blog
              </Link>

              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-6 text-lg text-white/70 mb-8">
                  <div className="flex items-center">
                    <User size={18} className="mr-3 text-cyan-400" />
                    <span>{post.author.name}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={18} className="mr-3 text-purple-400" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={18} className="mr-3 text-blue-400" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
                  {post.title}
                </h1>

                <p className="text-2xl text-white/90 mb-10 leading-relaxed font-light">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-6 py-3 bg-cyan-500/5 text-cyan-300 text-lg rounded-full border border-cyan-500/15"
                    >
                      <Zap size={16} className="mr-2" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </header>

          <section className="section-padding bg-gradient-to-b from-gray-900 to-black">
            <div className="container-max">
              <div className="max-w-4xl mx-auto">
                <div className="glass-strong p-10 prose prose-lg prose-invert max-w-none border border-white/5">
                  {post.content.split("\n").map((line, index) => {
                    if (line.startsWith("# ")) {
                      return (
                        <h1
                          key={index}
                          className="text-4xl font-black text-white mb-6 mt-8 leading-tight"
                        >
                          {line.slice(2)}
                        </h1>
                      );
                    }
                    if (line.startsWith("## ")) {
                      return (
                        <h2
                          key={index}
                          className="text-3xl font-bold text-cyan-300 mb-4 mt-8 leading-tight"
                        >
                          {line.slice(3)}
                        </h2>
                      );
                    }
                    if (line.startsWith("### ")) {
                      return (
                        <h3
                          key={index}
                          className="text-2xl font-bold text-purple-300 mb-3 mt-6 leading-tight"
                        >
                          {line.slice(4)}
                        </h3>
                      );
                    }
                    if (line.startsWith("- ")) {
                      return (
                        <li key={index} className="text-white/90 mb-2 text-lg leading-relaxed ml-4">
                          {line.slice(2)}
                        </li>
                      );
                    }
                    if (line.startsWith("```")) {
                      return null;
                    }
                    if (line.trim() === "") {
                      return <div key={index} className="h-4" />;
                    }
                    if (line.startsWith("**") && line.endsWith("**")) {
                      return (
                        <p
                          key={index}
                          className="text-cyan-300 font-bold mb-4 text-lg leading-relaxed"
                        >
                          {line.slice(2, -2)}
                        </p>
                      );
                    }
                    return (
                      <p
                        key={index}
                        className="text-white/90 mb-4 leading-relaxed text-lg"
                      >
                        {line}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </article>

        {relatedPosts.length > 0 && (
          <section className="section-padding bg-black">
            <div className="container-max">
              <div className="text-center mb-16">
                <div className="flex justify-center mb-6">
                  <div className="glass-strong p-4 rounded-full border border-white/5">
                    <BookOpen className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>
                <h2 className="text-4xl font-black text-white mb-4">
                  Related <span className="gradient-text">Posts</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <article
                    key={relatedPost.slug}
                    className="glass-strong p-8 card-hover group border border-white/5"
                  >
                    <div className="flex items-center text-sm text-white/60 mb-4">
                      <Calendar size={14} className="mr-2 text-cyan-400" />
                      <span>
                        {new Date(relatedPost.date).toLocaleDateString()}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                      <Link
                        href={`/blog/${relatedPost.slug}`}
                        className="hover:underline"
                      >
                        {relatedPost.title}
                      </Link>
                    </h3>

                    <p className="text-white/80 text-sm mb-6 leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                      {relatedPost.excerpt}
                    </p>

                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm group-hover:translate-x-2 transition-all duration-300"
                    >
                      Read More →
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </PageTransition>
  );
}
