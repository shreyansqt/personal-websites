import type { ReactElement } from "react";
import type { TSanityLinkItem} from '../types';
import { getHref } from "../utils/get-href";
import { Link } from "./link";

interface Props {
  item: TSanityLinkItem;
  className?: string;
}

export function SanityLink({ item, className }: Props): ReactElement | null {
  const href = getHref(item);
  return (
    <Link
      canDownload={item._type === "downloadFile"}
      className={className}
      href={href}
      isExternal={item._type === "downloadFile" || item._type === "link"}
    >
      {item.title}
    </Link>
  );
}
