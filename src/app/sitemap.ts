import { MetadataRoute } from "next";
import { getBlogPosts } from "@/data/blog";
import { SITE } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getBlogPosts().map((post) => ({
    url: `${SITE.url}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: `${SITE.url}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE.url}/blog/`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts,
  ];
}
