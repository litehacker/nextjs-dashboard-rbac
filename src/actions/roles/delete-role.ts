"use server";

import { redirect } from "next/navigation";

export const deleteRole = async (id: string, formData: FormData) => {
  console.log("deleting", { formData: Object.fromEntries(formData) });
  redirect("/dashboard/roles");
};
