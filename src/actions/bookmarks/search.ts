"use server";
import { redirect, RedirectType } from "next/navigation";

export const searchBookmarks = async (formData: FormData): Promise<void> => {
  const name = formData.get("name") as string;
  const name_code = formData.get("name_code") as string;
  const document_level_id = formData.get("document_level_id") as string;

  const params = new URLSearchParams();

  if (name) params.append("name", name);
  if (name_code) params.append("name_code", name_code);
  if (document_level_id) params.append("document_level_id", document_level_id);

  redirect(`/dashboard/bookmarks?${params.toString()}`, RedirectType.replace);
};
