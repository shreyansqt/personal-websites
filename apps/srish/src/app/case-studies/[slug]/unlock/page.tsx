import { PostLayout } from "@repo/common/components/PostLayout";
import { FC } from "react";
import { getPost, getPosts } from "@repo/common/utils/getPosts";

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts
    .filter(({ isPasswordProtected }) => isPasswordProtected)
    .map(({ metadata }) => ({
      slug: metadata.slug,
    }));
}

type Props = {
  params: { slug: string };
};

const Unlock: FC<Props> = async ({ params }) => {
  const post = await getPost(params.slug);
  if (!post) return;
  return <PostLayout {...post.metadata} showPasswordForm />;
};

export default Unlock;
