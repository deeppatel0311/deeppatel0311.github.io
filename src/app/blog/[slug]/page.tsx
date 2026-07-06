import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getBlogPost, getRelatedPosts, getBlogPosts } from "@/data/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import RenderPage from "../RenderPage";
import { SITE } from "@/config/site";

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
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: `/blog/${post.slug}/`,
    },
    openGraph: {
      type: "article",
      url: `${SITE.url}/blog/${post.slug}/`,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [SITE.name],
      tags: post.tags,
      images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/og.png"],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(params.slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    keywords: post.tags.join(", "),
    url: `${SITE.url}/blog/${post.slug}/`,
    author: {
      "@type": "Person",
      name: SITE.name,
      url: SITE.url,
    },
    publisher: {
      "@type": "Person",
      name: SITE.name,
      url: SITE.url,
    },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}/`,
  };

  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Header />
      <main className="pt-28">
        <article>
          <header className="px-5 sm:px-8 lg:px-12 pt-12 pb-16 border-b border-white/15">
            <div className="container-max">
              <Link
                href="/blog"
                className="link-sweep inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted hover:text-paper mb-12"
              >
                <ArrowLeft size={14} />
                All posts
              </Link>

              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-widest text-muted mb-8">
                  <span className="text-acid">{post.author.name}</span>
                  <span>
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span>{post.readTime}</span>
                </div>

                <h1 className="display-heading text-big text-paper mb-8">
                  {post.title}
                </h1>

                <p className="text-lg md:text-xl text-muted leading-relaxed mb-10">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="font-mono text-xs uppercase tracking-wider px-3 py-1.5 border border-white/20 text-paper/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </header>

          <section className="section-padding !py-16">
            <div className="container-max">
              <div className="max-w-3xl">
                <RenderPage post={post} />
              </div>
            </div>
          </section>
        </article>

        {relatedPosts.length > 0 && (
          <section className="section-padding !pt-8">
            <div className="container-max">
              <p className="section-label mb-10">Related posts</p>

              <div className="border-t border-white/15">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group grid md:grid-cols-12 gap-4 items-baseline border-b border-white/15 py-8 px-4 -mx-4 transition-colors duration-500 hover:bg-ink-soft"
                  >
                    <span className="font-mono text-xs text-muted md:col-span-2">
                      {new Date(relatedPost.date).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-paper group-hover:text-acid transition-colors duration-500 md:col-span-9">
                      {relatedPost.title}
                    </h3>
                    <ArrowUpRight
                      size={20}
                      className="hidden md:block md:col-span-1 justify-self-end text-muted group-hover:text-acid group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    />
                  </Link>
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
