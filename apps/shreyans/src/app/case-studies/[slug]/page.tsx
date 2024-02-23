import { PostLayout } from "@repo/common/components/PostLayout";
import { getPost, getPosts } from "@repo/common/utils/getPosts";
import type { FC } from "react";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = await getPosts();

  return posts.map(({ metadata }) => ({
    slug: metadata.slug,
  }));
}

interface PageProps {
  params: {
    slug: string;
  };
}

const CaseStudyPage: FC<PageProps> = async ({ params }) => {
  const post = await getPost(params.slug);
  return <PostLayout {...post.metadata}>{post.body}</PostLayout>;
};

export default CaseStudyPage;
