import type { ReactElement, ReactNode } from "react";
import classNames from "classnames";
import type { TSanityImage } from "../types";
import { SanityImage } from "./sanity-image";

interface Props {
  children?: ReactNode;
  className?: string;
  title?: string;
  image?: TSanityImage;
}

export function Tile({
  children,
  className,
  title,
  image,
}: Props): ReactElement {
  return (
    <div
      className={classNames(
        "rounded-[60px] relative flex flex-col justify-between backdrop-blur-sm border overflow-hidden px-8 md:px-10 py-9 md:py-12",
        "bg-white bg-opacity-50 border-white",
        "dark:bg-black dark:bg-opacity-10 dark:border-black dark:border-opacity-20",
        className
      )}
    >
      {title ? (
        <h3 className="mb-2 font-bold text-2xl md:text-3xl">{title}</h3>
      ) : null}
      {children}

      {image?.asset ? (
        <div className="mt-6 md:mt-8 -mb-9 md:-mb-12 w-[calc(100%+64px)] md:w-[calc(100%+80px)] h-[180px] md:h-[240px] lg:h-[320px]">
          <SanityImage
            className="object-left-top object-cover size-full"
            image={image}
          />
        </div>
      ) : null}
    </div>
  );
}
