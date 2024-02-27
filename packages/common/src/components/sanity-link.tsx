import type { ReactElement } from "react";
import type { TLink } from "../types";
import { Link } from "./link";

interface Props {
  link: TLink;
  className?: string;
}

export function SanityLink({ link, className }: Props): ReactElement | null {
  return (
    <Link
      canDownload={Boolean(link.downloadFile)}
      className={className}
      href={link.downloadFile ? link.downloadFile.asset.url : link.href}
      isExternal={link.isExternal}
    >
      {link.title}
    </Link>
  );
}
