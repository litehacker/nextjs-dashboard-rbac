"use server";
import { redirect, RedirectType } from "next/navigation";

export const createRole = async (formData: FormData) => {
  console.log("adding", { formData: Object.fromEntries(formData) });
  redirect("/dashboard/roles/success?modal=true", RedirectType.replace);
};
