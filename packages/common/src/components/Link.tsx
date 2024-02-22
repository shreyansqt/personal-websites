import { FC, ReactNode } from 'react';
import NextLink, { LinkProps } from 'next/link';
import { ArrowDownCircleIcon } from '@heroicons/react/20/solid';

type Props = LinkProps & {
  className?: string;
  children: ReactNode;
  isExternal?: boolean;
  canDownload?: boolean;
};

export const Link: FC<Props> = ({
  className,
  children,
  isExternal,
  canDownload,
  ...props
}) => {
  const classNames = `text-cobalt dark:text-baby-peach hover:underline hover:text-dark-cobalt dark:hover:text-peach flex items-center ${className}`;

  if (isExternal) {
    return (
      <a
        href={props.href.toString()}
        target="_blank"
        className={classNames}
        download={canDownload}
        rel="nofollow"
      >
        {canDownload && <ArrowDownCircleIcon className="mr-2 size-5" />}
        {children}
      </a>
    );
  }
  return (
    <NextLink className={classNames} {...props}>
      {children}
    </NextLink>
  );
};
