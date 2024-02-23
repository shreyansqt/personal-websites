import { Posts } from "@repo/common/components/Posts";
import { Hero } from "@repo/common/components/Hero";
import { getPosts } from "@repo/common/utils/getPosts";
import { passwordProtectedPosts } from "../password-protected-posts";

export default async function Page() {
  const posts = await getPosts(passwordProtectedPosts);
  return (
    <>
      <Hero
        title="Hi, I am Shreyans"
        subtitle="Frontend developer"
        description="Passionate and results-driven with a diverse background across various company sizes and industries, including agency, fintech, and AI/data sectors. Thriving in remote environments, I've successfully navigated the challenges of freelancing while delivering top-notch solutions."
      />
      <Posts posts={posts} />
    </>
  );
}
