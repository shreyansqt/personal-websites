import type { ReactElement } from "react";
import type { LinkProps } from "next/link";
import NextLink from "next/link";
import { ArrowDownCircleIcon } from "@heroicons/react/20/solid";

interface Props extends LinkProps {
  className?: string;
  children: ReactNode;
  isExternal?: boolean;
  canDownload?: boolean;
}

export function Link({
  className,
  children,
  isExternal,
  canDownload,
  ...props
}: Props): ReactElement {
  const classNames = `text-cobalt dark:text-baby-peach hover:underline hover:text-dark-cobalt dark:hover:text-peach flex items-center ${className}`;

  if (isExternal || canDownload) {
    return (
      <a
        className={classNames}
        download={canDownload}
        href={String(props.href)}
        rel="nofollow noreferrer"
        target="_blank"
      >
        {canDownload ? <ArrowDownCircleIcon className="mr-2 size-5" /> : null}
        {children}
      </a>
    );
  }
  return (
    <NextLink className={classNames} {...props}>
      {children}
    </NextLink>
  );
}
