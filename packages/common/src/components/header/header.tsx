"use client";

import { useWindowScroll } from "@uidotdev/usehooks";
import type { ReactElement } from "react";
import type { TLink } from "../../types";
import { ThemeToggle } from "../ThemeToggle";
import {HeaderLink} from './header-link'

export interface HeaderProps {
  links: TLink[];
}

export function Header({ links }: HeaderProps): ReactElement {
  const [scrollPosition] = useWindowScroll();
  const isAtTop = scrollPosition.y !== null && scrollPosition.y <= 0;
  return (
    <header className="pointer-events-none fixed left-0 top-0 z-10 w-full py-2 sm:py-3">
      <ThemeToggle />
      <nav className="flex justify-center">
        <ul
          className={`pointer-events-auto flex flex-row rounded-full border bg-white p-2 backdrop-blur-sm transition-colors duration-500 dark:bg-black md:p-2.5 ${
            isAtTop
              ? "border-transparent bg-opacity-0 dark:bg-opacity-0"
              : "border-white bg-opacity-50 dark:border-dark-cobalt dark:bg-opacity-20"
          }`}
        >
          {links.map((link, index) => {
            return (
              <li className={index > 0 ? "ml-4" : ""} key={link._id}>
                <HeaderLink link={link} />
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
