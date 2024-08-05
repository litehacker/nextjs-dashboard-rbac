"use server";
import { deleteBookmarkById } from "@/actions/bookmarks/delete-by-id";
import { DeleteModalForm } from "../../../components/delete-modal-form";
import Modal from "../../components/modal";

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
      <DeleteModalForm action={deleteBookmarkWithId} />
    </Modal>
  );
}
