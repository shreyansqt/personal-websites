import type { Image, ImageMetadata, Asset } from "sanity";
import type { SanityDocument } from "next-sanity";
import type { PortableTextProps } from "@portabletext/react";

export type TSanityImage = Image & {
  asset: {
    url: string;
    altText?: string;
    metadata: ImageMetadata;
  };
};

export type TPost = SanityDocument<{
  title: string;
  slug: { current: string };
  description?: string;
  cover: TSanityImage;
  publishedAt: string;
  isPasswordProtected: boolean;
  body?: PortableTextProps["value"];
}>;

export type TLink = SanityDocument<{
  title: string;
  href?: string;
  isExternal?: boolean;
  downloadFile?: {
    asset: Asset
  };
}>;
