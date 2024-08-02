"use server";
import { FormState } from "@/app/components/form";
import { redirect } from "next/navigation";

export const login = async (
  state: FormState,
  formData: FormData
): Promise<FormState> => {
  console.log("Logging in...");
  const username = formData.get("username") ?? "";
  const password = formData.get("password") ?? "";
  try {
    if (username === "" || password === "") {
      return {
        ...state,
        errors: "Username and password are required",
      };
    }
    // Perform login logic here
    // For example, sending formData to an API and getting a response
    const response = await fetch("/api/login", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();

    if (response.ok) {
      redirect("/dashboard");
    } else {
      return {
        ...state,
        errors: result.errors || "Login failed",
      };
    }
  } catch (error) {
    return {
      ...state,
      errors: "An unexpected error occurred",
    };
  }
};
