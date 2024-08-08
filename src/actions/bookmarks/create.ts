"use server";
import { redirect, RedirectType } from "next/navigation";

export const createBookmark = async (formData: FormData) => {
  console.log("creating", { formData: formData });
  redirect("/dashboard/bookmarks/success?modal=true", RedirectType.replace);
};
