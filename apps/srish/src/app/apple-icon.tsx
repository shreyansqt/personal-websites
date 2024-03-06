import type { TImageMetadata, TMetadata } from "@repo/common/types";
import { ImageResponse } from "next/og";
import { METADATA_QUERY } from "@/sanity/lib/queries";
import { loadQuery } from "@/sanity/lib/store";

// Route segment config
export const runtime = "edge";

const sizes = {
  apple: 180,
};

export function generateImageMetadata(): TImageMetadata[] {
  return Object.entries(sizes).map(([id, size]) => {
    return {
      contentType: "image/png",
      size: { width: size, height: size },
      id,
    };
  });
}

export default async function Icon({
  id,
}: {
  id: keyof typeof sizes;
}): Promise<ImageResponse> {
  const { data } = await loadQuery<TMetadata>(METADATA_QUERY);
  const size = { width: sizes[id], height: sizes[id] };
  // eslint-disable-next-line -- nextjs rules don't apply to favicons
  return new ImageResponse(<img src={data.favicon.asset.url} />, {
    ...size,
  });
}
