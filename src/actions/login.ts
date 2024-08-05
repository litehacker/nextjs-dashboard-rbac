"use server";
import { redirect } from "next/navigation";

export const login = async (formData: FormData) => {
  const username = formData.get("username") ?? "";
  const password = formData.get("password") ?? "";

  try {
    if (username === "" || password === "") {
      console.log("2 Username and password are required");
    }

    // Perform login logic here
    // For example, sending formData to an API and getting a response
    const response = await fetch(process.env.BASE_URL + "/api/v1/sign-in/", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const result = await response.json();

    if (result.success) {
      redirect("/dashboard");
    } else {
      console.log(result);
    }
  } catch (error) {
    console.log(error);
  }
};
