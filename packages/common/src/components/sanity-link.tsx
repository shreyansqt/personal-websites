import type { ReactElement } from "react";
import type { TLink } from "../types";
import { Link } from "./link";

interface Props {
  link: TLink;
  className?: string;
}

export function SanityLink({ link, className }: Props): ReactElement | null {
  const href = link.downloadFile ? link.downloadFile.asset.url : link.href;
  if(!href) return null;
  return (
    <Link
      canDownload={Boolean(link.downloadFile)}
      className={className}
      href={href}
      isExternal={link.isExternal || Boolean(link.downloadFile)}
    >
      {link.title}
    </Link>
  );
}
