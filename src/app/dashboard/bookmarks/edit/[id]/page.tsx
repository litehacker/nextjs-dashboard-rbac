"use server";

import { updateBookmark } from "@/actions/bookmarks/update";
import { EditBookmarkForm } from "../../components/edit-form";

export default async function EditBookmarkPage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const updateBookmarkWithId = updateBookmark.bind(null, id);

  return <EditBookmarkForm action={updateBookmarkWithId} />;
}
