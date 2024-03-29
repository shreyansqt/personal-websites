import type { TImageMetadata, TMetadata } from "@repo/common/types";
import { ImageResponse } from "next/og";
import { loadQuery } from "@/sanity/lib/store";
import { METADATA_QUERY } from "@/sanity/lib/queries";

// Route segment config
export const runtime = "edge";

const sizes = {
  browser: 16,
  taskbar: 32,
};

export function generateImageMetadata(): TImageMetadata[] {
  const imageMetadata = Object.entries(sizes).map(([id, size]) => {
    return {
      contentType: "image/png",
      size: { width: size, height: size },
      id,
    };
  });
  return imageMetadata;
}

export default async function Icon({
  id,
}: {
  id: keyof typeof sizes;
}): Promise<ImageResponse> {
  const { data } = await loadQuery<TMetadata>(METADATA_QUERY);
  const size = { width: sizes[id], height: sizes[id] };
  return new ImageResponse(
    (
      <div
        style={{
          borderRadius: size.width / 2,
          overflow: "hidden",
          height: "100%",
          width: "100%",
          display: "flex",
        }}
      >
        {/* eslint-disable-next-line -- nextjs rules don't apply to favicons */}
        <img src={data.favicon.asset.url} {...size} />
      </div>
    ),
    {
      ...size,
    }
  );
}
