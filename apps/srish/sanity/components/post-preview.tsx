"use client";

import type { QueryResponseInitial} from "@sanity/react-loader";
import { useQuery } from "@sanity/react-loader";
import type { QueryParams, SanityDocument } from "next-sanity";
import { Post } from "@repo/common/components/Post";
import type { TPost } from "@repo/common/types";
import { POST_QUERY } from "@/sanity/lib/queries";

export default function PostPreview({
  initial,
  params
}: {
  initial: QueryResponseInitial<TPost>;
  params: QueryParams
}) {
  const { data } = useQuery<TPost | null>(
    POST_QUERY,
    params,
    { initial }
  );

  return data ? (
    <Post post={data} />
  ) : (
    <div className="bg-red-100">Post not found</div>
  );
}
