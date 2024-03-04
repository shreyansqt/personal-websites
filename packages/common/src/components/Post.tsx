import type { ReactElement } from "react";
import { PortableText } from "@portabletext/react";
import type { TPost } from "../types";
import { PostPasswordForm } from "./PostPasswordForm";
import { SanityImage } from "./sanity-image";
import { portableTextComponents } from "./portable-text-components";
import type { PortableTextBlock, PortableTextObject } from "sanity";

interface Props {
  post: TPost;
  showPasswordForm?: boolean;
}

export function Post({ post, showPasswordForm }: Props): ReactElement {
  const bodyArr: PortableTextBlock[][] = [[]];
  let currentIndex = 0;
  if (Array.isArray(post.body)) {
    let prevType = post.body[0]._type;
    post.body.forEach((block) => {
      if (block._type === "gallery") {
        currentIndex += 1;
        if (!block._key) return;
        bodyArr[currentIndex] = [block];
        currentIndex += 1;
      } else {
        bodyArr[currentIndex] = [...(bodyArr[currentIndex] || []), block];
      }
      prevType = block._type;
    });
  }

  return (
    <section className="container px-6 py-20">
      <article className="row justify-center">
        <div className="relative mb-14 overflow-hidden rounded-lg">
          <SanityImage className="m-0 w-full" image={post.cover} priority />
          {showPasswordForm ? (
            <div className="absolute inset-0 flex items-center justify-center bg-baby-pink bg-opacity-80 backdrop-blur-sm dark:bg-dark-cobalt dark:bg-opacity-80">
              <PostPasswordForm
                redirectTo={`/case-studies/${post.slug.current}`}
              />
            </div>
          ) : null}
        </div>

        <h1 className="mb-0 text-6xl text-dark-cobalt dark:text-baby-pink">
          {post.title}
        </h1>

        {post.description ? <p className="mt-4">{post.description}</p> : null}

        {!showPasswordForm && post.body && Array.isArray(post.body) ? (
          <>
            <hr />
            {bodyArr.map((body, index) => {
              if (!body) return;
              if (body && body[0]?._type === "gallery") {
                return (
                  <div className="mt-8 sm:mt-10 xl:mt-14">
                    <PortableText
                      key={body[0]._key}
                      components={portableTextComponents}
                      value={body}
                    />
                  </div>
                );
              } else {
                return (
                  <div
                    key={index}
                    className="prose sm:prose-lg xl:prose-xl dark:prose-invert mt-8 sm:mt-10 xl:mt-14"
                  >
                    <PortableText
                      components={portableTextComponents}
                      value={body}
                    />
                  </div>
                );
              }
            })}
          </>
        ) : null}
      </article>
    </section>
  );
}
