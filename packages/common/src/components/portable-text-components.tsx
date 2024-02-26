import type { PortableTextComponents } from "@portabletext/react";
import { Blockquote } from "./blockquote";
import { ImageGallery } from "./image-gallery";
import type { ImageGalleryProps } from "./image-gallery/image-gallery";

export const portableTextComponents: PortableTextComponents = {
  block: { blockquote: ({ children }) => <Blockquote>{children}</Blockquote> },
  types: {
    gallery: ({ value }: { value: ImageGalleryProps }) => {
      return (
        <ImageGallery
          caption={value.caption}
          disableZoom={value.disableZoom}
          hasBackground={value.hasBackground}
          hasShadow={value.hasShadow}
          images={value.images}
          widened={value.widened}
        />
      );
    },
  },
};
