import type { ReactElement } from "react";
import type { TSanityLinkItem } from "../types";
import { SanityLink } from "./sanity-link";
import { Link } from "./link";

export interface FooterProps {
  title: string;
  description?: string;
  email?: string;
  items: TSanityLinkItem[] | null;
}

export function Footer({
  title,
  description,
  email,
  items,
}: FooterProps): ReactElement {
  return (
    <footer className="px-4">
      <div className="container">
        <div className="justify-center row">
          <div className="col-12 md:col-10 lg:col-8">
            <div className="items-center py-8 md:py-14 border-t border-t-baby-peach dark:border-t-cobalt row">
              <div className="col-12 md:col-8 lg:col-6">
                <h4 className="font-bold text-2xl">{title}</h4>
                {description ? (
                  <p className="mt-2 text-gray text-sm md:text-base dark:text-light-gray">
                    {description}
                  </p>
                ) : null}
                {email ? (
                  <Link className="mt-4" href={`mailto:${email}`} isExternal>
                    {email}
                  </Link>
                ) : null}
              </div>
              {items ? (
                <div className="mt-8 col-12 md:col-4 lg:col-6 md:mt-0">
                  <ul className="flex md:flex-col justify-between md:items-end">
                    {items.map((item) => {
                      return (
                        <li className="my-2" key={item._id}>
                          <SanityLink item={item} />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
