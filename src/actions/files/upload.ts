"use server";
import { redirect, RedirectType } from "next/navigation";

export const uploadFile = async (id: string) => {
  redirect("/dashboard/roles/success?modal=true", RedirectType.replace);
};
