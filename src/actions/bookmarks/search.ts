"use server";
import { redirect, RedirectType } from "next/navigation";

export const searchBookmarks = async (formData: FormData) => {
  console.log("searching", { formData: formData });
  const name = formData.get("name") as string;
  const name_code = formData.getAll("name_code") as string[];
  const document_level_id = formData.get("document_level_id") as string;
  redirect(
    `/dashboard/bookmarks?name=${name}&name_code=${name_code}&document_level_id=${document_level_id}`,
    RedirectType.replace
  );
};
