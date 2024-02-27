import { groq } from "next-sanity";

export const HEADER_QUERY = groq`*[_type == "header" && _id == 'header'][0] {
  ...,
  links[]->{
    ...,
    downloadFile {
      asset -> {
        url
      }
    }
  }
}`;

export const FOOTER_QUERY = groq`*[_type == "footer" && _id == 'footer'][0] {
  ...,
  links[]->{
    ...,
    downloadFile {
      asset -> {
        url
      }
    }
  }
}`;

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
