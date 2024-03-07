import type { ReactElement } from "react";
import { PortableText } from "@portabletext/react";
import type { THero } from "../types";
import { cn } from "../utils/cn";
import { SanityImage } from "./sanity-image";

export function Hero({
  title,
  description,
  subtitle,
  image,
}: THero): ReactElement {
  return (
    <section className={cn(!image && "text-center")}>
      <article className="py-10 sm:py-14 lg:py-20 container">
        <div className={cn("justify-center row", image && "items-center")}>
          {image ? (
            <div className="mb-6 md:mb-0 col-10 md:col-4 lg:col-4">
              <SanityImage image={image} />
            </div>
          ) : null}
          <div
            className={cn(
              image
                ? "col-12 md:col-8 lg:col-6 px-8 md:px-4"
                : "col-10 sm:col-8"
            )}
          >
            <h1 className="block font-bold text-4xl text-dark-cobalt sm:text-[42px] md:text-[58px] lg:text-[78px] xl:text-[94px] dark:text-baby-pink leading-none">
              {title}
            </h1>
            {subtitle ? (
              <h2 className="mb-4 font-bold text-[40px] text-dark-cobalt sm:text-[47px] md:text-[64px] lg:text-[86px] xl:text-[104px] dark:text-baby-pink leading-none">
                {subtitle}
              </h2>
            ) : null}
            {description ? (
              <div
                className={cn(
                  "row mt-4",
                  image ? "justify-left" : "justify-center"
                )}
              >
                <div
                  className={cn(
                    "text-gray dark:text-light-gray",
                    image ? "col-12" : "col-12 sm:col-10 lg:col-8"
                  )}
                >
                  <PortableText value={description} />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </article>
    </section>
  );
}
