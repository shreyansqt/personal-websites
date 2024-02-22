import NextImage from "next/image";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { Blockquote } from "./blockquote";
import { ImageGallery } from "./image-gallery";

export const mdxComponents: MDXComponents = {
  a: ({ children, ...props }) => {
    return (
      <Link {...props} href={props.href || ""} ref={undefined} target="_blank">
        {children}
      </Link>
    );
  },
  img: ({ src, alt }) => {
    if (!src || !alt) return;
    return (
      <NextImage
        className="w-full overflow-hidden rounded-lg"
        src={src}
        alt={alt}
        height={500}
        width={500}
      />
    );
  },
  blockquote: ({ children, ...props }) => {
    return <Blockquote {...props}>{children}</Blockquote>;
  },
  ImageGallery: (props) => {
    return <ImageGallery {...props} />;
  },
};
