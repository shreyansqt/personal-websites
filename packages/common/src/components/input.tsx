import type { ReactNode, ReactElement } from "react";
import { cn } from "../utils/cn";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  type: "text" | "password";
  placeholder?: string;
  icon?: ReactNode;
}

export function Input({
  type,
  name,
  placeholder,
  icon,
  className,
  ...restProps
}: Props): ReactElement {
  return (
    <div className={cn("relative", className)} {...restProps}>
      {icon ? (
        <span className="top-[50%] left-4 absolute -mt-2 text-cobalt dark:text-baby-pink pointer-events-none size-4">
          {icon}
        </span>
      ) : null}
      <input
        className={cn(
          "rounded-full px-8 py-2 focus:outline-none focus:ring-2 w-full",
          "bg-baby-peach text-dark-cobalt placeholder:text-gray focus:ring-baby-pink",
          "dark:bg-dark-cobalt dark:text-baby-pink dark:placeholder:text-light-gray dark:focus:ring-cobalt",
          icon ? "pl-10" : ""
        )}
        name={name}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}
