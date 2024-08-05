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
  return (
    <form action={login} className="flex flex-col gap-6 items-center p-6">
      {children}
    </form>
  );
};
