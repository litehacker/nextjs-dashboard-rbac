"use server";
import { redirect, RedirectType } from "next/navigation";

export const removeFile = async (id: string) => {
  console.log("deleting", { id });
  redirect("/dashboard/roles/success?modal=true", RedirectType.replace);
};
