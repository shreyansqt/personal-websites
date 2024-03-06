import { Post } from "@repo/common/components/post";
import type { ReactElement } from "react";
import type { TPost } from "@repo/common/types";
import { POST_QUERY, PROTECTED_POSTS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { loadQuery } from "@/sanity/lib/store";
import { token } from "@/sanity/lib/token";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = await client
    .withConfig({ token })
    .fetch<TPost[]>(PROTECTED_POSTS_QUERY);

  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

interface PageProps {
  params: { slug: string };
}

export default async function Unlock({
  params,
}: PageProps): Promise<ReactElement> {
  const { data: post } = await loadQuery<TPost>(POST_QUERY, params);

  return <Post post={post} showPasswordForm />;
}
