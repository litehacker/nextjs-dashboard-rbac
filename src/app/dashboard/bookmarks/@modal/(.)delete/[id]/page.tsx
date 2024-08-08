"use server";
import { deleteBookmarkById } from "@/actions/bookmarks/delete";
import { DeleteBookmarkForm } from "../../../components/delete-form";
import Modal from "@/app/dashboard/components/modal";

export default async function DeletePage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const deleteBookmarkWithId = deleteBookmarkById.bind(null, id);
  return (
    <Modal>
      <DeleteBookmarkForm action={deleteBookmarkWithId} />
    </Modal>
  );
}
