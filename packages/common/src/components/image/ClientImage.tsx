import { FC } from 'react';
import NextImage from 'next/image';
import classnames from 'classnames';

export type ClientImageProps = {
  src: string;
  alt: string;
  base64: string;
  height: number;
  width: number;
  className?: string;
  priority?: boolean;
};

export const ClientImage: FC<ClientImageProps> = ({
  src,
  alt,
  base64,
  height,
  width,
  className,
  priority,
}) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      height={height}
      width={width}
      className={classnames(className, '!m-0')}
      priority={priority}
      placeholder="blur"
      blurDataURL={base64}
    />
  );
};
