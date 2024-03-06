import type { ReactElement } from "react";

interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
}

export function Hero({ title, description, subtitle }: Props): ReactElement {
  return (
    <section className="text-center">
      <article className="container py-10 sm:py-14 lg:py-20">
        <div className="row justify-center">
          <div className="col-10 sm:col-8">
            {title ? (
              <h1 className="text-4xl font-bold text-dark-cobalt dark:text-baby-pink sm:text-[42px] md:text-[58px] lg:text-[78px] xl:text-[94px]">
                {title}
              </h1>
            ) : null}
            {subtitle ? (
              <h2 className="mb-4 text-[40px] font-bold text-dark-cobalt dark:text-baby-pink sm:text-[47px] md:text-[64px] lg:text-[86px] xl:text-[104px]">
                {subtitle}
              </h2>
            ) : null}
          </div>
        </div>
        {description ? (
          <div className="row justify-center">
            <div className="col-10 sm:col-8 lg:col-6">
              <p className="text-gray dark:text-light-gray">{description}</p>
            </div>
          </div>
        ) : null}
      </article>
    </section>
  );
}
