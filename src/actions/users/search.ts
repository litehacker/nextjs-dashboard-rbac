"use server";
import { redirect, RedirectType } from "next/navigation";

export const searchBookmarks = async (formData: FormData): Promise<void> => {
  const name = formData.get("name") as string;
  const lastName = formData.get("lastName") as string;
  const agency = formData.get("agency") as string;
  const role = formData.get("role") as string;

  const params = new URLSearchParams();

  if (name) params.append("name", name);
  if (lastName) params.append("lastName", lastName);
  if (agency) params.append("agency", agency);
  if (role) params.append("role", role);

  redirect(`/dashboard/bookmarks?${params.toString()}`, RedirectType.replace);
};
