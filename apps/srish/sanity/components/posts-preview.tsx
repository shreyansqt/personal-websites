"use client";

import type { QueryResponseInitial} from "@sanity/react-loader";
import { useQuery } from "@sanity/react-loader";
import type { ReactElement } from "react";
import type { TPost } from "@repo/common/types";
import {Posts} from '@repo/common/components/Posts'
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default function PostsPreview({
  initial,
}: {
  initial: QueryResponseInitial<TPost[]>;
}): ReactElement {
  const { data } = useQuery<TPost[] | null>(
    POSTS_QUERY,
    {},
    { initial }
  );

  return data ? (
    <Posts posts={data} />
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}
