import { PostLayout } from "@repo/common/components/PostLayout";
import { getPost, getPosts } from "@repo/common/utils/getPosts";
import { FC } from "react";

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map(({ metadata }) => ({
    slug: metadata.slug,
  }));
}

type Props = {
  params: {
    slug: string;
  };
};

const CaseStudyPage: FC<Props> = async ({ params }) => {
  const post = await getPost(params.slug);
  if (!post) return;
  return <PostLayout {...post.metadata}>{post.body}</PostLayout>;
};

export default CaseStudyPage;
