import { FC } from "react";
import { Link } from "./Link";
import { Tile } from "./tile";
import { Post } from "../types";

export const PostPreview: FC<Post> = ({ metadata, isPasswordProtected }) => {
  return (
    <Tile className={`h-full`} title={metadata.title} image={metadata.cover}>
      {metadata.description && (
        <p className="mb-4 text-gray dark:text-light-gray">
          {metadata.description}
        </p>
      )}

      <Link href={`/case-studies/${metadata.slug}`} scroll={true}>
        {isPasswordProtected ? "Enter password" : "Continue Reading"}
      </Link>
    </Tile>
  );
};
