import { PostPasswordForm } from "./PostPasswordForm";
import { FC, ReactNode } from "react";
import { PostMetadata } from "../types";
import { Image } from "./image";

type Props = PostMetadata & {
  showPasswordForm?: boolean;
  children?: ReactNode;
};

export const PostLayout: FC<Props> = ({
  slug,
  title,
  description,
  cover,
  showPasswordForm,
  children,
}) => {
  return (
    <section className="container px-8 py-20">
      <div className="row justify-center">
        <article className="col-12 prose prose-xl dark:prose-invert">
          <div className="relative mb-14 overflow-hidden rounded-lg">
            <Image
              src={cover}
              alt="Cover image for the post"
              className="m-0 w-full"
              priority
            />
            {showPasswordForm && (
              <div className="absolute inset-0 flex items-center justify-center bg-baby-pink bg-opacity-80 backdrop-blur-sm dark:bg-dark-cobalt dark:bg-opacity-80">
                <PostPasswordForm redirectTo={`/case-studies/${slug}`} />
              </div>
            )}
          </div>

          <h1 className="mb-0 text-6xl text-dark-cobalt dark:text-baby-pink">
            {title}
          </h1>

          {description && <p className="mt-4">{description}</p>}

          {!showPasswordForm && (
            <>
              <hr />
              {children}
            </>
          )}
        </article>
      </div>
    </section>
  );
};
