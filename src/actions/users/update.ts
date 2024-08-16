"use server";
import { redirect, RedirectType } from "next/navigation";

export const updateUser = async (id: string, formData: FormData) => {
  redirect("/dashboard/users/success?modal=true", RedirectType.replace);
};
