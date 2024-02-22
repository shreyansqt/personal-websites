import { Posts } from "@repo/common/components/Posts";
import { Hero } from "@repo/common/components/Hero";
import { getPosts } from "@repo/common/utils/getPosts";

export default async function Page() {
  const posts = await getPosts();
  return (
    <>
      <Hero
        title="Hello, I am Srish"
        subtitle="A UX Designer"
        description="I am a dedicated product designer with a focus on User Research. I am driven by empathy, self-reliance, and a relentless commitment to solving complex problems in a user-centric manner."
      />
      <Posts posts={posts} />
    </>
  );
}
