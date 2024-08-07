"use server";
import { redirect } from "next/navigation";

export const archiveBookmark = async (formData: FormData) => {
  console.log("archive", { formData: formData });
  redirect("/dashboard/success?modal=true");
};
