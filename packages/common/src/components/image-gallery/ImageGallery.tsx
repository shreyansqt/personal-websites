import { GalleryImageProps } from "./types";
import { ClientImageProps } from "../image/ClientImage";
import { getPlaceholder } from "../../utils/getPlaceholder";
import { ClientImageGallery } from "./ClientImageGallery";

interface Props {
  images: GalleryImageProps[];
  caption?: string;
  widened?: boolean;
  hasBackground?: boolean;
  hasShadow?: boolean;
  disableZoom?: boolean;
}

export const ImageGallery = async ({ images, ...restProps }: Props) => {
  const populated: Array<
    GalleryImageProps & ClientImageProps & { index: number }
  > = await Promise.all(
    images.map(async (image, index) => {
      const {
        base64,
        metadata: { height, width },
      } = await getPlaceholder(image.src);
      return { ...image, index, height, width, base64 };
    })
  );

  return <ClientImageGallery images={populated} {...restProps} />;
};
