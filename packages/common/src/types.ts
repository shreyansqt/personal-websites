import type { Image, ImageMetadata } from "sanity";
import type { SanityDocument } from "next-sanity";
import type { PortableTextProps } from "@portabletext/react";

export type TSanityImage = Image & {
  asset: Image["asset"] & {
    metadata: ImageMetadata;
    url: string;
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
