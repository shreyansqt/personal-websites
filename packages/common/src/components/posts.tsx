import type { ReactElement } from "react";
import type { TPost } from "../types";
import { PostTile } from "./post-tile";

interface Props {
  posts: TPost[];
}

export function Posts({ posts }: Props): ReactElement {
  return (
    <div className="px-4 sm:px-0 pb-12 sm:pb-16 lg:pb-20">
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
                key={post._id}
              >
                <PostTile post={post} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
