"use server";
import { deleteBookmarkById } from "@/actions/bookmarks/delete";
import { DeleteBookmarkForm } from "../../../components/delete-form";
import Modal from "@/app/dashboard/components/modal";
type Params = Promise<{ id: string }>;

export default async function DeletePage({ params }: { params: Params }) {
  const { id } = await params;
  const deleteBookmarkWithId = deleteBookmarkById.bind(null, id);
  return (
    <Modal>
      <DeleteBookmarkForm action={deleteBookmarkWithId} />
    </Modal>
  );
}
