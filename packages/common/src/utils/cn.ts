import { twMerge } from "tailwind-merge";
import classNames from "classnames";

// https://akhilaariyachandra.com/blog/using-clsx-or-classnames-with-tailwind-merge

export function cn(...args: classNames.ArgumentArray): string {
  return twMerge(classNames(args));
}
