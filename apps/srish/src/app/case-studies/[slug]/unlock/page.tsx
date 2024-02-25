import { Post } from "@repo/common/components/Post";
import type { ReactElement } from "react";
import type {TPost} from '@repo/common/types';
import {POSTS_QUERY, POST_QUERY} from '@/sanity/lib/queries';
import {client} from '@/sanity/lib/client';
import {loadQuery} from '@/sanity/lib/store';

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = await client.fetch<TPost[]>(POSTS_QUERY)

  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

interface PageProps {
  params: { slug: string };
}

export default async function Unlock({ params }: PageProps): Promise<ReactElement> {
  const {data: post} = await loadQuery<TPost>(POST_QUERY, params);

  return <Post post={post} showPasswordForm />
};
