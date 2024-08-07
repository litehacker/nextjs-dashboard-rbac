"use server";
import { redirect } from "next/navigation";

export const editRole = async (id: string, formData: FormData) => {
  console.log("editing", { formData: Object.fromEntries(formData) });
  redirect("/dashboard/roles");
};
