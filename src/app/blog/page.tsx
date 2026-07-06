import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getBlogPosts } from "@/data/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Reveal, LineReveal } from "@/components/Motion";

export const metadata = {
  title: "Writing",
  description:
    "Articles on cloud development, serverless architecture, and AWS best practices — written by Deep Patel to make complex things simple.",
  alternates: {
    canonical: "/blog/",
  },
  openGraph: {
    type: "website",
    url: "/blog/",
    title: "Writing — Deep Patel",
    description:
      "Articles on cloud development, serverless architecture, and AWS best practices.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

export default function BlogPage() {
  const posts = [...getBlogPosts()].sort(
    (a, b) => +new Date(b.date) - +new Date(a.date)
  );

  return (
    <PageTransition>
      <Header />
      <main className="pt-28">
        <section className="section-padding !pt-12">
          <div className="container-max">
            <Reveal>
              <p className="section-label mb-6">Writing</p>
            </Reveal>

            <h1 className="display-heading text-giant mb-8">
              <LineReveal>
                <span className="text-paper">Notes from</span>
              </LineReveal>
              <LineReveal delay={0.1}>
                <span className="text-outline">the cloud.</span>
              </LineReveal>
            </h1>

            <Reveal delay={0.2}>
              <p className="text-lg text-muted leading-relaxed max-w-2xl mb-20">
                Tutorials and thoughts on{" "}
                <span className="text-paper">cloud development, serverless
                architecture, and AWS best practices</span> — written to make
                complex things simple.
              </p>
            </Reveal>

            <div className="border-t border-white/15">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={Math.min(i * 0.05, 0.3)}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group grid md:grid-cols-12 gap-4 border-b border-white/15 py-10 px-4 -mx-4 transition-colors duration-500 hover:bg-ink-soft"
                  >
                    <div className="md:col-span-2 font-mono text-xs text-muted space-y-2">
                      <p>
                        {new Date(post.date).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                      <p>{post.readTime}</p>
                    </div>

                    <div className="md:col-span-9">
                      <h2 className="text-2xl md:text-3xl font-bold text-paper group-hover:text-acid transition-colors duration-500 mb-4">
                        {post.title}
                      </h2>
                      <p className="text-muted leading-relaxed max-w-3xl mb-5">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, t) => (
                          <span
                            key={t}
                            className="font-mono text-xs uppercase tracking-wider px-3 py-1 border border-white/20 text-paper/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <ArrowUpRight
                      size={22}
                      className="hidden md:block md:col-span-1 justify-self-end text-muted group-hover:text-acid group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
}
