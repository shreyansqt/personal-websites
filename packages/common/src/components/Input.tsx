import { FC, ReactNode } from "react";

interface Props {
  name: string;
  type: "text" | "password";
  placeholder?: string;
  icon?: ReactNode;
  autoFocus?: boolean;
}

export const Input: FC<Props> = ({
  type,
  name,
  placeholder,
  icon,
  autoFocus,
}) => {
  return (
    <div className="relative">
      {icon && (
        <span className="absolute left-6 top-[50%] -mt-3 h-6 w-6">{icon}</span>
      )}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={`rounded-full bg-white px-8 py-2 text-black dark:bg-dark-cobalt dark:text-baby-pink ${
          icon ? "pl-14" : ""
        }`}
        autoFocus={autoFocus}
      />
    </div>
  );
};
