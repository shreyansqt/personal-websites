import { PostLayout } from "@repo/common/components/PostLayout";
import type { FC } from "react";
import { getPost, getPosts } from "@repo/common/utils/getPosts";
import { passwordProtectedPosts } from "../../../../password-protected-posts";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = await getPosts(passwordProtectedPosts);

  return posts
    .filter(({ isPasswordProtected }) => isPasswordProtected)
    .map(({ metadata }) => ({
      slug: metadata.slug,
    }));
}

interface PageProps {
  params: { slug: string };
}

const Unlock: FC<PageProps> = async ({ params }) => {
  const post = await getPost(params.slug);
  return <PostLayout {...post.metadata} showPasswordForm />;
};

export default Unlock;
