"use server";
import { redirect, RedirectType } from "next/navigation";

export const uploadFile = async (id: string) => {
  console.log("uploading file", { id });
  redirect("/dashboard/roles/success?modal=true", RedirectType.replace);
};
