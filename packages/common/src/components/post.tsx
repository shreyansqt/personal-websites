import type { ReactElement } from "react";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "sanity";
import type { TPost } from "../types";
import { PostPasswordForm } from "./post-password-form";
import { SanityImage } from "./sanity-image";
import { portableTextComponents } from "./portable-text-components";
import { Tile } from "./tile";
import { ImageGallery } from "./image-gallery";
import type { ImageGalleryProps } from "./image-gallery/image-gallery";

interface Props {
  post: TPost;
  showPasswordForm?: boolean;
}

export function Post({ post, showPasswordForm }: Props): ReactElement {
  const bodyArr: PortableTextBlock[][] = [[]];
  let currentIndex = 0;
  if (Array.isArray(post.body)) {
    post.body.forEach((block) => {
      if (block._type === "gallery") {
        currentIndex += 1;
        if (!block._key) return;
        bodyArr[currentIndex] = [block];
        currentIndex += 1;
      } else {
        bodyArr[currentIndex] = [...(bodyArr[currentIndex] || []), block];
      }
    });
  }

  return (
    <article className="px-6 py-20 container">
      <div className="justify-center row">
        <div className="lg:col-9 xl:col-7">
          <div className="relative rounded-lg overflow-hidden">
            <SanityImage className="m-0 w-full" image={post.cover} priority />
            {showPasswordForm ? (
              <PostPasswordForm
                redirectTo={`/case-studies/${post.slug.current}`}
              />
            ) : null}
          </div>

          <h1 className="mt-14 font-bold text-4xl text-dark-cobalt md:text-5xl xl:text-6xl dark:text-baby-pink">
            {post.title}
          </h1>

          {post.description ? <p className="mt-4">{post.description}</p> : null}

          {!showPasswordForm && (post.timeline || post.company || post.team) ? (
            <Tile className="mt-8 md:mt-10 py-4 md:py-4">
              <div className="flex md:flex-row flex-col justify-between gap-6 text-center">
                {post.timeline ? (
                  <div>
                    <h5 className="mb-1 text-cobalt uppercase">Timeline</h5>
                    <p>{post.timeline}</p>
                  </div>
                ) : null}
                {post.company ? (
                  <div>
                    <h5 className="mb-1 text-cobalt uppercase">Company</h5>
                    <div className="flex justify-center items-center">
                      {post.company.logo ? (
                        <SanityImage
                          className="mr-2 w-auto h-4"
                          image={post.company.logo}
                        />
                      ) : null}
                      <p>{post.company.name}</p>
                    </div>
                  </div>
                ) : null}

                {post.team ? (
                  <div>
                    <h5 className="mb-1 text-cobalt uppercase">Team</h5>
                    <p>{post.team}</p>
                  </div>
                ) : null}
              </div>
            </Tile>
          ) : null}
        </div>
      </div>
      <div className="justify-center row">
        {!showPasswordForm && post.body && Array.isArray(post.body)
          ? bodyArr.map((body) => {
              if (body[0]?._type === "gallery") {
                const props = body[0] as unknown as ImageGalleryProps;
                return (
                  <ImageGallery
                    className="mt-8 sm:mt-10 xl:mt-14"
                    key={body[0]._key}
                    {...props}
                  />
                );
              }
              return (
                <div
                  className="lg:col-9 xl:col-7 prose sm:prose-lg xl:prose-xl mt-8 sm:mt-10 xl:mt-14 max-w-none dark:prose-invert"
                  key={body[0]._key}
                >
                  <PortableText
                    components={portableTextComponents}
                    value={body}
                  />
                </div>
              );
            })
          : null}
      </div>
    </article>
  );
}
