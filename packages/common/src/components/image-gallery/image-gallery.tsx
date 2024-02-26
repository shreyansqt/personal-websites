"use client";
import type { ReactElement } from "react";
import { useState } from "react";
import { chunk } from "lodash-es";
import classNames from "classnames";
import type { TSanityImage } from "../../types";
import { SanityImage } from "../sanity-image";
import { Lightbox } from "./lightbox.tsx";

export interface ImageGalleryProps {
  images: TSanityImage[];
  caption?: string;
  widened?: boolean;
  hasBackground?: boolean;
  hasShadow?: boolean;
  disableZoom?: boolean;
}

export function ImageGallery({
  images,
  caption,
  hasBackground,
  hasShadow,
  widened,
  disableZoom,
}: ImageGalleryProps): ReactElement {
  const [currentIndex, setCurrentIndex] = useState(-1);

  const withIndex: (TSanityImage & { index: number })[] = images.map(
    (image, index) => {
      return { ...image, index };
    }
  );
  const chunked = chunk(withIndex, 3);
  // if last element has only one element, make it even by transferring one from second last
  if (chunked.length > 1 && chunked[chunked.length - 1].length === 1) {
    chunked[chunked.length - 1].unshift(chunked[chunked.length - 2][2]);
    chunked[chunked.length - 2].splice(2);
  }

  return (
    <>
      {currentIndex > -1 && (
        <Lightbox
          currentIndex={currentIndex}
          hasBackground={hasBackground}
          images={withIndex}
          onIndexChange={setCurrentIndex}
        />
      )}

      <div className="my-14">
        {chunked.map((imageChunk, chunkIndex) => {
          const totalAspectRatio = imageChunk.reduce((acc, image) => {
            return acc + image.asset.metadata.dimensions.aspectRatio;
          }, 0);
          return (
            <div
              className={`flex ${widened ? "-mx-[240px]" : ""}`}
              key={`chunk-${chunkIndex}`}
            >
              {imageChunk.map((image) => {
                const widthPercent =
                  (image.asset.metadata.dimensions.aspectRatio /
                    totalAspectRatio) *
                  100;

                return (
                  <div
                    className={classNames("m-2 flex flex-col")}
                    key={image.asset._key}
                    style={{ width: `${widthPercent}%` }}
                  >
                    <button
                      className={classNames(
                        !disableZoom ? "cursor-zoom-in" : "cursor-default",
                        {
                          "shadow-md": hasShadow,
                        }
                      )}
                      disabled={disableZoom}
                      onClick={() => {
                        setCurrentIndex(image.index);
                      }}
                      type="button"
                    >
                      <SanityImage
                        className={classNames(
                          "w-full overflow-hidden rounded-lg m-0",
                          {
                            "bg-baby-pink p-4": hasBackground,
                          }
                        )}
                        image={image}
                      />
                    </button>

                    {/* {image.caption ? (
                      <p className="mt-2 text-center text-sm">
                        {image.caption}
                      </p>
                    ) : null} */}
                  </div>
                );
              })}
            </div>
          );
        })}

        {caption ? <p className="mt-2 text-center text-sm">{caption}</p> : null}
      </div>
    </>
  );
}