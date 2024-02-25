import { Hero } from "@repo/common/components/Hero";
import { Posts } from "@repo/common/components/Posts";
import { getPosts } from "@repo/common/utils/getPosts";
import type { ReactElement } from "react";
import { passwordProtectedPosts } from "../password-protected-posts";

export default async function Page(): Promise<ReactElement> {
  const posts = await getPosts(passwordProtectedPosts);
  return (
    <>
      <Hero
        description="I am a dedicated product designer with a focus on User Research. I am driven by empathy, self-reliance, and a relentless commitment to solving complex problems in a user-centric manner."
        subtitle="A UX Designer"
        title="Hello, I am Srish"
      />
      <Posts posts={posts} />
    </>
  );
}
