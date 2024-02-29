import type { MetadataRoute } from "next";
import type {TPage, TPost} from '@repo/common/types';
import {loadQuery} from '@/sanity/lib/store';
import {PAGES_QUERY, POSTS_QUERY} from '@/sanity/lib/queries';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const {data: posts} = await loadQuery<TPost[]>(POSTS_QUERY);
  const {data: pages} = await loadQuery<TPage[]>(PAGES_QUERY);

  const postRoutes: MetadataRoute.Sitemap = posts.map(({ slug, publishedAt }) => {
    return {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/case-studies/${slug.current}`,
      lastModified: publishedAt ? new Date(publishedAt).toISOString().split("T")[0] : undefined,
      changeFrequency: "yearly",
      priority: 0.5,
    }
  });

  const pageRoutes: MetadataRoute.Sitemap = pages.map(({path}) => {
    return {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}${path}`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "monthly",
      priority: path === '/' ? 1 : 0.8,
    }
  })

  return [...pageRoutes, ...postRoutes];
}
