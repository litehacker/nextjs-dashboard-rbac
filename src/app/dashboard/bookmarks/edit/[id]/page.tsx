"use server";

import { updateBookmark } from "@/actions/bookmarks/update";
import { EditBookmarkForm } from "../../components/edit-form";

export default async function EditBookmarkPage() {
  return <EditBookmarkForm action={updateBookmark} />;
}
