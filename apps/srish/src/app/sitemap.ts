import type { MetadataRoute } from "next";
import type {TPost} from '@repo/common/types';
import {loadQuery} from '@/sanity/lib/store';
import {POSTS_QUERY} from '@/sanity/lib/queries';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const {data: posts} = await loadQuery<TPost[]>(POSTS_QUERY);

  const postRoutes: MetadataRoute.Sitemap = posts.map(({ slug, publishedAt }) => {
    return {
      url: `https://srish.me/case-studies/${slug.current}`,
      lastModified: publishedAt ? new Date(publishedAt).toISOString().split("T")[0] : undefined,
      changeFrequency: "yearly",
      priority: 0.5,
    }
  });

  const routes: MetadataRoute.Sitemap = [
    {
      url: "https://srish.me",
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://srish.me/about",
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  return [...routes, ...postRoutes];
}
