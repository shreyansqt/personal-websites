'use client';

import { FC, useState } from 'react';
import { Lightbox } from './Lightbox';
import { GalleryImageProps } from './types';
import { ClientImage, ClientImageProps } from '../image/ClientImage';
import { chunk } from 'lodash-es';
import classNames from 'classnames';

type Props = {
  images: Array<GalleryImageProps & ClientImageProps & { index: number }>;
  caption?: string;
  widened?: boolean;
  hasBackground?: boolean;
  hasShadow?: boolean;
  disableZoom?: boolean;
};

export const ClientImageGallery: FC<Props> = ({
  images,
  caption,
  hasBackground,
  hasShadow,
  widened,
  disableZoom,
}) => {
  const [currentIndex, setCurrentIndex] = useState(-1);

  const chunked = chunk(images, 3);
  // if last element has only one element, make it even by transferring one from second last
  if (chunked.length > 1 && chunked[chunked.length - 1].length === 1) {
    chunked[chunked.length - 1].unshift(chunked[chunked.length - 2][2]);
    chunked[chunked.length - 2].splice(2);
  }

  return (
    <>
      {currentIndex > -1 && (
        <Lightbox
          images={images}
          hasBackground={hasBackground}
          currentIndex={currentIndex}
          onIndexChange={setCurrentIndex}
        />
      )}

      <div className="my-14">
        {chunked.map((chunk, chunkIndex) => {
          const totalAspectRatio = chunk.reduce((acc, image) => {
            return acc + image.width / image.height;
          }, 0);
          return (
            <div
              key={`chunk-${chunkIndex}`}
              className={`flex ${widened ? '-mx-[240px]' : ''}`}
            >
              {chunk.map((image) => {
                const aspectRatio = image.width / image.height;
                const widthPercent = (aspectRatio / totalAspectRatio) * 100;

                return (
                  <div
                    key={image.src}
                    className={classNames('m-2 flex flex-col')}
                    style={{ width: `${widthPercent}%` }}
                  >
                    <button
                      onClick={() => setCurrentIndex(image.index)}
                      disabled={disableZoom}
                      className={classNames(
                        !disableZoom ? 'cursor-zoom-in' : 'cursor-default',
                        {
                          'shadow-md': hasShadow,
                        },
                      )}
                    >
                      <ClientImage
                        src={image.src}
                        alt={image.alt}
                        height={image.height}
                        width={image.width}
                        base64={image.base64}
                        className={classNames(
                          'w-full overflow-hidden rounded-lg',
                          {
                            'bg-baby-pink p-4': hasBackground,
                          },
                        )}
                      />
                    </button>

                    {image.caption && (
                      <p className="mt-2 text-center text-sm">
                        {image.caption}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}

        {caption && <p className="mt-2 text-center text-sm">{caption}</p>}
      </div>
    </>
  );
};
