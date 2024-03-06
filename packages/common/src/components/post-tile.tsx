import type { ReactElement } from "react";
import type { TPost } from "../types";
import { Link } from "./link";
import { Tile } from "./tile";

export function PostTile({
  post: { title, cover, description, slug, isPasswordProtected },
}: {
  post: TPost;
}): ReactElement {
  return (
    <Tile className="h-full" image={cover} title={title}>
      {description ? (
        <p className="text-gray text-sm md:text-base dark:text-light-gray">
          {description}
        </p>
      ) : null}

      <Link
        className="mt-3 md:mt-4 font-bold text-sm md:text-base"
        href={`/case-studies/${slug.current}`}
        scroll
      >
        {isPasswordProtected ? "Enter password" : "Continue Reading"}
      </Link>
    </Tile>
  );
}
