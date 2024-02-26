import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)] {
  ...,
  cover {
    asset->{
      ...,
      metadata
    }
  }
}`;

export const PROTECTED_POSTS_QUERY = groq`*[_type == "post" && defined(slug) && isPasswordProtected == true] {
  ...,
  cover {
    asset->{
      ...,
      metadata
    }
  }
}`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0] {
  ...,
  cover {
    asset->{
      ...,
      metadata
    }
  }
}`;
