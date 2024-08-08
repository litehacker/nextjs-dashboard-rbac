"use server";

import { redirect, RedirectType } from "next/navigation";

export const deleteBookmarkById = async (id: string) => {
  console.log("deleting", { id: id });
  redirect("/dashboard/bookmarks/success?modal=true", RedirectType.replace);
};
