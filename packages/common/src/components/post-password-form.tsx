"use client";
import type { ReactElement } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import type classNames from "classnames";
import { verifyPassword } from "../actions/verifyPassword";
import { cn } from "../utils/cn";
import { Input } from "./input";
import { Tile } from "./tile";

function UnlockButton(): ReactElement {
  const status = useFormStatus();
  return (
    <button
      className={cn(
        "px-4 py-2 font-bold font-title text-cobalt dark:text-baby-peach",
        { "text-light-gray dark:text-gray": status.pending }
      )}
      disabled={status.pending}
      type="submit"
    >
      Unlock
    </button>
  );
}

interface Props {
  redirectTo: string;
}

export function PostPasswordForm({ redirectTo }: Props): ReactElement {
  const [message, formAction] = useFormState(
    verifyPassword.bind(null, redirectTo),
    ""
  );

  return (
    <div className="absolute inset-0 bg-baby-pink dark:bg-dark-cobalt bg-opacity-50 dark:bg-opacity-70">
      <Tile className="flex items-center rounded-lg h-full">
        <form
          action={formAction}
          className="flex flex-col justify-center items-start h-full"
        >
          <p className="mt-0 mb-4 text-lg md:text-xl">
            Enter password below to view the case study.
          </p>
          <div className="flex items-center">
            <Input
              className="flex-grow"
              icon={<LockClosedIcon className="size-4" />}
              name="password"
              placeholder="Password"
              type="password"
            />
            <UnlockButton />
          </div>
          {message ? <p className="mt-1 px-4 text-sm">{message}</p> : null}
        </form>
      </Tile>
    </div>
  );
}
