"use server";
import { redirect, RedirectType } from "next/navigation";

export const updateRole = async (id: string, formData: FormData) => {
  console.log("editing", { formData: Object.fromEntries(formData) });
  redirect("/dashboard/roles/success?modal=true", RedirectType.replace);
};
