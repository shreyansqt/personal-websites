import type {ImageProps as NextImageProps} from "next/image";
import NextImage from "next/image";
import type { ReactElement } from "react";
import type { TSanityImage } from "../types";

type Props = Omit<NextImageProps, "src" | "alt"> & {
  image: TSanityImage;
}

export function SanityImage({
  image,
  ...restProps
}: Props): ReactElement {
  return (
    <NextImage
      alt={image.asset.altText || ""}
      blurDataURL={image.asset.metadata.lqip}
      height={image.asset.metadata.dimensions.height}
      placeholder="blur"
      src={image.asset.url}
      width={image.asset.metadata.dimensions.width}
      {...restProps}
    />
  );
}
