"use server";
import { removeFile } from "@/actions/files/remove";
import Modal from "@/app/dashboard/components/modal";
import { DeleteImageForm } from "@/app/dashboard/delete/[id]/components/form";

export default async function DeleteFileModal({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const removeFormWithId = removeFile.bind(null, id);
  return (
    <Modal>
      <DeleteImageForm action={removeFormWithId} />;
    </Modal>
  );
}
