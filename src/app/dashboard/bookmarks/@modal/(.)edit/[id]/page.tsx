"use server";
import Modal from "@/app/dashboard/components/modal";
import { updateBookmark } from "@/actions/bookmarks/update";
import { EditBookmarkForm } from "../../../components/edit-form";

export default async function EditBookmarkPage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const updateBookmarkWithId = updateBookmark.bind(null, id);

  return (
    <Modal>
      <EditBookmarkForm action={updateBookmarkWithId} />
    </Modal>
  );
}
