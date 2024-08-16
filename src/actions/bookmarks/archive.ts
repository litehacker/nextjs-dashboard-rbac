"use server";
import { redirect, RedirectType } from "next/navigation";

export const archiveBookmark = async (formData: FormData) => {
  redirect("/dashboard/bookmarks/success?modal=true", RedirectType.replace);
};
