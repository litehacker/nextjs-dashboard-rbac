"use server";
import { redirect, RedirectType } from "next/navigation";

export const archiveBookmark = async (formData: FormData) => {
  console.log("archive", { formData: formData });
  redirect("/dashboard/bookmarks/success?modal=true", RedirectType.replace);
};
