"use server";
import { deleteBookmarkById } from "@/actions/bookmarks/delete";
import { DeleteBookmarkForm } from "../../components/delete-form";
type Params = Promise<{ id: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
export default async function DeletePage({ params }: { params: Params }) {
  const { id } = await params;
  const deleteBookmarkWithId = deleteBookmarkById.bind(null, id);
  return <DeleteBookmarkForm action={deleteBookmarkWithId} />;
}
