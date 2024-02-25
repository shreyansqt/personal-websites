import type { SanityDocument } from 'next-sanity';
import type {PortableTextProps} from '@portabletext/react'

export type TPost = SanityDocument<{
  title: string;
  slug: { current: string };
  description?: string;
  mainImage: string;
  publishedAt: string;
  // isPasswordProtected: boolean;
  body?: PortableTextProps["value"];
}>
