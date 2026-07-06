import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getBlogPosts } from "@/data/blog";
import { Reveal, LineReveal } from "@/components/Motion";

export default function BlogPreview() {
  const posts = [...getBlogPosts()]
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .slice(0, 3);

  return (
    <section id="writing" className="section-padding relative">
      <div className="container-max">
        <Reveal>
          <p className="section-label mb-6">03 / Writing</p>
        </Reveal>

        <h2 className="display-heading text-giant mb-16">
          <LineReveal>
            <span className="text-paper">AWS, explained</span>
          </LineReveal>
          <LineReveal delay={0.1}>
            <span className="text-outline">simply.</span>
          </LineReveal>
        </h2>

        <div className="border-t border-white/15">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <Link
                href={`/blog/${post.slug}`}
                className="group grid md:grid-cols-12 gap-4 items-baseline border-b border-white/15 py-8 md:py-10 px-4 -mx-4 transition-colors duration-500 hover:bg-ink-soft"
              >
                <span className="font-mono text-xs text-muted md:col-span-2">
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-paper group-hover:text-acid transition-colors duration-500 md:col-span-8">
                  {post.title}
                </h3>
                <span className="font-mono text-xs text-muted md:col-span-1">
                  {post.readTime}
                </span>
                <ArrowUpRight
                  size={20}
                  className="hidden md:block md:col-span-1 justify-self-end text-muted group-hover:text-acid group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <Link
            href="/blog"
            className="link-sweep font-mono text-sm uppercase tracking-widest text-paper/70 hover:text-paper inline-flex items-center gap-2"
          >
            All posts <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
