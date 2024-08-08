"use server";

import { redirect, RedirectType } from "next/navigation";

export const deleteRole = async (id: string, formData: FormData) => {
  console.log("deleting", { formData: Object.fromEntries(formData) });
  redirect("/dashboard/roles/success?modal=true", RedirectType.replace);
};
