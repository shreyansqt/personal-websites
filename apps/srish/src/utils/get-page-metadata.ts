import type { TPage } from "@repo/common/types";
import type { Metadata, ResolvingMetadata } from "next";
import { loadQuery } from "@/sanity/lib/store";
import { getPageQuery } from "@/sanity/lib/queries";

export async function getPageMetadata(
  path: string,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const query = getPageQuery(path);
  const { data: page } = await loadQuery<TPage | null>(query);
  const parentMetadata = await parent;

  if (!page) {
    return {};
  }

  return {
    title: `${page.title} | ${parentMetadata.title?.absolute}`,
    description: page.openGraph?.description,
    openGraph: {
      type: "website",
      ...(page.openGraph?.image?.asset.url
        ? {
            images: [
              {
                url: page.openGraph.image.asset.url,
                width: page.openGraph.image.asset.metadata.dimensions.width,
                height: page.openGraph.image.asset.metadata.dimensions.height,
              },
            ],
          }
        : {}),
    },
  };
}
