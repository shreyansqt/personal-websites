import type { ReactElement } from "react";

interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
}

export function Hero({ title, description, subtitle }: Props): ReactElement {
  return (
    <section className="text-center">
      <article className="py-10 sm:py-14 lg:py-20 container">
        <div className="justify-center row">
          <div className="col-10 sm:col-8">
            {title ? (
              <h1 className="block font-bold text-4xl text-dark-cobalt sm:text-[42px] md:text-[58px] lg:text-[78px] xl:text-[94px] dark:text-baby-pink leading-none">
                {title}
              </h1>
            ) : null}
            {subtitle ? (
              <h2 className="mb-8 font-bold text-[40px] text-dark-cobalt sm:text-[47px] md:text-[64px] lg:text-[86px] xl:text-[104px] dark:text-baby-pink leading-none">
                {subtitle}
              </h2>
            ) : null}
          </div>
        </div>
        {description ? (
          <div className="justify-center row">
            <div className="col-10 sm:col-8 lg:col-6">
              <p className="text-gray dark:text-light-gray">{description}</p>
            </div>
          </div>
        ) : null}
      </article>
    </section>
  );
}
