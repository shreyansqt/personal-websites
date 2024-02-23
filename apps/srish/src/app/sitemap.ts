import { getPosts } from "@repo/common/utils/getPosts";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  const postRoutes: MetadataRoute.Sitemap = posts.map(({ metadata }) => ({
    url: `https://srish.me/case-studies/${metadata.slug}`,
    lastModified: new Date(metadata.lastModified).toISOString().split("T")[0],
    changeFrequency: "yearly",
    priority: 0.5,
  }));

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
