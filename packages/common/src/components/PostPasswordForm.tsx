"use client";
import { verifyPassword } from "../actions/verifyPassword";
import { FC } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Input } from "./Input";
import { LockClosedIcon } from "@heroicons/react/24/outline";

const UnlockButton = () => {
  const status = useFormStatus();
  return (
    <button
      type="submit"
      className="ml-4 text-cobalt dark:text-baby-peach"
      disabled={status.pending}
    >
      {status.pending ? "Unlocking..." : "Unlock"}
    </button>
  );
};

interface Props {
  redirectTo: string;
}

export const PostPasswordForm: FC<Props> = ({ redirectTo }) => {
  const [message, formAction] = useFormState(
    verifyPassword.bind(null, redirectTo),
    ""
  );

  return (
    <div className="text-dark-cobalt dark:text-baby-pink">
      <p className="mb-4 mt-0 text-2xl">
        Enter password below to view the case study.
      </p>
      <form action={formAction} className="flex items-center">
        <Input
          type="password"
          name="password"
          placeholder="Password"
          icon={<LockClosedIcon className="h-6 w-6" />}
          autoFocus
        />
        <UnlockButton />
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};
