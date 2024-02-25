import { Hero } from "@repo/common/components/Hero";
import type { TPost } from "@repo/common/types";
import type { ReactElement } from "react";
import { draftMode } from "next/headers";
import {Posts} from '@repo/common/components/Posts'
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import PostsPreview from "@/sanity/components/posts-preview";

export default async function Page(): Promise<ReactElement> {
  const initial = await loadQuery<TPost[]>(POSTS_QUERY);
  return (
    <>
      <Hero
        description="I am a dedicated product designer with a focus on User Research. I am driven by empathy, self-reliance, and a relentless commitment to solving complex problems in a user-centric manner."
        subtitle="A UX Designer"
        title="Hello, I am Srish"
      />
      {draftMode().isEnabled ? <PostsPreview initial={initial} /> : <Posts posts={initial.data} />}
    </>
  );
}
