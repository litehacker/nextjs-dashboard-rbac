"use server";
import { redirect } from "next/navigation";

export const updateBookmark = async (id: string, formData: FormData) => {
  console.log("updating", { formData: formData });
  redirect("/dashboard/bookmarks");
};
