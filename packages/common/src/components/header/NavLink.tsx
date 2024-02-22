"use client";
import { Link } from "../Link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { NavItem } from "./types";

export const NavLink: FC<NavItem> = ({
  href,
  isExternal,
  label,
  canDownload,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      className={`flex items-center rounded-full border border-transparent bg-white px-4 py-2 text-sm hover:border-white hover:bg-opacity-70 hover:no-underline dark:bg-dark-cobalt dark:hover:border-dark-cobalt dark:hover:bg-opacity-60 sm:px-8 sm:text-base ${isActive ? "border-white bg-opacity-60 dark:border-dark-cobalt dark:bg-opacity-50" : "bg-opacity-0 dark:bg-opacity-0"}`}
      href={href}
      isExternal={isExternal}
      canDownload={canDownload}
    >
      {label}
    </Link>
  );
};
