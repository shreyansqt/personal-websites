"use client";

import { useWindowScroll } from "@uidotdev/usehooks";
import type { ReactElement } from "react";
import type { TSanityLinkItem } from "../../types";
import { ThemeToggle } from "../theme-toggle";
import { HeaderLink } from "./header-link";

export interface HeaderProps {
  items: TSanityLinkItem[] | null;
}

export function Header({ items }: HeaderProps): ReactElement {
  const [scrollPosition] = useWindowScroll();
  const isAtTop = scrollPosition.y !== null && scrollPosition.y <= 0;
  return (
    <header className="pointer-events-none fixed left-0 top-0 z-10 w-full py-2 sm:py-3">
      <div className="container">
        <div className="row">
          <div className="col-1" />
          {items ? (
            <div className="col-10">
              <nav className="flex justify-center">
                <ul
                  className={`pointer-events-auto flex flex-row rounded-full border bg-white p-2 backdrop-blur-sm transition-colors duration-500 dark:bg-black md:p-2.5 ${
                    isAtTop
                      ? "border-transparent bg-opacity-0 dark:bg-opacity-0"
                      : "border-white bg-opacity-50 dark:border-dark-cobalt dark:bg-opacity-20"
                  }`}
                >
                  {items.map((item, index) => {
                    return (
                      <li className={index > 0 ? "ml-4" : ""} key={item._id}>
                        <HeaderLink item={item} />
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          ) : null}
          <div className="col-1 relative">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
