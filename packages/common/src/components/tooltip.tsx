"use client";

import classNames from "classnames";
import React, { ReactNode, useState, type HTMLAttributes } from "react";

type TooltipProps = HTMLAttributes<HTMLDivElement> & {
  message: string;
  children: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
};

export default function Tooltip({
  message,
  children,
  position = "top",
  className,
  ...restProps
}: TooltipProps) {
  const [show, setShow] = useState(false);
  return (
    <div
      className={classNames("relative group", { "z-10": show }, className)}
      {...restProps}
    >
      <span
        className="block"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </span>
      <div
        className={classNames("absolute whitespace-nowrap group-hover:flex", {
          hidden: !show,
          "left-[50%] translate-x-[-50%]":
            position === "top" || position === "bottom",
          "top-[50%] translate-y-[-50%]":
            position === "right" || position === "left",
          "bottom-full mb-2": position === "top",
          "top-full mt-2": position === "bottom",
          "left-full ml-2": position === "right",
          "right-full mr-2": position === "left",
        })}
      >
        <span className="relative p-2 text-xs leading-none text-baby-pink whitespace-no-wrap bg-dark-cobalt rounded dark:bg-baby-pink dark:text-dark-cobalt">
          {message}
        </span>
        <div
          className={classNames(
            "w-2 h-2 rotate-45 bg-dark-cobalt dark:bg-baby-pink absolute",
            {
              "left-[50%] translate-x-[-50%]":
                position === "top" || position === "bottom",
              "top-[50%] translate-y-[-50%]":
                position === "right" || position === "left",
              "top-full -mt-1": position === "top",
              "bottom-full -mb-1": position === "bottom",
              "right-full -mr-1": position === "right",
              "left-full -ml-1": position === "left",
            }
          )}
        />
      </div>
    </div>
  );
}
