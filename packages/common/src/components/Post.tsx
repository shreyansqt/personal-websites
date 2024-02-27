import type { ReactElement } from "react";
import { PortableText } from "@portabletext/react";
import type { TPost } from "../types";
import { PostPasswordForm } from "./PostPasswordForm";
import { SanityImage } from "./sanity-image";
import { portableTextComponents } from "./portable-text-components";

interface Props {
  post: TPost;
  showPasswordForm?: boolean;
}

export function Post({ post, showPasswordForm }: Props): ReactElement {
  return (
    <section className="container px-8 py-20">
      <div className="row justify-center">
        <article className="col-12 prose prose-xl dark:prose-invert">
          <div className="relative mb-14 overflow-hidden rounded-lg">
            <SanityImage
              className="m-0 w-full"
              image={post.cover}
              priority
            />
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

          {!showPasswordForm && post.body ? (
            <>
              <hr />
              <PortableText
                components={portableTextComponents}
                value={post.body}
              />
            </>
          ) : null}
        </article>
      </div>
    </section>
  );
}
