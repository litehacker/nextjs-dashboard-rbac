"use server";
import { deleteBookmarkById } from "@/actions/bookmarks/delete";
import { DeleteBookmarkForm } from "../../components/delete-form";

export default async function DeletePage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const deleteBookmarkWithId = deleteBookmarkById.bind(null, id);
  return <DeleteBookmarkForm action={deleteBookmarkWithId} />;
}
