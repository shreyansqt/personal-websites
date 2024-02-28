import type { ReactElement } from "react";
import type { TLink } from "../types";
import { SanityLink } from "./sanity-link";
import { Link } from "./link";

export interface FooterProps {
  title?: string;
  description?: string;
  email?: string;
  links: TLink[];
}

export function Footer({ title, description, email, links }: FooterProps): ReactElement {
  return (
    <footer className="px-4">
      <div className="container">
        <div className="row justify-center">
          <div className="col-12 md:col-10 lg:col-8">
            <div className="row items-center border-t border-t-baby-peach py-8 dark:border-t-cobalt md:py-14">
              <div className="col-12 md:col-8 lg:col-6">
                {title ? <h4 className="text-bold text-2xl">{title}</h4> : null}
                {description ? (
                  <p className="mt-2 text-gray dark:text-light-gray">
                    {description}
                  </p>
                ) : null}
                {email ? (
                  <Link className="mt-4" href={`mailto:${email}`} isExternal>
                    {email}
                  </Link>
                ) : null}
              </div>
              <div className="col-12 mt-8 md:col-4 lg:col-6 md:mt-0">
                <ul className="flex justify-between md:flex-col md:items-end">
                  {links.map((link) => {
                    return (
                      <li className="my-2" key={link._id}>
                        <SanityLink link={link} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
