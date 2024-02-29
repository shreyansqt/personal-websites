import type { TPage , TMetadata } from "@repo/common/types";
import type { Metadata } from "next";
import { loadQuery } from "@/sanity/lib/store";
import { getPageQuery, METADATA_QUERY } from "@/sanity/lib/queries";

export const getPageMetadata = async (path: string): Promise<Metadata> => {
  const query = getPageQuery(path);
  const { data: page } = await loadQuery<TPage | null>(query);
  const { data: defaultMetadata } = await loadQuery<TMetadata>(METADATA_QUERY);
  if (!page) {
    return {};
  }

  return {
    title: `${page.title} | ${defaultMetadata.title}`,
  };
};
