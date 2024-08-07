"use server";
import { redirect } from "next/navigation";

export const addRole = async (formData: FormData) => {
  console.log("adding", { formData: Object.fromEntries(formData) });
  redirect("/dashboard/roles");
};
