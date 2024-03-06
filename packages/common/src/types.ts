import type { SanityDocument } from "next-sanity";
import type { Asset, Image, ImageMetadata, PortableTextBlock } from "sanity";

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
  timeline?: string;
  team?: string;
  company?: { name?: string; logo?: TSanityImage };
  publishedAt: string;
  isPasswordProtected: boolean;
  body?: PortableTextBlock[];
}>;

export type TLink = SanityDocument<{
  _type: "link";
  title: string;
  href: string;
}>;

export type TFile = SanityDocument<{
  _type: "downloadFile";
  title: string;
  file: {
    asset: Asset;
  };
}>;

export interface THero {
  _type: "hero";
  _key: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface TPostList {
  _type: "postList";
  _key: string;
  posts: TPost[];
}

export type TPage = SanityDocument<{
  _type: "page";
  path: string;
  title: string;
  components: (THero | TPostList)[];
}>;

export type TSanityLinkItem = TFile | TLink | TPage;

export interface TMetadata {
  title: string;
  description: string;
  favicon: TSanityImage;
}

export interface TImageMetadata {
  contentType: string;
  id: string;
  alt?: string;
  size: { width: number; height: number };
}
