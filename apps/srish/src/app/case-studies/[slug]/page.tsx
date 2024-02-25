import { Post } from "@repo/common/components/Post";
import type { TPost } from "@repo/common/types";
import type { ReactElement } from "react";
import { draftMode } from "next/headers";
import { POSTS_QUERY, POST_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { loadQuery } from "@/sanity/lib/store";
import PostPreview from "@/sanity/components/post-preview";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = await client.fetch<TPost[]>(POSTS_QUERY)

  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function CaseStudyPage({ params }: PageProps): Promise<ReactElement> {
  const initial = await loadQuery<TPost>(POST_QUERY, params, {
    // Because of Next.js, RSC and Dynamic Routes this currently
    // cannot be set on the loadQuery function at the "top level"
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });
  return draftMode().isEnabled ? (
    <PostPreview initial={initial} params={params} />
  ) : (
    <Post post={initial.data} />
  );
};
