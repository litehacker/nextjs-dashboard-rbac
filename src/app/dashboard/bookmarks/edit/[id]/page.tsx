"use server";

import { updateBookmark } from "@/actions/bookmarks/update";
import { EditBookmarkForm } from "../../components/edit-form";
type Params = Promise<{ id: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
export default async function EditBookmarkPage({ params }: { params: Params }) {
  const { id } = await params;
  const updateBookmarkWithId = updateBookmark.bind(null, id);

  return <EditBookmarkForm action={updateBookmarkWithId} id={id} />;
}
