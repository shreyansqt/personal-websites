import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)] {
  ...,
  cover {
    asset->{
      url,
      altText,
      metadata
    }
  }
} | order(publishedAt desc)`;

export const PROTECTED_POSTS_QUERY = groq`*[_type == "post" && defined(slug) && isPasswordProtected == true] {
  ...,
  cover {
    asset->{
      url,
      altText,
      metadata
    }
  }
} | order(publishedAt desc)`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0] {
  ...,
  cover {
    asset->{
      url,
      metadata
    }
  },
  body[] {
    ...,
    images[] {
      ...,
      asset->{
        url,
        altText,
        title,
        metadata
      }
    }
  }
}`;
