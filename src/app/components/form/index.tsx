"use client";

import { login } from "@/actions/login";
import { FormEvent, ReactNode, useEffect, useState } from "react";
import { useFormState } from "react-dom";

export type FormState = {
  message: string;
  errors?: string;
};

const initialState: FormState = {
  message: "",
  errors: "",
};

export const LoginFormWrapperClient = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, formAction] = useFormState(login, initialState);
  const hasErrors = (state: any): state is FormState => {
    return "errors" in state;
  };
  const [errors, setErrors] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (hasErrors(state)) {
      setErrors(state.errors);
      setTimeout(() => {
        setErrors(undefined);
      }, 5000);
    }
  }, [state]);

  return (
    <form action={formAction} className="flex flex-col gap-6 items-center">
      {errors && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md mb-4 w-full h-full">
          <p>{errors}</p>
        </div>
      )}
      {children}
    </form>
  );
};
