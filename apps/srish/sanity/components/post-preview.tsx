"use client";

import type { QueryResponseInitial } from "@sanity/react-loader";
import { useQuery } from "@sanity/react-loader";
import type { QueryParams } from "next-sanity";
import { Post } from "@repo/common/components/post";
import type { TPost } from "@repo/common/types";
import type { ReactElement } from "react";
import { POST_QUERY } from "@/sanity/lib/queries";

export function PostPreview({
  initial,
  params,
}: {
  initial: QueryResponseInitial<TPost>;
  params: QueryParams;
}): ReactElement {
  const { data } = useQuery<TPost | null>(POST_QUERY, params, { initial });

  return data ? (
    <Post post={data} />
  ) : (
    <div className="bg-red-100">Post not found</div>
  );
}
