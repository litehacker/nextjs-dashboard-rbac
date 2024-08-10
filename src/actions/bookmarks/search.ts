"use server";
import { redirect, RedirectType } from "next/navigation";

export const searchBookmarks = async (formData: FormData) => {
  console.log("searching", { formData: formData });
  redirect("/dashboard/bookmarks", RedirectType.replace);
};
