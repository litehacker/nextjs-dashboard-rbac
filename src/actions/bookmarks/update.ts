"use server";
import { redirect, RedirectType } from "next/navigation";

export const updateBookmark = async (id: string, formData: FormData) => {
  console.log("updating", { formData: formData });
  redirect("/dashboard/bookmarks/success?modal=true", RedirectType.replace);
};
