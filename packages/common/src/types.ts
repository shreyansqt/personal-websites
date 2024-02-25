import type { SanityDocument } from 'next-sanity';
import { type ReactNode } from "react";

export interface PostMetadata {
  title: string;
  slug: string;
  lastModified: string;
  cover: string;
  description?: string;
}

export type Post = SanityDocument<{
  title: string;
  slug: { current: string };
  description?: string;
  mainImage: string;
  publishedAt: string;
  // isPasswordProtected: boolean;
  body: ReactNode;
}>
