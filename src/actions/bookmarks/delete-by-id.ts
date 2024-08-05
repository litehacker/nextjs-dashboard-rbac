"use server";

import { redirect } from "next/navigation";

export const deleteBookmarkById = async (id: string) => {
  console.log("deleting", { id: id });
  redirect("/dashboard/bookmarks");
};
