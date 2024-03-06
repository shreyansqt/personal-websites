import type { ReactElement } from "react";
import { Hero } from "@repo/common/components/hero";
import { Posts } from "@repo/common/components/posts";
import type { THero, TPost, TPostList } from "@repo/common/types";
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY } from "@/sanity/lib/queries";

type Props = THero | TPostList;

export async function PageComponent(
  props: Props
): Promise<ReactElement | null> {
  switch (props._type) {
    case "hero": {
      return <Hero {...props} />;
    }
    case "postList": {
      const { data: posts } = await loadQuery<TPost[]>(POSTS_QUERY);
      return <Posts posts={posts} />;
    }
    default: {
      return null;
    }
  }
}
