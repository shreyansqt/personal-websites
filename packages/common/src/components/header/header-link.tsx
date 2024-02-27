"use client";
import { usePathname } from "next/navigation";
import type { ReactElement } from "react";
import type { TLink } from "../../types";
import { SanityLink } from "../sanity-link";

interface Props {
  link: TLink;
}

export function HeaderLink({ link }: Props): ReactElement {
  const pathname = usePathname();
  const isActive = pathname === link.href;
  return (
    <SanityLink
      className={`flex items-center rounded-full border border-transparent bg-white px-4 py-2 text-sm hover:border-white hover:bg-opacity-70 hover:no-underline dark:bg-dark-cobalt dark:hover:border-dark-cobalt dark:hover:bg-opacity-60 sm:px-8 sm:text-base ${
        isActive
          ? "border-white bg-opacity-60 dark:border-dark-cobalt dark:bg-opacity-50"
          : "bg-opacity-0 dark:bg-opacity-0"
      }`}
      link={link}
    />
  );
}
