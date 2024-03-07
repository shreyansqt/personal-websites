import { PortableText } from "@portabletext/react";
import type { TValues } from "../types";
import { SanityImage } from "./sanity-image";
import { Tile } from "./tile";

export function Values({ title, description, values }: TValues): JSX.Element {
  return (
    <section className="my-14 container">
      <div className="justify-center row">
        <div className="px-8 sm:px-4 col-12 lg:col-8">
          <h2 className="font-bold text-3xl md:text-6xl">{title}</h2>
          {description ? (
            <div className="mt-2 md:mt-4 max-w-none text-gray text-sm md:text-base prose">
              <PortableText value={description} />
            </div>
          ) : null}
        </div>
      </div>

      <ul className="justify-center mt-2 md:mt-8 row">
        {values.map((value) => {
          return (
            <li
              className="my-4 px-8 sm:px-4 text-center col-12 md:col-6 lg:col-5"
              key={value._key}
            >
              <Tile className="justify-start !p-0 h-full">
                <SanityImage className="w-full" image={value.icon} />
                <div className="px-6 md:px-10 pb-6 md:pb-12">
                  <h3 className="font-bold text-2xl md:text-3xl">
                    {value.title}
                  </h3>
                  {value.description ? (
                    <div className="mt-2 max-w-none text-sm md:text-base prose">
                      <PortableText value={value.description} />
                    </div>
                  ) : null}
                </div>
              </Tile>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
