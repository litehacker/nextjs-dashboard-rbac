"use server";
import { redirect } from "next/navigation";

export const createBookmark = async (formData: FormData) => {
  console.log("creating", { formData: formData });
  redirect("/dashboard/bookmarks");
};
