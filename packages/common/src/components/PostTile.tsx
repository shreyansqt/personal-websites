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
        <p className="mb-4 text-gray dark:text-light-gray">{description}</p>
      ) : null}

      <Link href={`/case-studies/${slug.current}`} scroll>
        {isPasswordProtected ? "Enter password" : "Continue Reading"}
      </Link>
    </Tile>
  );
}
