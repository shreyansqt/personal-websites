import { FC } from "react";
import { PostPreview } from "./PostPreview";
import { Post } from "../types";

interface Props {
  posts: Post[];
}

export const Posts: FC<Props> = ({ posts }) => {
  return (
    <div className="px-4 pb-12 sm:px-0 sm:pb-16 lg:pb-20">
      <div className="container">
        <div className="row">
          {posts.map((post, index) => {
            const rowIndex = Math.floor(index / 2);
            const isRowIndexEven = rowIndex % 2 === 0;
            const isIndexEven = index % 2 === 0;
            return (
              <div
                className={`col-12 mt-8 md:col-6 ${
                  (isRowIndexEven && isIndexEven) ||
                  (!isRowIndexEven && !isIndexEven)
                    ? "lg:col-5"
                    : "lg:col-7"
                }`}
                key={post.metadata.slug}
              >
                <PostPreview {...post} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};