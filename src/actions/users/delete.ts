"use server";

import { redirect, RedirectType } from "next/navigation";

export const deleteUser = async (id: string, formData: FormData) => {
  console.log("deleting", { formData: Object.fromEntries(formData) });
  redirect("/dashboard/users/success?modal=true", RedirectType.replace);
};
