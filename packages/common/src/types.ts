import { ReactNode } from 'react';

export type PostMetadata = {
  title: string;
  slug: string;
  lastModified: string;
  cover: string;
  description?: string;
};

export type Post = {
  metadata: PostMetadata;
  body: ReactNode;
  isPasswordProtected: boolean;
};
