"use server";

import { redirect, RedirectType } from "next/navigation";

export const deleteBookmarkById = async (id: string) => {
  redirect("/dashboard/bookmarks/success?modal=true", RedirectType.replace);
};
