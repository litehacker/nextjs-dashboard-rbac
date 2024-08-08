"use server";
import { redirect, RedirectType } from "next/navigation";

export const createUser = async (formData: FormData) => {
  console.log("adding", { formData: Object.fromEntries(formData) });
  redirect("/dashboard/users/success?modal=true", RedirectType.replace);
};
