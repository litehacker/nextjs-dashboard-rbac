"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const login = async (
  formData: FormData
): Promise<{ message?: string; error?: string }> => {
  const username = formData.get("username")?.toString() ?? "";
  const password = formData.get("password")?.toString() ?? "";

  try {
    // Validate username and password
    if (username === "" || password === "") {
      console.log("2 Username and password are required");
      return { error: "Username and password are required" };
    }

    // Perform login logic
    const response = await fetch(`${process.env.BASE_URL}/api/v1/sign-in/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const result = await response.json();

    // Check if the login was successful
    if (!result.success) {
      console.log("რაღაც შეგეშალა, არ მაწვალო შენით გაარკვიე."); // TODO: is this for chatgpt?
      return {
        error: "Login failed. Please check your credentials and try again.",
      };
    }
    // Set cookie
    const token = result.data.token; // assuming the token is in the result
    cookies().set("auth-token", token, {
      httpOnly: process.env.NODE_ENV === "production", // Cookie should be accessible only by HTTP(S) requests
      secure: process.env.NODE_ENV === "production", // Secure cookies in production
      path: "/", // Cookie available throughout the site
      sameSite: "strict", // Protect against CSRF attacks
    });
    const user = result.data.user;
    cookies().set("dashboard-user", JSON.stringify(user), {
      httpOnly: process.env.NODE_ENV === "production", // Cookie should be accessible only by HTTP(S) requests
      secure: process.env.NODE_ENV === "production", // Secure cookies in production
      path: "/", // Cookie available throughout the site
      sameSite: "strict", // Protect against CSRF attacks
    });
  } catch (error) {
    console.log("Unexpected error:", error);
    return { error: "An unexpected error occurred. Please try again later." };
  }
  redirect("/dashboard/bookmarks");
};
