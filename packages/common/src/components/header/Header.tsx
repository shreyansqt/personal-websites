'use client';

import { useWindowScroll } from '@uidotdev/usehooks';
import { FC } from 'react';
import { ThemeToggle } from '../ThemeToggle';
import { NavItem } from './types';
import { NavLink } from './NavLink';

type Props = {
  items: NavItem[];
};

export const Header: FC<Props> = ({ items }) => {
  const [scrollPosition] = useWindowScroll();
  const isAtTop = scrollPosition.y !== null && scrollPosition.y <= 0;
  return (
    <header className="pointer-events-none fixed left-0 top-0 z-10 w-full py-2 sm:py-3">
      <ThemeToggle />
      <nav className="flex justify-center">
        <ul
          className={`pointer-events-auto flex flex-row rounded-full border bg-white p-2 backdrop-blur-sm transition-colors duration-500 dark:bg-black md:p-2.5 ${isAtTop ? 'border-transparent bg-opacity-0 dark:bg-opacity-0' : 'border-white bg-opacity-50 dark:border-dark-cobalt dark:bg-opacity-20'}`}
        >
          {items.map(({ key, ...item }, index) => {
            return (
              <li key={key} className={index > 0 ? 'ml-4' : ''}>
                <NavLink key={key} {...item} />
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
