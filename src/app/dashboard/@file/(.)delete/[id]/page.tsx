"use server";
import { removeFile } from "@/actions/files/remove";
import Modal from "@/app/dashboard/components/modal";
import { DeleteImageForm } from "@/app/dashboard/delete/[id]/components/form";
type Params = Promise<{ id: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function DeleteFileModal({ params }: { params: Params }) {
  const { id } = await params;
  const removeFormWithId = removeFile.bind(null, id);
  return (
    <Modal>
      <DeleteImageForm action={removeFormWithId} />;
    </Modal>
  );
}
