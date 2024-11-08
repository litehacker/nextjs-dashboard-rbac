"use server";
import Modal from "@/app/dashboard/components/modal";
import { updateBookmark } from "@/actions/bookmarks/update";
import { EditBookmarkForm } from "../../../components/edit-form";
type Params = Promise<{ id: string }>;

export default async function EditBookmarkPage({ params }: { params: Params }) {
  const { id } = await params;
  const updateBookmarkWithId = updateBookmark.bind(null, id);

  return (
    <Modal>
      <EditBookmarkForm action={updateBookmarkWithId} id={id} />
    </Modal>
  );
}
