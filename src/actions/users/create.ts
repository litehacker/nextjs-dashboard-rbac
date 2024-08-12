"use server";
import { User } from "@/interfaces/db.interfaces";
import { getToken } from "@/lib/auth-check";
import { redirect, RedirectType } from "next/navigation";

export const createUser = async (formData: FormData) => {
  let password = ""; // unknown

  const userData = Object.fromEntries(formData) as unknown as User;
  const token = await getToken();
  try {
    const response = await fetch(process.env.BASE_URL + "/api/v1/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    });
    if (response.ok) {
      const internalResponseJSON = await response.json();
      if (internalResponseJSON.success) {
        // password = internalResponseJSON.data.password;
      }
    }
  } catch (e) {
    console.error(e);
    redirect("/dashboard/users/", RedirectType.replace);
  }

  redirect(
    "/dashboard/users/success?modal=true&content=" + password,
    RedirectType.replace
  );
};
