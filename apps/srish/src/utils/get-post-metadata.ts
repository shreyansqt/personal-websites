import type { TPost } from "@repo/common/types";
import type { Metadata, ResolvingMetadata } from "next";
import { loadQuery } from "@/sanity/lib/store";
import { POST_QUERY } from "@/sanity/lib/queries";

export async function getPostMetadata(
  slug: string,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { data: post } = await loadQuery<TPost>(POST_QUERY, { slug });
  const parentMetadata = await parent;

  return {
    title: `${post.title} | Case Study | ${parentMetadata.title?.absolute}`,
    description: post.description,
    openGraph: {
      type: "article",
      images: [
        {
          url: post.cover.asset.url,
          width: post.cover.asset.metadata.dimensions.width,
          height: post.cover.asset.metadata.dimensions.height,
        },
      ],
    },
  };
}
