"use client";

import { login } from "@/actions/login";
import { FormEvent, ReactNode, useState } from "react";

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
  const [formState, setFormState] = useState<FormState>(initialState);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    try {
      const authResult = await login(formData); // Pass formData to the login function
      if (authResult.error) {
        setFormState({
          message: "",
          errors: "Login failed. Please check your credentials and try again.",
        });
      } else setFormState({ message: "Login successful!", errors: "" });
    } catch (error) {
      setFormState({
        message: "",
        errors: "Login failed. Please check your credentials and try again.",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 items-center p-6"
    >
      {formState.errors && (
        <div className="text-red-600">{formState.errors}</div>
      )}
      {formState.message && (
        <div className="text-green-600">{formState.message}</div>
      )}
      {children}
    </form>
  );
};
